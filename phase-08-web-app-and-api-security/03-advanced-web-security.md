# Advanced Web Security

## Learning objectives

- Explain the source's advanced web-security topics and their common defensive controls.
- Distinguish token formats from authorization frameworks.
- Describe safe controls for authorization, concurrency, HTTP parsing, and shared caches.
- Plan a controlled assessment using an isolated training application.

## 1. DOM-based XSS

The **Document Object Model (DOM)** is a structured representation of a web document that scripts
can access and modify. **DOM-based XSS** occurs when client-side code handles untrusted data
unsafely and places it into a browser context that interprets it as content or code.

A **source** is where untrusted data enters client-side code, such as a URL component or message.
A **sink** is an operation that uses that data to update the page or execute behavior. Review
source-to-sink data flow; prefer safe DOM APIs that treat values as text, context-aware encoding,
and strict content policies. Avoid unsafe handling of untrusted data.

## 2. Blind SQL injection

**Blind SQL injection** is SQL injection in which database information is inferred indirectly from
application behavior rather than displayed in query output.

| Type | Observable behavior |
| --- | --- |
| Boolean-based | Application behavior differs for true and false conditions. |
| Time-based | Response timing differs when a condition affects processing. |

The defensive root cause and primary fix are the same as other SQL injection: keep data separate
from query structure with parameterized queries. Use least privilege, generic error handling, and
safe code review. Do not infer database content or test production systems.

## 3. Authentication bypass

**Authentication bypass** is unauthorized access caused by a failure in identity-verification
controls. Causes may include incomplete checks, inconsistent control paths, weak recovery
processes, unsafe session handling, or trust in client-controlled identity information.

**Defenses:** centralize and consistently apply authentication checks; protect account recovery;
validate sessions server-side; rotate session identifiers after authentication; require MFA where
appropriate; test all routes and alternate workflows; monitor authentication events.

## 4. JSON Web Tokens

A **JSON Web Token (JWT)** is a compact format for representing claims. In its common signed form,
it contains a header, payload, and signature. The header describes token metadata, the payload
contains claims, and the signature supports integrity/authenticity verification. A signed JWT
payload is encoded, not encrypted; do not put secrets in it.

The source identifies risks such as weak signing secrets, accepting an inappropriate algorithm,
incomplete signature or claim validation, missing expiration checks, unsafe storage, and treating
claims as authorization without server-side policy checks.

**Defenses:** use a trusted library; pin acceptable algorithms in server configuration; verify the
signature and expected issuer, audience, and expiration; use short lifetimes and rotation/revocation
strategies appropriate to the system; protect signing keys; avoid sensitive claims; enforce
authorization independently of token decoding.

| JWT | OAuth 2.0 |
| --- | --- |
| Token format for representing claims. | Authorization framework for delegated access. |
| May be signed or encrypted. | Can use multiple token formats. |
| Does not by itself establish authorization correctness. | Defines authorization flows, not a complete application authorization policy. |

## 5. OAuth 2.0 security

**OAuth 2.0** is an authorization framework that enables a client to obtain limited access to
protected resources. It is not, by itself, an authentication protocol. **OpenID Connect (OIDC)**
can provide identity information on top of OAuth.

| Role | Purpose |
| --- | --- |
| Resource owner | User or entity that owns the protected data. |
| Client | Application requesting delegated access. |
| Authorization server | Authenticates the user and issues authorization artifacts. |
| Resource server | Hosts protected resources and validates access. |

The source discusses authorization-code exchange, redirect URIs, state, scopes, token validation,
and **PKCE (Proof Key for Code Exchange)**. PKCE protects authorization-code exchanges by binding
the exchange to the client instance that initiated it.

**Defenses:** use a well-maintained protocol library; validate redirect URIs exactly; use and
validate state against request forgery; use PKCE; request minimum scopes; validate issuer,
audience, signature, and lifetime; keep authorization codes and tokens out of logs and public
locations; use secure transport.

