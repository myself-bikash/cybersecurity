# Endpoint Detection

## Learning objectives

- Explain endpoint detection and the telemetry it may use.
- Describe antivirus detection approaches and their limitations.
- Compare antivirus, EDR, and XDR.
- Explain Sysmon's role and how analysts use endpoint activity in investigations.

## 1. Endpoint detection

**Endpoint detection** monitors computers, servers, and other endpoint devices to identify
suspicious activity, malware, and security threats. An endpoint may be a Windows laptop, Linux
server, desktop, cloud virtual machine, or workstation.

## 2. Antivirus

**Antivirus** software is designed to detect, block, quarantine, and remove malicious software.
The source lists viruses, trojans, worms, spyware, ransomware, and malicious scripts as example
threat categories.

| Detection approach | Description |
| --- | --- |
| Signature-based | Compares files with known malware signatures. |
| Heuristic | Examines suspicious characteristics of files and programs. |
| Behavior-based | Monitors program activity for malicious behavior. |

Traditional antivirus may not detect every new, modified, or fileless threat. This is one reason
organizations use broader endpoint-detection capabilities.

## 3. EDR

**EDR (Endpoint Detection and Response)** collects endpoint activity, detects suspicious behavior,
supports investigation, and may provide response capabilities.

EDR may monitor process creation, command execution, file changes, network connections, registry
changes, user activity, and suspicious scripts. Depending on product and configuration, analysts
may be able to isolate an endpoint, terminate a suspicious process, quarantine a file, collect
evidence, search activity across endpoints, and review a timeline.

## 4. XDR

**XDR (Extended Detection and Response)** correlates detection and response information beyond an
individual endpoint. Sources may include endpoints, network devices, email, identity platforms,
cloud environments, and security applications.

For example, an analyst may correlate a suspicious email report, an unusual sign-in, endpoint
activity, and an unexpected network connection to assess a larger incident.

## 5. Sysmon

**Sysmon (System Monitor)** is a Windows system service and device driver from Microsoft
Sysinternals that records detailed system activity in Windows Event Logs. It may record process
creation, network connections, file creation or deletion, driver loading, registry changes, DNS
queries, and process access.

Sysmon collects telemetry; it is not itself a complete antivirus or EDR solution. It requires
appropriate configuration and analysis.

For a synthetic process event, useful context may include the process image, parent process, user,
timestamp, and process identifier. Review these fields alongside related events rather than
interpreting one field alone.

## 6. Endpoint monitoring and behavioral detection

Endpoint monitoring continuously collects and analyzes endpoint activity.

| Activity | What an analyst may review |
| --- | --- |
| New process | Unexpected executable or process lineage. |
| Scripting activity | Unexpected or suspicious process behavior. |
| New account | Unauthorized account creation. |
| File modification | Unexpected change to an important file. |
| Network connection | Unknown or unusual destination. |
| Privilege change | Unexpected administrator permissions. |
| Scheduled task | Unexpected persistence-related change. |

**Behavioral detection** identifies suspicious patterns based on what a program, user, or device
does, rather than relying only on known signatures. An unusual location, access to multiple
systems, an unexpectedly large data transfer, or an unplanned privilege change may deserve
investigation; each requires context.

## Antivirus vs. EDR vs. XDR

| Capability | Antivirus | EDR | XDR |
| --- | --- | --- | --- |
| Malware detection | Yes | Yes | Yes, through integrated sources. |
| Process monitoring | Varies | Yes | Yes, through endpoint data. |
| Endpoint investigation | Product-dependent, often limited | Strong endpoint focus. | Strong, with broader integration. |
| Network visibility | Usually limited | Endpoint-related connections. | Broader network integration. |
| Email visibility | Usually limited | Varies. | May integrate email telemetry. |
| Cross-domain correlation | Limited | Primarily endpoint-focused. | Yes. |

## Important definitions

| Term | Definition |
| --- | --- |
| Antivirus | Software designed to detect, block, and remove malicious programs. |
| EDR | Technology that monitors endpoints, detects threats, supports investigation, and enables response. |
| XDR | Approach that correlates detection and response data across multiple security domains. |
| Sysmon | Windows system-monitoring service that records detailed activity in Event Logs. |
| Behavioral detection | Identifying threats based on suspicious patterns of activity. |

## Practical exercise

Review a synthetic endpoint timeline with a user sign-in, process relationship, file change, and
network connection. Identify what EDR/Sysmon data is available, what remains unknown, and which
additional event sources are needed before classifying it. Do not execute suspicious files or
commands.

## Key takeaways

- Antivirus, EDR, and XDR provide different levels of visibility and response.
- Endpoint telemetry supports investigation of processes, files, users, and connections.
- Sysmon records detailed Windows activity but requires separate analysis and detection.
- Behavioral patterns are indicators to investigate, not proof by themselves.

## Revision questions

1. What are the three antivirus detection approaches in the source?
2. What endpoint information can EDR collect?
3. How does XDR extend endpoint-focused monitoring?
4. What kinds of events may Sysmon record?
5. Why is Sysmon not a complete EDR product?
6. How do antivirus, EDR, and XDR differ in cross-domain visibility?
