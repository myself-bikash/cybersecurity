# Home SOC Lab Project

## Project objectives

- Build a small, isolated monitoring environment.
- Collect Windows and Linux events and review them in a SIEM.
- Generate benign test events, investigate alerts, and document findings.
- Create and assess basic detections without running malicious software or targeting third parties.

## Safety and authorization

Use virtual machines on an isolated virtual network. Do not expose the SIEM dashboard, agent
management, or lab services to the public internet. Use synthetic accounts and data. Avoid
malware, exploit payloads, and attack tooling; the project can be completed using benign test events
or supplied synthetic logs.

## 1. Lab architecture

| Component | Purpose |
| --- | --- |
| Wazuh server | Central log collection, analysis, and alerting. |
| Windows VM | Generates Windows security events. |
| Linux VM | Generates Linux system and authentication events. |
| SOC dashboard | Displays alerts and supports investigation. |
| Kali Linux VM | Listed by the source for controlled security testing; optional and not required for the defensive exercises here. |

The source suggests VirtualBox or VMware, Wazuh, Windows 10/11 evaluation media, Ubuntu Server,
Sysmon, and Wireshark. Follow their official documentation for installation; the PDF's external
references are incomplete.

The source's example notes that running a SIEM and multiple endpoints can be resource-intensive.
Start with the Wazuh server and one endpoint, run only the machines needed for an exercise, and
scale to the host computer's available memory and CPU.

The source's example planning table allocates 4–6 GB to a Wazuh server, 4 GB to a Windows
endpoint, 1–2 GB to an Ubuntu endpoint, and the remaining memory to the host operating system.
These are source-specific planning estimates; actual requirements depend on software versions,
event volume, and the host.

## 2. Build sequence

1. Select a virtualization platform.
2. Create an isolated virtual network.
3. Install an Ubuntu Server VM.
4. Deploy Wazuh using its maintained documentation.
5. Add a Wazuh agent to the Linux VM.
6. Create a Windows VM.
7. Add a Wazuh agent to Windows.
8. Configure Windows event collection.
9. Add Sysmon telemetry if appropriate.
10. Generate benign test events or use supplied synthetic logs.
11. Investigate events and alerts in the dashboard.

## 3. Collect Windows and Linux logs

### Windows

Use Event Viewer → Windows Logs → Security to inspect successful and failed logons, process
creation when enabled, user creation, and account lockout events. The source lists Event IDs 4624,
4625, 4688, 4720, and 4740. Forward only the relevant lab events to Wazuh and verify that the
event details appear.

### Linux

Review system and authentication logs using the system's configured logging service. Log locations
vary. Generate only benign, controlled activity on a test account or use synthetic records; avoid
repeated login attempts that could trigger account lockout.

For each event, identify its source, timestamp, user, event type, and outcome.

The source's expected outcome is that you can identify a monitored endpoint, locate its generated
alerts, inspect event details, and explain why an alert was or was not generated.

## 4. Configure Wazuh and investigate events

The source's configuration objectives include:

- Wazuh server and dashboard.
- Windows and Linux agents.
- Security event collection.
- File-integrity monitoring.
- Vulnerability detection.
- Alert investigation.

Review events such as authentication failures, new accounts, monitored-file changes, service
changes, process telemetry, and known software weaknesses. An event does not automatically create
an alert; alerting depends on configured detection rules.

## 5. Generate safe test events

Use only your own lab:

| Test event | Expected observation |
| --- | --- |
| Controlled test-account login failure | Authentication-failure event. |
| Test-account successful login | Successful-authentication event. |
| Create a test user | Account-creation event. |
| Modify a monitored test file | File-integrity event. |
| Start or stop a test service | Service-related event. |
| Run a benign test process | Process telemetry, if configured. |

For Windows, the source recommends Sysmon and Windows auditing for visibility. For Linux, it
names systemd journal and authentication logs. Not every event should create an alert; logging and
detection are separate functions.

## 6. Create detection rules

Detection rules identify conditions that warrant investigation. The source gives these example
ideas:

| Detection idea | Condition to review |
| --- | --- |
| Repeated failed logins | One account exceeds a configured threshold within a time window; the source's example uses 10 failures in 5 minutes. |
| Unexpected privileged account | A new privileged account appears. |
| Suspicious process relationship | An unusual child process starts from an unexpected parent. |
| Important file change | A monitored sensitive file changes unexpectedly. |

These are illustrative ideas, not ready-to-deploy rules. Actual syntax and thresholds depend on
the SIEM, event fields, logging configuration, expected activity, and false-positive rates.

### Detection-engineering checklist

- Identify the data source.
- Identify the relevant event.
- Define the suspicious condition.
- Write the detection logic.
- Test against benign or synthetic activity.
- Confirm whether the rule triggers.
- Review false positives and false negatives.
- Improve and document the rule.

## 7. Investigate a simulated incident

Use a synthetic scenario with a workstation timeline:

| Time | Synthetic event |
| --- | --- |
| 10:00 | Multiple failed logins. |
| 10:05 | Successful login. |
| 10:07 | Unexpected process event. |
| 10:09 | Unusual outbound connection. |
| 10:12 | Unexpected file modification. |

Questions for the analyst:

1. Which test account and workstation were involved?
2. Did a failed login sequence precede a successful login?
3. Which process was recorded?
4. What parent process and user are recorded?
5. What destination appears in the sanitized network event?
6. Which test files changed?
7. Is there enough evidence to classify an incident?
8. What should be contained?
9. What additional evidence should be preserved?
10. What recovery and prevention actions should be documented?

### Final report format

| Section | Required information |
| --- | --- |
| Incident summary | What happened. |
| Detection source | Which tool or rule generated the alert. |
| Timeline | Events in chronological order. |
| Affected assets | Systems and test accounts involved. |
| Evidence | Relevant sanitized logs and telemetry. |
| Analysis | What the evidence indicates and what remains uncertain. |
| Severity | Impact and urgency, with rationale. |
| Containment | Approved actions to limit damage. |
| Eradication | Removal of malicious activity or root cause, if confirmed. |
| Recovery | Safe restoration steps. |
| Recommendations | Improvements to prevent recurrence. |

## Project deliverables

- [ ] Isolated lab diagram and scope.
- [ ] Wazuh server and dashboard overview.
- [ ] Windows and Linux log-collection evidence.
- [ ] Safe test-event records.
- [ ] Detection-rule design and test results.
- [ ] Synthetic incident timeline and investigation.
- [ ] Sanitized incident report.
- [ ] Lessons learned and detection improvements.

## Key takeaways

- A useful home SOC lab emphasizes telemetry, investigation, and documentation—not attack
  execution.
- Event collection, detection, alerting, and incident confirmation are separate steps.
- Synthetic data and benign events are sufficient to practice correlation and response.
- Keep dashboards and management services isolated from public networks.

## Project review questions

1. Which components are required for your smallest useful lab?
2. Which log sources does Wazuh receive?
3. How do you know whether an event was collected and whether a detection fired?
4. What context is needed before escalating a failed-login alert?
5. How will you protect privacy and preserve evidence in your report?
