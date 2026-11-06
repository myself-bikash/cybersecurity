# Final Revision and Progress

## Important definitions

| Term | Definition |
| --- | --- |
| Network architecture | Design of network components and their communication. |
| Firewall | System that controls network traffic using security rules. |
| IDS | System that detects suspicious activity. |
| IPS | System that detects and can block malicious activity. |
| NAC | System that controls which devices can access a network. |
| VPN | Protected network connection over another network. |
| Wireless security | Protection of wireless networks and communications. |
| DNS | System that translates domain names into IP addresses. |
| Email security | Protection against email-based threats and unauthorized access. |
| Endpoint security | Protection of network-connected devices. |
| Server hardening | Reducing server attack surfaces through secure configuration. |
| Linux hardening | Securing Linux systems through permissions, updates, and configuration. |
| Windows hardening | Securing Windows systems through controls and configuration. |
| Network segmentation | Dividing a network into separate sections with controlled communication. |
| Secure remote access | Protected remote connectivity with authentication and access controls. |
| Vulnerability management | Identifying, prioritizing, fixing, and monitoring security weaknesses. |
| Patch management | Testing and deploying software updates. |
| Backup | Separate copy of data used for restoration. |
| Disaster recovery | Restoring systems and services after a major disruption. |
| Infrastructure monitoring | Continuously observing infrastructure for problems and threats. |
| Network forensics | Investigating network evidence to reconstruct security incidents. |
| Lateral movement | Moving from one compromised system to other systems in a network. |
| Zero Trust | Security approach that requires explicit verification before granting access. |
| SIEM | Platform that collects and analyzes security events from multiple sources. |

## Course-created revision questions

The PDF contains a “Phase 9 knowledge test” heading but no question text in the reviewed source.
The questions below are course-created prompts based on the source topics; they are not presented
as the missing original quiz.

1. What are the main components and design principles of network architecture security?
2. How do packet-filtering, stateful, proxy, next-generation, and web application firewalls differ?
3. How does a WAF differ from a network firewall?
4. Compare IDS and IPS, and describe signature- and anomaly-based detection.
5. What does NAC assess before granting access?
6. How do remote-access and site-to-site VPNs differ?
7. Why is a VPN not a complete trust or authorization decision?
8. Which wireless protocols does the source identify as obsolete, legacy, or stronger?
9. How do DNSSEC, DoH, and DoT differ?
10. What roles do SPF, DKIM, and DMARC perform?
11. How do antivirus, EDR, and XDR differ?
12. Name five server-hardening controls.
13. What Linux and Windows controls reduce privileges and attack surface?
14. How can network segmentation reduce the impact of a compromised endpoint?
15. What controls make remote administration safer?
16. What are the vulnerability-management lifecycle stages?
17. How do CVE and CVSS differ?
18. How does patch management relate to vulnerability management?
19. Compare full, incremental, and differential backups.
20. What do RPO and RTO measure?
21. What sources may a SIEM correlate?
22. What evidence and handling steps are important in network forensics?
23. What are the core principles and components of Zero Trust?

## Key takeaways

1. Network architecture determines how systems communicate and where controls are applied.
2. Firewalls control traffic; IDS and IPS detect and help prevent intrusions.
3. NAC controls device access to organizational networks.
4. VPNs protect remote connectivity but do not automatically make users trustworthy.
5. DNS and email require dedicated security controls.
6. Endpoint and operating-system hardening reduce attack surfaces.
7. Network segmentation limits unnecessary communication and lateral movement.
8. Vulnerability management identifies and prioritizes weaknesses; patch management applies
   software updates.
9. Backups and disaster recovery protect business continuity.
10. Monitoring and network forensics help teams detect and investigate incidents.
11. Zero Trust evaluates access explicitly rather than assuming internal users are trustworthy.

## Phase 9 completion checklist

