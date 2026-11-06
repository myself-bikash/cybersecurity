# OWASP Web-Application Vulnerabilities

## Learning objectives

- Explain the source's 12 web-vulnerability topics and distinguish their root causes.
- Identify likely security impacts and appropriate defensive controls.
- Distinguish technical vulnerabilities that may look similar.
- Plan safe, evidence-based assessments of intentionally vulnerable local applications.

## OWASP Top 10:2025 context

The PDF names OWASP Top 10:2025 and presents the vulnerability topics below. Its lesson topics are
not a one-to-one reproduction of the OWASP category list. The source also contains incomplete
webpage-title/domain citations and does not provide a complete bibliography. No unsupported
category mapping or updated reference is inferred here.

## 1. SQL injection

**SQL injection (SQLi)** occurs when untrusted data is treated as part of a database query rather
than as data. A common root cause is unsafe query construction that combines user input with query
logic.

The source distinguishes in-band, error-based, UNION-based, blind, Boolean-based, and time-based
SQLi. In blind SQLi, information is inferred indirectly from application behavior rather than
returned as query results.

Potential impact includes unauthorized disclosure or modification of records and, in some
configurations, broader database compromise.

**Defenses:** parameterized queries or prepared statements; safe database APIs; least-privilege
database accounts; input validation as a supplement, not a substitute; generic error handling;
security testing and code review.

## 2. Cross-site scripting

**Cross-site scripting (XSS)** occurs when untrusted content is interpreted as executable content
in a user's browser. Source categories:

| Type | Description |
| --- | --- |
| Stored | Untrusted content is stored and later rendered to users. |
| Reflected | Untrusted request data is immediately reflected in a response. |
| DOM-based | Client-side code handles untrusted data unsafely and changes the document. |

Potential impact includes actions in a victim's browser, exposure of page data, and session-related
risks, depending on browser controls and application design.

**Defenses:** context-aware output encoding; safe templating; avoid unsafe DOM handling; validate
inputs; Content Security Policy as a defense-in-depth control; appropriate cookie protections.
Input validation alone does not replace correct output handling.

## 3. Cross-site request forgery

**Cross-site request forgery (CSRF)** is a browser-based attack in which a user's authenticated
browser is induced to submit an unwanted state-changing request to an application. It abuses the
browser's handling of credentials; it is not the same as stealing a password or executing script
in the target page.

**Defenses:** unpredictable server-validated CSRF tokens; appropriate SameSite cookie settings;
Origin/Referer validation where suitable; reauthentication or confirmation for sensitive actions;
avoid state changes through GET requests.

## 4. Broken access control and IDOR

**Broken access control** occurs when the application does not correctly enforce what an
authenticated user may do. **Insecure Direct Object Reference (IDOR)** is a form of access-control
failure in which access to an object is not properly checked. The source also discusses vertical
privilege escalation (access to higher-privilege functions) and horizontal access (another user's
data at a similar privilege level).

**Defenses:** authorize every operation on the server; verify ownership or explicit sharing
permissions for each object; deny by default; use least privilege; test role and ownership
boundaries; avoid treating an unpredictable identifier as authorization.

## 5. Authentication failures

Authentication failures include weak or reused credentials, weak password storage, missing
multifactor authentication for sensitive access, insecure account recovery, poor session
management, and insufficient protection against credential abuse.

**Defenses:** store passwords with a dedicated password-hashing scheme such as Argon2id and a
unique salt; support MFA; protect recovery flows; rate-limit authentication attempts; use secure
session handling; monitor unusual access; avoid disclosing whether a username exists.

## 6. Security misconfiguration

**Security misconfiguration** is an insecure setting in an application, framework, server, cloud
service, or deployment. Examples in the source include debug mode in production, default
credentials, unnecessary services, verbose errors, missing security headers, and overly permissive
cloud settings.

**Defenses:** secure baseline configuration; remove defaults and unused components; separate
development and production settings; restrict administrative interfaces; patch dependencies;
review cloud permissions; monitor configuration drift; avoid exposing stack traces to users.

## 7. Server-side request forgery

**Server-side request forgery (SSRF)** occurs when an application server can be induced to make
requests it was not intended to make. The server may have access to internal services or cloud
metadata unavailable to an external client. The source distinguishes basic, blind, and
out-of-band forms.

