# Security Frameworks

## Learning objectives

By the end of this lesson, you should be able to:

- Explain the purpose and source-listed elements of NIST CSF 2.0, ISO/IEC 27001, CIS Controls,
  MITRE ATT&CK, Cyber Kill Chain, and OWASP.
- Compare their intended uses.
- Complete authorized, defensive framework exercises.

## What is a cybersecurity framework?

A cybersecurity framework is a structured collection of guidelines, principles, practices, and
controls that helps organizations manage cybersecurity risk and protect information systems.
Frameworks help identify what to protect, risks, controls, detection, response, and ways to improve.

## NIST Cybersecurity Framework (NIST CSF)

The source describes NIST CSF as a framework from the National Institute of Standards and
Technology for understanding, assessing, prioritizing, and managing cybersecurity risk. It names
the **six functions of NIST CSF 2.0**:

| Function | Definition and source example |
| --- | --- |
| Govern | Establish strategy, policies, responsibilities, and risk-management approach. A company defines security ownership and policy. |
| Identify | Understand assets, systems, data, business context, and risks. An organization inventories computers, servers, cloud services, applications, databases, and network devices. |
| Protect | Implement safeguards to reduce risk and prevent incidents, such as MFA, firewalls, encryption, access controls, training, and updates. |
| Detect | Identify potential attacks, unusual activity, and incidents. Examples include SIEM, IDS, IPS, EDR, and monitoring systems. |
| Respond | Act after detecting an incident; for ransomware, isolate affected systems, investigate, and prevent spread. |
| Recover | Restore systems, services, and information; for example, restore data from secure backups. |

NIST CSF supports an organization-wide risk-management program rather than a focus on individual
tools.

## ISO/IEC 27001

**ISO/IEC 27001** specifies requirements for establishing, implementing, maintaining, and
continually improving an **Information Security Management System (ISMS)**.

An ISMS is a structured set of policies, procedures, responsibilities, risk assessments, and
controls for protecting organizational information. The source's software-company example covers
information access, data protection, policies, risk assessments, employee responsibilities,
incident management, and business continuity.

Main elements in the source:

1. Risk assessment: identify and evaluate information-security risks.
2. Risk treatment: decide how identified risks should be managed.
3. Security policies: establish organizational requirements.
4. Security controls: implement safeguards.
5. Monitoring: check whether measures are effective.
6. Continual improvement: review and improve the ISMS.

ISO 27001 certification is an independent assessment of whether an organization's ISMS meets the
standard's requirements. The source lists improved security management and risk management,
demonstrated commitment, customer/business trust, and a structured approach as benefits.

## CIS Critical Security Controls

The **CIS Critical Security Controls**, developed by the Center for Internet Security, are a
prioritized set of safeguards against common threats. The source identifies the following 18
controls in **CIS Controls v8.1**:

1. Inventory and Control of Enterprise Assets.
2. Inventory and Control of Software Assets.
3. Data Protection.
4. Secure Configuration of Enterprise Assets and Software.
5. Account Management.
6. Access Control Management.
7. Continuous Vulnerability Management.
8. Audit Log Management.
9. Email and Web Browser Protections.
10. Malware Defenses.
11. Data Recovery.
12. Network Infrastructure Management.
13. Network Monitoring and Defense.
14. Security Awareness and Skills Training.
15. Service Provider Management.
16. Application Software Security.
17. Incident Response Management.
18. Penetration Testing.

The source's small-company example maintains device inventory, removes unnecessary software,
updates vulnerable applications, restricts permissions, protects information, monitors logs,
maintains backups, and performs authorized penetration tests.

**Implementation Groups (IGs)** help prioritize safeguards according to size, resources, and risk:
IG1 is essential for limited-resource/lower-complexity organizations; IG2 adds safeguards for more
complex environments; IG3 is more comprehensive for greater security needs and resources.

## MITRE ATT&CK

**MITRE ATT&CK** is described in the source as a globally accessible knowledge base of
real-world adversary tactics, techniques, and procedures based on observed behavior. The source
expands ATT&CK as “Adversarial Tactics, Techniques, and Common Knowledge.”

- **Tactic:** an adversary's objective. The source lists Initial Access, Execution, Persistence,
  Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement,
  Collection, Exfiltration, and Impact.
- **Technique:** how an adversary attempts to achieve an objective; the source gives phishing for
  initial access as a conceptual example.
- **Sub-technique:** a more specific description of a technique.
- **Procedure:** how a particular threat actor or malware family implemented a technique.

The source lists threat intelligence, monitoring, detection engineering, incident response,
red-team exercises, blue-team operations, and security gap analysis as uses. Defenders use it to
understand behaviors and develop detections, rather than relying only on names of tools or malware.
In the source's example, defenders map a reported phishing attachment, subsequent execution,
credential access, and movement to another system to relevant ATT&CK techniques.