- [ ] I understand network architecture security.
- [ ] I understand firewall types and rules.
- [ ] I can explain IDS and IPS.
- [ ] I understand NAC and 802.1X.
- [ ] I understand VPN technologies and risks.
- [ ] I understand wireless network security.
- [ ] I understand DNS risks and DNSSEC.
- [ ] I understand SPF, DKIM, and DMARC.
- [ ] I understand endpoint security and EDR.
- [ ] I can explain server hardening.
- [ ] I can perform basic Linux hardening checks on a system I administer.
- [ ] I can perform basic Windows hardening checks on a system I administer.
- [ ] I understand network segmentation.
- [ ] I understand secure remote access.
- [ ] I understand vulnerability management and CVSS.
- [ ] I understand patch management.
- [ ] I understand backups, RPO, and RTO.
- [ ] I understand infrastructure monitoring and SIEM.
- [ ] I understand network intrusion detection and forensics.
- [ ] I understand lateral-movement detection.
- [ ] I understand Zero Trust architecture.
- [ ] I have completed the practical network-security lab within its authorized scope.

## Practical review

1. Choose a fictional organization with guest, employee, application, database, and management
   networks.
2. Draw the segments and list only required connections, including a DMZ if the design needs one.
3. Add a monitoring plan naming the relevant firewall, endpoint, DNS, and authentication logs.
4. Use a synthetic event timeline to identify one issue, a safe containment consideration, and a
   recovery control.

**Deliverable:** one diagram, an allowed-flow table, a short synthetic incident timeline, and a
paragraph defending the proposed controls.

## Answer key

1. Clients, infrastructure, services, and boundaries communicate under defined policies; security
   principles include defense in depth, least privilege, secure design, and reduced attack surface.
2. Packet filtering uses packet fields; stateful firewalls track connections; proxies intermediate
   traffic; NGFWs combine capabilities; WAFs focus on web application traffic.
3. A WAF inspects HTTP/HTTPS requests and responses; a network firewall controls broader traffic
   between networks or hosts.
4. IDS alerts on patterns, IPS can block; signatures match known patterns, while anomaly detection
   flags deviations from expected behavior.
5. NAC evaluates identity and, where configured, device posture before assigning access.
6. Remote-access VPN connects one device to a network; site-to-site VPN links networks.
7. A tunnel does not validate endpoint health or decide that every reachable resource should be
   authorized.
8. WEP is obsolete/insecure; WPA is legacy; WPA2 depends on configuration; WPA3 is newer and
   generally stronger.
9. DNSSEC authenticates DNS data integrity; DoH and DoT protect the client-to-resolver connection.
10. SPF authorizes sending servers, DKIM signs messages, and DMARC defines handling/reporting policy.
11. Antivirus detects malware; EDR adds endpoint investigation/response; XDR correlates multiple
    security domains.
12. Examples: service reduction, exposure control, restricted administration, patching, logging,
    data protection, and permission review.
13. Standard accounts, controlled elevation, updates, firewalls, encryption, and limited services
    reduce privileges or unnecessary exposure.
14. Segmentation limits which systems can communicate, reducing paths from a compromised endpoint.
15. Use strong authentication/MFA, least privilege, restricted exposure, patching, and monitoring.
16. Discover assets, identify and assess weaknesses, prioritize, remediate, verify, and monitor.
17. CVE identifies a vulnerability; CVSS communicates its technical severity.
18. Vulnerability management handles weaknesses broadly; patch management deploys and verifies
    software updates.
19. Full copies all selected data; incremental copies changes since the last backup; differential
    copies changes since the last full backup.
20. RPO measures acceptable data-loss time; RTO measures the restoration-time target.
21. A SIEM can correlate firewall, server, endpoint, authentication, cloud, application, and DNS logs.
22. Preserve authorized evidence, document chain of custody, normalize timelines, corroborate
    findings, and report limitations.
23. Zero Trust verifies explicitly, grants least privilege, assumes breach, and reevaluates access
    using identity, device, policy, and context.
