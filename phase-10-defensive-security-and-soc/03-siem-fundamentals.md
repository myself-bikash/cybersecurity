# SIEM Fundamentals

## Learning objectives

- Explain what SIEM does and why organizations centralize event data.
- Describe log collection, normalization, storage, correlation, detection, and alerting.
- Distinguish an event, detection rule, alert, dashboard, and threat hunt.
- Compare the SIEM tools named in the source.

## 1. What is SIEM?

**SIEM** stands for Security Information and Event Management. A SIEM collects security logs from
different systems, analyzes and correlates events, identifies patterns that may be suspicious, and
generates alerts for investigation.

Organizations may have many computers, servers, firewalls, accounts, cloud services, and
applications producing logs. A SIEM centralizes data so analysts can investigate across sources
rather than checking every log independently.

## 2. SIEM architecture

| Component | Purpose |
| --- | --- |
| Log sources | Generate event data. |
| Log collectors | Gather events from systems. |
| Ingestion pipeline | Receives and processes events. |
| Normalization | Converts events into a consistent structure. |
| Storage | Makes event data searchable. |
| Correlation engine | Identifies relationships between events. |
| Detection rules | Identify patterns that may be suspicious. |
| Dashboards | Present security information. |
| Alerting | Notifies analysts about potential threats. |

## 3. Log collection and normalization

**Log collection** gathers events from Windows and Linux systems, firewalls, routers, DNS servers,
applications, cloud services, and endpoint protection.

| Collection approach | Description |
| --- | --- |
| Agent-based | An agent runs on the monitored system and forwards relevant events. |
| Agentless | Logs are collected without installing a dedicated agent on every system, such as through syslog, APIs, or Windows event forwarding. |
| Cloud-based | Cloud services send events through supported integrations, APIs, or connectors. |

**Log normalization** converts different event formats into a consistent structure so analysts and
rules can search and correlate them consistently.

| Source field example | Normalized concept |
| --- | --- |
| Event identifier | Event category/action. |
| Account name | User name. |
| Success/failure field | Event outcome. |
| Source address | Source IP. |

The source's example normalized event represents a failed authentication event with a user,
outcome, and source. Real values should be treated as sensitive and sanitized before sharing.

Illustrative normalized shape:

```json
{
  "event.category": "authentication",
  "event.action": "login",
  "user.name": "[test account]",
  "event.outcome": "failure",
  "source.ip": "[sanitized lab source]"
}
```

## 4. Correlation rules and alerts

A **correlation rule** connects related events. For example, multiple failed logins followed by a
successful login, an unfamiliar source, or unusual administrative activity may warrant
investigation.

Illustrative detection logic from the source:

```text
IF
  failed_login_count >= configured threshold
  AND a successful login occurs shortly afterward
THEN
  create a suspicious-login alert for analyst review
```

The source uses a threshold of ten failed attempts as an example; this is not a universal setting.
Production detections should account for time windows, account type, source context, expected
behavior, and false positives.

An **alert** is a notification generated when a rule or analytic identifies suspicious activity.
An alert is not automatically a confirmed incident.

## 5. Dashboards and threat hunting

Dashboards may display alert counts, failed and successful logins, high-severity incidents, source
addresses, malware detections, endpoint health, and network trends.

**Threat hunting** proactively searches systems and data for suspicious activity that may not have
triggered an existing alert. The hunter develops a hypothesis, identifies relevant logs and
telemetry, searches for patterns, documents evidence or a reason to reject the hypothesis, and
improves detection where appropriate. The next lesson discusses this practice in more detail.

## 6. SIEM tools named in the source

| Tool | Source-described purpose |
| --- | --- |
| Splunk | Collects, searches, analyzes, and visualizes machine-generated data; Enterprise Security adds SIEM capabilities. |
| Elastic Security | Uses the Elastic Stack for log analysis, detection, investigation, and monitoring. |
| Wazuh | Provides log analysis, endpoint monitoring, file-integrity monitoring, vulnerability detection, and security-configuration assessment. |
| Microsoft Sentinel | Cloud-native SIEM and security-operations platform for collection, detection, investigation, and response workflows. |

Learn one platform well before comparing several. Follow the vendor's official documentation for
installation and sizing; the source's external references are incomplete.

## Important differences

| Term | Meaning |
| --- | --- |
| Log collection | Gathering event records. |
| Log normalization | Converting records to a consistent structure. |
| Correlation | Connecting related events. |
| Detection rule | Logic that identifies suspicious activity. |
| Alert | Notification of potentially suspicious activity. |
| Dashboard | Visual representation of security information. |
| Threat hunting | Proactive search for threats. |

## Practical exercise

1. Select synthetic authentication events with timestamps and outcomes.
2. Normalize them into a table with consistent fields.
3. Write an illustrative correlation rule and identify one benign explanation.
4. List the data sources and context an analyst needs before escalating an alert.

**Deliverable:** a normalized event table, one plain-language correlation rule with its needed
fields/time window, and a brief false-positive/context note.

## Key takeaways

- SIEM centralizes event data and supports searching, correlation, alerting, and investigation.
- Collection, normalization, correlation, detection, and alerting are distinct stages.
- Thresholds and rules require tuning; an alert is not automatically an incident.
- Threat hunting is proactive investigation and can improve detections.

## Revision questions

1. What does SIEM stand for?
2. Name six components of a SIEM architecture.
3. How do agent-based, agentless, and cloud-based collection differ?
4. What is log normalization?
5. How does correlation differ from a detection rule?
6. Why should a SIEM alert be investigated before classification?
7. How do threat hunting and alert-driven investigation differ?

### Answer key

1. Security Information and Event Management; the name describes collecting and analyzing security
   event data.
2. Examples: sources, collectors, ingestion, normalization, storage, correlation, rules, dashboards,
   and alerting.
3. Agent-based collection uses software on a host; agentless collection uses forwarding/API
   mechanisms; cloud collection uses service integrations or connectors.
4. Normalization maps different source formats into a consistent structure for search and analysis.
5. Correlation relates events; a detection rule specifies logic for identifying a suspicious
   condition, often using correlated events.
6. A rule can lack context or produce false positives; analysts must validate the activity before
   classifying it.
7. Hunting proactively tests a hypothesis without requiring an alert; alert-driven investigation
   starts from a detection notification.
