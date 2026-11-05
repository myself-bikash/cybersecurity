# Security Monitoring and Incident Detection

## Learning objectives

- Explain what Sysmon records and identify source-listed event IDs.
- Describe Wazuh, Splunk, Elastic Security, and SIEM concepts.
- Compare monitoring platforms by purpose and components.
- Investigate sample logs and alerts without touching systems outside your lab.

## Sysmon

**Sysmon (System Monitor)** is a Windows system service and device driver from Microsoft
Sysinternals that records detailed system activity in Windows event logs. It supports endpoint
investigation, monitoring, threat detection, and threat hunting.

| Event ID | Description in the source |
| --- | --- |
| 1 | Process creation. |
| 3 | Network connection. |
| 5 | Process termination. |
| 7 | Image loaded. |
| 10 | Process access. |
| 11 | File creation. |
| 12–14 | Registry events. |
| 22 | DNS query. |

Generated events depend on Sysmon configuration.

**Practical exercise:** In a Windows lab VM, install Sysmon using a suitable training configuration,
review its operational logs in Event Viewer, identify process-creation events and recorded
connections, and investigate an unusual event from the sample data.

## Wazuh

**Wazuh** is an open-source security platform for monitoring, threat and vulnerability detection,
file-integrity monitoring, and security compliance.

| Component | Purpose |
| --- | --- |
| Wazuh Agent | Collects security information from monitored endpoints. |
| Wazuh Server | Receives and analyzes agent data. |
| Wazuh Indexer | Stores and indexes information for search and analysis. |
| Wazuh Dashboard | Displays alerts, events, and security information. |

Features listed in the source include Security Configuration Assessment, File Integrity Monitoring,
Vulnerability Detection, Log Data Analysis, Security Event Detection, and Compliance Monitoring.

**Practical exercise:** In a lab, connect a Linux or Windows test machine, verify agent communication,
review collected events and integrity alerts, and investigate a sample alert.

## Splunk and SIEM

**Splunk** collects, searches, analyzes, and visualizes machine-generated data such as logs and
security events. Splunk Enterprise Security provides SIEM capabilities.

**Security Information and Event Management (SIEM)** collects, centralizes, analyzes, and
correlates security information from different systems to help identify suspicious activity.

| Splunk concept | Meaning |
| --- | --- |
| Event | Recorded activity or occurrence. |
| Log | Record of system or application activity. |
| Index | Storage structure for organizing ingested data. |
| Search Processing Language (SPL) | Language used to search and analyze data in Splunk. |
| Dashboard | Visual representation of selected information and results. |
| Alert | Notification generated when defined conditions are met. |

Source-listed uses: centralized log collection, event search, system-activity monitoring, pattern
detection, incident investigation, dashboards, and reports.

**Practical exercise:** Use a training environment and sample logs to search failed logins, identify
unusual activity, create a simple dashboard and test alert, and write an investigation report.

## Elastic Security

**Elastic Security** is a security solution built on the Elastic Stack for monitoring, detection,
investigation, and response.

| Component | Purpose |
| --- | --- |
| Elasticsearch | Distributed search and analytics engine for storing and searching data. |
| Logstash | Data-processing pipeline for collecting and transforming data. |
| Kibana | Interface for search, analysis, and visualization. |
| Elastic Agent | Collects and forwards data from endpoints and other sources. |

Uses listed in the source include event monitoring, threat detection, log analysis, endpoint
security, investigations, alert management, and security dashboards. Its exercise uses a training
environment to examine alerts and timelines, investigate process/network activity, identify
suspicious events, and document the investigation.

## Platform comparison

| Tool | Main focus | Typical use in the source |
| --- | --- | --- |
| Wazuh | Open-source security monitoring and detection. | Endpoint monitoring and security operations. |
| Splunk | Data analytics and SIEM. | Enterprise log analysis and security monitoring. |
| Elastic Security | Security analytics and detection. | Threat detection and investigation. |

These products overlap but are not identical; licensing, architecture, integrations, deployment,
and features differ.

## Key takeaways

- Sysmon records endpoint telemetry; event generation depends on configuration.
- Wazuh, Splunk, and Elastic Security collect and analyze security information with different
  architectures and capabilities.
- SIEM correlates information from different systems to help identify suspicious activity.
- Alerts are leads to investigate, not proof by themselves.

## Revision questions

1. What does Sysmon record, and which source-listed event IDs are useful examples?
2. What are the four Wazuh components?
3. What is SIEM?
4. What do Event, Log, Index, SPL, Dashboard, and Alert mean in Splunk?
5. What are the main Elastic Stack components named in the source?
6. How do Wazuh, Splunk, and Elastic Security compare?
