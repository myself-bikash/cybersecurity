# Network Discovery and Web-Resource Assessment

## Learning objectives

- Explain the purpose and limits of Nmap, Gobuster, ffuf, and Nikto.
- Distinguish host discovery, port state, service/version detection, and operating-system detection.
- Interpret sample results without scanning a real target.
- Explain why scanner findings require verification.

## Nmap

**Nmap (Network Mapper)** is an open-source network-discovery and security-auditing tool. The
source describes its use for identifying hosts, open/closed/filtered ports, services, service
versions, and operating-system clues, and for helping identify potential weaknesses.

| Concept | Meaning |
| --- | --- |
| Host discovery | Identifies devices reachable on a network. |
| Port scanning | Checks communication ports and their states. |
| Open | An application is accepting connections. |
| Closed | The port is reachable, but no application is listening. |
| Filtered | A firewall or filter prevents reliable determination of the state. |
| Service detection | Identifies applications such as HTTP, HTTPS, SSH, FTP, or DNS. |
| Version detection | Attempts to identify software and version associated with a service. |
| OS detection | Infers an operating system from network behavior and responses. |

The source lists scan types for host discovery, TCP connect, SYN, UDP, service/version and
operating-system detection, port selection, all-TCP-port scanning, advanced detection, and normal
text output. It includes executable scan examples; those commands are intentionally omitted here.
Practice only by interpreting provided lab results or under an explicitly authorized, isolated lab
scope.

### Sample result interpretation

| Port | State | Service |
| --- | --- | --- |
| 22 | Open | SSH |
| 80 | Open | HTTP |
| 443 | Closed | HTTPS |
| 3306 | Filtered | MySQL |

This indicates that SSH and HTTP are accepting connections, no service is listening on the
reachable HTTPS port, and filtering prevents a reliable determination for MySQL. An open port is
not automatically a vulnerability: review the service, configuration, version, exposure, and
security controls.

## Gobuster

**Gobuster** is a command-line tool for discovering directories, files, DNS subdomains, and virtual
hosts on authorized targets.

- **Directory enumeration:** look for web directories not linked from visible pages.
- **Subdomain enumeration:** identify subdomains associated with a domain.
- **Wordlist:** a collection of possible names used by a discovery tool.

The source's example is a possibly unlinked administrative directory. Its practical exercise uses
a deliberately vulnerable local application and interprets returned HTTP status codes. No
enumeration commands or wordlists are included.

## ffuf

**ffuf (Fuzz Faster U Fool)** is a web fuzzer for discovering resources and studying how an
application responds to different inputs. Uses listed in the source include directory, file,
virtual-host, and parameter discovery, input fuzzing, and web-application testing.

**Fuzzing** supplies varied inputs to software to identify unexpected behavior, errors, or potential
weaknesses. The source's example is a tester observing how an authorized test application's input
field handles different values.

| Gobuster | ffuf |
| --- | --- |
| Resource discovery and enumeration; simple command-line workflow. | Flexible fuzzing and resource discovery; configurable input positions. |
| Useful for directory and DNS discovery. | Useful for directories, parameters, headers, and other inputs. |

## Nikto

**Nikto** is an open-source web-server scanner that checks for potentially dangerous files, outdated
software, insecure configurations, and known server-related issues. Uses include web-server
assessment, risky-configuration detection, exposed-file identification, and checking for known
weaknesses.

Nikto can produce false positives. A finding must be manually verified before it is reported as a
confirmed vulnerability.

## Practical exercises

1. Interpret the sample port table above; explain the difference between open, closed, and filtered.
2. Review a pre-generated, sanitized scan report from an isolated training lab; identify services
   and questions that require an administrator's verification.
3. In a deliberately vulnerable local web application, inspect supplied directory-discovery
   results and classify HTTP status codes. Do not enumerate public sites.
4. Use a sample fuzzing report to explain how varied input can reveal unexpected behavior; do not
   send fuzzing traffic to a real service.
5. Review a sample Nikto report and classify each item as confirmed, potential, false positive, or
   informational based on available evidence.

**Steps and deliverable:** Using only the provided sanitized reports, make a table with each
observation, evidence, confidence, and a question for the system owner. Distinguish a service
discovery result from a vulnerability finding and explain why each Nikto alert needs verification.
Submit the annotated table and a short scope note; do not run discovery tools against a live target.

## Key takeaways

- Nmap identifies network exposure; Gobuster and ffuf find web resources; Nikto checks server
  weaknesses.
- Port states describe observations, not proof of vulnerability.
- Automated output can be inaccurate and must be checked.
- Active discovery and testing require explicit authorization and strict scope.

## Revision questions

1. What does Nmap identify?
2. How do open, closed, and filtered ports differ?
3. What is the difference between service and version detection?
4. How do Gobuster and ffuf differ?
5. What does Nikto check, and why must findings be verified?

## Suggested answers

1. Nmap identifies hosts and reports network/service information within the authorized scope.
2. Open means an application is listening; closed means reachable but no application is listening;
   filtered means probes cannot determine the state, often because a filter blocks them.
3. Service detection identifies the application/protocol; version detection estimates its version.
   Both may be uncertain.
4. Gobuster and ffuf can automate discovery using wordlists; their options and workflows differ.
   Use them only in an authorized lab.
5. Nikto checks web-server configuration and known issues. Results may be stale, context-dependent,
   or false positives, so confirm safely with owner-provided evidence.
