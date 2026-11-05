# Threat Intelligence and Hunting

## Learning objectives

- Explain threat intelligence, IOCs, IOAs, and threat feeds.
- Describe MITRE ATT&CK tactics, techniques, and sub-techniques.
- Explain the threat-hunting process and detection-engineering lifecycle.
- Use external threat data cautiously and protect confidential information.

## 1. Threat intelligence

**Threat intelligence** is information about cyber threats that has been collected, analyzed, and
organized to support security decisions. It can help an organization understand who may be
targeting it, what systems may be at risk, and how to prioritize defensive actions.

| Term | Meaning |
| --- | --- |
| IOC (Indicator of Compromise) | Observable evidence that may indicate a system compromise. |
| IOA (Indicator of Attack) | Behavior or activity pattern that may indicate an attack. |
| Threat feed | Updated source of threat-related information. |

| IOC | IOA |
| --- | --- |
| Focuses on observable evidence. | Focuses on suspicious behavior. |
| Often identifies known indicators. | May identify activity without a known malware signature. |
| Example: a known malicious file hash. | Example: suspicious credential-access behavior. |

Threat feeds may provide malicious IP addresses, suspicious domains, malware hashes, phishing
URLs, threat-actor information, and vulnerability information. The source names AlienVault OTX,
AbuseIPDB, VirusTotal, URLhaus, and MalwareBazaar.

**Privacy caution:** do not upload confidential files, private documents, or proprietary data to
public analysis services without authorization. Depending on the service, submitted samples may
become available to other researchers or users.

## 2. MITRE ATT&CK mapping

**MITRE ATT&CK** is a knowledge base describing adversary tactics and techniques. It helps
security teams organize observed behaviors and detection strategies.

| Concept | Meaning |
| --- | --- |
| Tactic | The adversary's objective. |
| Technique | Method used to achieve that objective. |
| Sub-technique | More specific variation of a technique. |

The source lists these example tactics:

| Tactic | General objective |
| --- | --- |
| Initial Access | Enter an environment. |
| Execution | Run malicious code. |
| Persistence | Maintain access. |
| Privilege Escalation | Gain higher permissions. |
| Defense Evasion | Avoid security controls. |
| Credential Access | Obtain credentials. |
| Discovery | Learn about an environment. |
| Lateral Movement | Move between systems. |
| Collection | Gather information. |
| Exfiltration | Transfer data outside an environment. |
| Impact | Disrupt or damage systems. |

The source's simulated scenario names behaviors such as a malicious attachment, script execution,
persistence, credential access, lateral movement, collection, and data transfer. Here these are
abstract behaviors for defensive mapping only; no implementation or attack procedure is provided.

## 3. Threat hunting

**Threat hunting** proactively searches systems, networks, and security data for suspicious
activity that may not have triggered an existing alert.

A hunt should have a hypothesis, relevant data sources, a defined search method, and documented
results. The analyst searches available logs and telemetry, evaluates supporting and contradicting
evidence, and updates detections when useful.

Example hypothesis: “An account may be accessing systems in an unusual pattern.” Relevant sources
could include authentication, endpoint, and network records. The hypothesis should be accepted,
rejected, or left unresolved based on evidence.

## 4. Detection engineering

**Detection engineering** designs, tests, deploys, and improves rules or analytics that identify
suspicious behavior.

1. Understand the behavior to detect.
2. Identify the required telemetry.
3. Write detection logic.
4. Test against known or simulated activity.
5. Measure false positives and false negatives.
6. Deploy the detection.
7. Review and improve it.

Illustrative detection idea from the source: repeated authentication failures followed shortly by a
successful login may create an alert for analyst investigation. The actual rule depends on
available fields, logging configuration, expected behavior, and acceptable false-positive rates.

## Important definitions

| Term | Definition |
| --- | --- |
| Threat intelligence | Analyzed threat information used to support security decisions. |
| IOC | Observable evidence that may indicate compromise. |
| IOA | Behavior or activity pattern that may indicate an attack. |
| Threat feed | Updated source of threat information. |
| MITRE ATT&CK | Knowledge base of adversary tactics and techniques. |
| Threat hunting | Proactive search for hidden or undetected threats. |
| Detection engineering | Developing and improving rules and analytics to detect suspicious activity. |

## Practical exercise

Use synthetic login, endpoint, and network events. Form one hunting hypothesis, list the telemetry
needed, note evidence for and against the hypothesis, and document a conclusion. Map only the
observed behavior to a high-level ATT&CK tactic; do not generate attack activity.

## Key takeaways

- IOCs describe observable evidence; IOAs describe suspicious behavior.
- Threat feeds can enrich investigations, but sharing files with public services creates privacy
  risks.
- ATT&CK organizes observed behavior; it is not itself proof of an incident.
- Threat hunting is hypothesis-driven; detection engineering makes useful detection logic
  repeatable.

## Revision questions

1. How do threat intelligence and a threat feed differ?
2. How do IOCs and IOAs differ?
3. What is the difference between a tactic, technique, and sub-technique?
4. Name six ATT&CK tactics from the source.
5. What should a documented threat hunt include?
6. What are the stages of detection engineering?
7. Why should confidential files not be submitted to public analysis services without authorization?
