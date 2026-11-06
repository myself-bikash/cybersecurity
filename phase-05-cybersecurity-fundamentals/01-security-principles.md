# Security Principles

## Learning objectives

By the end of this lesson, you should be able to:

- Explain the CIA triad and the AAA concepts in the source.
- Define non-repudiation, least privilege, defense in depth, and Zero Trust.
- Apply these concepts to a fictional login and database scenario.

## Security principles

Security principles are fundamental rules and guidelines used to protect information, systems,
applications, and networks. The source's example is limiting confidential customer information to
employees whose jobs require access.

## CIA triad

| Principle | Definition | Example of violation in the source |
| --- | --- | --- |
| Confidentiality | Information is accessible only to authorized people, systems, or processes. | Customer data is stolen, or bank details are viewed by unauthorized people. |
| Integrity | Information remains accurate, complete, and unchanged unless an authorized modification is made. | A student's mark or a bank balance is changed without authorization. |
| Availability | Information, applications, and systems remain accessible to authorized users when needed. | A website or online banking application is taken offline. |

Source-listed safeguards:

- **Confidentiality:** encryption, password protection, access control, MFA, and data
  classification.
- **Integrity:** cryptographic hashing, digital signatures, file-integrity monitoring, access
  permissions, and audit logs.
- **Availability:** regular backups, disaster-recovery plans, redundant servers, load balancing,
  DDoS protection, and system monitoring.

A system is not fully secure if it protects confidentiality but fails to maintain integrity or
availability.

## Authentication, authorization, and accounting

| Concept | Definition | Question answered |
| --- | --- | --- |
| Authentication | Verifies the identity of a user, device, or system. | “Who are you?” |
| Authorization | Decides what an authenticated user may access or do. | “What are you allowed to do?” |
| Accounting (auditing) | Records and monitors user activity, system events, and resource use. | What happened, when, and which account or system did it? |

The source's authentication example is an email service checking a username and password. Other
listed methods are passwords, PINs, security keys, fingerprints, facial recognition, and one-time
passwords. In the source's company example, an employee can view their own salary information, an
HR manager can access employee salary records, and a system administrator can manage server
configurations. Authorization models listed are RBAC, ABAC, DAC, and MAC.
Accounting examples include logs, SIEM systems, Windows Event Viewer, and Linux journal logs.

## Non-repudiation

**Non-repudiation** provides evidence that an action or transaction was performed by a particular
party, making it difficult for that party to deny the action. The source's example is a digitally
signed electronic contract. Listed methods are digital signatures, secure audit logs, timestamping,
and digital certificates.

## Least privilege

**Least privilege** gives users, applications, and systems only the minimum permissions needed for
their tasks. A normal employee, for example, does not need administrator access to manage other
employee accounts. The source lists reducing unauthorized access, limiting damage from compromised
accounts, reducing privilege-escalation opportunities, and protecting sensitive information as
benefits.

## Defense in depth

**Defense in depth** uses multiple layers of independent or complementary security controls rather
than relying on one mechanism. The source's company example layers a firewall, endpoint protection,
MFA, encryption, IDS/IPS, backups, and monitoring. If one layer fails, another may reduce impact.

## Zero Trust

**Zero Trust** follows “Never Trust, Always Verify.” A user, device, or application is not
automatically trusted because it is inside an organization's network. The source's example has an
employee on company Wi-Fi request access to a confidential cloud database; the system still checks
identity, permission, device compliance, and whether the requested access is appropriate.

Core principles in the source:

- Verify explicitly.
- Use least privilege.
- Assume breach.
- Continuously evaluate access where appropriate.

## Important distinctions

| Concept | Meaning |
| --- | --- |
| Authentication | Verifies identity. |
| Authorization | Determines permissions. |
| Accounting | Records activity. |
| Confidentiality | Protects information from unauthorized access. |
| Integrity | Protects information from unauthorized changes. |
| Availability | Keeps systems accessible to authorized users. |
| Least privilege | Gives only the minimum required permissions. |
| Defense in depth | Uses multiple security layers. |
| Zero Trust | Evaluates every access request rather than trusting network location. |

## Practical exercise: fictional login system

The source's scenario is a company with 50 employees and one internal database. Answer:

1. How will employee identities be verified?
2. How will unauthorized employees be prevented from accessing confidential records?
3. How will employee activity be recorded?
4. How can database information be protected from unauthorized changes?
5. How can the database remain available during server failure?
6. How can the impact of a compromised employee account be reduced?

Apply the CIA triad, AAA, least privilege, defense in depth, and Zero Trust. Do not access a real
company database.

**Steps and deliverable:** For each question, name the security principle, propose one control, and
explain what it protects. Then draw a simple login-to-database flow showing identity checks,
permission checks, logging, and a backup or recovery path. Submit the six answers and the diagram
using only fictional details.

## Key takeaways

- CIA describes confidentiality, integrity, and availability.
- Authentication, authorization, and accounting address identity, permissions, and recorded
  activity.
- Least privilege reduces unnecessary access; defense in depth layers controls.
- Zero Trust does not grant trust solely based on network location.

## Revision questions

1. How do confidentiality, integrity, and availability differ?
2. How do authentication, authorization, and accounting differ?
3. What is non-repudiation?
4. How does least privilege limit damage after an account compromise?
5. What does “Never Trust, Always Verify” mean in the source's example?

## Suggested answers

1. Confidentiality limits access to authorized parties; integrity protects correctness from
   unauthorized change; availability keeps information usable when needed.
2. Authentication checks identity, authorization checks permitted actions, and accounting records
   activity.
3. Non-repudiation provides evidence linking an action to a party, such as a verifiable digital
   signature; it is not an absolute guarantee that a person cannot dispute the action.
4. A compromised account has only its assigned permissions, limiting the data and functions an
   attacker could reach.
5. Access is evaluated for the user, device, and requested resource rather than granted merely
   because the request originates on company Wi-Fi.
