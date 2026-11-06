# Penetration-Testing Fundamentals and Authorization

## Learning objectives

- Define ethical hacking and penetration testing.
- Explain the source's seven-stage testing methodology.
- Prepare scope, authorization, and rules of engagement.
- Distinguish vulnerability assessment from penetration testing.

## Ethical hacking and penetration testing

**Ethical hacking** is authorized examination of systems, networks, or applications to identify
weaknesses before malicious attackers exploit them. Ethical hackers operate within an approved
scope and follow legal and professional rules. The source's example is a hired professional who
finds that one test user can view another user's private information, documents it, and recommends
a fix without misusing or publishing the information.

**Penetration testing** is a controlled security assessment in which an authorized tester validates
whether selected weaknesses can be exploited and evaluates their potential impact. It addresses
questions such as whether restricted systems or information could be accessed and whether a
weakness could allow unauthorized privileges or code execution.

| Ethical hacking | Penetration testing |
| --- | --- |
| Broad term for authorized security activities. | Structured type of security assessment. |
| May include research, auditing, and testing. | Follows defined scope and methodology. |
| May use many security techniques and be ongoing. | Focuses on validating selected weaknesses during an agreed period. |

## Seven stages of a penetration test

| Stage | Purpose |
| --- | --- |
| 1. Planning and authorization | Agree on objectives, scope, permissions, timelines, and restrictions. |
| 2. Reconnaissance | Collect information about the authorized target. |
| 3. Scanning and enumeration | Identify authorized hosts, ports, services, and system information. |
| 4. Vulnerability assessment | Identify and evaluate possible weaknesses. |
| 5. Controlled exploitation | Safely validate selected weaknesses within the agreed scope. |
| 6. Analysis and reporting | Document evidence, business impact, severity, and recommendations. |
| 7. Remediation and retesting | Check whether reported weaknesses were fixed. |

The stages are not always strictly sequential; new information may require returning to an earlier
stage.

## Scope, rules of engagement, and authorization

**Scope** specifies exactly which systems, networks, applications, and activities are included. A
scope document prevents misunderstandings and accidental testing of unauthorized systems.

| Scope item | Fictional example |
| --- | --- |
| Target | SecureTech test website. |
| Environment | Isolated virtual lab. |
| Testing period | Dates and hours agreed in writing. |
| Allowed activities | Activities explicitly approved in the scope. |
| Restricted activities | Destructive testing and denial-of-service. |
| Data handling | Do not access or retain unnecessary personal data. |

**In-scope** systems are explicitly permitted; **out-of-scope** systems or activities are not.
Permission to test one website does not imply permission to test its provider, connected services,
employees, or other customers.

**Rules of engagement** are written instructions covering authorized targets, dates/hours,
approved and prohibited techniques, emergency contacts, data protection, reporting, and conditions
for stopping. The source's example permits vulnerability scanning but prohibits denial-of-service
and destructive exploitation.

**Authorization** is explicit, documented permission from the owner or authorized representative.
It should identify who grants permission, who tests, the systems and activities covered, and the
validity period.

## Legal and ethical boundaries

An ethical tester obtains permission, stays in scope, avoids unnecessary access to sensitive
information and business disruption, protects evidence, reports vulnerabilities responsibly, and
stops when required by the rules of engagement. Calling an activity educational or ethical does
not make unauthorized access legal.

## Vulnerability assessment vs. penetration testing

| Vulnerability assessment | Penetration testing |
| --- | --- |
| Identifies potential vulnerabilities, often with automated scanners. | Validates whether selected weaknesses can be exploited. |
| Usually produces a list of weaknesses and prioritizes risk. | Examines practical impact and possible paths. |
| May cover many systems. | Usually has a defined target and objective. |

Neither replaces the other; organizations commonly use both.

## Reporting

A penetration-testing report describes the assessment, vulnerabilities, evidence, risks, and
recommended fixes. The source says a professional report should be accurate, reproducible, clear,
evidence-based, and understandable to technical and non-technical readers.

## Practical exercise: fictional authorization

Create a one-page authorization document for a fictional company named SecureTech. Include:

1. Company name.
2. Tester or testing team.
3. Target systems.
4. Approved activities.
5. Prohibited activities.
6. Testing period.
7. Emergency contact.
8. Reporting deadline.

Use fictional details; do not treat this exercise as authorization to test a real system.

**Steps and deliverable:** Draft the document with every required field, mark all targets as
fictional/local, and explicitly exclude connected systems, destructive activity, and denial of
service. Add a stop condition and a named contact role. Submit the one-page authorization and a
short note explaining how scope prevents accidental testing beyond permission.

<details class="scenario-card">
<summary>Quick check: an in-scope app links to another domain</summary>

Your written fictional scope includes one training application, but a page links to a second system.
What should the tester do next?

<details>
<summary>Check your reasoning</summary>

Stop before interacting with the second system. A link or technical connection does not extend
authorization. Check the written scope and ask the named contact for clarification or a scope
update. Document the boundary and do not proceed unless permission is explicit.

</details>
</details>

## Key takeaways

- Ethical testing is defined by authorization, scope, and responsible conduct.
- The methodology connects planning, discovery, assessment, validation, reporting, and retesting.
- Scope and rules of engagement must be documented before any real test.
- Vulnerability assessment identifies weaknesses; penetration testing validates selected impact.

## Revision questions

1. How do ethical hacking and penetration testing differ?
2. What are the seven methodology stages?
3. What belongs in scope and rules of engagement?
4. Why does permission for one system not extend to connected systems?
5. How do vulnerability assessment and penetration testing complement each other?

## Suggested answers

1. Ethical hacking is the broad practice of authorized security work; penetration testing is a
   scoped assessment that validates selected weaknesses and potential impact.
2. Planning/authorization, reconnaissance, scanning/enumeration, vulnerability assessment,
   controlled validation, analysis/reporting, and remediation/retesting.
3. Identify the targets, dates, approved and prohibited actions, data handling, contacts, stop
   conditions, and reporting requirements.
4. Ownership and authorization are specific; a technical link or shared provider does not grant
   permission for another system.
5. A vulnerability assessment identifies and prioritizes possible weaknesses; a penetration test
   can safely validate selected issues. Each provides different evidence.
