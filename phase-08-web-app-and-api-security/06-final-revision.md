# Final Revision and Assessments

## Module 2: Web-vulnerability examination questions

Select one answer for each question. The PDF supplies answer choices but no answer key; no answers
are marked here.

1. What does OWASP stand for?
   - Open Web Application Security Project
   - Open Worldwide Application Security Project
   - Online Web Application Safety Program
   - Open Website Access Security Protocol
2. What is the primary cause of SQL injection?
   - Weak internet connection
   - Unsafe construction of SQL queries using untrusted input
   - Missing HTTPS certificate
   - Weak Wi-Fi password
3. Which SQL injection type uses response delays to infer database information?
   - Stored SQLi
   - UNION-based SQLi
   - Time-based blind SQLi
   - Error-based SQLi
4. Which XSS type stores untrusted content on the server?
   - Reflected XSS
   - Stored XSS
   - DOM-based XSS
   - Blind XSS
5. What is the primary purpose of a CSRF token?
   - Encrypt database passwords
   - Help verify that a state-changing request is legitimate
   - Hide the server IP
   - Prevent SQL injection
6. A user accesses another user's private profile by changing an object reference. What
   vulnerability may exist?
   - SSRF
   - IDOR
   - SQL injection
   - Cryptographic failure
7. What is vertical privilege escalation?
   - Accessing another user's account at the same permission level
   - Gaining access to higher-privilege functionality
   - Changing an IP address
   - Reading browser cookies
8. What is a common security misconfiguration?
   - Using parameterized queries
   - Enabling debug mode in production
   - Using MFA
   - Disabling unnecessary services
9. What does SSRF exploit?
   - The victim's browser making requests
   - A server being tricked into making unintended requests
   - A weak Wi-Fi password
   - An incorrectly hashed password
10. Which cloud-related resource may be exposed through SSRF?
    - Keyboard settings
    - Cloud instance metadata service
    - Monitor brightness
    - Browser bookmarks
11. Why is checking only a file extension insufficient for secure uploads?
    - Extensions are always encrypted
    - A file's actual content may not match its extension
    - Extensions cannot be changed
    - Browsers do not support extensions
12. What is the general meaning of a relative path traversal?
    - Moving outside the intended directory
    - Deleting a directory
    - Encrypting a directory
    - Creating a directory
13. What is deserialization?
    - Encrypting a password
    - Converting serialized data back into an object or data structure
    - Deleting database records
    - Creating an HTTP request
14. Which algorithm is suitable for password hashing?
    - MD5
    - Plain SHA-1
    - Argon2id
    - Base64
15. An e-commerce application allows a purchase without verifying payment completion. What
    vulnerability may exist?
    - Business-logic vulnerability
    - DNS spoofing
    - Path traversal
    - Reflected XSS
16. What is the primary defense against SQL injection?
    - Parameterized queries
    - Hiding the login button
    - Disabling JavaScript
    - Changing the website logo

## Learning sequence from the source

| Order | Topic | Training focus |
| --- | --- | --- |
| 1 | SQL injection | Safe query construction and parameterized access. |
| 2 | XSS | Context-aware output and safe client-side handling. |
| 3 | CSRF | Request integrity and cookie policy. |
| 4 | Broken access control | Server-side role and object authorization. |
| 5 | Authentication failures | Account, recovery, and session controls. |
| 6 | Security misconfiguration | Secure baseline and deployment review. |
| 7 | SSRF | Outbound request restrictions in a synthetic lab. |
| 8 | File upload | Validation, storage, and serving controls. |
| 9 | Path traversal | Safe path resolution in local code. |
| 10 | Insecure deserialization | Strict formats and schema validation. |
| 11 | Cryptographic failures | Password hashing, transport protection, and key management. |
| 12 | Business logic | Workflow invariants and atomic state changes. |

## Module completion checklists

### Web fundamentals

- [ ] Explain the client/server request-response flow.
- [ ] Recognize methods, status codes, and security headers.
- [ ] Describe cookie and session protections.
- [ ] Distinguish authentication and authorization.
- [ ] Explain REST, JSON, and WebSockets.
- [ ] Explain SOP, CORS, and their limits.

### OWASP web-application vulnerabilities

- [ ] Understand all 12 vulnerability topics.
- [ ] Distinguish SQL injection, XSS, and CSRF.
- [ ] Explain IDOR and privilege escalation.
- [ ] Understand authentication failures and security misconfiguration.
- [ ] Explain SSRF and the risk of unintended internal requests.
- [ ] Explain upload and path-handling risks.
- [ ] Understand insecure deserialization.
- [ ] Explain cryptographic failures.
- [ ] Explain business-logic vulnerabilities.
- [ ] Complete at least five safe training exercises.
- [ ] Prepare one vulnerability-assessment report.
- [ ] Complete the 16-question examination.