**Defenses:** allowlist approved destinations; validate and canonicalize URLs; restrict outbound
network access; block access to internal and metadata services at network boundaries; revalidate
redirect destinations; use a constrained fetch service; log and monitor outbound requests.

Do not test SSRF against public systems. Training should use a deliberately vulnerable local
application and synthetic internal services.

## 8. File-upload vulnerabilities

Upload flaws occur when an application accepts or processes files without sufficient validation or
isolation. Risks include malicious content, oversized files, unsafe file types, path or storage
issues, and exposure of uploaded content.

**Defenses:** allowlist expected file types; validate content rather than trusting a name or
extension; generate server-side storage names; enforce size limits; store files outside executable
web paths; scan where appropriate; restrict access; use safe content-disposition and serving
policies.

## 9. Path traversal

**Path traversal** occurs when untrusted input influences a filesystem path and allows access
outside the intended directory. It can expose or alter files if the application has sufficient
permissions.

**Defenses:** map user choices to server-controlled identifiers; canonicalize paths and verify
they remain inside an approved directory; avoid concatenating untrusted paths; use least privilege;
restrict filesystem access.

## 10. Insecure deserialization

**Deserialization** converts serialized data back into objects or data structures. Insecure
deserialization occurs when untrusted serialized data is accepted without safe validation and
handling. Depending on the format and implementation, this can cause data tampering or unsafe
program behavior.

**Defenses:** avoid deserializing untrusted native object formats; prefer simple data formats with
strict schemas; validate types and permitted fields; authenticate data where appropriate; keep
libraries updated; apply least privilege.

## 11. Cryptographic failures

Cryptographic failures occur when sensitive data is not adequately protected, including weak or
obsolete algorithms, improper key management, plaintext storage, or missing transport protection.

| Purpose | Appropriate concept |
| --- | --- |
| Protect data confidentiality | Encryption with well-managed keys. |
| Verify password guesses | Dedicated password hashing, such as Argon2id with a unique salt. |
| Verify integrity/authenticity | A suitable keyed or digital-signature mechanism. |

Encoding is not encryption, and fast general-purpose hashes are not suitable password-storage
schemes. **Defenses:** classify data; minimize collection and retention; use established
cryptographic libraries and current protocols; protect and rotate keys; use password hashing;
ensure HTTPS; avoid exposing secrets in logs.

## 12. Business-logic vulnerabilities

A **business-logic vulnerability** is a flaw in the application's intended workflow or rules. The
source's examples include completing a purchase without confirmed payment, bypassing a required
step, duplicate redemption of a one-time benefit, and incorrect quantity or price handling.

These flaws may not be found by a conventional scanner because they depend on application
requirements and state.

**Defenses:** define invariants and allowed state transitions; validate decisions server-side;
make sensitive operations atomic; verify payment and authorization before committing changes;
test unusual but valid user workflows; review business requirements with developers and owners.

## Definitions

| Term | Definition |
| --- | --- |
| SQL injection | Untrusted input is interpreted as database query logic. |
| XSS | Untrusted content is interpreted as executable content in a browser. |
| CSRF | An authenticated browser is induced to make an unwanted state-changing request. |
| IDOR | An access-control failure involving an object reference. |
| Vertical privilege escalation | A user obtains access to higher-privilege functionality. |
| SSRF | An application server is induced to make unintended requests. |
| File-upload vulnerability | An upload workflow accepts or handles content unsafely. |
| Path traversal | A crafted path escapes the intended filesystem location. |
| Deserialization | Converting serialized data back into an object or data structure. |
| Business-logic vulnerability | A flaw in workflow rules or state handling. |
| Parameterized query | A database query that keeps query structure separate from supplied values. |

## Comparisons

| Concepts | Difference |
| --- | --- |
| SQLi vs. XSS | SQLi targets database query interpretation; XSS targets browser interpretation. |
| XSS vs. CSRF | XSS executes in a page's browser context; CSRF abuses authenticated browser requests. |
| SSRF vs. CSRF | SSRF causes server-side requests; CSRF causes a victim browser to submit a request. |
| Authentication vs. access control | Authentication verifies identity; access control checks permitted actions and objects. |
| Path traversal vs. upload flaws | Traversal misuses filesystem paths; upload flaws concern accepting or handling files. |
| Technical vs. business-logic flaws | Technical flaws involve unsafe implementation; business-logic flaws violate workflow rules. |

