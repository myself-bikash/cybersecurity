# AD Attack Concepts and Defensive Detection

## Learning objectives

- Define the attack techniques named in the source at a high level.
- Match each risk to source-listed defensive controls and monitoring opportunities.
- Explain delegation, ACLs, privilege paths, and lateral-movement warning signs.
- Use BloodHound concepts for authorized defensive review without collecting from real networks.

## Safety scope

This lesson is for recognition, risk assessment, and defense. It deliberately omits procedures for
requesting or extracting credential material, offline password guessing, reusing credentials or
tickets, collecting a real directory, or moving between systems. Use synthetic data or an isolated
domain you own or are explicitly authorized to assess.

## 1. Kerberos credential attack concepts

**Kerberoasting** targets Kerberos service-ticket data associated with accounts that have Service
Principal Names (SPNs). A **Service Principal Name (SPN)** identifies a service and its account.
Weak service-account passwords are a common risk; this is not evidence that Kerberos itself is
broken. The source's illustrative SPN is `MSSQLSvc/sqlserver.company.local:1433`.

Defenses: use long, random service-account credentials; prefer Group Managed Service Accounts
(gMSAs) where supported; remove unnecessary SPNs; avoid excessive service-account privileges;
review older or weaker encryption configurations; protect credentials; and monitor unusual
Event ID 4769 activity. Legitimate applications can also generate high ticket volumes.

**AS-REP Roasting** targets accounts configured without Kerberos pre-authentication. The risk is
that authentication data may be exposed to offline password attacks without first knowing the
target account's password.

Defenses: require pre-authentication for ordinary accounts, review exceptions, use strong unique
passwords, monitor unusual authentication, and investigate unexpected changes to authentication
settings.

| Kerberoasting | AS-REP Roasting |
| --- | --- |
| Concerns service-ticket data for SPN-associated service accounts. | Concerns accounts without Kerberos pre-authentication. |
| Weak service-account credentials increase risk. | Weak credentials on affected accounts increase risk. |

## 2. Credential and ticket abuse concepts

**Pass-the-Hash (PtH)** uses stolen password-hash or hash-derived credential material to
authenticate without recovering the plaintext password. Risks increase when privileged credentials
are exposed, reused, or accepted through NTLM.

Defenses include reducing unnecessary NTLM, using unique administrative credentials, restricting
privileged logons to approved systems, applying least privilege, using Credential Guard where
supported, monitoring NTLM authentication, and using Windows LAPS to manage local administrator
passwords.

**Pass-the-Ticket (PtT)** reuses stolen Kerberos authentication tickets without necessarily knowing
the user's plaintext password. A **TGT** requests service tickets; a **TGS** is a service ticket.

Defenses include protecting endpoint memory and credentials, using Credential Guard where
supported, limiting privileged accounts on ordinary workstations, monitoring unusual ticket use,
investigating unexpected logons, and reducing privileged-credential exposure according to security
requirements.

In the source's example, credential material or a ticket might be exposed on a compromised
workstation. Reuse risk grows if the affected identity has unnecessary privileges or access on
other systems; the defensive response is to protect credentials, limit privileges, and investigate
related authentication.

| Pass-the-Hash | Pass-the-Ticket |
| --- | --- |
| Reuses hash-derived credential material, commonly associated with NTLM abuse. | Reuses Kerberos tickets. |
| Investigate suspicious NTLM authentication. | Investigate suspicious Kerberos ticket activity. |

## 3. Delegation, privilege escalation, and ACLs

**Delegation** allows a service to act on a user's behalf when accessing another service, subject to
configuration.
For example, an internal web application may need to retrieve database information using the
employee's identity.

| Delegation type | Meaning and risk |
| --- | --- |
| Unconstrained | Broad delegation; risky if the service or account is compromised. |
| Constrained | Limits delegation to specified services, though misconfiguration remains a risk. |
| Resource-Based Constrained Delegation (RBCD) | Lets the target resource control which identities may delegate to it; unsafe permissions can create privilege-abuse paths. |

Review delegation regularly, restrict who can configure it, protect highly privileged accounts from
delegation, audit related directory-attribute changes, and investigate unusual service impersonation.

**Active Directory privilege escalation** means obtaining permissions beyond those initially
assigned, potentially reaching domain-level access. Causes can include excessive group membership,
weak service-account credentials, dangerous delegated permissions, misconfigured GPO permissions,
unprotected credentials, misconfigured delegation, poorly controlled ACLs, and unpatched systems.

