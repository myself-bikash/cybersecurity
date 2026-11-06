# Security Monitoring and Logs

## Learning objectives

- Explain what logs and endpoint telemetry record.
- Recognize system, network, firewall, authentication, Windows, Linux, and DNS log sources.
- Interpret common Windows event IDs without treating them as proof of malicious activity.
- Correlate multiple sources to build a timeline of a synthetic event.

## 1. Security monitoring and logs

**Security monitoring** collects and examines activity records from systems, applications, networks,
and security devices to identify suspicious behavior. A **log** is a record of an event that
occurred in a computer system or application.

Examples include a user login, an incorrect password, a file change, a service starting, a firewall
blocking a connection, or an application error. A log can help identify what happened, when it
happened, and which system or user was involved.

## 2. Log sources

| Log source | Typical records |
| --- | --- |
| System logs | Startup, shutdown, service failures, hardware events, errors, configuration changes. |
| Network logs | Source/destination addresses and ports, protocol, connection status, volume, timestamps. |
| Firewall logs | Traffic allowed, blocked, or otherwise processed. |
| Authentication logs | Successful/failed login, lockout, password changes, MFA failures, privileged activity. |
| DNS logs | Queries, response data, and related timing or client information. |
| Endpoint telemetry | Processes, parent-child relationships, file changes, connections, logins, registry changes, command-line activity, and security alerts. |

### Example records

```text
Time: [synthetic timestamp]
User: [test account]
Event: Failed login
Source: [sanitized lab source]
Outcome: Failure
```

```text
Source: [lab device]
Destination: [approved test resolver]
Protocol: UDP
Service: DNS
Status: Allowed
```

Records need context. A failed login, unusual process, or connection may be benign or suspicious
depending on the user, device, timing, and surrounding events.

## 3. Windows Event Logs

Windows records system, application, and security events.

| Log category | Purpose |
| --- | --- |
| Application | Application-related events. |
| Security | Login, authentication, and security events. |
| System | Operating-system and service events. |
| Setup | Installation and setup events. |
| Forwarded Events | Events received from other computers. |

Common event IDs named in the source:

| Event ID | Meaning |
| --- | --- |
| 4624 | Successful logon. |
| 4625 | Failed logon. |
| 4634 | Logoff. |
| 4648 | Logon using explicit credentials. |
| 4672 | Special privileges assigned to a new logon. |
| 4688 | Process creation, when auditing is enabled. |
| 4720 | User account created. |
| 4726 | User account deleted. |
| 4740 | User account locked out. |
| 1102 | Security audit log cleared. |

An event ID provides context, not proof of an attack. For example, a failed-logon event may result
from a legitimate user entering an incorrect password.

## 4. Linux system logs

Linux systems may use `systemd-journald`, `rsyslog`, or `syslog-ng`. Common locations include:

| File or service | Source-described use |
| --- | --- |
| `/var/log/syslog` | General system messages on some distributions. |
| `/var/log/auth.log` | Authentication events on Debian-based systems. |
| `/var/log/secure` | Authentication events on some Red Hat-based systems. |
| `/var/log/kern.log` | Kernel-related messages on some distributions. |
| `journalctl` | Reads systemd journal entries. |

The source lists these commands for local log review:

| Command | Source-described purpose |
| --- | --- |
| `journalctl` | Displays system journal entries. |
| `journalctl -b` | Displays logs from the current boot. |
| `journalctl -p warning` | Displays warning-level and higher-priority messages. |
| `sudo journalctl -u ssh` | Reviews the SSH service journal where applicable. |
| `sudo tail -f /var/log/auth.log` | Follows authentication logs on systems using that file. |

Log locations vary by distribution and configuration. Use commands only on systems you administer;
do not publish logs containing account names, addresses, or other sensitive information.

## 5. DNS logs and endpoint telemetry

DNS logs record queries and related responses. Analysts may review them for suspicious domains,
unusual query patterns, tunneling indicators, or possible malware communications.

**Endpoint telemetry** is security-related information from computers, servers, and other
endpoints. It can include process creation, parent process, file changes, network connections,
user logins, Windows registry changes, command-line activity, and security-tool alerts.

For example, an office application starting an unexpected scripting process may warrant
investigation. The analyst should review the process lineage, user, timestamp, related events, and
network activity before concluding that it is malicious.

## 6. Correlating logs

Logs provide different parts of an event:

| Source | Possible evidence |
| --- | --- |
| Authentication | Unusual login. |
| Endpoint | Suspicious process. |
| Network | Connection to another server. |
| File activity | Access to or change of sensitive files. |
| Firewall | Unusual outbound connection. |

Combining records may provide a more complete picture than examining one log alone. Build a
timeline, preserve source data, and clearly distinguish observed facts from analyst interpretation.

## Practical exercise

1. Use synthetic Windows, Linux, firewall, DNS, and endpoint records.
2. Extract each record's timestamp, user, device, event type, and outcome.
3. Correlate related events into a timeline and state a testable hypothesis.
4. List evidence that could confirm or disprove it; do not generate repeated authentication
   failures outside a disposable lab account.

**Deliverable:** a sanitized event-field worksheet, chronological timeline, and a short note that
separates observed facts from a testable hypothesis.

## Key takeaways

- Logs record events; endpoint telemetry adds detailed device activity.
- Windows event IDs are clues that need context, not standalone proof.
- Linux log locations vary by distribution and configuration.
- Correlation across authentication, endpoint, network, firewall, DNS, and file events supports
  investigation.

## Revision questions

1. What information should a useful log record provide?
2. Name five log sources and the types of evidence each can provide.
3. What do Windows Event IDs 4624 and 4625 represent?
4. Why is a Windows Event ID not proof of an incident?
5. How do Linux log locations vary?
6. What is endpoint telemetry?
7. Why is correlating multiple logs useful?

### Answer key

1. At minimum, time, source/system, event or action, relevant identity/object, and outcome; these
   fields make events interpretable and correlatable.
2. Examples: authentication, endpoint, firewall, DNS, network, system, and application logs; each
   records a different part of activity.
3. 4624 records a successful logon; 4625 records a failed logon.
4. The same event can be benign or suspicious depending on account, device, timing, configuration,
   and related events.
5. Paths and services vary by distribution, logging software, and configuration.
6. Endpoint telemetry is detailed activity data from a computer, such as process, file, login, and
   connection events.
7. Correlation combines partial evidence from different sources into a more complete timeline and
   helps test an explanation.