## Tools and training environments

The PDF names Burp Suite, OWASP ZAP, SQLmap, Nmap, and Postman. They have different purposes,
including inspecting application traffic, authorized security assessment, network inventory, and
API development/testing. This lesson provides no commands or operational scanning procedures.

The source also names OWASP Juice Shop, DVWA, PortSwigger Web Security Academy, and WebGoat as
training resources. Use only a local, isolated installation or a training environment whose rules
explicitly authorize the activity. Do not direct testing at public websites or systems belonging to
others.

## Practical exercises

For each exercise, use a local training application or your own intentionally vulnerable
application. Focus on the security property and its repair; do not use exploit payloads or test
other people's accounts.

| Exercise | Safe learning objective |
| --- | --- |
| SQL injection | Review source code or a guided lab to locate unsafe query construction; confirm the fix uses parameterized access. |
| XSS | Trace where untrusted content is rendered; compare unsafe handling with context-aware output and safe DOM APIs. |
| CSRF | Review state-changing form protection and cookie policy; design a test for token validation. |
| Broken access control | Write authorization tests for permitted roles and object ownership in a local app. |
| Authentication | Review password storage, recovery, MFA, rate limiting, and session expiration. |
| Misconfiguration | Compare a local deployment against a secure configuration checklist. |
| SSRF | Diagram allowed and blocked outbound destinations in a synthetic lab; review network egress controls. |
| File upload | Review type, size, storage, and serving controls using harmless test files. |
| Path traversal | Review path handling and verify that canonicalized paths remain in a test directory. |
| Deserialization | Inspect accepted data formats and strict schema validation in a local code sample. |
| Cryptographic failures | Audit a sample design for plaintext storage, obsolete algorithms, and key-handling gaps. |
| Business logic | Model a purchase or one-time coupon workflow and write tests for its state invariants. |

**Steps and deliverable:** Choose three rows from the table and review the local training code or
provided scenario. For each, record the violated security property, likely root cause, safe
defensive test, and fix. Include one cross-cutting control and state which evidence would establish
the fix. Submit a three-finding comparison table; use only synthetic data and no exploit payloads.

## Key takeaways

- These vulnerabilities have distinct root causes; identify the trust boundary and missing control.
- Server-side authorization, safe query construction, output handling, and secure configuration are
  core defenses.
- Business-logic issues require understanding expected workflows, not only automated scanning.
- Evidence should be minimal, sanitized, and collected only in an authorized environment.

## Revision questions

1. What is the root cause of SQL injection, and what is its primary defense?
2. How do stored, reflected, and DOM-based XSS differ?
3. How do CSRF and SSRF differ?
4. What makes an IDOR an access-control problem rather than an authentication problem?
5. Why is a file extension alone insufficient for upload validation?
6. What is the difference between password hashing and encryption?
7. Give an example of a business rule that should be enforced atomically.
8. Which defenses apply across several of these vulnerability classes?

## Suggested answers

1. SQL injection occurs when untrusted input changes query structure; parameterized queries keep
   values separate from SQL instructions.
2. Stored XSS is saved and later served; reflected XSS is returned in a response to a request;
   DOM-based XSS arises from unsafe client-side source-to-sink handling.
3. CSRF tricks a user's browser into making an unwanted request to a site where they are
   authenticated; SSRF tricks a server into making an unintended request.
4. IDOR/BOLA occurs when the server fails to authorize access to a referenced object; the user
   may already be correctly authenticated.
5. File content can differ from its name suffix, so validate content/type, size, storage, and
   serving behavior rather than trusting extension alone.
6. Password hashing is one-way and purpose-built for verification; encryption is reversible with a
   key and should not be used as password storage.
7. For example, a payment or one-time coupon must be checked and marked consumed in one atomic
   transaction so concurrent requests cannot redeem it twice.
8. Server-side authorization, safe input handling, least privilege, secure configuration, careful
   error handling, logging, and code review can reduce several classes of risk.