### Advanced web security

- [ ] Understand DOM-based XSS and source/sink data flow.
- [ ] Distinguish Boolean-based and time-based blind SQLi conceptually.
- [ ] Understand authentication-bypass risks.
- [ ] Understand JWT structure and validation requirements.
- [ ] Explain OAuth 2.0 and PKCE.
- [ ] Explain API authorization and BOLA.
- [ ] Understand GraphQL queries, mutations, and security controls.
- [ ] Explain race conditions and TOCTOU.
- [ ] Explain HTTP request smuggling at a conceptual level.
- [ ] Distinguish web cache poisoning and cache deception.
- [ ] Complete safe, defensive training exercises.
- [ ] Prepare the advanced security report.

The source checklist says to pass a module examination, but no Module 3 examination questions are
present in the reviewed source content.

### API security

- [ ] Explain API authentication and authorization separately.
- [ ] Apply object- and function-level authorization.
- [ ] Describe rate limiting and input validation.
- [ ] Prevent mass assignment with explicit writable fields.
- [ ] Explain BOLA and test ownership boundaries using synthetic data.
- [ ] Store, scope, rotate, monitor, and revoke API keys.
- [ ] Complete the secure REST API project and retest its controls.

## Practical review: trace and protect one request

Use a local application or a supplied synthetic request/response example. Trace one request from
browser through API, authorization check, application logic, and data store. Mark where identity,
object permission, input validation, and response/cache policy are enforced. Identify one possible
failure from the lesson topics and propose a fix and safe retest.

**Deliverable:** Submit a one-page annotated flow, one risk/fix entry, and the expected retest
result. Do not use real accounts, production traffic, or live targets.

## Phase 8 final reflection questions

Answer in your own words:

1. Which security controls belong in the browser, API, application server, database, and deployment?
2. Why is authentication insufficient without object-level authorization?
3. Which controls protect confidentiality, integrity, and availability in a web application?
4. How would you make a payment or one-time redemption operation safe under concurrency?
5. How should an application distinguish public cacheable responses from private responses?
6. What scope and evidence rules make a security assessment authorized and reproducible?

## Suggested answers

### Module 2: Web-vulnerability examination

1. **Open Worldwide Application Security Project** is the correct choice; OWASP is the organization's
   name.
2. **Unsafe construction of SQL queries using untrusted input**; input can change query meaning.
3. **Time-based blind SQLi**; it infers behavior from response timing.
4. **Stored XSS**; untrusted content is saved and later rendered.
5. **Help verify that a state-changing request is legitimate**; a token helps distinguish an
   intended form submission from a cross-site request.
6. **IDOR**; access to a referenced object was not properly authorized.
7. **Gaining access to higher-privilege functionality**; that is vertical escalation.
8. **Enabling debug mode in production**; it may expose sensitive diagnostic information.
9. **A server being tricked into making unintended requests**; SSRF abuses server-side request
   behavior.
10. **Cloud instance metadata service**; it may expose sensitive instance information if reachable.
11. **A file's actual content may not match its extension**; validate content and safe handling.
12. **Moving outside the intended directory**; traversal bypasses the intended path boundary.
13. **Converting serialized data back into an object or data structure**.
14. **Argon2id**; it is purpose-built for password hashing, unlike fast general-purpose hashes.
15. **Business-logic vulnerability**; the workflow fails to enforce a required payment condition.
16. **Parameterized queries**; input values remain separate from SQL syntax.

### Final reflection

1. Enforce rendering controls in the browser, authentication/authorization and validation in the
   API/application, least privilege and integrity in the database, and secure configuration/secrets
   in deployment; no single layer replaces the others.
2. Authentication proves who is calling; object-level authorization must still decide whether that
   identity may read or change the particular record.
3. Confidentiality: authorization and encryption; integrity: validation, transactions, and audit;
   availability: limits, resilience, backups, and monitoring.
4. Check and consume the entitlement in one atomic transaction with a uniqueness/state constraint;
   return a single clear outcome for concurrent requests.
5. Cache only intentionally public responses with correct keys/directives; mark personalized or
   sensitive responses private/no-store as appropriate and verify intermediary behavior.
6. Define written targets, actions, exclusions, and time window; use minimal sanitized evidence,
   record sources and methods, and report limits so another reviewer can reproduce the safe check.

## Phase completion checklist

- [ ] Complete each lesson's objectives, practical exercise, takeaways, and revision questions.
- [ ] Complete the web-vulnerability assessment project.
- [ ] Complete the advanced application review.
- [ ] Build and secure a local REST API.
- [ ] Record findings with sanitized evidence, remediation, and retest results.
- [ ] Confirm all practice remained within owned, explicitly authorized, or isolated systems.
