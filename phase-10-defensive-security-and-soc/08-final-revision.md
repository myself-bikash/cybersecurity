# Final Revision and Progress

## SOC investigation workflow

1. **Security event:** system, endpoint, network, or user activity is recorded.
2. **SIEM detection:** a rule identifies a potentially suspicious pattern.
3. **Alert triage:** review context, severity, and reliability.
4. **Investigation:** correlate logs, endpoints, users, and network events.
5. **Classification:** determine whether activity is a false positive, suspicious, or a confirmed incident.
6. **Response and escalation:** contain, escalate, eradicate, and recover as appropriate.
7. **Documentation:** record evidence, findings, and recommendations.

## Important differences

| Concepts | Difference |
| --- | --- |
| SOC vs. SIEM | SOC is the security-operations function; SIEM is a technology it may use. |
| Log vs. alert | A log records an event; an alert identifies potentially suspicious activity. |
| SIEM vs. EDR | SIEM analyzes events from multiple sources; EDR focuses on endpoint detection and response. |
| EDR vs. XDR | EDR focuses on endpoints; XDR correlates information across multiple domains. |
| IOC vs. IOA | IOC is observable evidence; IOA is suspicious behavior. |
| Threat intelligence vs. hunting | Intelligence provides analyzed threat information; hunting proactively searches for threats. |
| Threat hunting vs. detection engineering | Hunting investigates possible threats; detection engineering builds repeatable detection logic. |
| False positive vs. false negative | A false positive flags legitimate activity; a false negative misses malicious activity. |
| Containment vs. eradication | Containment limits damage; eradication removes the threat and its cause. |
| Recovery vs. lessons learned | Recovery restores operations; lessons learned improves future security. |

## Important definitions

| Term | Definition |
| --- | --- |
| SOC | Centralized security function responsible for monitoring and responding to threats. |
| SOC analyst | Professional who investigates alerts and monitors systems. |
| Alert triage | Initial examination and prioritization of security alerts. |
| Security monitoring | Continuous observation of systems and networks for threats. |
| Log | Record of an event in a system or application. |
| Endpoint telemetry | Security-related activity data collected from endpoint devices. |
| SIEM | Platform that collects and analyzes security events from multiple sources. |
| Log collection | Gathering logs from different systems. |
| Log normalization | Converting different log formats into a consistent structure. |
| Correlation rule | Logic that connects related events to identify suspicious activity. |
| Threat hunting | Proactive search for threats that may not have triggered alerts. |
| Antivirus | Software that detects and blocks malicious programs. |
| EDR | Endpoint Detection and Response. |
| XDR | Extended Detection and Response. |
| Sysmon | Windows system-monitoring service that records detailed activity. |
| Threat intelligence | Analyzed information about cybersecurity threats. |
| IOC | Indicator of Compromise. |
| IOA | Indicator of Attack. |
| Threat feed | Updated source of threat-related information. |
| MITRE ATT&CK | Knowledge base of adversary tactics and techniques. |
| Detection engineering | Development and improvement of security detection rules. |
| Incident response | Organized process of investigating and managing security incidents. |
| False positive | Legitimate activity incorrectly identified as suspicious. |
| False negative | Malicious activity that a detection system fails to identify. |
| Containment | Limiting the spread or impact of an incident. |
| Eradication | Removing the attacker's presence and underlying cause. |
| Recovery | Restoring affected systems and services. |
| Root-cause analysis | Identifying the underlying reason an incident occurred. |

## Course-created knowledge check

The PDF does not provide a Phase 10 question set. This course-created quiz checks understanding of
the covered material and is not represented as the original PDF assessment.

1. What is the primary purpose of a SOC?
   - A. Design every application in an organization
   - B. Monitor, detect, investigate, and coordinate response to threats
   - C. Replace all network controls
   - D. Store every user password
2. Which responsibility is most typical of an L1 analyst?
   - A. Initial alert triage and escalation
   - B. Approving all organizational budgets
   - C. Replacing the incident-response plan
   - D. Disabling all security alerts
3. What is the best interpretation of a security alert?
   - A. A confirmed incident
   - B. A notification that needs context and investigation
   - C. Proof that a user is malicious
   - D. A replacement for logs
4. What is a log?
   - A. A record of an event
   - B. A network firewall
   - C. A severity score
   - D. An incident-response stage
5. Which Windows Event ID denotes a successful logon in the source?
   - A. 4624
   - B. 4625
   - C. 4740
   - D. 1102
6. What does `journalctl` read?
   - A. Systemd journal entries
   - B. Windows Registry data
   - C. DNSSEC keys
   - D. SIEM detection rules
7. What is log normalization?
   - A. Deleting all log records
   - B. Converting different log formats into a consistent structure
   - C. Turning an alert into a confirmed incident
   - D. Encrypting every endpoint
8. What does a correlation rule do?
   - A. Connects related events to identify suspicious patterns
   - B. Replaces all data sources
   - C. Guarantees that an alert is malicious
   - D. Removes false positives automatically
9. What best describes threat hunting?
   - A. Waiting only for alerts
   - B. Proactively searching for threats that may not have triggered alerts
   - C. A type of backup
   - D. A method for normalizing logs
