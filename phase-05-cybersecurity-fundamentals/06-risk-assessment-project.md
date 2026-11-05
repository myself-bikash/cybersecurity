# Project: Risk Assessment of a Fictional Company

## Learning objectives

By completing this project, you should be able to:

- Inventory important assets and their security requirements.
- Identify threats, weaknesses, likelihood, and impact.
- Recommend controls and map them to security frameworks.
- Produce a structured, qualitative risk-assessment report.

## Project brief

Act as a junior cybersecurity analyst assessing **TechNova Solutions**, a fictional 25-person
software-development company. Apply the security principles, cryptography concepts,
authentication methods, threat knowledge, and frameworks from this phase. This exercise concerns
only the supplied fictional scenario; do not assess a real organization without explicit written
authorization.

### Company background

Infrastructure:

- 25 employee laptops.
- One internal file server.
- One company website.
- One customer database.
- Cloud-based email and cloud storage.
- Office Wi-Fi.
- Remote employee access.
- One administrator account shared by multiple IT employees.

The company stores customer information, employee records, software projects, business documents,
and financial information. It has limited cybersecurity policies and no dedicated security team.

## 1. Asset inventory

An asset is anything valuable to an organization that needs protection.

| Asset | Importance | Security requirement |
| --- | --- | --- |
| Customer database | Very high | Confidentiality, integrity, availability. |
| Employee records | High | Confidentiality and integrity. |
| File server | High | All three CIA principles. |
| Company website | High | Integrity and availability. |
| Employee laptops | High | Confidentiality and integrity. |
| Cloud email | High | Confidentiality and availability. |
| Administrator accounts | Very high | Strong authentication and access control. |
| Backup files | Very high | Availability and integrity. |

## 2. Threats

| Threat | Possible impact |
| --- | --- |
| Phishing | Employee account compromise. |
| Ransomware | Loss of access to company files. |
| Password spraying | Unauthorized account access. |
| DDoS | Website unavailability. |
| Insider threat | Unauthorized data disclosure. |
| Malware | System compromise. |
| MitM | Interception of insecure communication. |
| Privilege escalation | Unauthorized administrator access. |
| Data theft | Loss of confidential information. |

## 3. Security weaknesses

The scenario states that:

1. Some employees use weak passwords.
2. MFA is not enabled for all important accounts.
3. Administrator credentials are shared.
4. Software updates are irregular.
5. Employees have more permissions than necessary.
6. Backups are not tested regularly.
7. Network activity is not monitored.
8. There is no formal incident-response plan.
9. Remote access is not sufficiently restricted.
10. Employee security-awareness training is limited.

These are example vulnerabilities or management weaknesses that can increase risk.

## 4. Qualitative risk assessment

Risk assessment identifies risks, evaluates likelihood and potential impact, and determines how
they should be managed. Use the source's simple ratings: **High** means serious likelihood or
impact; **Medium** means moderate likelihood or impact; **Low** means limited likelihood and
impact.

| Risk | Likelihood | Impact | Overall priority |
| --- | --- | --- | --- |
| Phishing and account compromise | High | High | High |
| Ransomware infection | Medium | High | High |
| Data theft | Medium | High | High |
| Weak passwords | High | Medium | High |
| DDoS attack | Medium | Medium | Medium |
| Unauthorized administrator access | Medium | High | High |
| Data loss due to server failure | Medium | High | High |

These ratings are illustrative. A real assessment must justify ratings using evidence, business
impact, and the actual environment.

## 5. Recommended controls

| Security problem | Recommended solution from the source |
| --- | --- |
| Weak passwords | Strong, unique passwords and a password manager. |
| No MFA | Enable MFA for important accounts. |
| Shared administrator account | Create separate administrator accounts. |
| Outdated software | Establish regular patch management. |
| Excessive permissions | Apply least privilege. |
| No tested backups | Maintain and test secure backups. |
| No monitoring | Implement centralized logging and monitoring. |
| Phishing risk | Conduct employee awareness training. |
| Insecure remote access | Use secure remote access with MFA. |
| No incident plan | Create an incident-response plan. |

## 6. Framework mapping

| Framework | How TechNova can use it |
| --- | --- |
| NIST CSF | Organize cybersecurity risk management. |
| ISO 27001 | Establish an information-security management system. |
| CIS Controls | Implement practical security safeguards. |
| MITRE ATT&CK | Understand attack techniques and improve detection. |
| Cyber Kill Chain | Identify opportunities to interrupt attacks. |
| OWASP | Improve website and application security. |

## 7. Prioritized recommendations

**Priority 1 — Immediate actions**

- Enable MFA for email and administrator accounts.
- Stop sharing administrator credentials.
- Change weak and compromised passwords.
- Restrict unnecessary account permissions.
- Create secure backups.

**Priority 2 — Security improvements**

- Update operating systems and applications.
- Deploy endpoint protection.
- Configure firewalls.
- Secure remote access.
- Establish centralized logging.
- Conduct phishing-awareness training.

**Priority 3 — Long-term improvements**

- Establish an ISMS.
- Conduct regular security assessments.
- Create an incident-response plan.
- Review access permissions periodically.
- Perform authorized penetration testing.
- Improve security monitoring and recovery procedures.

## Deliverable

Prepare a report with:

1. Company introduction.
2. Assessment scope.
3. Asset inventory.
4. Threat identification.
5. Vulnerability identification.
6. Risk-assessment table.
7. Recommended security controls.
8. Framework mapping.
9. Final recommendations.
10. Conclusion.

The source's conclusion is that TechNova faces risks including phishing, ransomware, weak
authentication, excessive permissions, and insufficient monitoring. Strong authentication, least
privilege, secure backups, patch management, network protection, and monitoring can reduce
exposure to common threats. The project demonstrates how professionals apply principles and
frameworks to organizational environments.

## Key takeaways

- Risk ratings should be supported by evidence in a real assessment; the supplied ratings are
  illustrative.
- Controls should address the particular asset, threat, weakness, and business impact.
- Frameworks organize and prioritize work; they do not replace understanding the organization.

## Review questions

1. Which assets have very high importance, and why?
2. Which listed weaknesses increase the risk of account compromise?
3. Which risks received high overall priority?
4. How do the immediate, improvement, and long-term recommendations differ?
5. Which framework helps with each part of the assessment?
6. What evidence would you need before assigning ratings in a real assessment?
