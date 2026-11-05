# Advanced Network Security

## Learning objectives

- Explain network intrusion detection and network-forensics workflows.
- Identify defensive indicators of lateral movement.
- Compare traditional and modern network access architectures.
- Describe Zero Trust principles and their components.
- Select appropriate monitoring and analysis tools for an authorized lab.

## 1. Network intrusion detection

**Network intrusion detection** monitors network traffic or metadata to identify suspicious
connections, attack patterns, and unauthorized activity. It can reveal activity not visible through
endpoint monitoring alone.

The source lists detection objectives such as identifying unusual connection patterns, suspicious
DNS, malware communication, unauthorized connections, unusual data transfers, and
command-and-control communication.

Typical defensive workflow:

1. Sensors collect traffic or metadata.
2. Detection engines analyze the data.
3. Suspicious patterns create alerts.
4. Analysts investigate and validate the alert.
5. The team responds to confirmed threats.

The source names Zeek, Suricata, Snort, and Wireshark. Detection results require investigation and
context; a pattern or alert is not automatically a confirmed incident.

## 2. Network forensics

**Network forensics** collects, preserves, examines, and analyzes network evidence to investigate
incidents and reconstruct events.

Evidence may include packet captures, firewall logs, DNS records, proxy logs, network-flow records,
VPN logs, IDS/IPS alerts, and server connection logs.

### Investigation process

1. Identify the incident and relevant evidence.
2. Collect available network data.
3. Preserve it against alteration.
4. Examine relevant information.
5. Analyze and reconstruct events.
6. Report findings and conclusions.

| Term | Definition |
| --- | --- |
| PCAP | Recorded collection of network packets. |
| Network flow | Summary of communication between endpoints, often including endpoints, ports, protocol, and volume. |
| Chain of custody | Record of who collected, handled, transferred, and accessed evidence. |
| Timeline analysis | Arranges events chronologically to help reconstruct an incident. |

Tools named in the source include Wireshark, Zeek, tcpdump, NetworkMiner, and Arkime. Preserve
evidence, record handling, and use only data collected under the applicable authorization and
privacy requirements.

## 3. Lateral-movement detection

**Lateral movement** is movement from one compromised system to other systems within a network
to gain additional access. The source describes a high-level scenario in which a compromised
endpoint is followed by attempts to access a file server or administrative workstation.

The PDF names remote-service abuse, credential theft, Pass-the-Hash, Pass-the-Ticket, RDP or SSH
credential abuse, vulnerable internal services, and administrative tools as technique categories.
These are discussed here as defensive detection categories only.

### Indicators to investigate

- Unusual remote logins or administrative activity.
- Authentication from unfamiliar devices.
- Unexpected SMB or RDP connections.
- Abnormal use of remote-administration tools.
- Communication between segments that do not normally interact.
- Multiple failed logins followed by successful access.

**Prevention and detection:** segment networks; apply least privilege; protect privileged
credentials; use MFA; monitor endpoint and authentication activity; restrict remote administration;
deploy EDR; and review network connections.

## 4. Network access architecture

**Network access architecture** defines how users, devices, applications, and services connect and
how their access is controlled. It establishes who and what can connect, which resources are
available, how identity is verified, and how access is monitored.

| Traditional perimeter model | Modern access architecture |
| --- | --- |
| Centers controls on firewalls, VPN gateways, NAC, and internal segmentation. | Combines identity-based access, device checks, segmentation, application controls, and monitoring. |
| May implicitly trust some internal network access. | Uses explicit policy and verification rather than location alone. |

| Technology | Purpose |
| --- | --- |
| NAC | Controls device access. |
| VPN | Provides protected network connectivity. |
| ZTNA | Provides identity- and context-based access to applications. |
| SASE | Combines networking and security services through a cloud-delivered architecture. |
| SD-WAN | Software-defined wide-area networking. |
| 802.1X | Controls network access through port-based authentication. |

