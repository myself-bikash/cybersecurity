# Authentication

## Learning objectives

By the end of this lesson, you should be able to:

- Define authentication and identify the factor categories in the source.
- Compare password authentication, 2FA, MFA, biometrics, and SSO.
- Distinguish OAuth 2.0 from OIDC, SAML, and Kerberos.

## Authentication

Authentication verifies the identity of a person, device, application, or system before access to a
resource. The source asks, “Who are you?” Its example is a university portal checking a username and
password; another example is an email service checking that submitted credentials belong to the
account holder.

The source lists five kinds of evidence:

| Category | Examples |
| --- | --- |
| Something you know | Password or PIN. |
| Something you have | Security key, smartphone, authentication token. |
| Something you are | Fingerprint or facial recognition. |
| Somewhere you are | Location information as an additional signal. |
| Something you do | Behavioral characteristics such as typing patterns. |

The first three are the most commonly discussed factor categories in the source.

## Password authentication

Password authentication checks a secret associated with an account. The source lists weak, reused,
stolen, or guessed passwords, phishing, credential stuffing, and brute force as common problems.
Its example user enters the username `student01` and their secret password, which the application
verifies before granting access.

Best practices in the source: use long, unique passwords; avoid predictable ones; use a password
manager; enable MFA; never share passwords; and store passwords using secure password-hashing
algorithms.

## 2FA and MFA

- **2FA** requires exactly two different authentication factors. The source examples are password
  plus authenticator-app OTP, password plus security key, PIN plus fingerprint, and password plus
  hardware authentication device. Its banking example combines a password with an OTP from an
  authenticator application.
- **MFA** requires two or more independent factors from different categories. The source's
  three-factor example combines password, hardware key, and fingerprint.

| Feature | 2FA | MFA |
| --- | --- | --- |
| Number of factors | Exactly two. | Two or more. |
| Relationship | A type of MFA. | General category. |
| Example in source | Password + security key. | Password + key + fingerprint. |

Every properly implemented 2FA system is MFA, but not every MFA system uses exactly two factors.
The source notes that SMS OTP can be vulnerable to phishing, SIM swapping, or interception. It
describes appropriately configured FIDO2 security keys or passkeys as generally more
phishing-resistant than ordinary passwords and OTP codes.

## Biometric authentication

Biometric authentication verifies identity using physical or behavioral characteristics.

| Type | Source examples |
| --- | --- |
| Physical | Fingerprint, facial, iris, and retina recognition. |
| Behavioral | Typing patterns, voice, mouse movements, and walking patterns. |

The source's example is unlocking a phone with a fingerprint. Biometrics can be convenient and do
not require remembering a password, but can make mistakes, are sensitive, are hard to change, and
may be vulnerable to presentation attacks or spoofing if poorly designed. They still require secure
storage, privacy protection, and safeguards.

## Single Sign-On (SSO)

**SSO** lets users access multiple connected applications using one authentication session through
a central identity provider. The source's university example uses one sign-in for a student portal,
learning platform, email, and digital library.

The simplified flow is: user opens an application; it redirects to an identity provider; user
authenticates; the provider issues an authentication response or token; the application validates
it; access follows application permissions.

Benefits are fewer passwords, convenience, centralized identity, and easier account administration.
Risks include a compromised central account affecting multiple applications, dependence on the
identity provider, and session-management problems.

## OAuth 2.0 and OpenID Connect

**OAuth 2.0** is an authorization framework that lets an application obtain limited access to a
user's resources on another service without the user sharing their password. The source's example
is a photo-printing application requesting permission to access selected cloud photos.

OAuth components in the source: resource owner, client, authorization server, resource server,
access token, and scope. Other concepts include Authorization Code Flow, refresh tokens, redirect
URIs, and client authentication. OAuth 2.0 is primarily authorization, not a complete login or
authentication protocol by itself.

**OpenID Connect (OIDC)** is an identity and authentication layer built on OAuth 2.0. The source
example is “Sign in with Google.” Components include an identity provider, ID token, access token,
user-information endpoint, and authentication request. An ID token contains claims about the
authenticated user and authentication event.

| OAuth 2.0 | OIDC |
| --- | --- |
| Authorization framework; grants access to resources. | Authentication and identity layer; verifies user identity. |
| Uses access tokens. | Uses ID tokens and may also use access tokens. |
| Common for delegated API access. | Common for application login. |

## SAML

**SAML (Security Assertion Markup Language)** is an XML-based standard for exchanging
authentication- and authorization-related information between an identity provider (IdP) and
service provider (SP). It is commonly used for enterprise SSO.

The source's HR application example involves redirecting an employee to an IdP, authenticating,
sending a signed SAML assertion to the application, validating it, and granting access. Terms
include IdP, SP, SAML assertion, and SAML response. Benefits include enterprise SSO, centralized
authentication, and identity federation.

## Kerberos

**Kerberos** uses tickets and secret-key cryptography to authenticate users and services over an
insecure network; the source notes its use in Microsoft Active Directory environments.

| Component | Role |
| --- | --- |
| Client | User or system requesting access. |
| KDC | Trusted service managing authentication tickets. |
| Authentication Server (AS) | Verifies initial authentication and issues a TGT. |
| Ticket-Granting Server (TGS) | Issues service tickets. |
| Service server | System the user wants to access. |

Simplified flow: user logs in; client contacts AS; user receives a Ticket-Granting Ticket (TGT);
client requests a service ticket from TGS; client presents it to the target service; service
verifies it and grants access. The source lists ticket-based authentication, not repeatedly sending
passwords to each service, and support for mutual authentication in appropriate configurations as
advantages.

## Authentication technology comparison

| Technology | Main purpose | Common use in the source |
| --- | --- | --- |
| Password | Verify identity with a secret. | Website login. |
| 2FA | Verify identity using two factors. | Banking. |
| MFA | Verify identity using multiple factors. | Corporate systems. |
| Biometrics | Verify physical or behavioral characteristics. | Smartphone login. |
| SSO | One session for multiple applications. | Enterprise applications. |
| OAuth 2.0 | Delegated authorization. | API access. |
| OIDC | Authentication and identity. | Social login. |
| SAML | Exchange identity assertions. | Enterprise SSO. |
| Kerberos | Ticket-based network authentication. | Active Directory. |

## Practical exercises

1. Identify the factors in password-only, fingerprint, password-plus-security-key, and PIN-plus-face
   examples.
2. Research how a university or company uses one account across multiple services; identify IdP
   and service providers.
3. Map the client, resource owner, authorization server, and access token in a sample OAuth
   authorization scenario.
4. Compare OIDC and SAML purposes, tokens/assertions, and use cases.
5. Draw the Kerberos client/KDC/TGT/service-ticket/target-service flow.

Use only accounts and systems you are authorized to study; do not capture real authentication
secrets.

## Key takeaways

- Authentication verifies identity; factors may be knowledge, possession, inherence, location, or
  behavior.
- 2FA uses exactly two factors; MFA uses two or more independent factors.
- OAuth 2.0 provides delegated authorization; OIDC adds identity and authentication.
- SAML exchanges identity assertions; Kerberos uses tickets.
- Central identity services and biometric information require careful protection.

## Revision questions

1. What are the factor categories in the source?
2. How do 2FA and MFA differ?
3. What are the source's biometric advantages and limitations?
4. How does SSO work at a high level?
5. Why is OAuth 2.0 not, by itself, a full login protocol?
6. How do OIDC and SAML differ?
7. Name the Kerberos components and summarize the ticket flow.
