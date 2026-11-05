# Endpoint and Operating-System Hardening

## Learning objectives

- Explain endpoint security and compare antivirus, EDR, and XDR.
- Describe server-hardening controls and their purpose.
- Review basic Linux and Windows security settings on systems you own.
- Apply least privilege, updates, logging, and recovery precautions.

## 1. Endpoint security

An **endpoint** is a device connected to a network, such as a desktop, laptop, smartphone, server,
virtual machine, or workstation. **Endpoint security** protects these devices against malware,
unauthorized access, exploitation, and other threats.

The source lists malware, ransomware, spyware, credential theft, unauthorized software, unpatched
vulnerabilities, malicious USB devices, and privilege escalation as endpoint threats.

| Technology | Purpose |
| --- | --- |
| Antivirus | Detects, blocks, and removes malicious software. |
| EDR (Endpoint Detection and Response) | Collects endpoint activity and supports detection, investigation, and response. |
| XDR (Extended Detection and Response) | Correlates security data across sources such as endpoints, networks, email, and cloud. |
| Application control | Restricts which applications may execute. |
| Disk encryption | Protects stored information if a device is lost or stolen. |

**Practices:** keep systems updated; use endpoint protection; enable full-disk encryption; restrict
administrator privileges; enable host firewalls; monitor suspicious processes; remove unnecessary
software; use application control where appropriate; and maintain secure backups.

## 2. Server hardening

**Server hardening** reduces a server's attack surface by removing unnecessary services, applying
secure configurations, and restricting access. Servers may process user, application, business,
authentication, database, or financial information.

| Control area | Defensive practice |
| --- | --- |
| Services | Remove applications and disable services that are not required. |
| Network exposure | Expose only necessary services and restrict traffic with firewalls. |
| Administration | Restrict privileged access and require strong authentication. |
| Updates | Apply security patches regularly. |
| Logging | Record authentication attempts, administrative changes, and security events. |
| Data | Protect stored data and secrets with appropriate access controls and encryption. |
| Permissions | Secure file permissions and review exposed ports. |

## 3. Linux hardening

**Linux hardening** secures a Linux operating system against unauthorized access, exploitation,
and misuse.

### Areas to review

- **Users and permissions:** review accounts, ownership, file permissions, and privileged access.
- **SSH:** use key-based access where properly configured; restrict SSH access; avoid direct root
  login where practical; disable password authentication only after key access and recovery have
  been tested; use MFA where supported.
- **Firewall:** review the local policy and use tools such as UFW, nftables, or firewalld.
- **Privileges:** use appropriately restricted `sudo` access instead of sharing the root account.
- **Updates:** install security updates regularly.
- **Audit and logs:** review authentication and system events for suspicious activity.
- **Sensitive files:** protect password databases, SSH private keys, application configuration, and
  database credentials.

The source names these local administrative commands for permission, identity, log, and listening
service review: `ls -l`, `chmod`, `chown`, `id`, `whoami`, `journalctl`, `last`, `lastb`,
`ss -tulpn`, and `who`. Use them only on a system you administer; review output locally and do not
publish account or service details.

| Tool | Purpose |
| --- | --- |
| UFW | Simplified firewall management. |
| nftables | Linux packet-filtering framework. |
| Fail2ban | Blocks repeated abusive authentication attempts based on configured log monitoring. |
| AppArmor / SELinux | Mandatory access-control systems. |
| auditd | Linux audit framework. |
| Lynis | Security auditing and hardening assessment. |

Incorrect SSH or firewall changes can lock out an administrator. Test changes in a local virtual
machine, keep a recovery route, and do not blindly copy hardening commands from tutorials.

## 4. Windows hardening

**Windows hardening** secures Windows computers and servers by reducing vulnerabilities and
enforcing security controls.

| Feature | Purpose |
| --- | --- |
| Microsoft Defender | Built-in malware protection. |
| Windows Firewall | Controls incoming and outgoing network connections. |
| User Account Control (UAC) | Helps prevent unauthorized administrative changes through approval or elevation. |
| BitLocker | Encrypts storage drives. |
| Windows Update | Provides security patches and system updates. |
| Group Policy | Configures security settings across Windows systems. |
| Microsoft Defender for Endpoint | Enterprise endpoint detection and response. |

### Local hardening checklist

- Enable Microsoft Defender protection and Windows Firewall.
- Keep Windows updated and enable BitLocker where supported.
- Use standard accounts for daily work and MFA for supported accounts.
- Restrict Remote Desktop and disable unnecessary services.
- Review startup applications and monitor security events.

The source names Event Viewer for reviewing events, PowerShell for administration and security
automation, Group Policy for centralized configuration, and Sysmon for detailed system activity
logging. Use administrative tools only on systems you own or manage.

## Practical exercises

Use your own Linux or Windows computer, or an isolated virtual machine. Before changing SSH,
firewall, or account settings, take a snapshot or confirm you have a recovery route.

1. Review local accounts, administrator privileges, updates, host firewall, and installed endpoint
   protection.
2. On Linux, review file permissions and listening services using local administrative tools;
   record findings without sharing sensitive output.
3. Review SSH settings and document a safe configuration plan before making changes.
4. On Windows, review Defender, Firewall, updates, startup applications, security events, and
   BitLocker availability.
5. Record a before/after hardening checklist and explain why each change is appropriate.

## Key takeaways

- Endpoints require protection, patching, monitoring, and least privilege.
- EDR supports investigation and response; XDR correlates signals across multiple security
  sources.
- Hardening is a reduction of unnecessary exposure, services, privileges, and configuration risk.
- Test local system changes carefully to avoid lockout or data loss.

## Revision questions

1. What distinguishes an endpoint from endpoint security?
2. How do antivirus, EDR, and XDR differ?
3. Name five server-hardening control areas.
4. Why should SSH and firewall changes be tested with a recovery path?
5. What does `sudo` provide in the source's least-privilege guidance?
6. Name four Windows hardening features and their purposes.
