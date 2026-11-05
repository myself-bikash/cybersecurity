# Phase 10: Defensive Security and SOC

## Phase objective

Develop foundational skills for monitoring systems, collecting and analyzing logs, investigating
alerts, using SIEM and endpoint telemetry, applying threat intelligence, and following incident
response processes.

## Lessons

1. [SOC fundamentals](01-soc-fundamentals.md)
2. [Security monitoring and logs](02-security-monitoring-and-logs.md)
3. [SIEM fundamentals](03-siem-fundamentals.md)
4. [Endpoint detection](04-endpoint-detection.md)
5. [Threat intelligence and hunting](05-threat-intelligence-and-hunting.md)
6. [Incident response](06-incident-response.md)
7. [Home SOC lab project](07-home-soc-project.md)
8. [Final revision and progress](08-final-revision.md)

## Progress checklist

- [ ] Explain SOC roles, triage, classification, and escalation.
- [ ] Identify common Windows, Linux, network, firewall, DNS, authentication, and endpoint logs.
- [ ] Describe SIEM collection, normalization, correlation, alerting, and dashboards.
- [ ] Distinguish antivirus, EDR, XDR, IOC, and IOA.
- [ ] Use threat intelligence and MITRE ATT&CK at a defensive level.
- [ ] Follow the six incident-response stages.
- [ ] Complete the home SOC project using isolated systems and safe test events.

## Safe practice and source notes

Use synthetic data, your own systems, or isolated virtual machines. Keep monitoring dashboards and
management services off public networks. Practical event generation is limited to benign,
non-destructive activity in your own lab; the lessons do not provide attack payloads or procedures.

The PDF contains incomplete webpage-title/domain citations and no separate Phase 10 knowledge-test
question set. The quiz in the final revision page is clearly labeled as course-created.

## Competency checkpoint

Use synthetic events to write a brief triage note containing observations, hypotheses, missing
evidence, and a proportionate next step. Do not call an alert a confirmed incident without support.
