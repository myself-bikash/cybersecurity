# Enterprise Security Monitoring

## Learning objectives

- Explain enterprise security monitoring and SIEM.
- Identify the source-listed Windows event IDs relevant to identity and directory activity.
- Explain selected 4624 logon types.
- Correlate events while avoiding conclusions from a single event.

## 1. Enterprise monitoring

**Enterprise security monitoring** continuously collects and analyzes security information from
systems, networks, applications, and identities to identify suspicious activity.

Monitor user logins and failed authentication, privileged-account activity, group-membership
changes, domain-controller events, GPO modifications, DNS queries, endpoint processes, network
connections, service-account activity, and remote-access sessions.

## 2. Windows security events

The source lists the following event IDs as investigative starting points. Event meaning and
availability depend on audit configuration and context.

| Event ID | Source-described meaning | Monitoring purpose |
| --- | --- | --- |
| 4624 | Successful logon. | Detect unusual successful logins. |
| 4625 | Failed logon. | Identify repeated failed authentication. |
| 4648 | Explicit credentials used. | Investigate unusual credential use. |
| 4672 | Special privileges assigned. | Monitor privileged logons. |
| 4688 | Process created, if auditing is enabled. | Investigate suspicious execution. |
| 4720 | User account created. | Detect unexpected account creation. |
| 4722 | User account enabled. | Detect unexpected account activation. |
| 4724 | Password reset attempted. | Monitor password administration. |
| 4728 | Member added to a global security group. | Monitor privileged group changes. |
| 4732 | Member added to a local security group. | Monitor sensitive group changes. |
| 4756 | Member added to a universal security group. | Monitor group changes. |
| 4768 | Kerberos TGT requested. | Monitor initial Kerberos authentication. |
| 4769 | Kerberos service ticket requested. | Monitor service-ticket activity. |
| 4771 | Kerberos pre-authentication failed. | Investigate authentication failures. |
| 4776 | NTLM credential validation. | Monitor NTLM authentication. |
| 4740 | User account locked. | Investigate repeated failed authentication. |
| 5136 | Directory object modified, when auditing is configured. | Investigate AD changes. |
| 4697 | Service installed. | Review unexpected service installation. |
| 7045 | New service installed in the System log. | Review unexpected service installation. |

### Logon types in Event 4624

| Logon type | Source-described meaning |
| --- | --- |
| 2 | Interactive logon. |
| 3 | Network logon. |
| 4 | Batch logon. |
| 5 | Service logon. |
| 7 | Unlock. |
| 8 | NetworkCleartext. |
| 9 | NewCredentials. |
| 10 | RemoteInteractive, commonly RDP. |
| 11 | CachedInteractive. |

A network logon (Type 3) is not automatically an attack. Review source address, account,
destination computer, timing, and related events. Event IDs are starting points, not proof of
malicious activity; auditing may be disabled or incomplete.

## 3. SIEM and event correlation

A **Security Information and Event Management (SIEM)** system collects and analyzes logs from
multiple sources to identify suspicious activity. The source names Microsoft Sentinel, Splunk
Enterprise Security, Elastic Security, and Wazuh.

For example, several failed logins followed by a successful login from an unusual workstation,
unexpected group changes, and access to a sensitive server may be correlated into an alert. A
single unusual event may be harmless; a related sequence can provide stronger evidence and should
be investigated.

## Practical exercise

Using synthetic or lab-generated logs only, build a short timeline containing a failed login,
successful login, group change, and resource access. Label which events need corroboration and
write a benign explanation as well as a concern to investigate. Do not query or collect logs from
systems without authorization.

## Key takeaways

- Monitor identities, privilege changes, GPOs, DNS, endpoints, and remote access.
- Event IDs depend on audit configuration and must be interpreted in context.
- Logon type 3 alone does not establish malicious activity.
- SIEM correlation combines related records; it does not replace investigation.

## Revision questions

1. What kinds of enterprise activity should be monitored?
2. Which event IDs indicate successful and failed logons?
3. Which event ID records a Kerberos service-ticket request?
4. What does Event 5136 represent when auditing is configured?
5. Why does one unusual event not prove an attack?
