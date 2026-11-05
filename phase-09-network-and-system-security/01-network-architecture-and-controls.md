# Network Architecture and Traffic Controls

## Learning objectives

- Explain network architecture security and its core design principles.
- Describe firewall types and distinguish a firewall from a WAF.
- Compare IDS and IPS and explain common detection approaches.
- Explain how Network Access Control (NAC) evaluates devices and access.
- Review a network-control design without testing an unapproved network.

## 1. Network architecture security

**Network architecture** is the design of how devices, servers, applications, and network
components communicate. A typical environment may contain client computers, servers, routers,
switches, firewalls, wireless access points, network storage, and internet connections.

The source contains a standalone reference fragment titled “DMZ, NAT & PAT” but no accompanying
definitions or explanation. DMZ appears again in the source's segmentation example; NAT and PAT
are recorded as an unresolved source gap rather than expanded from outside material.

**Network architecture security** is the practice of designing and protecting that infrastructure
to reduce unauthorized access, data exposure, and network attacks.

| Component | Purpose |
| --- | --- |
| Router | Connects different networks. |
| Switch | Connects devices within a local network. |
| Firewall | Controls network traffic according to policy. |
| IDS | Detects suspicious activity. |
| IPS | Detects and can block suspicious activity. |
| Access point | Provides wireless network access. |
| Proxy server | Acts as an intermediary for network requests. |
| VPN gateway | Provides protected VPN connectivity. |
| DNS server | Resolves domain names to IP addresses. |

### Design principles

- **Defense in depth:** use multiple security layers rather than relying on one product.
- **Least privilege:** grant users and systems only the access they need.
- **Secure by design:** include security requirements in the architecture from the beginning.
- **Minimize attack surface:** remove unnecessary services, ports, accounts, and connections.

## 2. Firewall architecture

A **firewall** monitors and controls incoming and outgoing network traffic according to defined
security rules. It compares traffic with configured policy; a permitted HTTPS connection or a
blocked unapproved inbound service are examples of policy decisions. The actual decision depends
on the deployed rules.

| Example traffic | Example policy decision |
| --- | --- |
| HTTPS traffic on TCP port 443 | Allow, if required by policy. |
| Unapproved inbound SSH | Block. |
| Traffic from a blocked IP address | Block. |
| Authorized internal DNS requests | Allow. |

| Firewall type | Main function |
| --- | --- |
| Packet filtering | Evaluates packet information such as addresses, ports, and protocol. |
| Stateful | Tracks active connections and uses connection state in decisions. |
| Proxy | Intermediates client/server traffic and can inspect application-level traffic. |
| Next-generation firewall (NGFW) | Combines traditional filtering with capabilities such as application awareness or intrusion prevention. |
| Web application firewall (WAF) | Inspects HTTP/HTTPS traffic to protect web applications. |

| Network firewall | WAF |
| --- | --- |
| Controls network traffic and boundaries. | Focuses on web-application traffic. |
| May filter addresses, ports, and protocols. | Inspects HTTP requests and responses. |
| Helps protect networks and segments. | Helps protect web applications from application-layer risks. |

**Firewall practices:** use default-deny inbound policy where appropriate; permit only required
services; remove unused rules; review policies regularly; log important allowed and blocked
traffic; restrict administration; and keep software and firmware updated.

## 3. Intrusion Detection and Prevention Systems

An **Intrusion Detection System (IDS)** monitors network or system activity to identify potential
intrusions and alert analysts. An **Intrusion Prevention System (IPS)** detects suspicious activity
and can take action to block or prevent it.

| Type | Scope |
| --- | --- |
| NIDS | Network-based detection. |
| HIDS | Host-based detection. |
| NIPS | Network-based prevention. |
| HIPS | Host-based prevention. |

Detection may use:

- **Signature-based detection:** compares activity with known patterns; effective for known
  threats but may miss previously unknown activity.
- **Anomaly-based detection:** identifies behavior that differs from a baseline; can reveal unusual
  activity but may generate false positives.
- **Behavior-based detection:** identifies activity based on behavior patterns.

| IDS | IPS |
| --- | --- |
| Detects and alerts. | Detects and can block, reset, or drop traffic. |
| Commonly used for monitoring. | Commonly deployed inline or with another enforcement point. |

SOC analysts use IDS/IPS alerts to investigate suspicious connections and possible compromised
systems. Alerts require context and validation; they are not proof of an incident by themselves.

## 4. Network Access Control

**Network Access Control (NAC)** controls which devices may connect to an organization's network
and what access they receive. A policy may require a device to have an updated operating system,
active endpoint protection, a firewall, and required security configuration before granting normal
access.

Typical decision flow:

1. A device requests network access.
2. The system identifies the device or user.
3. Device posture may be checked.
4. Policy determines the permitted access.
5. The device receives access or is restricted.

Common components include an authentication server, policy server, network switches/access
points, device-posture assessment, and an enforcement mechanism. The source names IEEE 802.1X,
RADIUS, and EAP as related technologies.

## Practical exercise

Use a diagram or local lab configuration to map one network you own. Identify its routers, switches,
firewall, access points, servers, and endpoints; mark trust boundaries; and document which
connections are required. Propose default-deny rules and a NAC policy for compliant versus
non-compliant devices. Do not probe a real organizational network.

## Key takeaways

- Architecture places security boundaries and determines how systems communicate.
- Firewalls enforce traffic policy; IDS detects; IPS can enforce prevention; NAC evaluates device
  access.
- Defense in depth, least privilege, secure-by-design, and attack-surface reduction are
  foundational.
- A security alert needs investigation and context.

## Revision questions

1. Name the main components in a typical network architecture.
2. What does defense in depth mean?
3. How do packet-filtering and stateful firewalls differ?
4. How does a WAF differ from a network firewall?
5. How do IDS and IPS differ?
6. What are signature-based and anomaly-based detection?
7. What does NAC evaluate before granting device access?
