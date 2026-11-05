# Infrastructure Risk and Resilience

## Learning objectives

- Explain network segmentation and secure remote access.
- Describe the vulnerability- and patch-management lifecycles.
- Distinguish backup types, RPO, RTO, and disaster recovery.
- Identify infrastructure telemetry and explain the role of SIEM.

## 1. Network segmentation

**Network segmentation** divides a large network into smaller sections with separate access rules.
If employee devices, databases, public servers, guest Wi-Fi, and administrative systems share one
unrestricted network, a compromise may create unnecessary paths to other systems.

| Type | Description |
| --- | --- |
| Physical | Uses separate physical network infrastructure. |
| Logical | Separates traffic using technologies such as VLANs. |
| Subnet | Divides networks into smaller IP address ranges. |
| Microsegmentation | Applies fine-grained controls between workloads, applications, or services. |

Example policy:

| Segment | Example access policy |
| --- | --- |
| Guest Wi-Fi | Internet access only. |
| Employee network | Approved business services. |
| Database network | Connections only from approved application servers. |
| Management network | Authorized administrators. |
| DMZ | Public-facing services with restricted internal access. |

Segmentation can limit lateral movement, reduce incident impact, protect sensitive systems, improve
traffic control and monitoring, and support compliance requirements.

## 2. Secure remote access

**Remote access** lets users or administrators connect to systems from another location.

| Technology | Purpose |
| --- | --- |
| SSH | Secure command-line access. |
| RDP | Remote desktop access. |
| VPN | Protected network connectivity. |
| ZTNA | Identity- and policy-based access to applications. |
| Bastion host | Controlled gateway to internal systems. |

Risks include stolen credentials, exposed remote desktop services, weak passwords, unpatched
remote-access software, excessive permissions, and unauthorized connections.

**Practices:** require MFA and strong authentication; restrict access by identity and device
posture; avoid exposing administrative services directly to the public internet; monitor logins;
apply least privilege; patch remote-access systems; and use approved VPN, ZTNA, or bastion
architectures.

## 3. Vulnerability management

A **vulnerability** is a weakness in software, hardware, configuration, or process that could affect
confidentiality, integrity, or availability. **Vulnerability management** continuously identifies,
assesses, prioritizes, treats, and monitors weaknesses.

### Lifecycle

1. Discover assets and systems.
2. Identify known vulnerabilities.
3. Assess severity and context.
4. Prioritize remediation.
5. Remediate or reduce risk.
6. Verify the issue is addressed.
7. Continue monitoring.

**CVE (Common Vulnerabilities and Exposures)** provides standardized identifiers for publicly
disclosed vulnerabilities. The source gives the form `CVE-2024-XXXX` as a format example.

**CVSS (Common Vulnerability Scoring System)** describes technical severity. The source lists
these severity ranges for CVSS v3.1 and v4.0, while noting that their scoring methods differ:

| Score | Severity |
| --- | --- |
| 0.0 | None |
| 0.1–3.9 | Low |
| 4.0–6.9 | Medium |
| 7.0–8.9 | High |
| 9.0–10.0 | Critical |

The source names Nessus, OpenVAS, Nmap, Qualys, and Greenbone. Use assessment tools only against
assets in scope and with explicit authorization. This lesson does not provide scanning commands or
steps.

## 4. Patch management

**Patch management** identifies, tests, deploys, and verifies software updates that address bugs,
security weaknesses, or stability problems. A **security patch** is an update that addresses a
security weakness.

### Lifecycle

1. Identify affected systems.
2. Review available updates.
3. Assess urgency and compatibility.
4. Test in a suitable environment.
5. Deploy updates.
6. Verify successful installation.
7. Monitor for unexpected problems.

| Update type | Purpose |
| --- | --- |
| Security update | Fixes security weaknesses. |
| Bug fix | Corrects software defects. |
| Feature update | Adds or changes functionality. |
| Firmware update | Updates device firmware. |

Maintain an asset inventory; prioritize urgent vulnerabilities; test important updates before broad
deployment; maintain rollback procedures; track compliance; document exceptions; and avoid leaving
critical systems unpatched.