## 5. Zero Trust Network Architecture

**Zero Trust** is an architectural approach based on explicit verification rather than implicit
trust from network location. Access decisions may consider identity, device, policy, and context.

### Core principles

- **Verify explicitly:** use available identity and contextual signals.
- **Least privilege:** grant only the access needed for a task.
- **Assume breach:** design for the possibility that part of the environment is compromised.
- **Continuous evaluation:** reassess relevant changes in identity, device state, risk, or policy.

| Component | Purpose |
| --- | --- |
| Policy engine | Decides whether access should be permitted. |
| Policy administrator | Establishes or terminates access. |
| Policy enforcement point | Enforces the access decision. |
| Identity provider | Verifies user identity. |
| Device security | Evaluates device compliance and health. |
| Monitoring | Tracks access and security events. |

For example, access to a cloud database may depend on verified identity, permission, MFA,
compliant device status, resource appropriateness, and current risk. If conditions fail, access can
be denied or restricted.

Zero Trust applies to cloud and hybrid environments, remote workforces, SaaS, and Kubernetes
environments. It is not a single product, firewall, or VPN replacement; it coordinates identity,
device, network, application, and monitoring controls.

## Important comparisons

| Concepts | Main difference |
| --- | --- |
| Firewall vs. IDS | Firewall controls traffic; IDS detects suspicious activity. |
| IDS vs. IPS | IDS detects; IPS can actively block. |
| VPN vs. ZTNA | VPN commonly provides network connectivity; ZTNA provides policy-controlled access to specific resources. |
| NAC vs. firewall | NAC controls which devices may connect; a firewall controls network traffic. |
| Antivirus vs. EDR | Antivirus focuses on malware protection; EDR provides broader endpoint detection and response. |
| Vulnerability vs. patch management | Vulnerability management handles weaknesses broadly; patch management handles software updates. |
| Backup vs. disaster recovery | Backup copies data; disaster recovery restores systems and services. |
| Segmentation vs. microsegmentation | Segmentation divides networks; microsegmentation applies finer-grained workload or application controls. |
| Network monitoring vs. forensics | Monitoring observes ongoing activity; forensics investigates evidence to reconstruct events. |
| Zero Trust vs. traditional perimeter | Zero Trust explicitly evaluates access instead of assuming internal network trust. |

## Tools named in the source

| Tool | Purpose |
| --- | --- |
| Wireshark | Inspect network packets and investigate communications. |
| Nmap | Discover network hosts, ports, and services; use only within an explicitly authorized scope. |
| Suricata | Network intrusion detection and prevention. |
| Zeek | Analyze network activity and produce connection logs. |
| Wazuh | Security monitoring, endpoint visibility, and configuration assessment. |
| Greenbone OpenVAS | Assess systems for known vulnerabilities within an authorized lab. |
| Lynis | Audit Linux security configurations and identify hardening opportunities. |

Tool names do not authorize testing. No commands or procedures for scanning or exploiting systems
are included.

## Practical exercise

Using synthetic network-flow records and security events, identify which events need investigation.
Build a timeline, note what additional evidence is needed, preserve the original sample, and write
a short defensive report. Include a possible segmentation or Zero Trust policy improvement.

## Key takeaways

- Network detection identifies suspicious behavior; network forensics preserves and analyzes
  evidence after an event.
- Lateral-movement detection relies on identity, endpoint, and network context.
- Modern access architectures evaluate identity, device, permissions, and policy rather than
  trusting network location alone.
- Zero Trust is an architecture, not a single product.

## Revision questions

1. What are the steps in the source's network-forensics process?
2. How do PCAP and network-flow records differ?
3. Name four indicators that may warrant a lateral-movement investigation.
4. How does network access architecture affect resource access?
5. What are the four Zero Trust principles in this lesson?
6. Name the Zero Trust policy components and their purposes.
7. How do network monitoring and network forensics differ?
