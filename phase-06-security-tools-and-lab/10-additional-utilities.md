# Additional Security Utilities and Tool Selection

## Learning objectives

- Identify the purpose of the additional utilities listed in the source.
- Match a defensive task to an appropriate tool category.
- Explain why tool selection should follow the task and authorization, not popularity.

## Additional utilities

| Tool | Category | Main purpose in the source |
| --- | --- | --- |
| `ping` | Network diagnostics | Checks network reachability. |
| `traceroute` | Network diagnostics | Examines the route packets take. |
| `dig` | DNS analysis | Queries DNS information. |
| `nslookup` | DNS analysis | Looks up DNS records. |
| `curl` | HTTP and networking | Sends requests to URLs and APIs. |
| `ip` | Network administration | Displays and manages network configuration. |
| `ss` | Network administration | Displays socket information. |
| `grep` | Linux utility | Searches text patterns. |
| `journalctl` | Linux administration | Reads system journal logs. |
| YARA | Malware analysis | Identifies patterns in files and memory. |
| ClamAV | Malware detection | Scans files for known malware signatures. |
| osquery | Endpoint visibility | Queries operating-system information. |
| Velociraptor | Digital forensics and response | Collects endpoint evidence and supports investigations. |

Use network utilities only in an authorized environment. When reviewing malware or forensic data,
use approved samples and preserve evidence.

## Choosing the right tool

The source advises selecting a tool according to the task, not popularity.

| Task | Suitable tools named in the source |
| --- | --- |
| Discover network devices | Nmap. |
| Analyze network packets | Wireshark, tcpdump. |
| Enumerate web resources | Gobuster, ffuf. |
| Assess web servers | Nikto. |
| Inspect web requests | Burp Suite, OWASP ZAP. |
| Validate vulnerabilities | Metasploit in an authorized lab. |
| Audit password strength | John the Ripper, Hashcat. |
| Test network connectivity | Netcat. |
| Inspect cryptographic certificates | OpenSSL. |
| Reverse engineer executables | Ghidra. |
| Analyze disk evidence | Autopsy. |
| Analyze memory captures | Volatility. |
| Monitor Windows activity | Sysmon. |
| Monitor security events | Wazuh, Splunk, Elastic Security. |

This table describes categories, not permission to run a tool against an arbitrary system. For
active assessments, obtain explicit authorization, define scope, and use an isolated or approved
target.

## Practical exercise

For each task in a fictional organization's security plan, choose a tool from the tables and explain
what evidence it could provide, what it cannot establish alone, and what authorization or privacy
limits apply. Include at least one task from networking, web applications, forensics, and monitoring.

## Key takeaways

- The source lists diagnostic, DNS, administration, log, malware-analysis, and forensic utilities.
- Tool choice depends on the security question and the available evidence.
- Tool output does not replace authorization, context, or analyst verification.

## Revision questions

1. Which tools does the source list for DNS analysis?
2. Which tools support endpoint visibility or digital forensics and response?
3. Which tools can help analyze packets, web requests, disk evidence, and memory?
4. What should be considered before choosing a security tool?