## 5. Backup and disaster recovery

A **backup** is a separate copy of data used to restore information after deletion, corruption,
hardware failure, or cyberattack. **Disaster recovery** restores IT systems, services, and data
after a major disruption, such as ransomware, server failure, an outage, accidental deletion, or a
natural disaster.

| Backup type | Copies |
| --- | --- |
| Full | All selected data. |
| Incremental | Data changed since the last backup. |
| Differential | Data changed since the last full backup. |

The source's **3-2-1 rule** is three copies of important data, on two types of storage, with one
copy offsite. An additional improvement is an isolated or immutable copy that is difficult to
alter or delete.

| Objective | Definition |
| --- | --- |
| RPO (Recovery Point Objective) | Maximum acceptable amount of data loss, measured in time. |
| RTO (Recovery Time Objective) | Target maximum time to restore a service after disruption. |

For example, an RPO of one hour means the recovery point should be no more than one hour before
the disruption; an RTO of four hours means the service target is restoration within four hours.
These are illustrative values from the source, not universal targets.

**Practices:** schedule backups; encrypt backup data; restrict backup access; maintain offline or
immutable copies; test restoration; document recovery procedures; monitor failures; and define RPO
and RTO requirements.

## 6. Infrastructure monitoring and SIEM

**Infrastructure monitoring** continuously observes systems, servers, networks, applications, and
services to identify performance issues, threats, and disruptions.

| Component | Example telemetry |
| --- | --- |
| Servers | CPU, memory, disk, processes. |
| Network | Traffic, connections, packet loss. |
| Firewall | Allowed and blocked connections. |
| Endpoints | Processes, malware alerts, logins. |
| Applications | Errors, response times, failures. |
| Cloud infrastructure | Access activity and configuration changes. |
| Databases | Queries, availability, unusual access. |
| Authentication | Failed and unusual logins. |

Monitoring may be system, network, security, or log monitoring.

**SIEM (Security Information and Event Management)** collects and analyzes security logs from
multiple sources to help detect suspicious activity. A typical flow is firewall, server, endpoint,
and authentication logs → SIEM collection → correlation and detection → security alerts.

| Tool | Source-described purpose |
| --- | --- |
| Wireshark | Network packet analysis. |
| Zeek | Network security monitoring. |
| Suricata | Network threat detection and prevention. |
| Wazuh | Security monitoring and endpoint detection capabilities. |
| Splunk | Log analysis and security information management. |
| Prometheus | Metrics collection and monitoring. |
| Grafana | Monitoring dashboards and visualization. |

## Practical exercises

Use a written scenario or synthetic data; do not assess systems outside your scope.

1. Draw a segmentation plan for guest, employee, application, database, and management networks.
   Record only necessary permitted communication.
2. Review a sample asset inventory and vulnerability report. Map findings to CVEs where provided,
   explain severity, and prioritize remediation.
3. Create a patch plan for a fictional environment, including test, deployment, verification, and
   rollback considerations.
4. Design a backup plan with full/incremental/differential copies, offsite and isolated copies,
   restoration tests, RPO, and RTO.
5. Given synthetic server, endpoint, firewall, and authentication events, identify which sources a
   SIEM should correlate and what additional context an analyst needs.

## Key takeaways

- Segmentation limits unnecessary communication and reduces incident impact.
- Vulnerability management covers the lifecycle of weaknesses; patch management handles updates.
- CVE identifiers and CVSS scores help describe and prioritize findings.
- Backups are only useful when protected and restoration is tested.
- SIEM correlates logs from multiple sources; an alert is a starting point for investigation.

## Revision questions

1. How do physical, logical, subnet, and microsegmentation differ?
2. How do VPN and ZTNA differ in the source comparison?
3. What are the vulnerability-management lifecycle stages?
4. What do CVE and CVSS represent?
5. How does patch management differ from vulnerability management?
6. How do incremental and differential backups differ?
7. What do RPO and RTO measure?
8. What kinds of events may infrastructure monitoring collect?