| Authentication | OAuth 2.0 |
| --- | --- |
| Verifies identity. | Grants delegated access. |
| Answers “who is the user?” | Answers “what access was granted to this client?” |
| OIDC can provide identity information over OAuth. | OAuth alone is not an authentication protocol. |

## 6. API authorization

**API authorization** determines what an authenticated requester may access or perform. Enforce
both function-level permissions and object-level permissions.

| Model / risk | Meaning |
| --- | --- |
| RBAC | Access is assigned according to roles. |
| ABAC | Access depends on attributes such as user, resource, action, or context. |
| ReBAC | Access depends on relationships between entities. |
| BOLA | A requester accesses an object without the required object-level permission. |
| BFLA | A requester accesses a function without the required function-level permission. |

An authenticated user must not automatically be trusted with every object or operation. Verify
ownership, sharing rules, tenant boundaries, and role permissions on the server for every request.
Deny by default and test permissions at both object and function levels.

## 7. GraphQL security

**GraphQL** is a query language and runtime for APIs. Its schema defines types and relationships;
queries read data, mutations change data, and subscriptions support ongoing updates.

Security concerns in the source include weak field/resolver authorization, excessive data exposure,
unrestricted introspection in sensitive deployments, expensive or deeply nested queries, unsafe
input handling, and missing rate limits.

**Defenses:** authorize at resolver and field level; expose only required fields; validate and
constrain query depth and complexity; set resource limits and rate limits; validate inputs; monitor
errors and expensive requests; protect schema visibility according to the application's needs.

## 8. Race conditions and TOCTOU

A **race condition** is unsafe behavior that depends on the timing or ordering of concurrent
operations. **Time-of-check to time-of-use (TOCTOU)** is a race condition in which a resource
changes between a security check and its later use.

The source examples include duplicate redemption of a one-time benefit and a file changing after
its security check. Consequences may include repeated transactions, inconsistent state, or
unauthorized actions.

**Defenses:** enforce invariants in the database; use atomic transactions and appropriate
constraints; make operations idempotent where possible; use locking or concurrency controls where
required; ensure the resource checked is the resource used; test concurrent behavior in a local
application.

## 9. HTTP request smuggling

**HTTP request smuggling** is a vulnerability caused by inconsistent request parsing between
intermediary and backend systems. The source names `Content-Length` and `Transfer-Encoding` and
the CL.TE and TE.CL categories as examples of parser disagreements.

The risk is request desynchronization between components, which may affect how subsequent traffic
is interpreted. This topic is included conceptually only; no crafted requests or desynchronization
procedures are provided.

**Defenses:** use consistent, supported HTTP parsing across the request chain; reject ambiguous or
invalid message framing; normalize requests at a trusted boundary; keep proxy and server software
updated; test configurations with approved vendor tools and a dedicated isolated environment.

## 10. Web cache poisoning

**Web cache poisoning** occurs when an unintended or manipulated response is stored in a shared
cache and later served to other users. A cache stores responses to improve performance; examples
include CDN, reverse-proxy, browser, and application caches.

**Defenses:** design cache keys to include relevant response-varying inputs; avoid unsafe
untrusted-input influence; separate personalized and shared content; use suitable Cache-Control
policies; validate request values; test cache behavior safely across request variations.

## 11. Web cache deception

**Web cache deception** occurs when a private or personalized response is incorrectly classified
and stored as a shared cache resource. It primarily risks confidentiality and privacy.

**Defenses:** do not share-cache authenticated responses; use appropriate `Cache-Control: private`
or `no-store` policies; keep origin routing and cache rules consistent; separate private content
from public resources; review cache treatment of unusual URL paths and file extensions.

| Cache poisoning | Cache deception |
| --- | --- |
| Manipulates a response stored in a cache. | Causes a private response to be stored as shared content. |
| Primarily affects integrity or content served. | Primarily affects confidentiality and privacy. |

