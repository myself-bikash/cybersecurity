# Phase 6: Final Revision and Assessment

## Learning objectives

- Recall the tools and concepts in the source modules.
- Compare tools that serve related but different purposes.
- Apply tool-selection and lab-safety principles in a final review.

## Important tool definitions

| Tool | Definition from the source |
| --- | --- |
| Kali Linux | Linux distribution designed for penetration testing and security research. |
| Nmap | Network-discovery and port-scanning tool. |
| Wireshark | Graphical network-packet analyzer. |
| Burp Suite | Web-application security-testing platform. |
| Metasploit | Penetration-testing and vulnerability-validation framework. |
| OWASP ZAP | Open-source web-application security scanner. |
| Gobuster | Directory, file, and DNS-enumeration tool. |
| ffuf | Web-application fuzzing tool. |
| Nikto | Web-server security scanner. |
| John the Ripper | Password-security auditing tool. |
| Hashcat | Password recovery and auditing tool. |
| Hydra | Network-login auditing tool. |
| Netcat | Network-connection and troubleshooting utility. |
| OpenSSL | Cryptographic toolkit. |
| Ghidra | Software reverse-engineering framework. |
| Autopsy | Digital-forensics platform. |
| Volatility | Memory-forensics framework. |
| Sysmon | Windows system-activity monitoring tool. |
| Wazuh | Security-monitoring and detection platform. |
| Splunk | Data-analytics and SIEM platform. |
| Elastic Security | Security-monitoring and detection solution. |

## Important comparison questions

Explain each difference:

1. Kali Linux vs. Ubuntu.
2. Nmap vs. Wireshark.
3. Wireshark vs. tcpdump.
4. Gobuster vs. ffuf.
5. Nikto vs. OWASP ZAP.
6. Burp Suite vs. OWASP ZAP.
7. Vulnerability scanning vs. vulnerability validation.
8. Vulnerability validation vs. exploitation.
9. John the Ripper vs. Hashcat.
10. Netcat vs. Nmap.
11. Ghidra vs. Autopsy.
12. Autopsy vs. Volatility.
13. Sysmon vs. Wazuh.
14. Wazuh vs. Splunk.
15. Splunk vs. Elastic Security.

## Knowledge assessment

Answer without looking at the lessons.

### Basic level

1. What is Kali Linux?
2. What is a cybersecurity laboratory?
3. What is Nmap?
4. What is a port scan?
5. What is an open port?
6. What is Wireshark?
7. What is a network packet?
8. What is Burp Suite?
9. What is Metasploit?
10. What is OWASP ZAP?

### Intermediate level

11. What is the difference between TCP and UDP scanning?
12. What is service detection in Nmap?
13. What is the purpose of Gobuster?
14. What is fuzzing?
15. What is the difference between passive and active scanning?
16. Explain the purpose of Burp Proxy and Repeater.
17. What is a Metasploit payload?
18. How do John the Ripper and Hashcat work?
19. What is the purpose of OpenSSL?
20. What is the difference between Wireshark and tcpdump?

### Advanced foundation level

21. How would you investigate an unexpected open port using authorized evidence?
22. How would you verify a web scanner's finding?
23. How would you analyze a suspicious network connection?
24. What is reverse engineering?
25. What is digital forensics?
26. What is memory forensics?
27. How does Sysmon support security monitoring?
28. What is SIEM?
29. How would you investigate a suspicious login event using sample Wazuh or Splunk data?
30. How would you build an isolated cybersecurity laboratory?

## Practical review

Choose a sanitized sample report, capture, or log set. Identify the question being investigated,
the tool category that fits, the evidence available, and what additional verification would be
needed. Explain why your analysis stays within the approved lab boundary.

**Steps and deliverable:** Select one supplied sample, record its source and scope, and answer the
four prompts above in a one-page analysis. Identify one observation, one limitation, and one safe
follow-up check; then map the tool choice to the relevant lesson. Do not collect new traffic or
contact any external target.

## Suggested answers

### Comparison questions

1. Kali is specialized for security work; Ubuntu is general-purpose.
2. Nmap reports network host/service information; Wireshark analyzes packet captures.
3. Wireshark is graphical; tcpdump is command-line. Both can analyze authorized packet data.
4. Gobuster and ffuf both automate resource discovery; they differ in interface/options and should
   be confined to a permitted target.
5. Nikto checks web-server issues; ZAP supports broader web-app traffic analysis and testing.
6. Burp Suite and ZAP both inspect/test web applications, with different licensing, interfaces, and
   features.
7. Scanning identifies possible weaknesses; validation checks whether supplied evidence confirms
   one.
8. Validation checks a weakness with limited evidence; exploitation attempts to use it and carries
   greater operational risk.
9. Both audit password hashes; John the Ripper is general-purpose, while Hashcat supports
   GPU-accelerated recovery.
10. Netcat is a basic client/server connectivity utility; Nmap discovers hosts and services.
11. Ghidra analyzes program structure; Autopsy examines disk/file-system evidence.
12. Autopsy focuses on persistent storage; Volatility analyzes memory captures.
13. Sysmon records configured Windows endpoint events; Wazuh centralizes endpoint monitoring and
   analysis.
14. Wazuh is an open-source monitoring platform; Splunk is a data analytics/SIEM platform.
15. Splunk is a broad log analytics/SIEM platform; Elastic Security provides security analytics on
   the Elastic Stack. Compare specific deployments before selecting.

### Knowledge assessment answer guide

1–10. Kali is a security-focused Linux distribution; a lab is an isolated training environment;
   Nmap discovers hosts/services; a port scan checks network ports; open means a service is
   listening; Wireshark analyzes packets; a packet is a network communication unit; Burp inspects
   web traffic; Metasploit is a modular testing platform; ZAP is an open-source web testing tool.
11–20. TCP uses connection-oriented communication; UDP does not. Service detection identifies
   protocol/application and version detection estimates a release. Gobuster discovers resources;
   fuzzing varies inputs to observe behavior. Passive scanning observes; active scanning sends
   tests. Proxy observes requests, Repeater resends selected requests. A payload is data/action
   delivered by a module. John/Hashcat audit hashes. OpenSSL handles cryptography/certificates/TLS.
   Wireshark is graphical; tcpdump is command-line.
21–30. Investigate an open port using authorized inventory and owner confirmation; verify a web
   alert against safe evidence; analyze a sanitized capture and note its limits; reverse engineering
   examines program internals; forensics preserves/examines digital evidence; memory forensics
   studies RAM captures; Sysmon records configured endpoint activity; SIEM correlates security
   events; investigate sample login events by checking context, related records, and benign
   explanations; build a lab with isolated VMs, snapshots, synthetic data, and no public targets.

## Key takeaways

- Select tools for the question and evidence, not popularity.
- Distinguish discovery, analysis, validation, exploitation, forensics, and monitoring.
- Validate automated findings and protect sensitive evidence.
- Practice only on systems and data you are authorized to use.

## Phase completion checklist

- [ ] I can explain the purpose and limitations of each source-listed tool.
- [ ] I can interpret a sanitized discovery report and packet capture.
- [ ] I can distinguish validation from exploitation and passive from active scanning.
- [ ] I can describe forensic evidence handling and monitoring concepts.
- [ ] I completed the laboratory report and 30-question assessment.
