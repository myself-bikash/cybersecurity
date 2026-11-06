# Privilege Escalation Concepts and Defenses

## Learning objectives

- Distinguish vertical from horizontal privilege escalation.
- Explain the Linux and Windows permission concepts listed in the source.
- Recognize configuration and credential risks and their mitigations.
- Review a system you own without attempting to escalate privileges.

## Privilege escalation

**Privilege escalation** is obtaining permissions greater than those originally assigned to a user or
process.

- **Vertical escalation:** gaining a higher access level, such as a standard user obtaining
  administrator/root privileges.
- **Horizontal escalation:** accessing another user's resources at a similar permission level.

The source's examples are a normal user gaining administrator/root privileges because of a
weakness and one user accessing another user's data.

## Linux privilege concepts

Linux uses users, groups, file permissions, capabilities, and privilege-management mechanisms.

| Concept | Meaning |
| --- | --- |
| Root | Highest-privilege administrative account. |
| User | Account that accesses the system. |
| Group | Collection of users. |
| sudo | Allows permitted users to run specified commands with elevated privileges. |
| SUID | Permission bit that lets a program run with its file owner's effective user ID. |
| SGID | Permission bit that can apply group privileges. |
| File permissions | Control read, write, and execute access. |
| Linux capabilities | Divide certain administrative privileges into smaller units. |

Example permission string from the source: `-rwxr-xr--`.

| Part | Meaning |
| --- | --- |
| `-` | Regular file. |
| `rwx` | Owner can read, write, and execute. |
| `r-x` | Group can read and execute. |
| `r--` | Others can only read. |

A permissions mistake can let users access or modify files they should not control.

### Sudo and scheduled-task risks

**Sudo misconfiguration** occurs when permissions allow actions beyond intended responsibilities.
Source examples include unnecessarily broad permissions, unsafe administrative utilities, poorly
controlled arguments, and incorrect delegation.

Linux scheduled-task mechanisms named in the source include cron and systemd timers. A **scheduled
task** runs automatically at a time or interval. Risks include a script writable by an untrusted
user, a privileged task running unsafe files, insecure paths, or excessive permissions.

Defenses: grant only necessary permissions, avoid unrestricted administration, review privileged
configuration, monitor activity, and ensure scheduled scripts and parent directories have
appropriate ownership and permissions.

## Windows privilege concepts

Windows uses accounts, groups, access control lists, services, tokens, and security policies.

| Concept | Meaning |
| --- | --- |
| Administrator | Account with administrative privileges. |
| Standard user | Account with limited permissions. |
| UAC | User Account Control. |
| ACL | Access Control List. |
| Windows service | Background program managed by Windows. |
| Access token | Contains a user's security identity and privileges. |
| SYSTEM | Highly privileged Windows service account. |

Source-listed risk areas include incorrect service permissions, weak file/directory permissions,
excessive local-administrator membership, insecure scheduled tasks, unprotected credentials, poor
registry permissions, and unpatched operating systems/applications.

## Vulnerable services and credential security

A **vulnerable service** is a system service or application with a weakness that may allow
unauthorized actions. Causes include outdated software, incorrect permissions, weak authentication,
unsafe configuration, and excessive privileges.

**Credential security** protects usernames, passwords, tokens, keys, and other authentication
information. Source-listed risks include plaintext passwords, password reuse, hardcoded
credentials, exposed API keys, insecure configuration files, credentials in scripts, and weak
secret management.

Source-listed defenses:

1. Use unique passwords.
2. Enable MFA.
3. Use secure password-hashing mechanisms.
4. Use approved secret-management solutions.
5. Rotate exposed credentials.
6. Restrict access to sensitive configuration files.
7. Avoid committing secrets to public repositories.

## Practical exercise

On your own Linux and Windows virtual machines, use a static configuration review or supplied
training evidence to compare a standard account with an administrator/root-controlled account.
Review permissions, group membership, file ownership, service configurations, scheduled tasks, and
privileged-execution settings. Document unsafe configurations and safe fixes. Do not attempt to
gain privileges or use the source's privilege-enumeration commands.

**Steps and deliverable:** Compare a standard account with the administrator/root account using
read-only settings and supplied training evidence. For each finding, record the setting, affected
privilege boundary, risk, and least-privilege fix. Submit a permissions comparison table and a
brief remediation note; do not try to change permissions or obtain elevated access.

## Key takeaways

- Vertical escalation gains higher privileges; horizontal escalation reaches another user's
  resources.
- Linux and Windows both rely on permissions, identities, services, and configuration.
- Excessive privileges, writable scheduled tasks, and exposed credentials can increase risk.
- Review and remediate configurations; do not attempt escalation outside explicitly authorized
  testing.

## Revision questions

1. How do vertical and horizontal escalation differ?
2. What are root, user, group, sudo, SUID, SGID, and Linux capabilities?
3. How is the example permission string divided?
4. What can make scheduled tasks or services risky?
5. What are UAC, ACL, access token, and SYSTEM?
6. What credential risks and defenses does the source list?

## Suggested answers

1. Vertical escalation gains a higher privilege level; horizontal escalation reaches another
   identity or resource at a similar level.
2. Root is Linux's privileged account; user/group represent identities and collections; sudo
   authorizes selected elevated commands; SUID/SGID alter the execution identity/group context;
   capabilities grant specific privileges without full root.
3. In `rwxr-xr-x`, the triplets are owner, group, and other permissions; each grants read, write,
   and execute respectively.
4. Excessive write access, unsafe ownership, weak permissions, or untrusted task inputs can let an
   unauthorized user influence privileged execution.
5. UAC prompts/controls elevation on Windows; ACLs define access permissions; an access token
   carries identity and privileges; SYSTEM is a highly privileged Windows service account.
6. Risks include reused/exposed credentials and excessive privileges. Defenses include unique
   credentials, MFA, secret protection, least privilege, patching, and monitoring.
