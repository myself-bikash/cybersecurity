# API Security

## Learning objectives

- Explain REST API security, authentication, and authorization.
- Describe rate limiting, input validation, mass assignment, BOLA, and API-key management.
- Apply object-level authorization and least privilege in a small API design.
- Plan a safe security review of an API that you own or are explicitly authorized to test.

## 1. REST API security

An **API (Application Programming Interface)** allows software applications to communicate.
**REST** is an architectural style commonly used for network APIs. API security protects requests,
resources, and data from unauthorized access, misuse, and abuse.

An API can use REST, a token for authentication, and RBAC for authorization at the same time. These
are related but distinct concerns:

| Concept | Main purpose |
| --- | --- |
| REST | Architectural style for an API. |
| Authentication | Verifies the requester's identity. |
| Authorization | Determines what an authenticated requester may do. |

Important risks include weak authentication, missing object- or function-level authorization,
excessive data exposure, missing rate limits, poor validation, mass assignment, and exposed API
keys.

## 2. API authentication

**API authentication** verifies the identity of an API requester. The source lists passwords, API
keys, and token-based authentication among common approaches. Credentials must be protected in
transit, stored safely, validated server-side, and revoked or rotated when needed.

The source contains an API authentication-method label redacted as `****** authentication`. Its
exact name cannot be recovered, so it is not guessed or expanded here.

Authentication alone does not grant access to every object or operation. A correctly authenticated
user may still be unauthorized to read another user's records.

## 3. API authorization

**API authorization** determines which resources and actions a requester is permitted to use.
Authorization should be enforced by the server for every relevant operation.

| Model | Access decision is based on |
| --- | --- |
| RBAC | Assigned user or service role. |
| ABAC | Attributes of the requester, resource, action, or context. |
| ReBAC | Relationships between users and resources. |

Use least privilege, deny by default, check object ownership or sharing, enforce function-level
permissions, and avoid returning more information than the client needs. Do not rely on hidden
buttons, client-side checks, or an unguessable object identifier as the authorization decision.

## 4. Rate limiting

**Rate limiting** restricts how many requests a client, user, or other key may make in a period.
It can reduce abuse, resource exhaustion, and repeated attempts against sensitive operations.

The source lists fixed-window, sliding-window, token-bucket, and leaky-bucket approaches. A
well-designed API communicates throttling consistently; HTTP 429 indicates too many requests.

Choose limits based on the operation, user experience, and threat model. Consider account- and
network-level signals, distributed clients, sensitive endpoints, and service capacity. Avoid
revealing sensitive account state in rate-limit responses.

## 5. Input validation

**Input validation** checks incoming data against defined rules. Validate at the server boundary,
including body, query, path, header, and uploaded data where relevant.

Consider types, permitted values, lengths, formats, ranges, and cross-field rules. Reject malformed
or unexpected input safely. Validation is not a substitute for parameterized database access,
context-aware output encoding, authorization, or secure business logic.

| Input validation | Output encoding |
| --- | --- |
| Checks whether received data conforms to expected rules. | Safely represents data in its output context. |
| Applied when data enters an application boundary. | Applied when data is rendered or emitted. |

## 6. Mass assignment

**Mass assignment** occurs when user-submitted values are automatically copied into internal
object properties without adequate restrictions. A user may be able to influence fields that
should be controlled only by server logic.

**Defenses:** use explicit request schemas or data-transfer objects; allowlist fields per operation;
keep privileged and internal fields out of user-editable models; enforce authorization for every
change; validate the resulting state; test that unexpected fields are rejected or ignored.

## 7. Broken Object-Level Authorization

**Broken Object-Level Authorization (BOLA)** occurs when an API does not verify that the requester
is permitted to access a specific object. Authentication may be working correctly while the
object-level permission check is missing or incorrect.

**Defenses:** scope database lookups to the authenticated principal's permitted objects; verify
ownership, tenant boundaries, or explicit sharing for every read and write; use server-side policy
checks; deny by default; test with separate accounts and synthetic data in a local lab.

