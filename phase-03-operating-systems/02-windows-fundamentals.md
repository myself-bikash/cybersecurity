# Windows Fundamentals

## Learning objectives

By the end of this lesson, you should be able to:

- Describe the Windows architecture components listed in the source.
- Recognize common Windows directories and NTFS permissions.
- Explain the roles of the Registry, Task Manager, services, Event Viewer, Defender, and Firewall.
- Identify the Windows administration, networking, authentication, and security-policy concepts
  covered in the PDF.

## Why learn Windows?

The source describes Windows as widely used in personal computers, businesses, corporate networks,
and enterprise environments. It highlights Windows computers, servers, and Active Directory as
important cybersecurity contexts.

## Windows architecture

| Component | Role in the source |
| --- | --- |
| Hardware | CPU, RAM, storage, and other physical devices. |
| Kernel | Manages processes, memory, hardware, and system operations. |
| Executive | Provides important operating-system services. |
| Device drivers | Let Windows communicate with hardware. |
| System services | Perform background operations. |
| User applications | Programs such as browsers and editors. |

## Windows filesystem

A filesystem organizes and manages files and directories. The source says Windows commonly uses
NTFS and lists these directories:

| Directory | Purpose in the source |
| --- | --- |
| `C:\Windows` | Windows operating-system files. |
| `C:\Users` | User accounts and personal data. |
| `C:\Program Files` | Installed applications. |
| `C:\Program Files (x86)` | Common location for 32-bit applications. |
| `C:\ProgramData` | Application data shared across users. |
| `C:\Temp` | May be used for temporary files. |

## NTFS permissions

NTFS permissions control which users can access files and folders.

| Permission | Meaning in the source |
| --- | --- |
| Full Control | Complete access, including changing permissions. |
| Modify | Read, write, and delete. |
| Read & Execute | Read and execute files. |
| Read | View file contents. |
| Write | Create or modify files. |

Incorrect permissions can allow unauthorized users to access sensitive information or modify
important system files.

## Users and groups

The source lists these account types:

- **Administrator:** Can perform administrative operations.
- **Standard User:** Has restricted permissions.
- **Guest:** Has limited access, where available and enabled.

Groups let administrators manage permissions for multiple users together. The source's example is
adding employees to a group to provide access to shared folders.

## Windows Registry

The **Windows Registry** is a hierarchical database that stores operating-system and application
configuration settings. The source lists these root keys:

- `HKEY_LOCAL_MACHINE` (`HKLM`)
- `HKEY_CURRENT_USER` (`HKCU`)
- `HKEY_CLASSES_ROOT` (`HKCR`)
- `HKEY_USERS` (`HKU`)
- `HKEY_CURRENT_CONFIG` (`HKCC`)

The source notes that malware sometimes modifies Registry settings to maintain persistence or
change system behavior. Incorrect edits can damage Windows configuration; do not edit the Registry
without authorization and a recovery plan.

## Task Manager and Windows services

**Task Manager** monitors and manages running programs and system resources. The source lists CPU,
RAM, disk, network, running processes, and startup applications as items it can show. It gives
`Ctrl + Shift + Esc` as a shortcut.

**Windows services** are background programs that perform operating-system and application tasks.
Source examples include Windows Update, Windows Defender services, Print Spooler, and Remote
Procedure Call (RPC). The Services application is used to manage services; the source gives
`services.msc` as its entry point.

## Event Viewer

Event Viewer records events occurring inside Windows. The source lists these categories:

| Category | Examples in the source |
| --- | --- |
| Application | Application-related events. |
| Security | Login attempts, account activity, and other audited security events. |
| System | Operating-system and driver events. |
| Setup | Installation and setup events. |

The source gives `eventvwr.msc` as its entry point. Security professionals investigate Windows logs
for suspicious logins, privilege changes, and other incidents.

## Microsoft Defender and Windows Firewall

