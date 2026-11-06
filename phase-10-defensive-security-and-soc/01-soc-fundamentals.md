# SOC Fundamentals

## Learning objectives

- Explain what a Security Operations Center does and why organizations use one.
- Describe the main components of a basic SOC architecture.
- Compare L1, L2, and L3 analyst responsibilities.
- Apply alert triage, incident classification, and escalation concepts to a synthetic case.

## 1. What is a SOC?

A **Security Operations Center (SOC)** is a centralized team or function that monitors an
organization's systems, detects cybersecurity threats, investigates security alerts, and
coordinates incident response. Depending on an organization's needs, a SOC may operate
continuously.

Organizations use SOC functions to monitor computers, servers, networks, cloud services, and
applications for malware, ransomware, phishing, credential theft, unauthorized access, data theft,
insider threats, and network attacks.

## 2. SOC architecture

| Component | Purpose |
| --- | --- |
| Data sources | Generate security-related information. |
| Log collectors | Gather logs from different systems. |
| SIEM | Centralizes and analyzes security events. |
| Detection rules | Identify patterns that may be suspicious. |
| Alert management | Organizes and prioritizes alerts. |
| SOC analysts | Investigate suspicious activity. |
| Incident response | Contains and resolves confirmed incidents. |
| Threat intelligence | Provides information about known threats. |

## 3. SOC analyst responsibilities

Common responsibilities include monitoring dashboards, reviewing alerts, investigating suspicious
login attempts, analyzing system and network logs, identifying possible malware activity,
investigating unusual connections, assessing severity and scope, escalating serious incidents,
documenting investigations, and supporting incident response.

| Level | Typical responsibilities |
| --- | --- |
| L1 analyst | Monitor alerts, perform initial triage, identify likely false positives, collect basic evidence, and escalate suspicious incidents. |
| L2 analyst | Investigate complex alerts, analyze endpoint and network activity, correlate events, determine scope, and recommend containment. |
| L3 analyst / threat hunter | Investigate advanced threats, develop detections, perform threat hunting, analyze techniques, and improve monitoring. |

These are common industry conventions, not universal standards. Responsibilities vary by
organization.

## 4. Security monitoring and alert triage

**Security monitoring** continuously observes systems, networks, applications, and user activity
to identify suspicious behavior. Examples include repeated login failures, logins from unusual
locations, unexpected administrator activity, malware alerts, unusual outbound traffic, or
unexpected changes to important files.

**Alert triage** is the initial review of an alert to determine whether it needs more investigation.
For a synthetic alert about repeated failed logins, an analyst may ask:

1. Is the account or source familiar?
2. Did any attempt succeed?
3. Is the account privileged or otherwise sensitive?
4. Are related events present in other logs?
5. Is the behavior expected for this user?

The analyst decides whether to close the alert, investigate further, or escalate it. An alert is not
proof of an incident.

## 5. Incident classification and escalation

Organizations classify incidents according to type, severity, and impact. The source gives these
examples; actual severity definitions vary:

| Classification | Example |
| --- | --- |
| Informational | Routine security event. |
| Low | Suspicious activity with limited impact. |
| Medium | Potential unauthorized access. |
| High | Confirmed compromise of an important endpoint. |
| Critical | Major ransomware incident affecting business operations. |

**Escalation** transfers an alert or incident to a more experienced analyst or response team. A
typical path is L1 triage → L2 investigation → incident-response team when suspicious activity is
confirmed.

## Important definitions

| Term | Definition |
| --- | --- |
| SOC | Centralized security function responsible for monitoring, detecting, investigating, and responding to threats. |
| SOC analyst | Professional who monitors systems and investigates security alerts. |
| Alert triage | Initial evaluation and prioritization of alerts. |
| Incident classification | Categorization of an incident according to type and severity. |
| Escalation | Transfer of an alert or incident to a more appropriate response level. |

## Practical exercise

1. Start with a synthetic failed-login alert for a fictional account and source.
2. List context to verify and at least one possible benign explanation.
3. Identify related logs to review and choose a provisional classification.
4. State what evidence would justify escalation; do not generate login attempts against real accounts.

**Deliverable:** a brief triage note with observed facts, benign explanations, evidence to collect,
provisional severity, and an escalation decision.

## Key takeaways

- A SOC combines data sources, collection, SIEM, detections, analysts, and incident response.
- Analysts validate alert context before classifying activity as an incident.
- L1, L2, and L3 roles are common patterns, not universal job standards.
- Clear escalation and documentation help response teams act consistently.

## Revision questions

1. What is a SOC, and why do organizations use one?
2. Name six components of a basic SOC architecture.
3. How do L1, L2, and L3 responsibilities differ?
4. What is alert triage?
5. Why is a security alert not automatically an incident?
6. How do classification and escalation differ?

### Answer key

1. A SOC is a team or function that monitors, detects, investigates, and coordinates response; it
   gives an organization a coordinated view of security activity.
2. Examples: data sources, collectors, SIEM, detection rules, alert management, analysts, incident
   response, and threat intelligence.
3. L1 triages and escalates; L2 investigates and scopes; L3 handles advanced investigations,
   hunting, and detection improvement.
4. Alert triage is the initial assessment of an alert's relevance, reliability, and priority.
5. Alerts indicate possible suspicious activity; context and corroboration determine whether an
   incident occurred.
6. Classification labels type/severity; escalation transfers work to a more appropriate analyst or
   response team.
