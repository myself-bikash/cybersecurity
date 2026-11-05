# Practical Projects

## Safety and authorization

Every project is restricted to an application you own, a deliberately vulnerable application
running in an isolated lab, or a target for which you have explicit written authorization. Use
synthetic accounts and data. Do not probe public services, access real users' information, or
perform high-volume tests.

The original PDF describes penetration-testing projects and reproduction evidence. This course
keeps the learning objectives but replaces exploit procedures with defensive design review,
controlled tests, and sanitized evidence.

## Project 1: Web application vulnerability assessment

**Source project title:** Web Application Vulnerability Assessment Report.

**Objective:** Assess OWASP Juice Shop or another deliberately vulnerable application in an
authorized, isolated environment; document confirmed findings, remediation, and retest results.

### Project stages

1. **Scope and authorization:** record the local target, permitted actions, exclusions, and safety
   limits before starting.
2. **Application inventory:** document pages, input types, authentication flows, and application
   components without collecting real user data.
3. **Control review:** use source review, safe configuration checks, and provided training
   scenarios to assess the 12 topics in
   [OWASP web-application vulnerabilities](02-owasp-web-vulnerabilities.md).
4. **Evidence:** retain only minimal, sanitized evidence from the lab. Distinguish suspected
   weaknesses from verified findings.
5. **Remediation:** propose and implement fixes in the training application or a local copy.
6. **Retest:** repeat the safe test and record whether the original security property now holds.
7. **Report:** summarize impact, root cause, recommended fix, and retest status.

### Source topics to cover

SQL injection, XSS, CSRF, broken access control, authentication failures, security
misconfiguration, SSRF, file-upload vulnerabilities, path traversal, insecure deserialization,
cryptographic failures, and business-logic vulnerabilities.

### Finding template

| Field | Record |
| --- | --- |
| Finding name | Clear vulnerability name. |
| Location | Local page, component, or endpoint; do not include sensitive data. |
| Severity | Critical, High, Medium, or Low, with a stated rationale. |
| Description | What security property fails. |
| Evidence | Minimal, sanitized lab evidence. |
| Impact | Plausible effect in the authorized environment. |
| Root cause | Design, code, or configuration cause. |
| Recommendation | Specific defensive change. |
| Retest | Result after the fix. |

## Project 2: Advanced web-application security review

**Source project title:** Advanced Web Application Penetration Testing and Security Report.

**Objective:** Review advanced application controls in an authorized training application and
produce a security report that connects design decisions to mitigations.

### Project stages

| Stage | Safe project work |
| --- | --- |
| Architecture | Diagram the application, trusted boundaries, and expected data flows. |
| Client-side review | Trace how untrusted data reaches browser rendering; document safe handling. |
| Database review | Review query construction and confirm parameterized access in local code. |
| Authentication | Review login, recovery, session, and MFA design. |
| Token review | Use synthetic tokens to document expected signature and claim validation. |
| OAuth review | Diagram roles, redirect validation, state, PKCE, scopes, and token checks. |
| API authorization | Write tests for role, function, object, and tenant boundaries using synthetic accounts. |
| GraphQL review | Review resolver/field authorization, schema exposure, query limits, and error handling. |
| Concurrency review | Write local tests for atomic state transitions and one-time operations. |
| HTTP review | Review proxy/server configuration and approved vendor guidance; do not craft smuggling traffic. |
| Cache review | Verify that private responses are not shared and cache keys/directives are appropriate. |
| Reporting | Document confirmed control gaps, impact, root cause, remediation, and retest status. |

### Required report

1. Executive summary.
2. Application architecture and authorized scope.
3. Defensive testing methodology.
4. Confirmed findings and sanitized evidence.
5. Severity rationale and business impact.
6. Root cause and recommended remediation.
7. Retesting results.

The source also lists reproduction steps as a report field. For this course, keep any reproduction
details within the isolated lab, avoid exploit payloads, and provide only the minimum safe
information needed for the owner to verify the issue.

## Project 3: Build and secure a REST API

**Source project title:** Secure REST API Development and Penetration Testing.

**Objective:** Build a small user-management API, implement security controls, and verify those
controls with local tests.

### Suggested architecture

Client → HTTPS → API gateway/rate limiter → REST API server → authentication, authorization,
validation, and business logic → database.

### Suggested development stages

1. Design API resources and permitted operations.
2. Build registration and login.
3. Implement authentication.
4. Implement authorization.
5. Add input validation.
6. Prevent mass assignment.
7. Add object-level authorization.
8. Add rate limiting.
9. Secure API keys and other secrets.
10. Write local security tests.
11. Fix and retest identified weaknesses.
12. Prepare the security report and API documentation.

### Security requirements

- Hash passwords with an appropriate password-hashing scheme.
- Require authentication for protected operations.
- Enforce object-level authorization.
- Validate request data and use explicit writable-field schemas.
- Apply suitable rate limits.
- Keep secrets outside source code and frontend bundles.
- Use HTTPS in deployment.
- Log relevant security events without logging passwords or complete tokens.
- Return only necessary information and avoid exposing internal errors.

### Final deliverables

1. Working REST API.
2. API documentation.
3. Database design.
4. Authentication and authorization implementation.
5. Local security test cases.
6. Vulnerability report.
7. Fixed and retested application.

## Project evaluation checklist

- [ ] Scope and authorization are documented before testing.
- [ ] Only isolated or explicitly authorized systems are used.
- [ ] Accounts and data are synthetic.
- [ ] Each finding has a clear security property, root cause, and impact.
- [ ] Evidence is minimal and sanitized.
- [ ] Severity is justified rather than guessed.
- [ ] Recommendations address the underlying cause.
- [ ] Fixes are retested.
- [ ] Secrets and personal data are not included in the report.
- [ ] The final report distinguishes confirmed findings from hypotheses.
