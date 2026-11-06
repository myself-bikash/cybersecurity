# Project: Personal Cybersecurity Testing and Monitoring Laboratory

## Learning objectives

- Design a small virtual lab that remains isolated from public networks.
- Use sample data and local training applications to study assessment, forensics, and monitoring.
- Document observations, evidence, limitations, and recommendations.

## Project objective

Build a small virtual cybersecurity environment and use professional tools to study security
assessment, network traffic, security events, and technical reporting. The project is educational:
do not test public systems, real accounts, or systems outside your explicit authorization.

## Laboratory architecture

| System | Role in the source |
| --- | --- |
| Kali Linux | Security-testing machine. |
| Ubuntu Server | Network and server testing. |
| Windows VM | Windows security monitoring. |
| OWASP Juice Shop | Web-application testing target. |
| Wazuh | Security monitoring. |

You do not need to install every tool at once. Create an isolated virtual network and snapshots for
all machines. Never expose an intentionally vulnerable system directly to the public internet.

## Project tasks

### Task 1 — Prepare the environment

- Install a virtualization platform.
- Create Kali Linux, Ubuntu Server, and Windows virtual machines.
- Configure an isolated virtual network.
- Take snapshots of all machines.

### Task 2 — Network discovery

Use a provided, sanitized lab report rather than scanning external systems. Identify listed hosts,
ports, and services, explain what each service does, and record questions requiring administrator
verification.

### Task 3 — Packet analysis

Use a training capture or traffic from your own lab to identify TCP connections, DNS requests, a TCP
handshake, and source/destination addresses. Avoid sensitive or third-party traffic.

### Task 4 — Web-application testing

Use Burp Suite or OWASP ZAP with a local OWASP Juice Shop instance to inspect normal requests and
responses, examine cookies and sessions, review passive-scan alerts, verify evidence, and prepare
a report. Do not send exploit payloads or test a public application.

### Task 5 — Vulnerability validation

Review a public vulnerability report and a sanitized training assessment. Explain the issue, impact,
evidence, and remediation. Do not execute an exploit or use Metasploit modules.

### Task 6 — Password security

Use synthetic examples and mock audit results to explain hashing, compare password-strength
properties, and recommend policy improvements. Do not run password recovery or attempt logins.

### Task 7 — Digital forensics

Use a legitimate sample evidence image or memory capture. Examine files, metadata, or available
memory artifacts and document findings while maintaining evidence integrity.

### Task 8 — Security monitoring

Use Sysmon and Wazuh or another training environment to review endpoint events, process activity,
and sample alerts. Investigate a fictional suspicious event and prepare a short incident report.

## Final project report

Include:

1. Project introduction.
2. Laboratory architecture.
3. Virtual-machine configurations.
4. Network configuration.
5. Tools used.
6. Network-discovery results.
7. Packet-analysis findings.
8. Web-application testing findings.
9. Vulnerability-validation results.
10. Password-security observations.
11. Forensic-investigation findings.
12. Security-monitoring results.
13. Recommendations.
14. Conclusion.

Expected outcome: explain how different cybersecurity tools fit into a basic, authorized assessment.
The source's full project includes active scans, controlled exploitation, and password auditing;
those operational activities are replaced here with pre-generated reports, passive/local analysis,
and synthetic data.

## Key takeaways

- Isolation, snapshots, authorization, and data minimization are foundational lab safeguards.
- A technical report should distinguish observations from confirmed findings.
- A combination of assessment, forensics, and monitoring evidence gives a more complete picture.

## Review questions

1. Which systems belong in the lab, and how should they be isolated?
2. What evidence can each tool category provide?
3. Which project tasks use sample data instead of live testing, and why?
4. What limitations and authorization boundaries should appear in the report?

## Suggested answers

1. Use Kali, Ubuntu Server, Windows, and an intentionally vulnerable training app on an isolated
   virtual network. Keep vulnerable systems disconnected from public networks and take snapshots.
2. Discovery reports show advertised hosts/services; packet captures show recorded communications;
   application reviews show requests and alerts; forensic images show disk or memory artifacts;
   monitoring logs show configured endpoint events. Each source has coverage and context limits.
3. Network discovery, web review, validation, password review, forensics, and monitoring use
   sanitized reports, local training targets, sample images/logs, or synthetic data; this avoids
   unauthorized impact and exposure of real secrets.
4. State the lab scope, data source, tool/configuration limits, uncertainty, evidence handling, and
   that no external systems or real accounts were tested.

## Project workflow and deliverables

1. Draw the isolated VM architecture and record snapshots and network boundaries.
2. For each of the eight tasks, identify the question, approved data source, steps performed, and
   output before analysis.
3. Build a findings table separating observations, interpretations, and open verification
   questions.
4. Submit the architecture diagram, sanitized evidence notes, recommendations, limitations, and
   final report. Use no real credentials, personal data, public-target scans, exploit execution, or
   password recovery.
