# Scanning and Enumeration

## Learning objectives

- Define scanning, host discovery, port scanning, service detection, enumeration, and network
  mapping.
- Interpret common port states and understand their limitations.
- Explain vulnerability scanning and common scanner roles.
- Use only sanitized results or authorized isolated-lab materials.

## Scanning concepts

**Scanning** examines authorized systems and networks for active devices, open ports, running
services, and possible weaknesses. **Host discovery** identifies devices active on a network, such
as laptops, desktops, servers, routers, printers, and virtual machines. The source describes Nmap
host discovery on an isolated lab subnet; this lesson uses supplied results rather than scan
commands.

A **port** is a logical communication endpoint used by network applications. Port numbers do not
guarantee which application is actually running; services can use non-standard ports.

| Port(s) from the source | Common service |
| --- | --- |
| 20/21 | FTP. |
| 22 | SSH. |
| 23 | Telnet. |
| 25 | SMTP. |
| 53 | DNS. |
| 80 | HTTP. |
| 110 | POP3. |
| 143 | IMAP. |
| 443 | HTTPS. |
| 445 | SMB. |
| 3306 | MySQL. |
| 3389 | RDP. |
| 5432 | PostgreSQL. |
| 8080 | Alternative HTTP. |

## Port states and service information

| State | Meaning |
| --- | --- |
| Open | A service is accepting connections. |
| Closed | The port is reachable, but no service is listening. |
| Filtered | Filtering prevents a clear determination. |
| Open or filtered | The result cannot distinguish between open and filtered. |
| Closed or filtered | The result cannot distinguish between closed and filtered. |

An open port is not automatically a vulnerability.

**Service detection** identifies an application on an open port; the source examples are SSH, HTTP,
and HTTPS. **Version detection** attempts to identify its software/version. An old version may
have known vulnerabilities, but version information alone does not prove one exists.

**Operating-system detection** estimates an operating system from network behavior and responses.
Examples in the source are Linux, Windows, and FreeBSD. Firewalls, network devices, and
customized configurations can affect accuracy.

The source describes host-discovery, TCP-connect, SYN, UDP, service/version, OS, selected-port,
all-TCP-port, advanced-detection, and output-saving options. Their executable flags and scan
commands are intentionally omitted.

## Vulnerability scanning

**Vulnerability scanning** is automated or semi-automated checking for known weaknesses. It may
identify outdated software, missing patches, weak configurations, known vulnerable services,
exposed management interfaces, or missing controls.

| Tool named in the source | Purpose |
| --- | --- |
| Nessus | Vulnerability assessment. |
| OpenVAS / Greenbone | Vulnerability scanning and management. |
| Nmap | Host, port, service, and selected vulnerability checks. |
| OWASP ZAP | Web-application security testing. |
| Nikto | Web-server configuration and known-issue checks. |

A scanner report is not a final security conclusion; verify findings.

## Service enumeration and network mapping

**Service enumeration** gathers detailed information about services, possibly including version,
configuration, supported protocols, features, accessible resources, and authentication
requirements. Source examples include SSH, SMB, DNS, HTTP, FTP, and SMTP.

**Network mapping** creates a structured or visual representation of devices, connections,
services, and boundaries, such as routers, switches, servers, workstations, firewalls, subnets, and
services.

Source lab example:

```text
Lab network: 192.168.56.0/24
Kali Linux:  192.168.56.5
Target VM:   192.168.56.10 (authorized lab target)
```

This is a fictional isolated-lab diagram, not a target to scan.

## Practical exercise

On paper or with a sanitized lab report:

1. Identify the target VM's listed IP address.
2. Interpret supplied host and port observations.
3. Identify listed services and explain their purpose.
4. Note any OS-detection limitations.
5. Create a simple network map.

**Steps and deliverable:** Use only the supplied sanitized report. Put each listed host and
service on a diagram; label state, evidence source, and uncertainty. Add one owner question for any
unexpected service, and distinguish observed facts from scanner guesses. Submit the annotated map
and a short note describing what the report cannot prove. Do not scan a live network.
6. Produce a network-discovery report that separates observations from conclusions.

Do not run scans against public or third-party systems. Executable scanning exercises from the
source are intentionally replaced with supplied results.

## Key takeaways

- Scanning and enumeration discover system and service information; they do not prove a weakness.
- Port states are observations and may be uncertain.
- Version and OS detection have limitations.
- Automated vulnerability scanners can produce findings that require manual verification.

## Revision questions

1. What are host discovery and port scanning?
2. What do open, closed, filtered, open-or-filtered, and closed-or-filtered mean?
3. How do service detection and version detection differ?
4. What are vulnerability scanning and service enumeration?
5. Why is an open port not automatically a vulnerability?
6. What information should a network map include?

## Suggested answers

1. Host discovery checks which hosts appear responsive; port scanning reports states of selected
   ports.
2. Open means a listener responded; closed means reachable with no listener; filtered means a
   filter prevents a determination; open|filtered and closed|filtered indicate the probe cannot
   distinguish the paired states.
3. Service detection identifies the application/protocol; version detection estimates its release.
4. Vulnerability scanning compares evidence with known weaknesses; service enumeration collects
   details about exposed services.
5. A port can be required and correctly secured; risk depends on the service, configuration,
   exposure, controls, and business context.
6. Include scoped hosts, links, services/ports, ownership, purpose, evidence source, confidence,
   and known dependencies.
