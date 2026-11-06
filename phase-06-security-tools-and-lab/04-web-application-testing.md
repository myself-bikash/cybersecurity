# Web-Application Testing

## Learning objectives

- Explain the roles and main components of Burp Suite and OWASP ZAP.
- Identify HTTP request, response, header, cookie, session, and parameter.
- Distinguish passive analysis from active scanning.
- Interpret scanner findings carefully in a local training application.

## Burp Suite

**Burp Suite** is a web-application security testing platform used to inspect, modify, and analyze
HTTP/HTTPS communication between a browser and server.

| Component | Purpose in the source |
| --- | --- |
| Proxy | Intercepts and displays browser/application communication. |
| Repeater | Allows a tester to study a request and response. |
| Intruder | Automates customized request testing; requires strict authorized scope. |
| Decoder | Encodes and decodes formats such as URL encoding and Base64. |
| Comparer | Compares two pieces of data, such as responses. |
| Sequencer | Analyzes randomness and quality of tokens such as session identifiers. |

HTTP concepts:

- **Request:** message sent from a client to a server.
- **Response:** message returned by a server.
- **Header:** additional request or response information.
- **Cookie:** data stored by a browser and sent to a website.
- **Session:** mechanism for maintaining an authenticated state.
- **Parameter:** input value supplied to an application.

The source notes that Community and Professional Editions have different capabilities; many
fundamental concepts can be learned with Community Edition.

### Local exercise

Use Burp Suite Community Edition with a local OWASP Juice Shop instance:

1. Configure a browser to use the local proxy.
2. Open the local test application and inspect a normal request.
3. Review its method, URL, headers, and body.
4. Study the request/response behavior with Repeater using only a harmless input change.
5. Compare and document the responses.

Do not direct the proxy or automated request testing at a public or third-party application.

## OWASP ZAP

**OWASP ZAP (Zed Attack Proxy)** is an open-source web-application testing tool that can sit
between a browser and application so requests and responses can be inspected.

| Feature | Purpose |
| --- | --- |
| Automated scanner | Tests selected weaknesses. |
| Passive scanner | Analyzes observed traffic without actively sending test payloads. |
| Active scanner | Sends specially constructed requests and can affect an application; use only with explicit authorization and a suitable test target. |
| Spider | Follows links and discovers resources. |
| AJAX Spider | Uses browser-based exploration for JavaScript-heavy applications. |
| Alerts | Displays potential issues identified during testing. |

The source's main uses include inspecting requests/responses, resource discovery, passive analysis,
authorized active testing, identifying potential vulnerabilities, and generating reports.

| Burp Suite | OWASP ZAP |
| --- | --- |
| Commercial platform with a free Community Edition. | Open-source testing tool. |
| Common in professional web testing. | Useful for learning and automated testing. |
| Proxy, Repeater, Intruder, and other tools. | Proxy, spiders, scanners, and automation. |
| Professional Edition adds capabilities. | Extensive features without a paid license. |

## Practical exercise

With OWASP ZAP and a local OWASP Juice Shop instance, observe browser traffic, explore pages,
review passive-scan alerts, examine the evidence behind each alert, and prepare a report. Automated
alerts are not automatically confirmed vulnerabilities; verify evidence before reporting a finding.
Do not use active scanning outside a system you own or have explicit permission to assess.

**Steps and deliverable:** In the local training app, proxy ordinary page navigation only. Select
one passive alert, record its title, affected component, supplied evidence, and one safe
verification question. Mark it confirmed, potential, or unverified based only on the evidence, then
write one remediation recommendation. Submit a sanitized one-page finding; do not send exploit
payloads or run an active scan.

## Key takeaways

- Burp Suite and ZAP help inspect web traffic and test application security.
- Passive analysis observes traffic; active scanning sends requests and may affect the target.
- Requests, responses, cookies, sessions, and parameters are important to application testing.
- Scanner results require manual evidence review and verification.

## Revision questions

1. What do the Proxy, Repeater, Decoder, Comparer, and Sequencer do?
2. What are a request, response, header, cookie, session, and parameter?
3. How do passive and active scanning differ?
4. How do Burp Suite and OWASP ZAP differ according to the source?
5. Why should an alert not be reported as a confirmed vulnerability without verification?

## Suggested answers

1. Proxy observes/intercepts requests; Repeater resends a selected request for controlled analysis;
   Decoder transforms encoded data; Comparer highlights differences; Sequencer evaluates token
   randomness.
2. A request asks a server for an operation; a response is its reply; headers carry metadata;
   cookies are client-held values; a session represents server-recognized state; parameters carry
   input values.
3. Passive scanning analyzes observed traffic without sending test requests; active scanning sends
   tests and can affect the target.
4. Both support web testing; Burp Suite and OWASP ZAP differ in licensing, interface, and features.
   Select based on scope and need, not an assumption that their outputs prove a flaw.
5. Alerts can be false positives or lack context; verify the security property and evidence before
   describing an issue as confirmed.
