# Practical Projects

## Learning objectives

- Combine authorization, assessment, vulnerability documentation, remediation, and reporting.
- Build project deliverables from fictional scenarios and sanitized evidence.
- Identify which activities require explicit authorization and special safeguards.

## Project 1: Isolated training environment

The source's project uses Kali Linux, an intentionally vulnerable VM such as Metasploitable 2,
VirtualBox/VMware, and a host-only network; it also names OWASP Juice Shop for web testing.

For this safe adaptation, construct or diagram the isolated environment and use pre-generated
discovery and service reports. Do not conduct live scanning or exploitation.

Deliverable: a structured record of the lab scope, supplied findings, evidence, limitations, and
recommendations—not merely screenshots or tool output.

## Project 2: Vulnerability register

Create a register from sanitized findings. Record:

- Vulnerability ID.
- Affected system.
- Description.
- Evidence.
- CVE, if applicable.
- CVSS score and version, if applicable.
- Business impact.
- Severity.
- Recommended remediation.

Deliverable: a vulnerability-assessment spreadsheet or document.

## Project 3: Controlled-validation case study

The source proposes a proof-of-concept demonstration. To avoid exploitation instructions, use a
publicly documented vulnerability and a supplied training report instead:

1. Identify the documented weakness in the report.
2. Understand its root cause from the advisory.
3. Review the report's harmless evidence without executing the PoC.
4. State what the evidence establishes and what remains uncertain.
5. Recommend remediation and explain how an authorized retest would verify it.

Deliverable: a safe case study with supporting evidence and no exploit execution.

## Project 4: Recommend fixes

For each supplied weakness:

1. Identify the root cause.
2. Recommend a technical fix.
3. Explain the business benefit.
4. Identify configuration or patch changes.
5. Define safe verification criteria.
6. Record a retest outcome based on supplied results.

Deliverable: a remediation plan prioritized by risk.

## Project 5: Professional report

Combine the earlier project artifacts in a report containing:

- Executive summary.
- Scope and authorization.
- Methodology.
- Tools used.
- Asset inventory.
- Vulnerability findings.
- Evidence.
- Severity assessment.
- Safe reproduction information.
- Remediation.
- Retesting results.
- Limitations and conclusion.

Deliverable: a complete report that another security professional can understand and review.

**Safe completion sequence:** Start with the fictional scope, then use supplied reports and
training data to complete Projects 1–4. Mark every finding as confirmed, suspected, or
informational, and explain what the evidence does not establish. Assemble only those sanitized
artifacts into Project 5. Final deliverables are the lab-scope record, register, case study,
prioritized remediation plan, and final report; no active scanning, exploitation, password
recovery, or privilege-gain attempts are part of this exercise.

## Source-listed tools

The source says to learn tools by purpose, not memorize them:

| Tool | Primary purpose |
| --- | --- |
| Nmap | Host discovery, port scanning, service detection. |
| Wireshark | Network-traffic analysis. |
| Burp Suite | Web-application security testing. |
| OWASP ZAP | Web-application security testing. |
| Metasploit Framework | Controlled exploit validation. |
| Gobuster | Directory and DNS enumeration. |
| ffuf | Web fuzzing. |
| Nikto | Web-server checks. |
| Greenbone / OpenVAS | Vulnerability assessment. |
| Nessus | Vulnerability assessment. |
| Netcat | Network-connection testing. |
| John the Ripper | Password-security auditing. |
| Hashcat | Password-hash auditing. |
| LinPEAS | Linux privilege-escalation assessment assistance. |
| WinPEAS | Windows privilege-escalation assessment assistance. |

LinPEAS and WinPEAS may identify potentially unsafe configurations; their output is not proof that
privilege escalation is possible. Manually verify findings using authorized, non-invasive evidence.
No operational commands or exploit procedures are included.

## Key takeaways

- A project is assessed by its scope, evidence, reasoning, and remediation—not by how many tools
  were run.
- Sanitized reports and pre-generated data support safe, repeatable learning.
- Tool output and automated findings are not proof without verification.

## Review questions

1. What does Project 1's isolated environment contain?
2. Which fields belong in a vulnerability register?
3. How can a validation case study be completed without executing a PoC?
4. What should a remediation plan and final report contain?
5. Why are LinPEAS/WinPEAS findings not proof by themselves?

## Suggested answers

1. A safe project uses a virtual environment such as Kali and a deliberately vulnerable training
   target on an isolated network; this lesson substitutes pre-generated reports for live scanning.
2. Record an ID, asset, description, evidence, CVE/CVSS if applicable, business impact, severity,
   and remediation.
3. Use a public advisory and supplied report, inspect its harmless evidence, identify root cause
   and uncertainty, then recommend remediation and define a safe retest.
4. A remediation plan identifies root cause, prioritized fixes, owner, business benefit, and
   verification criteria; the report also documents scope, method, findings, evidence, severity,
   retest, limitations, and conclusion.
5. They identify possible risky configurations; context and manual authorized verification are
   needed to determine whether a vulnerability is present and exploitable.
