# Final Revision and Assessment

## Important definitions

| Term | Definition |
| --- | --- |
| Windows Server | Operating system designed for server and enterprise workloads. |
| Active Directory | Microsoft directory service for centralized identity and resource management. |
| AD DS | Windows Server role providing Active Directory domain services. |
| Domain | Logical administrative environment containing directory objects. |
| Domain controller | Server running AD DS that participates in domain authentication and directory management. |
| Forest | Highest-level logical Active Directory structure. |
| Tree | Collection of domains with a contiguous DNS namespace. |
| OU | Container used to organize directory objects and delegate administration. |
| GPO | Collection of centralized user and computer policy settings. |
| LDAP | Protocol for accessing and managing directory information. |
| Kerberos | Ticket-based network authentication protocol. |
| NTLM | Microsoft challenge-response authentication protocol. |
| TGT | Kerberos Ticket Granting Ticket. |
| SPN | Identifier associated with a service and its account. |
| Domain trust | Relationship allowing identities across domains to be recognized. |
| IAM | Management of digital identities and access. |
| PAM | Protection and control of privileged access. |
| MFA | Authentication using multiple factor categories. |
| SSO | One authentication process for access to multiple connected applications. |
| RBAC | Assigning permissions based on roles. |
| Kerberoasting | Attack concept targeting Kerberos service-ticket data associated with SPNs. |
| AS-REP Roasting | Attack concept targeting accounts without Kerberos pre-authentication. |
| Pass-the-Hash | Using stolen hash-derived credential material for authentication. |
| Pass-the-Ticket | Reusing stolen Kerberos authentication tickets. |
| Delegation | Allowing a service to act on behalf of a user. |
| BloodHound | Tool for analyzing AD relationships and potential privilege paths. |
| Lateral movement | Moving between compromised systems in a network. |
| ACL | List of permissions controlling access to an object. |

## Critical comparisons

| Comparison | Main difference |
| --- | --- |
| Domain vs. workgroup | Centralized domain management vs. decentralized workgroup management. |
| Domain vs. forest | Individual directory domain vs. forest-level structure. |
| Domain controller vs. member server | Hosts AD DS vs. participates in the domain without hosting AD DS. |
| User vs. computer account | Represents a person or service identity vs. a domain-joined computer. |
| OU vs. group | Organizes objects vs. groups identities for permissions. |
| LDAP vs. AD | Protocol vs. directory service. |
| Kerberos vs. NTLM | Ticket-based vs. challenge-response authentication. |
| Authentication vs. authorization | Identity verification vs. permission decisions. |
| IAM vs. PAM | Broad identity management vs. privileged-access protection. |
| Kerberoasting vs. AS-REP Roasting | Service-ticket data vs. accounts without pre-authentication. |
| Pass-the-Hash vs. Pass-the-Ticket | Reusing hash-derived credentials vs. Kerberos tickets. |
| Unconstrained vs. constrained delegation | Broad delegation vs. delegation restricted to configured services. |

## Course knowledge check

The PDF provides these 16 questions but no answer key. The answer key below is course-created from
the source material; it is not represented as a source-provided assessment key.

1. What is Active Directory primarily used for?
   - A. Video editing
   - B. Centralized identity and resource management
   - C. Disk partitioning
   - D. Packet capture
2. Which server hosts the AD DS role to participate in domain authentication?
   - A. Proxy server
   - B. Print client
   - C. Domain controller
   - D. Workstation
3. What is an Organizational Unit?
   - A. An authentication protocol
   - B. A directory container
   - C. A password hash
   - D. A network cable
4. What is the main purpose of Group Policy?
   - A. Capture packets
   - B. Recover deleted files
   - C. Compile applications
   - D. Centrally configure user and computer settings
5. Which protocol is used to query directory information?
   - A. LDAP
   - B. FTP
   - C. SMTP
   - D. ICMP
6. Which authentication protocol uses tickets?
   - A. NTLM
   - B. HTTP
   - C. Kerberos
   - D. DHCP
7. Which component issues Kerberos tickets in an AD domain?
   - A. DNS resolver
   - B. KDC
   - C. File Explorer
   - D. DHCP client
8. What is an SPN?
   - A. A disk partition
   - B. A type of GPO
   - C. An encryption algorithm
   - D. A service identifier associated with an account
9. What does Kerberoasting target?
   - A. Browser cookies
   - B. Kerberos service tickets
   - C. Linux shell history
   - D. DNS cache only
10. What is AS-REP Roasting associated with?
    - A. Disabled DNS
    - B. Expired certificates only
    - C. Accounts without Kerberos pre-authentication
    - D. File compression
11. What does Pass-the-Hash reuse?
    - A. A stolen browser bookmark
    - B. A DNS record
    - C. A GPO report
    - D. Stolen hash-derived credential material
12. What does Pass-the-Ticket reuse?
    - A. Kerberos tickets
    - B. NTFS permissions
    - C. A file hash
    - D. A DHCP lease
13. What is PAM designed to protect?
    - A. Ordinary desktop wallpaper
    - B. Privileged accounts and access
    - C. DNS record formatting
    - D. Browser themes
14. What does BloodHound help identify?
    - A. Disk temperatures
    - B. Wireless signal strength
    - C. Potential Active Directory privilege paths
    - D. Video codecs
15. What is lateral movement?
    - A. Moving files to another folder
    - B. Changing a desktop background
    - C. Updating a password
    - D. Moving between compromised systems
16. Which Windows event records a Kerberos service-ticket request?
    - A. 4624
    - B. 4720
    - C. 1102
    - D. 4769

### Course-created answer key

1. B · 2. C · 3. B · 4. D · 5. A · 6. C · 7. B · 8. D ·
9. B · 10. C · 11. D · 12. A · 13. B · 14. C · 15. D · 16. D

## Phase 12 completion checklist

- [ ] Understand Windows Server fundamentals.
- [ ] Explain Active Directory architecture.
- [ ] Distinguish forests, trees, domains, and OUs.
- [ ] Create and manage domain users and groups in a lab.
- [ ] Explain Group Policy and GPO processing.
- [ ] Explain LDAP and directory structure.
- [ ] Understand Kerberos authentication.
- [ ] Understand NTLM authentication.
- [ ] Explain DNS in Active Directory.
- [ ] Understand domain trusts.
- [ ] Explain IAM, MFA, SSO, and RBAC.
- [ ] Understand PAM and least privilege.
- [ ] Recognize Kerberoasting and AS-REP Roasting conceptually.
- [ ] Explain Pass-the-Hash and Pass-the-Ticket conceptually.
- [ ] Understand delegation risks.
- [ ] Analyze Active Directory relationships using authorized or synthetic data.
- [ ] Identify suspicious lateral-movement indicators.
- [ ] Build a small isolated Active Directory lab.
- [ ] Write a structured enterprise security investigation report.

## Key takeaways

- AD centralizes identity and access, so its security affects many systems.
- Good administration combines least privilege, secure authentication, hardening, and monitoring.
- Attack concepts are useful for defense; testing is limited to owned or explicitly authorized labs.
- An event, graph relationship, or suspicious configuration requires contextual validation.

## Revision questions

1. How do forests, trees, domains, and OUs relate?
2. What is the difference between LDAP and Active Directory?
3. How do Kerberos and NTLM differ?
4. Which controls help protect privileged access?
5. Why is context necessary when investigating Windows security events?
6. What is the authorization boundary for practical AD and BloodHound work?
