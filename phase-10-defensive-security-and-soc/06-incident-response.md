# Incident Response

## Learning objectives

- Explain incident response and its six lifecycle stages.
- Distinguish containment, eradication, recovery, and lessons learned.
- Describe false positives, false negatives, and root-cause analysis.
- Apply a response workflow to a synthetic incident while preserving evidence.

## 1. What is incident response?

**Incident response** is the organized process of identifying, containing, investigating, and
recovering from cybersecurity incidents. Examples include ransomware, data breaches, compromised
accounts, malware infections, unauthorized server access, and suspicious data transfers.

The goal is to reduce damage, restore normal operations, and prevent similar incidents. Follow
organizational policy and coordinate disruptive actions with system owners and incident
responders.

## 2. Incident-response lifecycle

| Stage | Purpose and example activities |
| --- | --- |
| Preparation | Establish plans, roles, monitoring, backups, contacts, exercises, and evidence-handling procedures. |
| Identification | Review alerts and logs, examine affected systems, assess scope, and determine whether an incident occurred. |
| Containment | Limit impact or spread; options may include isolating an endpoint, disabling a compromised account, blocking malicious communication, restricting affected services, or applying temporary access restrictions. |
| Eradication | Remove malicious activity and underlying causes; address malware, unauthorized accounts, vulnerabilities, compromised credentials, or insecure configuration. |
| Recovery | Restore clean data and systems, reconnect safely, monitor for recurrence, and verify integrity and service operation. |
| Lessons learned | Review what happened, what controls worked or failed, detection time, and improvements needed. |

Containment must be planned carefully. Disconnecting or shutting down a system can destroy volatile
evidence or disrupt critical services.

Lessons-learned reviews may ask how access began, which systems were affected, which controls
worked, what was missed, how long detection took, and how recurrence can be prevented.

## 3. Ransomware response example

The source's example lifecycle:

| Stage | Example action |
| --- | --- |
| Preparation | Response plan and backups are available. |
| Identification | EDR detects suspicious file changes. |
| Containment | Isolate the affected workstation under the response plan. |
| Eradication | Remove malicious software and address the entry point. |
| Recovery | Rebuild the workstation and restore clean data. |
| Lessons learned | Improve email security, endpoint controls, and backup procedures. |

This is a defensive scenario, not an instruction to create or run ransomware.

## 4. SOC investigation workflow

1. **Security event:** system, endpoint, network, or user activity is recorded.
2. **SIEM detection:** a rule identifies a potentially suspicious pattern.
3. **Alert triage:** review context, severity, and reliability.
4. **Investigation:** correlate logs, endpoints, users, and network events.
5. **Classification:** determine whether it is a false positive, suspicious activity, or confirmed incident.
6. **Response and escalation:** contain, escalate, eradicate, and recover as appropriate.
7. **Documentation:** record evidence, findings, and recommendations.

## Important terms

| Term | Definition |
| --- | --- |
| False positive | Legitimate activity incorrectly identified as suspicious. |
| False negative | Malicious activity that a detection system fails to identify. |
| Containment | Limiting the impact or spread of an incident. |
| Eradication | Removing the attacker's presence and underlying cause. |
| Recovery | Restoring affected systems and operations. |
| Root-cause analysis | Identifying the underlying reason an incident occurred. |

| Comparison | Difference |
| --- | --- |
| Containment vs. eradication | Containment limits damage; eradication removes the threat and its cause. |
| Recovery vs. lessons learned | Recovery restores operations; lessons learned improves future security. |
| False positive vs. false negative | A false positive flags legitimate activity; a false negative misses malicious activity. |

## Practical exercise

Use a synthetic incident timeline with an unusual sign-in, an endpoint alert, a network event, and
a file change. Identify what is known, what remains uncertain, which evidence should be preserved,
and which response stage applies. Write a short incident report without using real credentials or
personal data.

<details class="scenario-card">
<summary>Quick check: an alert arrives during business hours</summary>

A synthetic endpoint alert appears on a shared workstation used for an important service. You do
not yet know whether it is a false positive, and isolating the device could interrupt that service.
What are your first response considerations?

<details>
<summary>Check your reasoning</summary>

Follow the response plan, verify the alert and scope, preserve relevant evidence, and coordinate
with the system owner and incident lead. Containment may be appropriate, but its impact and
approval path matter. The alert alone does not confirm an incident; do not take a disruptive action
outside your authority.

</details>
</details>

## Key takeaways

- Incident response uses six stages: preparation, identification, containment, eradication,
  recovery, and lessons learned.
- Containment can affect services or evidence; follow policy and coordinate decisions.
- Evidence, timeline, scope, and root cause should be documented.
- False positives and false negatives describe different detection errors.

## Revision questions

1. Name the six incident-response stages in order.
2. How do containment and eradication differ?
3. Why might shutting down a system harm an investigation?
4. What information should a response report contain?
5. How do false positives and false negatives differ?
6. What is the purpose of lessons learned?
