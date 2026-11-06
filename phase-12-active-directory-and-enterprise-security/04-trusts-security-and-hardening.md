# Trusts, Security, and Hardening

## Learning objectives

- Explain AD trust relationships, types, and directions.
- Recognize common AD security weaknesses and the impact of a compromised domain.
- Explain Domain Administrator risk and the principle of least privilege.
- Apply the source's account, domain-controller, Kerberos, NTLM, and Group Policy safeguards.

## 1. Domain trusts

A **domain trust** lets identities in one AD domain be recognized for authentication and access
purposes in another. Trust alone does not grant every user access to every resource; resource
permissions and authorization still apply.
For example, a trust between `company.com` and `research.company.com` may allow authorized users
from one domain to access resources in the other, subject to those resources' permissions.

| Trust type | Meaning |
| --- | --- |
| Parent-child | Between parent and child domains in the same tree. |
| Tree-root | Between domain trees in the same forest. |
| Shortcut | Direct trust intended to improve authentication paths. |
| External | Between domains in separate forests or domains that do not share the same forest. |
| Forest | Between two AD forests. |

A **one-way trust** recognizes identities in one direction; a **two-way trust** recognizes
identities in both directions. Neither implies unrestricted access.

Poorly controlled trust relationships can expand the impact of a compromise. Review trust
relationships and direction, authentication settings, administrative permissions, and cross-domain
group memberships.

## 2. AD security weaknesses and impact

AD security protects identities, domain controllers, authentication, and access to enterprise
resources. A compromise can expose employee or privileged accounts, sensitive files, security
policies, additional computers, or large parts of an organization.

| Weakness | Potential risk |
| --- | --- |
| Weak passwords or unsecured service accounts | Credential compromise or exposure. |
| Excessive privileges or Domain Administrator membership | Larger impact from account compromise. |
| Unnecessary NTLM | Additional legacy-authentication risk. |
| Misconfigured delegation or ACLs | Unintended impersonation, access, or object changes. |
| Unpatched domain controllers | Exposure to known vulnerabilities. |
| Poor Group Policy configuration | Weak or inconsistent security settings. |
| Insecure LDAP configuration | Exposure of directory communication. |
| Unmonitored authentication | Suspicious activity may go unnoticed. |

**Domain Administrator** is a highly privileged security group in a domain. Keep membership
extremely limited, use separate administrative accounts, avoid daily browsing with privileged
accounts, require strong MFA where supported, monitor privileged logons, review membership, and
use dedicated administrative workstations where appropriate.

## 3. Domain-controller hardening and least privilege

**Domain-controller hardening** reduces unnecessary services and access, applies updates, and
enforces suitable security configurations. The source's practices include:

- Keep Windows Server patched and review security configuration regularly.
- Restrict interactive logons and administrative access.
- Use secure authentication configurations.
- Protect backups and maintain a tested recovery process.
- Monitor privileged operations.
- Secure DNS and directory communication.
- Restrict network access to required services.

The **principle of least privilege** gives each user or system only the permissions needed for its
assigned tasks. For example, an HR employee should have access to HR documents, not unrestricted
finance-server or domain-administration access.

## 4. Enterprise identity security checklist

| Control | Objective |
| --- | --- |
| Least privilege | Reduce unnecessary permissions. |
| MFA | Strengthen authentication. |
| PAM | Protect privileged identities. |
| LAPS | Manage local administrator passwords. |
| Credential Guard | Protect supported credential material. |
| Windows Defender | Detect and block threats. |
| EDR | Monitor endpoint behavior. |
| SIEM | Correlate security events. |
| Network segmentation | Limit movement between systems. |
| Regular access reviews | Remove unnecessary access. |
| Tested backups | Support recovery after compromise. |

## Practical exercise

1. Use a fictional domain diagram to review trust direction, privileged-group membership, and
   delegated access.
2. Identify excessive access and propose least-privilege changes.
3. Mark which assumptions require confirmation from a domain owner; do not change real trusts or
   permissions.

**Deliverable:** an annotated trust diagram, prioritized access-risk list, and a proposed least-
privilege change for each finding; state which details need validation by a domain owner.

## Key takeaways

- Trusts enable cross-domain recognition, not automatic universal resource access.
- Trusts, privileged identities, service accounts, delegation, ACLs, and GPOs require review.
- A domain controller is a critical identity service, not an ordinary workstation.
- Least privilege, MFA, PAM, monitoring, segmentation, and tested backups reduce risk.

## Revision questions

1. How do parent-child, tree-root, shortcut, external, and forest trusts differ?
2. What does one-way versus two-way trust describe?
3. Name five weaknesses that can increase AD risk.
4. Why should Domain Administrator membership be limited?
5. Give four domain-controller hardening practices.

### Answer key

1. Parent-child and tree-root trusts connect domains/trees in a forest; shortcut trusts provide a
   direct path; external trusts connect domains outside the same forest; forest trusts connect
   forests.
2. Trust direction describes which side recognizes identities from the other; two-way recognition
   does not grant universal resource permissions.
3. Examples: weak service credentials, excessive privilege, unnecessary NTLM, unsafe delegation or
   ACLs, unpatched DCs, weak GPOs, insecure LDAP, and unmonitored authentication.
4. Domain Administrator can alter broad identity and security controls; limiting membership reduces
   the impact of account compromise or mistakes.
5. Patch, restrict interactive/admin access, use secure authentication, protect/test backups,
   monitor privileged activity, secure DNS/directory traffic, and restrict network access.