| BOLA | Authentication failure |
| --- | --- |
| Identity may be verified, but access to a particular object is not properly checked. | Identity verification is absent or incorrect. |

## 8. API-key management

An **API key** is a credential used to identify or authorize an application or client. **API-key
management** includes secure creation, storage, distribution, monitoring, rotation, and revocation.

Risks include keys committed to source control, embedded in public frontend code, over-permissioned
keys, long-lived keys, and missing rotation or monitoring.

**Defenses:** keep secrets out of source code and client bundles; use a secrets manager or protected
server-side configuration; scope keys to the minimum required access; rotate and revoke keys;
monitor use; avoid logging complete key values.

The source names AWS Secrets Manager, Google Cloud Secret Manager, Azure Key Vault, and HashiCorp
Vault as examples of secret-management services. Tool choice depends on the system and its
deployment.

## Practical tools and training environments

The source names Postman, Burp Suite, OWASP ZAP, OWASP crAPI, and OWASP Juice Shop. Postman can
support API development and request review; Burp Suite and ZAP support authorized application
assessment; crAPI and Juice Shop are deliberately vulnerable training applications.

Use only a local, isolated training environment or an API for which you have explicit
authorization. Do not test public APIs, make high-volume requests, or access data belonging to
other people.

## Safe practical exercises

1. **Review a vulnerable local API:** use two synthetic accounts and document the expected
   ownership boundary. Use only a provided training scenario; do not access real users' data.
2. **Create an API control matrix:** for authentication, authorization, BOLA, rate limiting,
   validation, mass assignment, and API keys, record the expected control and a safe test.
3. **Build a small user-management API:** the source suggests Python, FastAPI, PostgreSQL,
   SQLAlchemy, and Pydantic. Suggested operations are registration, login, viewing and updating
   one's profile, viewing a permitted user, and deleting a permitted user.
4. **Review your own API:** verify protected operations require authentication; users can only
   access permitted objects; protected fields cannot be changed by ordinary clients; invalid data
   and oversized requests are rejected; sensitive requests are rate-limited; expired tokens are
   rejected; secrets are absent from public code; responses contain only necessary data; and errors
   do not expose internals.

The source's suggested API security requirements:

- Hash passwords with an appropriate password-hashing scheme.
- Require authentication for protected operations.
- Enforce object-level authorization.
- Validate request data and prevent mass assignment.
- Apply rate limits.
- Keep secrets outside source code.
- Use HTTPS in deployment.
- Log security-relevant events without recording passwords or complete tokens.

## Important definitions

| Term | Definition |
| --- | --- |
| API | Interface through which software applications communicate. |
| REST API | API designed using REST architectural principles. |
| API authentication | Verification of an API requester's identity. |
| API authorization | Determination of permitted actions and resources. |
| Rate limiting | Restriction on request frequency within a time period. |
| Input validation | Checking incoming data against defined rules. |
| Mass assignment | Copying submitted values to internal properties without adequate restrictions. |
| BOLA | Authorization vulnerability involving access to specific objects. |
| API key | Credential used to identify or authorize a client. |
| API-key management | Secure creation, storage, monitoring, rotation, and revocation of keys. |

## Key takeaways

- REST describes API architecture; authentication and authorization solve different problems.
- Authorization must be checked for each object and operation, including access within a tenant.
- Validation, rate limits, and explicit request schemas reduce risk but do not replace
  authorization.
- API keys and tokens are secrets: scope, store, monitor, rotate, and revoke them safely.
- Security testing is appropriate only for owned systems or systems with explicit authorization.

## Revision questions

1. Can an API authenticate a user correctly and still be vulnerable? Explain.
2. How do RBAC, ABAC, and ReBAC differ?
3. What kinds of operations benefit from rate limiting?
4. How do input validation and output encoding differ?
5. What makes mass assignment possible?
6. How does BOLA differ from an authentication failure?
7. List the lifecycle stages of API-key management.
8. Why should logs omit complete tokens and passwords?
