# Phase 8: Web Application and API Security

## Phase objective

Understand web and API architecture, HTTP, identity and session handling, browser security,
common web vulnerabilities, advanced application risks, and secure API design.

## Lessons

1. [Web fundamentals](01-web-fundamentals.md)
2. [OWASP web-application vulnerabilities](02-owasp-web-vulnerabilities.md)
3. [Advanced web security](03-advanced-web-security.md)
4. [API security](04-api-security.md)
5. [Practical projects](05-practical-projects.md)
6. [Final revision and assessments](06-final-revision.md)

## Progress checklist

- [ ] Explain HTTP, cookies, sessions, authentication, authorization, APIs, WebSockets, SOP, and
  CORS.
- [ ] Recognize the 12 web-vulnerability topics and their defensive controls.
- [ ] Explain the advanced web-security topics without relying on exploit payloads.
- [ ] Design APIs with server-side authorization, validation, rate limits, and safe secret handling.
- [ ] Complete the projects using only owned, explicitly authorized, or isolated training systems.

## Safety and source notes

Use your own applications or intentionally vulnerable training applications in an isolated
environment. This phase describes vulnerabilities and defenses but does not include exploit
payloads, request-smuggling sequences, credential attacks, or procedures for accessing another
user's data.

The PDF names OWASP Top 10:2025 and includes incomplete webpage-title/domain citations without a
complete bibliography. It also contains a redacted API authentication-method label (`******`);
the exact term cannot be recovered, so it is identified as unresolved rather than guessed.

## Competency checkpoint

Review a fictional sign-in or API design. Identify its trust boundaries, the server-side access
decision, one relevant risk, and a defensive change. Use a written scenario or local training
application; do not test another user's data.