## Cyber Kill Chain

The **Cyber Kill Chain**, developed by Lockheed Martin according to the source, models common
stages of an attack and helps defenders find opportunities to prevent, detect, or interrupt
progression. These are conceptual stages, not an instruction to conduct an attack.

| Stage | Source definition/example, stated at a high level |
| --- | --- |
| Reconnaissance | Collect information about a potential target; public company and technology information is the source example. |
| Weaponization | Prepare a payload for a target; the source's example is a document intended to exploit a weakness or deceive a user. |
| Delivery | Send or place the payload where it could reach the target. |
| Exploitation | A weakness is triggered or a user is deceived into running malicious content. |
| Installation | Malicious software is installed to maintain access or perform malicious activity. |
| Command and Control (C2) | A channel is used to communicate with compromised systems. |
| Actions on Objectives | The adversary pursues an objective such as stealing information, encrypting files, disrupting service, obtaining financial information, or destroying data. |

## OWASP

**OWASP (Open Worldwide Application Security Project)** is a nonprofit organization and global
community providing resources, tools, documentation, and guidance for software and application
security. The **OWASP Top 10** is an awareness document about major web-application risk
categories. The PDF names this list **OWASP Top 10:2025**:

1. **Broken Access Control:** users access information or perform actions beyond permission.
2. **Security Misconfiguration:** insecure application or infrastructure configuration.
3. **Software Supply Chain Failures:** risks from insecure dependencies, build systems, updates, or
   suppliers.
4. **Cryptographic Failures:** inadequate cryptographic protection of sensitive information.
5. **Injection:** untrusted input is interpreted as commands or queries and may alter behavior.
6. **Insecure Design:** security weaknesses in design or architecture.
7. **Authentication Failures:** weak or incorrectly implemented authentication.
8. **Software or Data Integrity Failures:** insufficient integrity protections make software or
   data untrustworthy.
9. **Security Logging and Alerting Failures:** important security activity is not properly
   recorded, monitored, or reported.
10. **Mishandling of Exceptional Conditions:** errors and unusual conditions are not handled
    securely.

The source's examples are a customer accessing another customer's order (broken access control)
and unsafe handling of user input leading to SQL injection. Its listed resources are OWASP Top 10,
Web Security Testing Guide (WSTG), Application Security Verification Standard (ASVS), OWASP Juice
Shop, and OWASP ZAP. Use intentionally vulnerable applications only in an isolated lab you own or
are explicitly authorized to test.

## Framework comparison

| Framework/model | Main purpose | Main area |
| --- | --- | --- |
| NIST CSF | Manage cybersecurity risk. | Organization-wide cybersecurity. |
| ISO/IEC 27001 | Establish and maintain an ISMS. | Information-security management. |
| CIS Controls | Implement prioritized safeguards. | Practical defense. |
| MITRE ATT&CK | Understand adversary behavior. | Threat detection and analysis. |
| Cyber Kill Chain | Understand common attack stages. | Attack progression and interruption. |
| OWASP | Improve application security. | Web and software security. |

In the source's distinctions, NIST CSF is broad risk management; ISO 27001 specifies ISMS
requirements; CIS Controls are prioritized safeguards; ATT&CK documents adversary tactics and
techniques; the Kill Chain describes an attack progression; and OWASP provides application
security resources.

## Practical exercises

1. Map a small company's defensive activities to Govern, Identify, Protect, Detect, Respond, and
   Recover.
2. Identify five security policies a software company might establish in an ISMS.
3. Inventory devices and software in your own authorized lab; identify missing updates and
   unnecessary services without scanning systems you do not own.
4. Use a public report to map a documented incident to ATT&CK concepts; do not reproduce the
   incident's attack.
5. Diagram the seven Kill Chain stages for a hypothetical phishing incident and add a defensive
   interruption point at each stage.
6. Study application risks using OWASP Juice Shop or another intentionally vulnerable local lab.
   Test only systems you own or have explicit permission to assess.

## Key takeaways

- NIST CSF organizes risk management into six functions.
- ISO 27001 concerns ISMS requirements and continual improvement.
- CIS Controls provide prioritized safeguards and implementation groups.
- MITRE ATT&CK catalogs observed adversary behaviors; the Kill Chain models stages.
- OWASP provides application-security guidance and testing resources.

## Revision questions

1. What are the six NIST CSF 2.0 functions?
2. What is an ISMS, and what are the main ISO 27001 elements in the source?
3. What do CIS Implementation Groups help an organization do?
4. Distinguish ATT&CK tactics, techniques, sub-techniques, and procedures.
5. Name and explain the seven Kill Chain stages.
6. What is the purpose of the OWASP Top 10?
7. Which framework would you use for organization-wide risk, practical safeguards, adversary
   behavior, or application security, and why?
