# Identity and Privileged Access Management

## Learning objectives

- Define IAM and describe its lifecycle.
- Explain MFA factor categories, SSO, and RBAC.
- Distinguish IAM from PAM.
- Identify privileged accounts and describe common PAM controls.

## 1. Identity and Access Management

**Identity and Access Management (IAM)** is the framework of processes, technologies, and policies
used to manage digital identities and control access to organizational resources. It answers who a
user is, how identity is verified, what resources may be accessed, and when access should be removed.

| IAM component | Purpose |
| --- | --- |
| Identity management | Creates and manages digital identities. |
| Authentication | Verifies identities. |
| Authorization | Determines permissions. |
| Access control | Enforces access decisions. |
| Provisioning | Creates accounts and grants required access. |
| Deprovisioning | Removes access when no longer required. |
| Access review | Checks whether permissions remain appropriate. |
| SSO | Allows access to connected applications through a shared authentication process. |

### MFA, SSO, and RBAC

**Multi-Factor Authentication (MFA)** uses two or more different categories of factors:

- Something you know, such as a password or PIN.
- Something you have, such as a hardware security key or authentication device.
- Something you are, such as a biometric characteristic.

Two passwords are not two independent factors because both are in the knowledge category.
MFA adds a barrier if a password is compromised. The source identifies properly implemented
FIDO2 security keys as stronger than relying only on SMS codes or basic push approvals.

**Single Sign-On (SSO)** lets a user authenticate once and access multiple connected applications
without entering credentials separately for every application. It improves convenience but makes
the central identity provider a high-value target.
For example, an employee may sign in to a company identity platform and then access email, an HR
portal, internal applications, and approved cloud services.

**Role-Based Access Control (RBAC)** assigns permissions according to an organizational role,
such as HR, finance, IT support, security analyst, or system administrator.

### IAM lifecycle

1. Create an identity.
2. Provision required accounts and permissions.
3. Authenticate the user.
4. Authorize access according to role and policy.
5. Review whether access remains necessary.
6. Deprovision access when the user leaves or changes roles.

Failing to remove old permissions after a role change or departure can leave unnecessary access.

## 2. Privileged Access Management

**Privileged Access Management (PAM)** controls, monitors, and protects accounts with elevated
permissions. Privileged accounts may create users, change security policies, manage servers,
access confidential data, install software, or manage domain infrastructure.

Examples include Domain Administrator, Enterprise Administrator, server administrator, database
administrator, cloud administrator, and powerful service accounts.

| IAM | PAM |
| --- | --- |
| Broadly manages identities and access for ordinary and privileged users. | Focuses on powerful accounts, credentials, and sessions. |
| Handles account lifecycle and permissions. | Controls, monitors, and secures privileged access. |
| Example: employee account management. | Example: domain-administrator access management. |

PAM controls include:

1. **Just-in-Time (JIT) access:** elevated permissions only when needed and for a limited time.
2. **Credential vaulting:** stores privileged credentials in a protected system.
3. **Session monitoring:** records or monitors privileged sessions.
4. **Credential rotation:** changes privileged passwords or secrets periodically or after relevant events.
5. **Approval workflows:** authorize sensitive access before it is granted.
6. **Separate administrative accounts:** keep daily user activity distinct from administration.

Separating and monitoring privileged access can reduce the impact if an ordinary account is
compromised. For instance, an ordinary employee account should not also have permanent
administrator privileges.

## Practical exercise

For a fictional department transfer, create a simple access matrix showing the user's role before
and after the transfer. Identify permissions to provision, review, and remove. Then mark which
actions require a privileged account, approval, MFA, or time-limited access.

## Key takeaways

- IAM manages identity and access throughout its lifecycle.
- MFA factors come from different categories; two passwords are not MFA.
- SSO centralizes authentication and therefore needs strong protection.
- PAM adds controls for accounts with elevated permissions.

## Revision questions

1. What questions does IAM answer?
2. What are the three MFA factor categories?
3. How can SSO improve convenience and increase risk?
4. What is RBAC?
5. How do IAM and PAM differ?
6. Name four PAM controls.
