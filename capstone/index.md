# Cumulative Capstone: Juniper Market

Bring the course together through a fictional online retailer, **Juniper Market**. The company sells
outdoor equipment, has a small office network, a Windows identity service, a public storefront, and
a support team. Everything in this project is fictional. Use the supplied scenario and synthetic
records; do not connect to a real company, collect real customer data, or run attacks.

## The situation

Juniper Market's support team reports several unusual events during one afternoon: an employee had
repeated sign-in failures followed by a successful sign-in from an unfamiliar lab workstation; the
storefront logged a request to export an account record; and an administrator noticed that a test
group's access changed. The records are incomplete. You have not established that these events are
related, malicious, or even caused by a single person.

<details class="scenario-card">
<summary>Pause: what do you do first?</summary>

Write down: (1) what is known, (2) what is only a hypothesis, (3) what evidence to preserve, and
(4) who can authorize containment. Avoid changing systems or accusing a user before you have
enough information.

<details>
<summary>Compare your reasoning</summary>

A defensible first response establishes scope and authorization, preserves relevant records, checks
time ranges and system identities, and asks the incident owner to approve any disruptive action.
The three events may be unrelated. Confirm what each log actually records, identify gaps, and
document uncertainty before joining them into a single narrative.

</details>
</details>

## Project loop

Complete milestones in order as you move through the course. You may instead complete the capstone
after Phase 12. Keep one working report and add to it at each milestone.

### Milestone 1 · Understand the business and its assets

**Related phases:** 00–05.

List the storefront, customer records, employee accounts, office devices, backups, and support
processes. For each, describe confidentiality, integrity, and availability needs; identify plausible
threats and business impact. Use illustrative assumptions and label them.

**Save:** a simple asset map and prioritized risk register.

<details class="scenario-card">
<summary>Decision checkpoint: which item do you protect first?</summary>

There is no universal answer without context. Explain the business impact, dependencies, likelihood
evidence, and uncertainty behind your choice. A useful answer names a protective control and how
you would verify it.

</details>

### Milestone 2 · Draw the system and define boundaries

**Related phases:** 01–04.

Draw how a staff browser, storefront, identity service, internal systems, and backup storage
interact. Mark trust boundaries, data flows, and what the diagram does not yet show. Add one
fictional user story and identify the permissions it needs.

**Save:** a labeled architecture/data-flow diagram and a short list of assumptions to validate.

### Milestone 3 · Plan safe assessment and improve design

**Related phases:** 06–09.

Write a scope statement for a hypothetical assessment of a **local training copy** of the
storefront. State what is included, excluded, permitted, and how the work stops. Review a supplied
or fictional finding, explain its root cause and impact, and propose a fix with a safe verification
criterion. No live scanning or exploit reproduction is required.

**Save:** authorization/scope notes, a sanitized finding, and a prioritized remediation plan.

### Milestone 4 · Monitor and triage

**Related phase:** 10.

Use only this synthetic event set:

| Time | Synthetic record |
| --- | --- |
| 14:02 | Three failed sign-ins for a test support account. |
| 14:05 | Successful sign-in for that account from `LAB-WS-02`. |
| 14:09 | Storefront records an account-export request for a synthetic record ID. |
| 14:13 | A test access group is changed; the actor field is present but not yet verified. |

Construct a timeline. Identify the fields you need to correlate these records, plausible benign
explanations, and what would justify escalation. Do not assume the events are linked.

**Save:** a short triage note with facts, hypotheses, missing evidence, and a proposed next step.

<details class="scenario-card">
<summary>Decision checkpoint: is this already a confirmed incident?</summary>

Not from these records alone. They justify review, but do not establish cause, compromise, data
exposure, or who operated the account. State what additional evidence is needed and the criteria
for escalating under the organization's process.

</details>

### Milestone 5 · Preserve and interpret evidence

**Related phase:** 11.

Treat the table above as a fictional log excerpt. Write an evidence inventory that records source,
time range, collector, integrity checks where applicable, and limitations. Separate observations
from interpretations. Do not create or collect real user data.

**Save:** an evidence log, timeline, and one defensible finding with at least one limitation.

### Milestone 6 · Review enterprise identity and controls

**Related phase:** 12.

Draw a small fictional identity model for Juniper Market: departments, test users, security groups,
OUs, and resource permissions. Review where MFA, least privilege, privileged-access controls,
Group Policy, DNS, event monitoring, and recovery practices fit. Use a written design or an isolated
test domain; do not inspect a real directory.

**Save:** an identity/access diagram and a prioritized defensive checklist.

### Milestone 7 · Deliver the investigation and lessons learned

**Related phases:** 00–12.

Combine the earlier artifacts into a concise report:

1. Executive summary and scope.
2. Systems and fictional evidence examined.
3. Timeline, with time assumptions stated.
4. Findings: observation, interpretation, confidence, and limitation.
5. Risk and business impact.
6. Recommended containment or prevention, with approval boundaries.
7. Verification plan and remaining questions.
8. Lessons learned and what you would investigate next.

**Save:** a sanitized portfolio report and a reflection on one assumption you changed after
reviewing evidence.

## Review rubric

Score each area from 0 to 3: **0** = missing or unsupported; **1** = present but unclear;
**2** = supported and understandable; **3** = well-reasoned, scoped, and explicit about uncertainty.

| Area | Look for |
| --- | --- |
| Scope and safety | Clear authorization boundary and use of fictional/synthetic data. |
| Technical reasoning | Accurate connections among assets, identities, systems, and controls. |
| Evidence handling | Sources, timeline assumptions, integrity, and limitations are documented. |
| Communication | Findings separate facts from hypotheses and recommend actionable, safe next steps. |

Use the rubric to identify what to improve, not as a credential or guarantee of readiness.

## Final reflection

- Which conclusion changed when you separated fact from inference?
- Which missing log or control most limited your analysis?
- Which recommendation would you prioritize first, and why?
- What would you need to learn or validate before making a real-world recommendation?

Return to the [course home](../README.md), [course guide](../course-guide.md), or
[progress dashboard](../progress.md).