- **Microsoft Defender Antivirus** is a built-in solution that helps protect Windows against malware
  and other threats. The source lists real-time protection, malware detection and removal,
  security scanning, and cloud-delivered protection. It does not replace all other security
  controls.
- **Windows Defender Firewall** controls incoming and outgoing network traffic according to
  configured rules. The source examples are allowing trusted applications, blocking unauthorized
  connections, and restricting access to particular ports. It gives `wf.msc` as an entry point.

## PowerShell

PowerShell is a Microsoft command-line shell and scripting language used for Windows
administration, automation, and security operations. The source describes it as important for
Windows cybersecurity and penetration testing. The source examples are:

| Command | Purpose |
| --- | --- |
| `Get-Process` | Displays running processes. |
| `Get-Service` | Displays Windows services. |
| `Get-NetIPConfiguration` | Displays network configuration. |
| `Get-LocalUser` | Displays local user accounts. |

Use administrative commands only on systems you are authorized to manage.

## Windows networking

The source lists these commands for inspecting and troubleshooting network connections:

| Command | Purpose |
| --- | --- |
| `ipconfig` | Display IP configuration. |
| `ipconfig /all` | Display detailed network information. |
| `ping` | Test connectivity. |
| `tracert` | Trace the network route. |
| `nslookup` | Query DNS. |
| `netstat` | Display network connections. |
| `arp -a` | Display the ARP cache. |
| `route print` | Display the routing table. |

Use network diagnostics only in an authorized context.

## Group Policy

**Group Policy** lets administrators manage and configure Windows computers and users centrally.
The source examples include enforcing password policies, restricting software installation,
configuring security settings, controlling access to system features, and managing Defender
settings. It gives `gpedit.msc` as an entry point and notes that the Local Group Policy Editor is
not available in every Windows edition.

## Windows authentication

Authentication verifies the identity of a user or system. The source lists:

- Password authentication.
- **NTLM:** A Windows authentication protocol.
- **Kerberos:** A ticket-based network authentication protocol.
- **Windows Hello:** Supports biometric and PIN-based sign-in.
- **Multi-factor authentication:** Requires multiple verification factors.

Understanding authentication helps explain password attacks, credential theft, and identity
security.

## Windows security policies

Security policies define rules for protecting Windows systems. Source examples include password
complexity requirements, account lockout policies, user-rights assignments, audit policies, and
security restrictions. The source gives `secpol.msc` as an entry point for inspecting local
security policies.

## Windows administration

Windows administration means managing and maintaining Windows computers and servers. The source
lists these tasks:

1. Create and manage user accounts.
2. Manage groups and permissions.
3. Install and update software.
4. Configure network settings.
5. Manage Windows services.
6. Monitor system performance.
7. Investigate system logs.
8. Configure firewalls.
9. Manage security policies.
10. Troubleshoot system problems.

## Practical lab: Windows administration

Use a Windows VM you own or are explicitly authorized to administer:

1. Identify the Windows architecture and filesystem locations from this lesson.
2. Compare Administrator, Standard User, and Guest accounts where available.
3. Explore Task Manager and Event Viewer without changing system settings.
4. Review the Registry root-key names and explain why edits require care.
5. Identify which built-in tools correspond to logs, services, firewall rules, and network
   configuration.

Do not edit the Registry, change firewall policy, or modify accounts on a production system without
explicit authorization.

## Key takeaways

- Windows includes kernel, executive, drivers, services, and user applications.
- NTFS permissions govern access to files and folders.
- Registry, services, Event Viewer, Defender, Firewall, PowerShell, and Group Policy serve
  different administrative purposes.
- Windows supports multiple authentication mechanisms, including NTLM and Kerberos.
- Administrative changes require authorization and a recovery plan.

## Revision questions

1. What are the main Windows architecture components in the source?
2. How do NTFS Modify and Full Control differ?
3. What kinds of information can Task Manager show?
4. What does Event Viewer record?
5. What does Group Policy allow administrators to do?
6. How does the source describe NTLM and Kerberos?
7. What is the purpose of PowerShell?
