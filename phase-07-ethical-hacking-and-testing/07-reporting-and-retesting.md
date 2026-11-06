# Reporting and Retesting

## Learning objectives

- Explain the purpose and audience of a penetration-testing report.
- Prepare an executive summary and a structured technical finding.
- Handle evidence safely and assign severity using a documented method.
- Describe remediation and retest outcomes.

## Penetration-testing report

A penetration-testing report communicates assessment results, vulnerabilities, evidence, severity,
business impact, and remediation. A test without a clear report has limited value.

## Executive summary

An **executive summary** is a short, non-technical overview for owners, managers, executives, and
decision-makers. It explains what was tested and why, overall security condition, major risks, and
most important recommendations.

The source's fictional SecureTech summary reports weaknesses in access control, maintenance, and
configuration, identifies unauthorized access to restricted test records as the most serious issue,
and recommends access-control fixes, permission review, and updates.

## Technical findings and evidence

Each technical finding should include:

1. Finding title.
2. Affected asset.
3. Description.
4. Evidence.
5. Severity.
6. Potential impact.
7. Reproduction information, limited to what is safe and necessary.
8. Recommended remediation.
9. Retest status.

**Evidence** supports a finding. Source examples include screenshots, application responses, scan
results, relevant logs, configuration records, and authorized test-account results. Evidence should
be relevant, accurate, reproducible where possible, securely stored, and free of unnecessary
sensitive data. Do not include passwords, private keys, personal information, or unrelated
confidential data.

## Severity assessment

Severity estimates seriousness based on technical characteristics and potential impact.

| Severity | Meaning | Typical response |
| --- | --- | --- |
| Critical | Severe compromise or major business impact. | Immediate attention. |
| High | Significant security risk. | Urgent remediation. |
| Medium | Meaningful but more limited risk. | Planned remediation. |
| Low | Limited impact. | Routine remediation. |
| Informational | Observation or improvement opportunity. | Consider improvement. |

Use a documented rating methodology. Do not assign severity merely because a tool labels an issue
“high.”

## Reproduction information

Reproduction information allows an authorized reader to understand and verify a finding. It should
identify the required test environment and permissions, actions, expected and actual results, and
relevant evidence. Keep it safe and limited to what is necessary; never expose secrets or provide
instructions for unauthorized access.

## Remediation and retesting

**Remediation** fixes or reduces risk. The source's examples:

| Weakness | Recommended remediation |
| --- | --- |
| Weak passwords | Stronger password policy and MFA. |
| Outdated software | Upgrade to a supported, patched version. |
| Broken access control | Enforce server-side authorization checks. |
| Insecure file permissions | Apply least-privilege permissions. |
| Exposed administration panel | Restrict access and strengthen authentication. |
| Insecure session handling | Use secure session management and cookie attributes. |

A useful recommendation states what should change, not only that something is insecure.

**Retesting** checks whether a previously reported weakness was fixed:

- **Fixed:** original weakness is no longer reproducible.
- **Partially fixed:** risk is reduced but remains.
- **Not fixed:** weakness still exists.
- **Unable to verify:** testing could not establish whether it was resolved.

Retesting should also consider whether the fix introduced new security problems.

## Professional report structure

1. Cover page.
2. Document control and confidentiality.
3. Executive summary.
4. Assessment objectives.
5. Scope and authorization.
6. Rules of engagement.
7. Testing methodology.
8. Tools and environment.
9. Summary of findings.
10. Detailed technical findings.
11. Risk and severity assessment.
12. Remediation recommendations.
13. Retesting results.
14. Limitations.
15. Conclusion.

## Practical exercise

Write a report for a fictional SecureTech assessment using supplied findings. Include a short
executive summary, one evidence-backed technical finding, severity rationale, a fix, and a retest
status. Use mock evidence only; exclude all real credentials and personal information.

**Steps and deliverable:** Use the supplied mock finding to fill the report structure. Separate
observations from impact assumptions, justify severity in the fictional context, and choose one of
the four retest outcomes. Submit a one-page executive summary plus one technical finding and a
sanitized evidence-handling note.

## Key takeaways

- Reports communicate impact and remediation to technical and non-technical readers.
- Findings require relevant, protected evidence and documented severity reasoning.
- Reproduction details must remain within the authorization and minimum necessary scope.
- Retesting checks whether the fix worked and whether it introduced another issue.

## Revision questions

1. Who is the executive summary for, and what should it explain?
2. What belongs in a technical finding?
3. How should evidence be protected?
4. Why should severity not be copied directly from a tool?
5. What are the four retest outcomes?
6. What sections belong in a professional report?

## Suggested answers

1. The executive summary is for decision-makers; it should explain scope, overall risk, important
   findings, and prioritized actions in plain language.
2. Include title, affected component, description, evidence, impact, severity rationale, root
   cause, recommendation, and retest information.
3. Minimize collection, redact secrets and personal data, restrict access, store securely, and
   follow retention and chain-of-custody requirements.
4. Tools may misclassify context, impact, or confidence; severity should reflect evidence and the
   organization's environment.
5. Fixed, partially fixed, not fixed, and unable to verify (or the equivalent outcomes defined in
   the report).
6. A professional report covers scope, methodology, summary, findings/evidence, severity,
   recommendations, retest status, limitations, and conclusion.