An **Access Control List (ACL)** lists which identities can perform which operations on an object.
Review both group membership and delegated object permissions; an ordinary account with
unexpected rights over a security group can create a high-risk relationship.
For example, an ordinary employee account that can modify a group granting access to sensitive
servers may have a path to more powerful access than its job requires.

## 4. BloodHound and potential privilege paths

**BloodHound** maps relationships among AD identities, computers, groups, permissions, sessions,
and delegation to help identify potential privilege paths. A path is a sequence of relationships or
permissions that may let one identity reach a more privileged resource.

Security teams can use authorized directory data to find excessive permissions, risky group
relationships, indirect paths, and delegated permissions, then prioritize remediation. A graph
shows potential relationships; it does not prove that every path is exploitable. Validate findings
against actual permissions, configuration, and controls.
One conceptual path might run from an ordinary user through a group it controls to a server with
privileged access. This illustrates a relationship to review, not a confirmed or universally
exploitable path.

## 5. Lateral movement and detection

**Lateral movement** is movement from one compromised system to another to expand access or reach
valuable resources. Legitimate administration can use RDP, SMB, WinRM, PowerShell remoting,
remote service administration, and scheduled tasks; their presence alone is not malicious.
For example, after a workstation is compromised, an attacker may attempt to reach an application
server, file server, or database server. Defensive analysis looks for corroborating evidence
rather than assuming every remote connection is hostile.

| Warning sign | Possible concern |
| --- | --- |
| One account unexpectedly logs into many computers. | Possible credential abuse. |
| Unusual administrative logon. | Possible privilege misuse. |
| Unexpected remote service creation. | Possible remote execution. |
| Unusual SMB activity or unexpected RDP. | Possible remote administration or access misuse. |
| Unusual PowerShell remoting. | Possible administrative-tool abuse. |
| New privileged group membership. | Possible privilege escalation. |
| Authentication from an unusual workstation. | Possible credential misuse. |

The source identifies Events 4624, 4625, 4648, 4672, 4688 (if enabled), 4697, 4728, 4732, 4769,
4776, and System event 7045 as relevant investigative records. For Event 4624, logon types include
2 (interactive), 3 (network), 4 (batch), 5 (service), 7 (unlock), 8 (NetworkCleartext), 9
(NewCredentials), 10 (RemoteInteractive, commonly RDP), and 11 (CachedInteractive). Interpret
these alongside source, account, destination, and related activity.

Defenses include restricting remote administration, using unique privileged credentials, segmenting
networks, monitoring remote logons and process chains, limiting administrative tools, using EDR,
and limiting which accounts administer servers.

## Practical exercise

1. In a synthetic graph or isolated test domain, inspect a deliberately created group-permission
   relationship.
2. Explain why it could be risky and propose a least-privilege change.
3. Review synthetic logon and service-installation records for a possible lateral-movement signal.
4. Do not collect production directory data or generate attack activity.

**Deliverable:** a relationship diagram, a prioritized defensive finding with proposed remediation,
and a short synthetic-log timeline that separates observed evidence from hypotheses.

## Key takeaways

- Roasting, PtH, and PtT describe different credential or ticket risks; this lesson covers concepts and defenses only.
- Delegation, ACLs, group memberships, and GPO permissions can create unintended privilege paths.
- BloodHound identifies potential relationships that require validation.
- Remote-management tools have legitimate uses; investigate context and correlate events.

## Revision questions

1. How do Kerberoasting and AS-REP Roasting differ?
2. What credential material is associated with PtH and PtT?
3. How do unconstrained, constrained, and resource-based constrained delegation differ?
4. What does an ACL describe?
5. What can BloodHound show, and what can it not prove by itself?
6. Name four warning signs that may warrant lateral-movement investigation.

### Answer key

1. Kerberoasting concerns service-ticket data for SPN-associated accounts; AS-REP Roasting concerns
   accounts without Kerberos pre-authentication.
2. PtH reuses stolen hash-derived credential material; PtT reuses Kerberos tickets.
3. Unconstrained delegation is broad; constrained delegation is limited to configured services;
   resource-based constrained delegation lets the target resource define allowed delegators.
4. An ACL lists identities and the operations they are allowed to perform on an object.
5. BloodHound can map potential relationships and privilege paths; the graph alone does not prove
   exploitability or that controls are absent.
6. Examples: unusual logons across many hosts, unexpected privileged logons/group changes, remote
   service installation, unusual SMB/RDP/PowerShell activity, or unfamiliar workstation access;
   corroborate each with context.