10. Which capability is most associated with EDR?
    - A. Endpoint activity monitoring and response
    - B. Domain registration
    - C. Email delivery
    - D. Replacing authentication logs
11. How does XDR extend endpoint-focused monitoring?
    - A. It correlates information across multiple security domains
    - B. It records only one endpoint's CPU usage
    - C. It eliminates the need for incident response
    - D. It encrypts all network traffic
12. What is Sysmon?
    - A. A Windows service that records detailed system activity
    - B. A SIEM product that replaces all other tools
    - C. A threat-feed format
    - D. A Linux firewall
13. What is the difference between an IOC and an IOA?
    - A. IOC is observable evidence; IOA is suspicious behavior
    - B. IOC is a dashboard; IOA is a log collector
    - C. IOC is a false positive; IOA is a false negative
    - D. There is no difference
14. In MITRE ATT&CK, what does a tactic describe?
    - A. An adversary's objective
    - B. A SIEM log format
    - C. A firewall rule
    - D. A backup schedule
15. Which sequence best describes detection engineering?
    - A. Identify telemetry, define logic, test, deploy, and improve
    - B. Delete logs, close alerts, and stop monitoring
    - C. Collect passwords and share them
    - D. Replace all event sources with one dashboard
16. What is the first stage in the incident-response lifecycle?
    - A. Recovery
    - B. Eradication
    - C. Preparation
    - D. Lessons learned
17. What does containment do?
    - A. Limits the spread or impact of an incident
    - B. Restores every system
    - C. Determines a CVSS score
    - D. Converts a log into an alert
18. What is a false negative?
    - A. Legitimate activity incorrectly flagged
    - B. Malicious activity not identified by a detection system
    - C. An event that was normalized
    - D. A confirmed recovery action

### Answer key

1. B — A SOC coordinates monitoring, detection, investigation, and response.
2. A — L1 work commonly starts with triage and escalation.
3. B — An alert is a signal to investigate, not proof.
4. A — A log records an event in a system or application.
5. A — Event 4624 records successful logon.
6. A — `journalctl` reads systemd journal entries.
7. B — Normalization maps different formats to a common structure.
8. A — Correlation relates events to identify a pattern.
9. B — Hunting proactively searches beyond existing alerts.
10. A — EDR focuses on endpoint telemetry and response.
11. A — XDR correlates data across security domains.
12. A — Sysmon records detailed Windows activity for later analysis.
13. A — IOCs are artifacts; IOAs are behavior patterns.
14. A — ATT&CK tactics describe adversary objectives.
15. A — Detection engineering defines telemetry and logic, tests it, deploys, and improves it.
16. C — Preparation establishes people, plans, controls, and procedures before an incident.
17. A — Containment limits impact or spread.
18. B — A false negative is malicious activity the detection failed to identify.

## Practical review

1. Use a short synthetic event set containing a failed login, a successful login, and an endpoint
   alert.
2. Build a timeline and mark each item as raw event, detection, or analyst conclusion.
3. List missing context, one benign explanation, and the escalation threshold.
4. Propose one detection improvement and one privacy-safe reporting practice.

**Deliverable:** a one-page triage memo with timeline, evidence gaps, decision rationale, and
recommended detection improvement.

## Practical skills checklist

- [ ] Explain how a SOC operates.
- [ ] Explain L1, L2, and L3 analyst responsibilities.
- [ ] Investigate a synthetic failed-login alert.
- [ ] Read Windows Event Logs.
- [ ] Read Linux authentication and system logs.
- [ ] Understand firewall and DNS logs.
- [ ] Explain endpoint telemetry.
- [ ] Explain SIEM architecture.
- [ ] Understand log collection and normalization.
- [ ] Create a basic correlation-rule design.
- [ ] Navigate a SIEM dashboard.
- [ ] Explain antivirus, EDR, and XDR.
- [ ] Investigate synthetic Sysmon events.
- [ ] Understand IOC and IOA.
- [ ] Map observed behavior to MITRE ATT&CK.
- [ ] Perform a hypothesis-driven threat hunt on synthetic data.
- [ ] Create and test a detection rule with benign activity.
- [ ] Follow all six incident-response stages.
- [ ] Configure Wazuh in an isolated lab.
- [ ] Collect logs from Windows and Linux.
- [ ] Investigate a simulated incident.
- [ ] Prepare a professional incident report.

## Recommended learning order

| Order | Skill | Priority |
| --- | --- | --- |
| 1 | SOC fundamentals | Essential |
| 2 | Windows and Linux logs | Essential |
| 3 | SIEM fundamentals | Essential |
| 4 | Wazuh practical implementation | Essential |
| 5 | Sysmon and endpoint telemetry | High |
| 6 | Detection rules and correlation | High |
| 7 | MITRE ATT&CK | High |
| 8 | Threat hunting | High |
| 9 | Incident response | Essential |
| 10 | Splunk, Elastic, Microsoft Sentinel | Additional platform experience |

Learn one SIEM platform well before trying to master several simultaneously.
