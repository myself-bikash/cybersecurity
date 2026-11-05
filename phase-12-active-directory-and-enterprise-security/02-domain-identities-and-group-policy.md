# Domain Identities and Group Policy

## Learning objectives

- Distinguish domain user accounts, account types, security groups, distribution groups, and OUs.
- Explain the three security-group scopes in the source.
- Describe GPO linking, processing order, inheritance, filtering, and precedence.
- Use the source-listed Group Policy commands only in an authorized test domain.

## 1. Domain users and account types

A **domain user** is an account stored in AD that can authenticate to domain-connected resources.
Access depends on the permissions assigned to the identity.
For example, a test domain user may have username `alice`, domain `company.local`, and logon
name `alice@company.local`.

| Account type | Purpose |
| --- | --- |
| Standard user | Ordinary employee activities. |
| Administrator | Administrative tasks. |
| Service account | Runs an application or service. |
| Guest account | Limited guest access, if enabled. |
| Managed service account | Managed credentials for supported services. |

Employees should not use administrator accounts for routine work. Separate standard and
privileged accounts reduce risk.

## 2. Groups and scopes

A **domain group** collects accounts or other groups so permissions can be assigned collectively.
**Security groups** assign permissions and rights. **Distribution groups** are primarily for email
distribution and are not used to assign Windows resource permissions.

| Security-group scope | Main purpose |
| --- | --- |
| Domain Local | Assign permissions to resources in its own domain. |
| Global | Group users and groups from its own domain. |
| Universal | Group users and groups across the forest. |

These scopes help organize permissions across domains. Grant permissions to the intended group
and verify the resulting access rather than assuming group membership alone grants a particular
resource permission.
For example, HR, Finance, and IT security groups can receive permissions for the appropriate
department resources rather than granting every employee the same access.

## 3. Organizational Units

An **Organizational Unit (OU)** is a container inside a domain used to organize directory objects,
apply Group Policy, and delegate administration. OUs may reflect departments, locations, or
device types. A sample hierarchy might contain Employees (with HR, Finance, and IT), Computers
(with Laptops and Desktops), and Servers.

| OU | Security group |
| --- | --- |
| Organizes directory objects and can scope Group Policy. | Groups accounts or other groups and can be assigned permissions. |
| Supports administrative delegation. | Supports permission management. |
| Is a directory container. | Is a directory group object. |

Putting a user in an OU does not automatically grant access to a shared folder; permissions must
be assigned separately.

## 4. Group Policy and GPOs

**Group Policy** centrally configures settings for users and computers in an AD environment.
A **Group Policy Object (GPO)** is a collection of settings, such as password and account-lockout
policies, Windows Firewall, security options, software deployment, scripts, user-interface
restrictions, and administrative templates.

An administrator creates a GPO and links it to a site, domain, or OU. Domain-joined computers
and users process applicable policies according to scope and precedence.

The usual processing order is **LSDOU**:

1. Local policy.
2. Site policy.
3. Domain policy.
4. Organizational Unit policy.

Later policies can override earlier conflicting settings, subject to inheritance, enforcement, and
other configuration.

| Concept | Meaning |
| --- | --- |
| GPO link | Connects a GPO to a site, domain, or OU. |
| Inheritance | Allows applicable policies from higher levels to affect lower levels. |
| Enforced | Prevents certain lower-level policies from overriding an enforced policy. |
| Block Inheritance | Blocks normal inheritance from higher levels, subject to enforcement. |
| Security filtering | Controls which users or computers can apply a GPO. |
| WMI filtering | Uses Windows Management Instrumentation conditions to filter GPO application. |

The source lists these commands for Group Policy administration and review:

```text
gpresult /r
gpresult /h gp-report.html
gpupdate /force
```

Use them only on an authorized lab system. `gpresult` displays applied-policy information or
creates a detailed HTML report; `gpupdate /force` refreshes policy. Misconfiguration can expose an
organization through weak password requirements, excessive local administrator access, disabled
protections, unnecessary remote access, or insecure firewall settings.

## Practical exercise

In the isolated domain from the lab lesson, create test users in department OUs, create security
groups, and apply a harmless screen-lock or firewall policy to a selected test OU. Use the
source-listed `gpresult` commands to review policy application. Compare the intended scope with
the observed result; do not change production policy.

## Key takeaways

- Groups organize identities for permissions; OUs organize directory objects and policy scope.
- Security and distribution groups have different purposes.
- GPO processing depends on scope, LSDOU order, inheritance, enforcement, and filtering.
- Verify access and applied policy in the isolated lab.

## Revision questions

1. How do standard, administrator, service, guest, and managed service accounts differ?
2. What distinguishes security groups from distribution groups?
3. What are the Domain Local, Global, and Universal scopes used for?
4. How do an OU and a security group differ?
5. What does LSDOU mean, and what can alter ordinary policy inheritance?
