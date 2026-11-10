(() => {
  "use strict";

  const storageKey = "cybersecurity-learning-record-v2";
  const legacyStorageKey = "cybersecurity-course-progress-v1";
  const lessonPathPattern = /\/(phase-\d{2}-[^/]+)\/(\d{2}-[^/]+)\/?$/;
  const passMark = 80;
  const rubric = [
    {
      id: "concepts",
      title: "Conceptual understanding",
      weight: 20,
      criteria: [
        "Missing or substantially incorrect.",
        "Names terms but cannot explain them accurately.",
        "Explains the main ideas with some gaps.",
        "Accurately explains the ideas and applies them to the scenario.",
        "Also compares related concepts and states meaningful limits or assumptions.",
      ],
    },
    {
      id: "implementation",
      title: "Technical implementation",
      weight: 25,
      criteria: [
        "No implementation or usable plan.",
        "Plan is present but important technical steps are absent.",
        "Partly completed; significant gaps remain.",
        "Completes the task correctly in the authorized lab or with supplied evidence.",
        "Reproducible, correct, and verified against stated requirements.",
      ],
    },
    {
      id: "problem-solving",
      title: "Practical problem-solving",
      weight: 25,
      criteria: [
        "No reasoning or action is recorded.",
        "Action is unsupported or mismatched to the evidence.",
        "Reasonable approach, but misses a key constraint or alternative.",
        "Uses evidence to choose a proportionate, safe next step.",
        "Compares plausible alternatives and explains why the chosen action fits.",
      ],
    },
    {
      id: "documentation",
      title: "Evidence and documentation",
      weight: 15,
      criteria: [
        "No artifact or supporting evidence.",
        "Artifact is incomplete or its source is unclear.",
        "Artifact is understandable but omits important context or limitations.",
        "Records source, relevant observations, decisions, and limitations.",
        "Clear, reproducible, well-organized evidence supports every conclusion.",
      ],
    },
    {
      id: "security-reasoning",
      title: "Security reasoning and remediation",
      weight: 15,
      criteria: [
        "No security impact or remediation considered.",
        "Risk or fix is asserted without explanation.",
        "Identifies a plausible risk and a broadly appropriate safeguard.",
        "Links risk to an actionable fix and a safe verification criterion.",
        "Prioritizes a verifiable fix and explains residual risk or trade-offs.",
      ],
    },
  ];

  const phases = [
    {
      id: "phase-00-introduction",
      title: "Phase 00 · Introduction",
      prerequisite: "No prior phase is required; use this assessment to establish a baseline.",
      challenge: "For a fictional organization, identify an important asset, explain a plausible risk, name a relevant security role, and separate known facts from assumptions and authorization needs.",
      artifact: "A short asset-and-risk note with evidence/assumptions labeled.",
      questions: [
        ["Which statement best distinguishes cybersecurity from information security?", ["Cybersecurity covers digital systems and threats; information security also covers non-digital information.", "They are exact synonyms.", "Information security only protects computers.", "Cybersecurity only means penetration testing."], 0, "Information security includes digital and non-digital information; cybersecurity focuses on digital systems and threats."],
        ["What is the most useful basic description of risk?", ["A vulnerability by itself.", "A threat with no possible impact.", "The likelihood and impact of a threat exploiting a weakness in context.", "Any alert produced by a tool."], 2, "Risk reasoning considers likelihood and impact in context; a weakness alone does not establish risk."],
        ["A website is publicly reachable. What does that imply about testing authorization?", ["It is automatically permitted.", "Only passive testing is permitted.", "Permission is still required from an authorized owner.", "Permission is implied if the test is educational."], 2, "Reachability and intent do not provide authorization."],
        ["What is an attack surface?", ["The total set of points where a system can be interacted with or exposed.", "A severity score.", "A list of known attackers.", "A type of encryption."], 0, "The attack surface describes exposed interfaces and paths that could be targeted."],
        ["A tester discovers a weakness without malicious intent but has no permission. Which is true?", ["Good intent makes the testing authorized.", "The tester may continue if no data is changed.", "Intent does not replace explicit authorization.", "The system owner is responsible for obtaining permission."], 2, "Authorization is necessary regardless of intent or whether damage is observed."],
      ],
    },
    {
      id: "phase-01-computer-fundamentals",
      title: "Phase 01 · Computer fundamentals",
      prerequisite: "Phase 00: basic security, risk, and authorization concepts.",
      challenge: "Draw a computer and network path, label the components you can explain, then describe one question you would investigate before troubleshooting.",
      artifact: "A labeled system/network diagram and a short troubleshooting note.",
      questions: [
        ["Which component normally executes program instructions?", ["CPU", "SSD", "Network switch", "Monitor"], 0, "The CPU executes instructions; storage holds data and programs when not actively executing."],
        ["What is a core operating-system responsibility?", ["Managing hardware resources and providing services to programs.", "Replacing all application software.", "Encrypting all traffic by default.", "Assigning public IP addresses to every process."], 0, "An OS manages resources such as processes, memory, devices, and file access."],
        ["What is a typical distinction between a virtual machine and a container?", ["A VM virtualizes hardware and runs a guest OS; containers commonly share the host kernel.", "Containers always include a separate physical CPU.", "VMs cannot run operating systems.", "They are identical isolation mechanisms."], 0, "Containers generally share the host kernel; VMs run a guest OS on virtualized hardware."],
        ["What is DNS primarily used for in a typical web request?", ["Mapping a domain name to records such as an IP address.", "Encrypting the HTTP response.", "Assigning file permissions.", "Validating the user's identity."], 0, "DNS resolution helps a client discover where a named service can be reached."],
        ["Why is an isolated virtual network useful for a training lab?", ["It limits unintended connectivity between vulnerable guests and other networks.", "It makes every guest invulnerable.", "It removes the need for authorization.", "It automatically backs up every virtual disk."], 0, "Isolation reduces exposure; it does not make a system invulnerable or remove safe-use duties."],
      ],
    },
    {
      id: "phase-02-networking",
      title: "Phase 02 · Networking",
      prerequisite: "Phase 01: computer components, operating-system roles, and internet fundamentals.",
      challenge: "Trace a fictional browser request from client to service and back. Label addressing, name resolution, transport, and application protocol; identify assumptions.",
      artifact: "A request-flow diagram with protocol roles and stated assumptions.",
      questions: [
        ["Which protocol commonly resolves a domain name to address records?", ["DNS", "SSH", "SMTP", "NTP"], 0, "DNS resolves names to records; it does not provide transport encryption by itself."],
        ["What does IP primarily provide?", ["Addressing and routing of packets between networks.", "Guaranteed delivery and ordering.", "Web page rendering.", "User authentication."], 0, "IP supports addressing and routing; reliability and application behavior are handled elsewhere."],
        ["Which is a common difference between TCP and UDP?", ["TCP provides a connection-oriented reliable byte stream; UDP is datagram-based without TCP's delivery guarantees.", "UDP always encrypts payloads.", "TCP is only used on local networks.", "There is no difference."], 0, "TCP provides transport mechanisms such as sequencing and retransmission; UDP does not provide those TCP guarantees."],
        ["What does a subnet mask/prefix describe?", ["Which address bits identify a network prefix versus host portion.", "The encryption strength of a session.", "The operating system type.", "The application-layer port."], 0, "A prefix defines the network portion used for address planning and routing."],
        ["What should a packet capture be treated as?", ["Evidence with context and limitations, including possible sensitive data.", "Proof that the activity is malicious.", "A substitute for authorization.", "A complete record of every system event."], 0, "Captures can be incomplete or sensitive and need context; they do not prove intent on their own."],
      ],
    },
    {
      id: "phase-03-operating-systems",
      title: "Phase 03 · Operating systems",
      prerequisite: "Phases 01–02: computer fundamentals, basic network communication, and authorization.",
      challenge: "Explain how a local account, file permission, process, and service relate on one OS. Identify a log or administrative view that could help verify your explanation.",
      artifact: "A short system diagram or authorized lab note with verification source.",
      questions: [
        ["What does least privilege mean for an account?", ["Grant only the access needed for its defined task.", "Grant administrator rights to avoid interruptions.", "Share one account among all users.", "Disable logging."], 0, "Least privilege limits permissions to what is needed and appropriate."],
        ["On Unix-like systems, what do basic file permission bits control?", ["Read, write, and execute access for owner, group, and others.", "Network routes only.", "CPU scheduling.", "DNS resolution."], 0, "Traditional Unix permissions describe read/write/execute rights for owner, group, and others."],
        ["What is a process?", ["A running instance of a program with execution state and resources.", "A file system format.", "A user group.", "A network subnet."], 0, "A process is a running program instance managed by the operating system."],
        ["What is a Windows service generally?", ["A background program managed by the service-control system.", "A browser cookie.", "A disk partition.", "A firewall rule."], 0, "Services commonly run background tasks under configured identities and startup policies."],
        ["Why review system logs during troubleshooting?", ["They can provide time-stamped records relevant to events, subject to coverage and retention limits.", "They always record every action perfectly.", "They prove an account owner's intent.", "They replace backups."], 0, "Logs are useful evidence but can be incomplete, altered, delayed, or lack context."],
      ],
    },
    {
      id: "phase-04-programming",
      title: "Phase 04 · Programming",
      prerequisite: "Phases 01–03: basic computer, file, process, and operating-system concepts.",
      challenge: "Write or annotate a harmless script that reads controlled input, validates it, and produces a clear result. Explain assumptions and ordinary/invalid input tests.",
      artifact: "A small script or code walkthrough with test cases and explanation.",
      questions: [
        ["Why validate input at a program boundary?", ["To enforce expected types, ranges, and formats before using the data.", "To make all input trustworthy.", "To replace authorization checks.", "To guarantee there are no software defects."], 0, "Validation constrains input to expected forms but does not make all data trustworthy."],
        ["Which is generally safer when inserting values into SQL?", ["Parameterized queries.", "String-concatenating raw input into SQL.", "Hiding errors from the database.", "Using a longer table name."], 0, "Parameters keep data separate from query structure and reduce injection risk."],
        ["Why should a script check command failures?", ["A failed operation should be detected so later steps do not report false success.", "All commands always succeed.", "Exit codes encrypt results.", "It prevents the need for testing."], 0, "Checking return status makes failures explicit and helps avoid success-shaped fallbacks."],
        ["What is a useful test case for input validation?", ["Both expected input and malformed/out-of-range input.", "Only one successful example.", "Only the code author's machine.", "No tests if the script is short."], 0, "Testing boundary and invalid cases checks whether validation behaves as intended."],
        ["Which is a secure coding principle?", ["Use least privilege and handle errors deliberately.", "Trust client-side checks as the only authorization.", "Store credentials in source code.", "Disable updates after deployment."], 0, "Least privilege and explicit error handling reduce avoidable exposure and ambiguity."],
      ],
    },
    {
      id: "phase-05-cybersecurity-fundamentals",
      title: "Phase 05 · Cybersecurity fundamentals",
      prerequisite: "Phases 00–04: basic risk, networking, operating-system, and programming concepts.",
      challenge: "Create a fictional risk register containing an asset, threat, weakness, impact, supporting evidence, and defensive recommendation. Explain how your reasoning sets priority.",
      artifact: "A short risk register with evidence and reasoning for prioritization.",
      questions: [
        ["What are the three elements of the CIA triad?", ["Confidentiality, integrity, availability.", "Control, inspection, access.", "Collection, identity, authorization.", "Cryptography, internet, authentication."], 0, "CIA refers to confidentiality, integrity, and availability."],
        ["What is the key difference between hashing and encryption?", ["Hashing is generally one-way; encryption is designed to be reversible with the appropriate key.", "Both are always reversible.", "Hashing always hides data using a secret key.", "Encryption cannot protect confidentiality."], 0, "Cryptographic hashes are not designed for decryption; encryption supports recovery with key material."],
        ["Authentication answers which question?", ["Who or what is presenting an identity?", "What is that identity allowed to do?", "What should be logged?", "How available is the service?"], 0, "Authentication verifies an asserted identity; authorization determines permitted actions."],
        ["What does least privilege recommend?", ["Limit permissions to what is needed for a defined role or task.", "Give every account the same access.", "Remove all monitoring.", "Use one shared administrator account."], 0, "Least privilege minimizes unnecessary access."],
        ["What is defense in depth?", ["Using complementary layers of controls so one failure does not defeat all protection.", "Using only one strong perimeter firewall.", "Replacing risk analysis with encryption.", "Adding duplicate alerts without review."], 0, "Layered controls reduce reliance on a single safeguard."],
      ],
    },
    {
      id: "phase-06-security-tools-and-lab",
      title: "Phase 06 · Security tools and lab",
      prerequisite: "Phases 01–05: basic networking, operating systems, tool literacy, and safety boundaries.",
      challenge: "Choose a tool for a defined lab question, explain its purpose and limits, interpret a synthetic or authorized result, and record scope, evidence, and the next safe step.",
      artifact: "A scoped tool-use note with a sanitized result and interpretation.",
      questions: [
        ["What is the safest default network for a vulnerable training VM?", ["An isolated internal or host-only lab network appropriate to the exercise.", "A bridged connection to a workplace LAN.", "Any public cloud network.", "A shared network with production devices."], 0, "Isolation limits unintended exposure; use the specific lab's instructions and maintain authorization."],
        ["A scanner reports a possible finding. What is the correct interpretation?", ["A lead that needs validation and context.", "Proof of successful compromise.", "Proof that exploitation is authorized.", "A complete risk assessment."], 0, "Tool output is evidence to investigate, not a conclusion by itself."],
        ["What should guide tool selection?", ["The authorized question, scope, limitations, and safe handling of results.", "The number of features in the tool.", "Whether the tool has a dramatic interface.", "Whether it can reach public targets."], 0, "Choose tools based on the authorized objective and understand their limits."],
        ["Why avoid real credentials in training labs?", ["They could expose accounts if the lab or logs are mishandled.", "They make tools slower.", "Credentials are not data.", "It is required for every VM."], 0, "Use synthetic credentials to avoid leaking secrets through lab systems, captures, or reports."],
        ["What belongs in a useful tool-result note?", ["Scope, tool purpose, relevant output, interpretation, limits, and next safe step.", "Only the tool name.", "A screenshot with no context.", "An assumption that every alert is real."], 0, "Document enough context to make the result interpretable and reproducible."],
      ],
    },
    {
      id: "phase-07-ethical-hacking-and-testing",
      title: "Phase 07 · Ethical testing",
      prerequisite: "Phases 02–06: networking, system basics, risk, and isolated-lab safety.",
      challenge: "Write a fictional rules-of-engagement outline that identifies authorization, targets, exclusions, permitted methods, stop conditions, and reporting contacts.",
      artifact: "A one-page scope/rules-of-engagement document for a fictional or local lab.",
      questions: [
        ["What defines an authorized assessment?", ["Explicit permission with a defined scope and rules of engagement.", "A publicly reachable target.", "The tester's good intentions.", "A tool's default target list."], 0, "Authorization must come from an appropriate owner/representative and cover the activity."],
        ["A scoped application links to an out-of-scope domain. What should the tester do?", ["Stop before interacting and seek written scope clarification.", "Scan the linked domain to see what it is.", "Assume the link extends permission.", "Test it only after business hours."], 0, "Technical connectivity or a link does not extend authorization."],
        ["What is the purpose of vulnerability assessment?", ["Identify and prioritize potential weaknesses.", "Guarantee all weaknesses are found.", "Prove intent.", "Replace penetration testing and remediation."], 0, "Assessment identifies possible issues; findings require context and may need validation."],
        ["What makes a useful finding?", ["Evidence, impact, scope, confidence/limitations, and actionable remediation.", "A severity label alone.", "A screenshot without context.", "A claim that every issue is exploitable."], 0, "Defensible reporting explains the issue and how to address and verify it."],
        ["When should testing stop?", ["When a stop condition is reached or scope/authorization becomes uncertain.", "Only when all tools finish.", "When a result looks interesting.", "Never if the system is publicly reachable."], 0, "Stop conditions protect people and systems and must be respected."],
      ],
    },
    {
      id: "phase-08-web-app-and-api-security",
      title: "Phase 08 · Web and API security",
      prerequisite: "Phases 02–07: networking, programming basics, web concepts, and authorization.",
      challenge: "Review a fictional sign-in or API design. Identify trust boundaries, the server-side access decision, a relevant risk, and a defensive change.",
      artifact: "A short design review or local training-app report with a verification criterion.",
      questions: [
        ["Where should access to a protected API object be authorized?", ["On the server for each relevant request/object.", "Only in a client-side interface.", "In a URL parameter.", "By hiding the button in the browser."], 0, "The server must enforce access; client controls can be bypassed."],
        ["What does CORS primarily control in browsers?", ["Which origins browser scripts may read certain cross-origin responses from.", "Whether a user is authenticated.", "Whether the server authorizes access to every object.", "Whether a request is encrypted."], 0, "CORS is a browser cross-origin policy, not authentication or object authorization."],
        ["What is a session cookie commonly used for?", ["Referencing server-side session state after authentication.", "Encrypting the entire database.", "Replacing authorization checks.", "Storing a password in readable form."], 0, "Session mechanisms maintain state; cookies should use appropriate security attributes and the server still authorizes requests."],
        ["What is an important defense against injection flaws?", ["Use context-appropriate parameterization/encoding and safe APIs.", "Trust all browser input.", "Rely on a hidden form field.", "Disable audit logs."], 0, "The defense depends on context: parameterized queries, output encoding, and safe APIs are examples."],
        ["What is a safe practice environment for web security exercises?", ["An owned local app or intentionally vulnerable training app in an isolated environment.", "A random public website.", "A production account without written permission.", "Any API with an open endpoint."], 0, "Practice only in owned, authorized, or isolated training environments."],
      ],
    },
    {
      id: "phase-09-network-and-system-security",
      title: "Phase 09 · Network and system security",
      prerequisite: "Phases 02–05 and 08: networking, operating systems, security controls, and web trust boundaries.",
      challenge: "Draw a fictional network with trust zones and explain how one hardening, monitoring, and recovery control supports its security objectives.",
      artifact: "A segmented network diagram with control rationale and verification notes.",
      questions: [
        ["What is the purpose of network segmentation?", ["Limit unnecessary communication and contain the impact of some failures or compromises.", "Guarantee no system can be compromised.", "Replace identity controls.", "Encrypt every file automatically."], 0, "Segmentation can reduce reachability and blast radius but is not a complete security boundary by itself."],
        ["What does a firewall rule ideally allow?", ["Only traffic needed for an approved purpose, with appropriate source/destination and service constraints.", "All traffic by default.", "Any port from the internet.", "Traffic based only on device names."], 0, "Narrow, justified rules support least privilege and are easier to review."],
        ["Why test backups and recovery procedures?", ["To verify data and services can be restored within operational needs.", "A backup file guarantees recovery.", "It proves malware cannot occur.", "It replaces patch management."], 0, "Recovery testing checks integrity, accessibility, and whether procedures meet recovery needs."],
        ["What is the difference between IDS and IPS in common usage?", ["An IDS detects/alerts; an IPS may be placed inline to block selected traffic.", "An IDS encrypts; an IPS authenticates.", "They are always identical.", "An IPS is only a backup tool."], 0, "Typical deployments distinguish monitoring/detection from inline prevention, though products vary."],
        ["What is a useful patch-management practice?", ["Prioritize by exposure and risk, test appropriately, deploy, and verify.", "Install every update without regard to context or validation.", "Never update stable systems.", "Treat a version number as proof of security."], 0, "A controlled process balances risk, compatibility, timely deployment, and verification."],
      ],
    },
    {
      id: "phase-10-defensive-security-and-soc",
      title: "Phase 10 · Defensive security and SOC",
      prerequisite: "Phases 02–05 and 09: networking, operating systems, security fundamentals, and system controls.",
      challenge: "Use synthetic events to write a triage note containing observations, hypotheses, missing evidence, and a proportionate next step.",
      artifact: "A synthetic incident triage note and event timeline.",
      questions: [
        ["Does a security alert prove an incident occurred?", ["No. It is a signal that needs context and investigation.", "Yes, every alert is a confirmed incident.", "Only high-severity alerts do.", "Only SIEM alerts do."], 0, "Alerts may be false positives or incomplete; corroboration and context matter."],
        ["What is a SIEM commonly used for?", ["Collecting, normalizing, correlating, and analyzing security events.", "Replacing every endpoint control.", "Guaranteeing no false positives.", "Issuing identity credentials."], 0, "SIEMs centralize and analyze telemetry; quality depends on data and detection design."],
        ["Which is a good first triage habit?", ["Check context, timestamps, account/system sensitivity, and related evidence.", "Immediately delete the source logs.", "Assume the alert title is correct.", "Publish the user's identity."], 0, "Triage validates source, context, and related events before drawing conclusions."],
        ["What is an indicator of compromise (IOC)?", ["An observable artifact or clue associated with possible malicious activity.", "Proof of a specific person's intent.", "A guarantee that a system is clean.", "A remediation plan."], 0, "An IOC is a clue; it requires interpretation and may be shared by benign activity."],
        ["Why follow an incident-response plan?", ["It clarifies roles, evidence preservation, escalation, and approved response actions.", "It removes the need for authorization.", "It guarantees zero business impact.", "It means every alert should trigger isolation."], 0, "A plan promotes coordinated, proportionate action and clear decision rights."],
      ],
    },
    {
      id: "phase-11-digital-forensics-and-malware-analysis",
      title: "Phase 11 · Forensics and malware concepts",
      prerequisite: "Phases 01, 03, and 10: computer and OS fundamentals plus log and incident concepts.",
      challenge: "Use a synthetic evidence set to document its source, handling, a short timeline, one finding, and one limitation. Separate observations from inferences.",
      artifact: "A synthetic evidence log, timeline, and concise finding with limitations.",
      questions: [
        ["What is the purpose of chain-of-custody documentation?", ["Record evidence handling and transfers so provenance and accountability can be evaluated.", "Prove an artifact's interpretation is correct.", "Encrypt all evidence automatically.", "Replace integrity checks."], 0, "Chain of custody documents handling; it does not by itself prove authenticity or meaning."],
        ["What does a cryptographic hash help establish when used carefully?", ["Whether data matches a previously recorded digest, subject to trustworthy collection and comparison.", "Who created the file.", "Whether a program is harmless.", "Whether a timestamp is accurate."], 0, "A matching digest supports integrity comparison but does not prove origin or benign behavior."],
        ["Why preserve an original forensic source where feasible?", ["To protect evidence integrity and conduct analysis on a controlled copy.", "Because copies cannot be analyzed.", "To avoid documenting methods.", "Because originals are always complete."], 0, "Preservation and documented copies reduce accidental alteration risk."],
        ["What should a forensic timeline record?", ["Timestamps with timezone/source assumptions and known clock limitations.", "Only event descriptions.", "Only local times without context.", "A conclusion about intent."], 0, "Time interpretation requires sources, timezone, and clock-drift awareness."],
        ["What is a safe malware-analysis principle?", ["Do not execute unknown malware on a normal host; use approved isolated analysis procedures.", "Open unknown samples on a personal workstation.", "Disable containment to observe more behavior.", "Treat static strings as proof of execution."], 0, "Unknown malware can be harmful; analysis needs an appropriately isolated and controlled environment."],
      ],
    },
    {
      id: "phase-12-active-directory-and-enterprise-security",
      title: "Phase 12 · Active Directory and enterprise security",
      prerequisite: "Phases 02, 03, 05, 09, and 10: networking, Windows basics, identity, hardening, and monitoring.",
      challenge: "Create a small test-domain identity diagram, review a synthetic authentication timeline, identify a risky permission relationship, and recommend a least-privilege fix.",
      artifact: "An isolated-lab or synthetic identity diagram and defensive review.",
      questions: [
        ["What is Active Directory Domain Services commonly used to provide?", ["Centralized identity, directory, policy, and resource-management services in Windows domains.", "Only internet routing.", "A malware scanner.", "A replacement for backups."], 0, "AD DS provides directory and domain services for managed identities and systems."],
        ["What is Group Policy typically used for?", ["Centrally applying configurable policies to users and computers in a domain.", "Encrypting every network packet.", "Replacing authentication.", "Managing public DNS zones only."], 0, "Group Policy can configure domain-managed users and computers within scope."],
        ["What does Kerberos primarily support in a Windows domain context?", ["Ticket-based network authentication.", "File compression.", "Password storage in plain text.", "Network packet routing."], 0, "Kerberos uses tickets to support authentication; configuration and identity protections still matter."],
        ["What does PAM mean in enterprise identity security?", ["Privileged Access Management: controlling and monitoring elevated access.", "Public Application Mapping.", "Packet Authentication Method.", "Personal Account Migration."], 0, "PAM practices govern privileged identities and access, complementing broader IAM."],
        ["Why are domain-controller logs useful during investigation?", ["They can help reconstruct identity and policy events, subject to configuration and retention limits.", "They prove every event is malicious.", "They contain a complete record of all user intent.", "They replace endpoint and application logs."], 0, "Directory logs are one evidence source; coverage and interpretation limits still apply."],
      ],
    },
  ];

  const defaultRecord = () => ({ version: 2, lessons: {}, assessments: {} });
  let record = defaultRecord();
  let storageAvailable = true;

  function announce(message, state = "info", targetId = "course-progress-message") {
    const node = [
      targetId,
      "course-progress-message",
      "assessment-status",
      "lesson-progress-message",
    ]
      .map((id) => document.getElementById(id))
      .find(Boolean);
    if (!node) return;
    node.textContent = message;
    node.dataset.state = state;
  }

  function normalizedPath(path) {
    return path.replace(/\/+$/, "") || "/";
  }

  function loadRecord() {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (
          parsed?.version !== 2 ||
          typeof parsed.lessons !== "object" ||
          parsed.lessons === null ||
          typeof parsed.assessments !== "object" ||
          parsed.assessments === null
        ) {
          throw new TypeError("Saved learning record has an unexpected format.");
        }
        return parsed;
      }

      const legacy = window.localStorage.getItem(legacyStorageKey);
      if (legacy === null) return defaultRecord();
      const paths = JSON.parse(legacy);
      if (!Array.isArray(paths) || paths.some((path) => typeof path !== "string")) {
        throw new TypeError("Saved legacy progress has an unexpected format.");
      }
      const migrated = defaultRecord();
      paths.forEach((path) => {
        migrated.lessons[normalizedPath(path)] = { status: "read", evidence: "" };
      });
      return migrated;
    } catch (error) {
      storageAvailable = false;
      console.error("Could not read the local learning record.", error);
      announce(
        "Local progress could not be read. You can still use the course, but this visit's changes may not be saved.",
        "error"
      );
      return defaultRecord();
    }
  }

  function saveRecord() {
    if (!storageAvailable) return false;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(record));
      return true;
    } catch (error) {
      storageAvailable = false;
      console.error("Could not save the local learning record.", error);
      [
        document.getElementById("course-progress-message"),
        document.getElementById("assessment-status"),
        document.getElementById("lesson-progress-message"),
      ].filter(Boolean).forEach((node) => {
        node.textContent = "The browser could not save progress. Your course remains available, but changes will not persist.";
        node.dataset.state = "error";
      });
      return false;
    }
  }

  function courseLessons() {
    const found = new Map();
    document.querySelectorAll(".md-nav--primary .md-nav__link[href]").forEach((link) => {
      const url = new URL(link.href, window.location.href);
      const match = url.pathname.match(lessonPathPattern);
      if (!match) return;
      const path = normalizedPath(url.pathname);
      if (!found.has(path)) found.set(path, { path, phase: match[1], title: link.textContent.trim() });
    });
    return [...found.values()];
  }

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function makeProgress(value, max, label) {
    const progress = document.createElement("progress");
    progress.max = Math.max(max, 1);
    progress.value = value;
    progress.setAttribute("aria-label", label);
    return progress;
  }

  function phaseAssessment(phaseId) {
    return record.assessments[phaseId] || {};
  }

  function phaseStatus(phaseId) {
    const assessment = phaseAssessment(phaseId);
    if (assessment.quizPassed && assessment.practicalPassed && assessment.prerequisiteReady) return "Mastery self-assessed";
    if (assessment.quizPassed && assessment.practicalPassed && assessment.prerequisiteReady === false) return "Prerequisites to review";
    if (assessment.quizPassed || assessment.quizAttempts > 0) return "Assessment started";
    return "Not assessed";
  }

  function renderDashboard(lessons) {
    const dashboard = document.getElementById("course-progress-dashboard");
    if (!dashboard) return;
    dashboard.replaceChildren();

    const counts = { read: 0, practiced: 0 };
    const assessedPhases = new Set();
    const masteredPhases = new Set();
    lessons.forEach((lesson) => {
      const status = record.lessons[lesson.path]?.status;
      if (status === "read" || status === "practiced") counts[status] += 1;
      const assessment = phaseAssessment(lesson.phase);
      if (assessment.quizPassed && assessment.practicalScore !== undefined) assessedPhases.add(lesson.phase);
      if (
        assessment.quizPassed &&
        assessment.practicalPassed &&
        assessment.prerequisiteReady
      ) {
        masteredPhases.add(lesson.phase);
      }
    });

    const summary = makeElement("section", "course-progress-summary");
    summary.setAttribute("aria-label", "Learning record summary");
    summary.append(makeElement("strong", "", "Your learning record (saved only in this browser)"));
    const stats = makeElement("div", "course-progress-stats");
    [
      ["Read", counts.read],
      ["Practiced", counts.practiced],
      ["Phases assessed", assessedPhases.size],
      ["Mastery self-assessed", masteredPhases.size],
    ].forEach(([label, count]) => {
      const stat = makeElement("div", "course-progress-stat");
      stat.append(makeElement("strong", "", String(count)), makeElement("span", "", String(label)));
      stats.append(stat);
    });
    summary.append(stats);
    summary.append(makeElement(
      "p",
      "course-progress-disclaimer",
      "These are your own records, not independently verified credentials. Mastery self-assessed requires a prerequisite-ready check, a quiz pass, and a practical evidence rubric score of at least 80%."
    ));
    dashboard.append(summary);

    const byPhase = new Map();
    lessons.forEach((lesson) => {
      if (!byPhase.has(lesson.phase)) byPhase.set(lesson.phase, []);
      byPhase.get(lesson.phase).push(lesson);
    });

    const phaseList = makeElement("div", "course-progress-list");
    byPhase.forEach((phaseLessons, phase) => {
      const card = makeElement("section", "course-phase-progress");
      const navLinks = [...document.querySelectorAll(".md-nav--primary .md-nav__link[href]")];
      const phaseLink = navLinks.find((link) =>
        normalizedPath(new URL(link.href, window.location.href).pathname).endsWith(`/${phase}`)
      );
      const title = makeElement("a", "", phaseLink?.textContent.trim() || phase.replace(/^phase-/, "Phase ").replaceAll("-", " "));
      title.href = phaseLink?.href || `${phase}/`;
      const assessment = phaseAssessment(phase);
      const readCount = phaseLessons.filter((lesson) => {
        const status = record.lessons[lesson.path]?.status;
        return status === "read" || status === "practiced";
      }).length;
      const practicedCount = phaseLessons.filter((lesson) => record.lessons[lesson.path]?.status === "practiced").length;
      const progress = makeProgress(readCount, phaseLessons.length, `${phase} lessons read`);
      const detail = makeElement("small", "", `${readCount}/${phaseLessons.length} read · ${practicedCount} practiced · ${phaseStatus(phase)}`);
      const assessmentLink = makeElement("a", "course-assessment-link", assessment.quizPassed && assessment.practicalPassed ? "Review assessment" : "Take phase assessment");
      assessmentLink.href = `../assessment/?phase=${encodeURIComponent(phase)}`;
      card.append(title, progress, detail, assessmentLink);
      phaseList.append(card);
    });
    dashboard.append(phaseList);

    if (!storageAvailable) {
      announce("Progress storage is unavailable. You can explore all lessons, but changes may not be saved.", "error");
    }
  }

  function addLessonControl() {
    const path = normalizedPath(window.location.pathname);
    const match = path.match(lessonPathPattern);
    if (!match) return;
    const article = document.querySelector(".md-content__inner");
    const heading = article?.querySelector("h1");
    if (!article || !heading || article.querySelector(".lesson-progress-panel")) return;

    const panel = makeElement("section", "lesson-progress-panel");
    panel.setAttribute("aria-label", "Lesson progress record");
    const message = makeElement("span", "lesson-progress-message");
    message.id = "lesson-progress-message";
    message.setAttribute("role", "status");
    message.setAttribute("aria-live", "polite");
    const copy = makeElement("p", "lesson-progress-copy");
    copy.append(
      makeElement("strong", "", "Your learning record"),
      document.createElement("br"),
      document.createTextNode("Mark reading or practice only when you have done it. This record is self-reported.")
    );

    const lesson = record.lessons[path] || { status: "", evidence: "" };
    const controls = makeElement("div", "lesson-progress-controls");
    const statusSelect = document.createElement("select");
    statusSelect.setAttribute("aria-label", "Lesson learning status");
    [
      ["", "Choose a status…"],
      ["read", "Read"],
      ["practiced", "Practiced"],
    ].forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      statusSelect.append(option);
    });
    statusSelect.value = lesson.status || "";

    const saveButton = makeElement("button", "md-button md-button--primary", "Save lesson record");
    saveButton.type = "button";
    const examLink = makeElement("a", "md-button", "Open phase assessment");
    examLink.href = `../../assessment/?phase=${encodeURIComponent(match[1])}`;
    controls.append(statusSelect, saveButton, examLink);
    saveButton.addEventListener("click", () => {
      if (!statusSelect.value) {
        announce("Choose Read or Practiced before saving.", "error", "lesson-progress-message");
        statusSelect.focus();
        return;
      }
      record.lessons[path] = { status: statusSelect.value, evidence: "" };
      if (saveRecord()) {
        announce("Your lesson status was saved on this browser.", "info", "lesson-progress-message");
      }
      renderDashboard(courseLessons());
    });

    panel.append(copy, controls, message);
    heading.insertAdjacentElement("afterend", panel);
    if (!storageAvailable) {
      announce(
        "Local progress could not be read. You can still use the course, but this visit's changes may not be saved.",
        "error",
        "lesson-progress-message"
      );
    }
  }

  function phaseIndexLink(phaseId) {
    const link = [...document.querySelectorAll(".md-nav--primary .md-nav__link[href]")].find((item) =>
      normalizedPath(new URL(item.href, window.location.href).pathname).endsWith(`/${phaseId}`)
    );
    return link?.href || `${phaseId}/`;
  }

  function renderAssessment() {
    const root = document.getElementById("phase-assessment");
    if (!root) return;
    root.replaceChildren();

    const intro = makeElement(
      "p",
      "assessment-caveat",
      "This is a local, self-assessed learning aid—not a proctored exam or credential. Quiz answers are checked automatically; prerequisite readiness, practical evidence, and rubric scores are not independently verified. Do not enter secrets, personal data, or sensitive work artifacts."
    );
    root.append(intro);

    const selectLabel = makeElement("label", "assessment-label", "Choose a phase");
    selectLabel.htmlFor = "assessment-phase-select";
    const select = document.createElement("select");
    select.id = "assessment-phase-select";
    select.className = "assessment-phase-select";
    phases.forEach((phase) => {
      const option = document.createElement("option");
      option.value = phase.id;
      option.textContent = phase.title;
      select.append(option);
    });
    const params = new URLSearchParams(window.location.search);
    if (phases.some((phase) => phase.id === params.get("phase"))) select.value = params.get("phase");
    root.append(selectLabel, select);

    const workspace = makeElement("div", "assessment-workspace");
    root.append(workspace);

    function renderPhase() {
      workspace.replaceChildren();
      const phase = phases.find((item) => item.id === select.value);
      if (!phase) return;
      const saved = phaseAssessment(phase.id);
      const phaseNumber = phases.indexOf(phase);
      const quizQuestions = phase.questions.map(([prompt, choices, answer, feedback], index) => {
        const offset = (phaseNumber + index * 3) % choices.length;
        const options = choices.slice(offset).concat(choices.slice(0, offset));
        return {
          prompt,
          options,
          correctIndex: (answer - offset + choices.length) % choices.length,
          feedback,
        };
      });
      const overview = makeElement("section", "assessment-phase-overview");
      const title = makeElement("h2", "", phase.title);
      const phaseLink = makeElement("a", "assessment-phase-link", "Review phase lessons and objectives");
      phaseLink.href = phaseIndexLink(phase.id);
      const challengeHeading = makeElement("h3", "", "Practical challenge");
      const challenge = makeElement("p", "", phase.challenge);
      const deliverable = makeElement("p", "assessment-deliverable", `Suggested evidence: ${phase.artifact}`);
      const prerequisite = makeElement("p", "assessment-prerequisite", `Prerequisite check: ${phase.prerequisite}`);
      overview.append(title, phaseLink, prerequisite, challengeHeading, challenge, deliverable);

      const quiz = makeElement("section", "assessment-card");
      quiz.append(makeElement("h3", "", "Knowledge check"), makeElement("p", "assessment-help", "Answer all five questions. Passing requires 4 of 5 correct (80%). Retake as needed; review the explanations before continuing."));
      const quizForm = document.createElement("form");
      quizForm.noValidate = true;
      quizQuestions.forEach((question, index) => {
        const fieldset = makeElement("fieldset", "assessment-question");
        const legend = makeElement("legend", "", `${index + 1}. ${question.prompt}`);
        fieldset.append(legend);
        question.options.forEach((optionText, optionIndex) => {
          const label = makeElement("label", "assessment-option");
          const input = document.createElement("input");
          input.type = "radio";
          input.name = `question-${index}`;
          input.value = String(optionIndex);
          input.required = true;
          label.append(input, document.createTextNode(` ${optionText}`));
          fieldset.append(label);
        });
        quizForm.append(fieldset);
      });
      const quizButton = makeElement("button", "md-button md-button--primary assessment-submit", "Check answers");
      quizButton.type = "submit";
      quizForm.append(quizButton);
      const quizResult = makeElement("div", "assessment-result");
      quizResult.setAttribute("aria-live", "polite");
      quiz.append(quizForm, quizResult);

      const practical = makeElement("section", "assessment-card");
      practical.append(
        makeElement("h3", "", "Practical evidence review"),
        makeElement("p", "assessment-help", "Complete the phase challenge in an authorized lab or with synthetic evidence. Rate your work against each observable description. Each rating contributes its listed percentage to the score.")
      );
      const practicalForm = document.createElement("form");
      practicalForm.noValidate = true;
      const prerequisiteLabel = makeElement("label", "assessment-label", "Prerequisite self-check");
      prerequisiteLabel.htmlFor = "assessment-prerequisite-check";
      const prerequisiteCheck = document.createElement("select");
      prerequisiteCheck.id = "assessment-prerequisite-check";
      prerequisiteCheck.required = true;
      [
        ["", "Choose a prerequisite status…"],
        ["ready", "Ready — I can explain these prerequisites or this is the baseline phase."],
        ["review", "Needs review — I identified prerequisite topics to revisit."],
      ].forEach(([value, text]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        prerequisiteCheck.append(option);
      });
      if (saved.prerequisiteReady !== undefined) prerequisiteCheck.value = saved.prerequisiteReady ? "ready" : "review";
      prerequisiteLabel.append(prerequisiteCheck);
      practicalForm.append(prerequisiteLabel);
      const evidenceLabel = makeElement("label", "assessment-label", "Evidence artifact (title and safe location; no secrets or sensitive data)");
      evidenceLabel.htmlFor = "assessment-evidence";
      const evidence = document.createElement("textarea");
      evidence.id = "assessment-evidence";
      evidence.rows = 3;
      evidence.maxLength = 500;
      evidence.required = true;
      evidence.placeholder = "Example: risk-register.md in my local course portfolio; contains fictional assets and stated assumptions.";
      evidence.value = saved.evidence || "";
      practicalForm.append(evidenceLabel, evidence);

      const reflectionLabel = makeElement("label", "assessment-label", "Next step or knowledge gap to revisit");
      reflectionLabel.htmlFor = "assessment-revision";
      const reflection = document.createElement("textarea");
      reflection.id = "assessment-revision";
      reflection.rows = 2;
      reflection.maxLength = 300;
      reflection.placeholder = "Identify one concrete improvement or lesson to revisit.";
      reflection.value = saved.revision || "";
      practicalForm.append(reflectionLabel, reflection);

      rubric.forEach((criterion) => {
        const fieldset = makeElement("fieldset", "assessment-rubric");
        fieldset.append(makeElement("legend", "", `${criterion.title} · ${criterion.weight}%`));
        const ratingLabel = makeElement("label", "assessment-label", `Self-rating for ${criterion.title}`);
        const rating = document.createElement("select");
        rating.name = `rubric-${criterion.id}`;
        rating.dataset.criterion = criterion.id;
        rating.required = true;
        const emptyOption = document.createElement("option");
        emptyOption.value = "";
        emptyOption.textContent = "Choose a rating…";
        rating.append(emptyOption);
        criterion.criteria.forEach((descriptor, score) => {
          const option = document.createElement("option");
          option.value = String(score);
          option.textContent = `${score}/4 · ${descriptor}`;
          rating.append(option);
        });
        const storedRating = saved.ratings?.[criterion.id];
        if (storedRating !== undefined) rating.value = String(storedRating);
        ratingLabel.append(rating);
        fieldset.append(ratingLabel);
        practicalForm.append(fieldset);
      });
      const practicalButton = makeElement("button", "md-button md-button--primary assessment-submit", "Save practical self-assessment");
      practicalButton.type = "submit";
      practicalForm.append(practicalButton);
      const practicalResult = makeElement("div", "assessment-result");
      practicalResult.setAttribute("aria-live", "polite");
      practical.append(practicalForm, practicalResult);

      const savedSummary = makeElement("section", "assessment-saved-summary");
      savedSummary.append(makeElement("h3", "", "Your saved result"));
      const summaryText = saved.quizAttempts
        ? `Knowledge check: ${saved.quizBest ?? 0}% (best) · Practical rubric: ${saved.practicalScore ?? "not scored"}% · ${phaseStatus(phase.id)}`
        : "No assessment attempts recorded for this phase yet.";
      savedSummary.append(makeElement("p", "", summaryText));

      quizForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const answers = quizQuestions.map((_, index) =>
          quizForm.querySelector(`input[name="question-${index}"]:checked`)
        );
        if (answers.some((answer) => !answer)) {
          quizResult.textContent = "Answer all five questions before checking your work.";
          quizResult.dataset.state = "error";
          return;
        }
        let score = 0;
        const explanations = makeElement("ol", "assessment-explanations");
        quizQuestions.forEach((question, index) => {
          const selected = Number(answers[index].value);
          const correct = selected === question.correctIndex;
          if (correct) score += 1;
          explanations.append(makeElement(
            "li",
            correct ? "assessment-answer correct" : "assessment-answer incorrect",
            `${correct ? "Correct." : `Review: the correct answer is “${question.options[question.correctIndex]}.”`} ${question.feedback}`
          ));
        });
        const percentage = Math.round((score / quizQuestions.length) * 100);
        const current = phaseAssessment(phase.id);
        record.assessments[phase.id] = {
          ...current,
          quizAttempts: (current.quizAttempts || 0) + 1,
          quizLatest: percentage,
          quizBest: Math.max(current.quizBest || 0, percentage),
          quizPassed: Boolean(current.quizPassed || percentage >= passMark),
          quizCompletedAt: new Date().toISOString(),
        };
        const passed = percentage >= passMark;
        quizResult.replaceChildren(
          makeElement("p", `assessment-score ${passed ? "is-pass" : "is-retry"}`, `${score}/5 correct · ${percentage}% · ${passed ? "Knowledge check passed." : "Below the 80% pass mark. Review the explanations and retry."}`),
          explanations
        );
        savedSummary.querySelector("p").textContent =
          `Prerequisites: ${record.assessments[phase.id].prerequisiteReady === undefined ? "not checked" : record.assessments[phase.id].prerequisiteReady ? "ready" : "review"} · Knowledge check: ${record.assessments[phase.id].quizBest}% (best) · Practical rubric: ${record.assessments[phase.id].practicalScore ?? "not scored"}% · ${phaseStatus(phase.id)}`;
        if (saveRecord()) announce("Knowledge-check result saved on this browser.", "info", "assessment-status");
        renderDashboard(courseLessons());
      });

      practicalForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!evidence.value.trim()) {
          practicalResult.textContent = "Add a safe artifact title/location before saving this assessment.";
          practicalResult.dataset.state = "error";
          evidence.focus();
          return;
        }
        if (!prerequisiteCheck.value) {
          practicalResult.textContent = "Complete the prerequisite self-check before saving this assessment.";
          practicalResult.dataset.state = "error";
          prerequisiteCheck.focus();
          return;
        }
        const ratings = {};
        let valid = true;
        rubric.forEach((criterion) => {
          const field = practicalForm.querySelector(`[data-criterion="${criterion.id}"]`);
          if (!field.value) valid = false;
          else ratings[criterion.id] = Number(field.value);
        });
        if (!valid) {
          practicalResult.textContent = "Choose a rating for every rubric criterion before saving.";
          practicalResult.dataset.state = "error";
          practicalForm.querySelector("select:invalid")?.focus();
          return;
        }
        const score = Math.round(rubric.reduce((sum, criterion) =>
          sum + (ratings[criterion.id] / 4) * criterion.weight, 0
        ));
        const passed = score >= passMark;
        const unmet = rubric.filter((criterion) => ratings[criterion.id] < 3);
        record.assessments[phase.id] = {
          ...phaseAssessment(phase.id),
          practicalScore: score,
          practicalPassed: passed,
          prerequisiteReady: prerequisiteCheck.value === "ready",
          ratings,
          evidence: evidence.value.trim(),
          revision: reflection.value.trim(),
          practicalCompletedAt: new Date().toISOString(),
        };
        const feedback = unmet.length
          ? ` Revisit: ${unmet.map((criterion) => criterion.title).join(", ")}.`
          : "";
        const updatedAssessment = record.assessments[phase.id];
        const masteryMessage = updatedAssessment.quizPassed && passed && updatedAssessment.prerequisiteReady
          ? "Prerequisite check, knowledge check, and practical rubric meet the course threshold. This remains a self-assessed result, not independent verification."
          : !updatedAssessment.prerequisiteReady
            ? "Prerequisites are marked for review. Revisit them before recording self-assessed mastery."
            : !updatedAssessment.quizPassed
              ? "Complete the knowledge check at 80% or higher before recording self-assessed mastery."
              : "Your practical rubric is below 80%. Revise and reassess.";
        practicalResult.replaceChildren(makeElement(
          "p",
          `assessment-score ${passed ? "is-pass" : "is-retry"}`,
          `${score}% · ${masteryMessage}${feedback}`
        ));
        if (saveRecord()) announce("Practical assessment result saved on this browser.", "info", "assessment-status");
        renderDashboard(courseLessons());
        savedSummary.querySelector("p").textContent =
          `Prerequisites: ${record.assessments[phase.id].prerequisiteReady ? "ready" : "review"} · Knowledge check: ${record.assessments[phase.id].quizBest ?? "not passed"}% (best) · Practical rubric: ${score}% · ${phaseStatus(phase.id)}`;
      });

      workspace.append(overview, quiz, practical, savedSummary);
    }

    select.addEventListener("change", renderPhase);
    renderPhase();
  }

  function addResetControl() {
    const button = document.getElementById("reset-course-progress");
    if (!button) return;
    button.addEventListener("click", () => {
      if (!window.confirm("Clear all reading, practice, and assessment records saved in this browser? This cannot be undone.")) return;
      record = defaultRecord();
      if (saveRecord()) {
        renderDashboard(courseLessons());
        announce("All learning records were cleared from this browser.");
      }
    });
  }

  function initialize() {
    record = loadRecord();
    const lessons = courseLessons();
    renderDashboard(lessons);
    addLessonControl();
    renderAssessment();
    addResetControl();
  }

  window.addEventListener("storage", (event) => {
    if (event.key !== storageKey) return;
    record = loadRecord();
    renderDashboard(courseLessons());
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