## Important definitions and comparisons

| Term | Definition |
| --- | --- |
| DOM | Structured representation of a web document. |
| Blind SQLi | SQL injection where information is inferred indirectly from behavior. |
| Authentication bypass | Unauthorized access caused by failed identity controls. |
| JWT signature | Cryptographic value used to verify token integrity and authenticity. |
| PKCE | OAuth extension that protects authorization-code exchanges. |
| Race condition | Vulnerability caused by unsafe timing or ordering of concurrent operations. |
| TOCTOU | Gap between checking and using a resource. |
| Request smuggling | Vulnerability caused by inconsistent HTTP request parsing. |
| Cache key | Information a cache uses to identify a cached response. |

| Comparison | Difference |
| --- | --- |
| Stored XSS vs. DOM-based XSS | Stored XSS is persisted and later rendered; DOM-based XSS comes from unsafe client-side handling. |
| Normal vs. blind SQLi | Normal SQLi may expose results directly; blind SQLi infers them indirectly. |
| REST vs. GraphQL | REST commonly uses resource endpoints; GraphQL lets clients request fields through a schema. |
| Race condition vs. TOCTOU | Race condition is broad; TOCTOU is a specific check/use gap. |
| Cache poisoning vs. cache deception | Poisoning manipulates a cached response; deception misclassifies private content as cacheable. |

## Tools named in the source

| Tool | Source-described purpose |
| --- | --- |
| Burp Suite | Inspect application traffic and review authentication, token, and cache behavior. |
| Turbo Intruder | Specialized request testing and race-condition research in controlled environments. |
| JWT.io | Inspect JWT structure and claims; never submit real secrets or production tokens to public services. |
| GraphQL Voyager | Visualize GraphQL schemas and relationships. |
| Postman | Test API requests, OAuth flows, and GraphQL behavior. |

Tool names do not authorize testing. Use tools only within an explicitly authorized, isolated lab.

## Practical exercises — safe advanced work

Use an isolated training application or your own code. Do not perform high-volume testing, access
other users' data, or test a production service without explicit written authorization.

| Exercise | Safe objective |
| --- | --- |
| DOM behavior | Trace untrusted data sources and sinks in a local sample; verify a safe rendering fix. |
| Blind SQLi prevention | Review query code and verify parameterization; do not infer database contents. |
| JWT review | Inspect a synthetic token's structure and document expected server-side validation. Never use a real token. |
| OAuth review | Diagram the roles, redirect URI validation, state, PKCE, scopes, and token checks. |
| GraphQL review | Review a local schema and write authorization, depth, and resource-limit requirements. |
| Concurrency | Test atomicity of a one-time operation in a local application using unit or integration tests. |
| HTTP parsing | Review proxy/server configuration and vendor guidance; do not construct desynchronization requests. |
| Cache behavior | Review cache keys and cache directives using synthetic, non-sensitive responses. |

The source recommends PortSwigger Web Security Academy labs. Use only a lab whose current rules
explicitly authorize the activity; the exercises above intentionally replace exploit procedures
with defensive review and safe test design.

## Key takeaways

- Client-side data flow, tokens, delegated access, and API authorization require distinct controls.
- JWTs and OAuth are related but not interchangeable; OAuth alone is not an authentication
  protocol.
- Enforce authorization at the object, function, and GraphQL field/resolver levels.
- Atomic state changes mitigate race conditions; consistent request parsing mitigates
  desynchronization risks.
- Shared-cache policy must separate public responses from personalized data.

## Revision questions

1. What are a DOM source and sink?
2. How do Boolean-based and time-based blind SQLi differ conceptually?
3. What is the difference between JWT and OAuth 2.0?
4. What do state and PKCE protect in an OAuth flow?
5. How do BOLA and BFLA differ?
6. What is TOCTOU?
7. Why can different HTTP parsers create a desynchronization risk?
8. How do cache poisoning and cache deception differ?
