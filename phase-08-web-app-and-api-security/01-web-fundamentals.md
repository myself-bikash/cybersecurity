# Web Fundamentals

## Learning objectives

- Explain client/server communication and the structure of HTTP requests and responses.
- Identify common HTTP methods, headers, cookies, and session controls.
- Distinguish authentication from authorization.
- Describe REST APIs, JSON, WebSockets, SOP, and CORS.
- Inspect local application behavior without testing an unapproved website.

## Client/server communication

**Client-server communication** occurs when a client requests information or a service and a server
processes the request and returns a response. A client is a device or application requesting a
service; a server receives, processes, and responds.

When opening a site, a browser resolves the server using DNS, establishes a connection, sends an
HTTP request, and receives an HTTP response. The server may query a database before responding.
In the source's banking example, the browser is the client, the bank's web server is the server, and
the database stores account and transaction records. The server should check the user's permissions
before returning account information.

Security concerns include exposed traffic, client-provided values trusted without server checks,
unauthorized access, and server-side weaknesses exposing databases.

## HTTP requests, responses, and status codes

**HTTP (Hypertext Transfer Protocol)** is an application-layer protocol for communication between
web clients and servers. A **request** asks for a resource or action; a **response** reports what
happened and may contain a response body.

Example request structure:

```http
GET /products HTTP/1.1
Host: example.com
User-Agent: browser
Accept: text/html
```

The method identifies the intended operation; the path identifies the resource; headers provide
context. A response includes a status code, headers, and possibly a body.

| Code | Name | Meaning |
| --- | --- | --- |
| 200 | OK | Request succeeded. |
| 201 | Created | Resource created successfully. |
| 301 | Moved Permanently | Resource permanently redirected. |
| 302 | Found | Temporary redirect. |
| 400 | Bad Request | Invalid request. |
| 401 | Unauthorized | Authentication is required or failed. |
| 403 | Forbidden | Access is not permitted. |
| 404 | Not Found | Resource does not exist or is unavailable. |
| 405 | Method Not Allowed | Method is unsupported for the resource. |
| 429 | Too Many Requests | Too many requests were received. |
| 500 | Internal Server Error | Server encountered an error. |
| 502 | Bad Gateway | Invalid response from an upstream server. |
| 503 | Service Unavailable | Service is temporarily unavailable. |

| HTTP | HTTPS |
| --- | --- |
| HTTP itself does not provide TLS protection; traffic can be exposed or modified in transit. | HTTP protected using TLS. |
| Commonly uses port 80. | Commonly uses port 443. |
| No TLS protection. | Correctly configured TLS provides confidentiality and integrity in transit. |

HTTPS does not automatically make an application secure; application vulnerabilities may remain.

## HTTP methods

Methods indicate the intended operation on a resource.

| Method | Purpose | Source example |
| --- | --- | --- |
| GET | Retrieve information. | View a user profile. |
| POST | Submit data or create a resource. | Register an account. |
| PUT | Replace a resource. | Replace a complete profile. |
| PATCH | Partially update a resource. | Change an email address. |
| DELETE | Delete a resource. | Delete an account. |
| HEAD | Retrieve headers without the response body. | Check resource metadata. |
| OPTIONS | Discover supported communication options. | Check allowed methods. |
| TRACE | Diagnostic method that reflects a received request. | Diagnose request handling. |

A **safe method** is intended not to change application state; the source names GET, HEAD, and
OPTIONS. An **idempotent method** produces the same intended state when repeated; the source names
GET, HEAD, PUT, DELETE, and OPTIONS. POST is not generally idempotent.

Security review considers unnecessary enabled methods, unauthorized updates/deletions, sensitive
information in GET parameters, and incorrect access restrictions. A method alone does not determine
whether an action is authorized.

## HTTP headers

Headers provide information about a request or response, including client, server, content,
authentication, caching, and security policy.

| Header | Purpose |
| --- | --- |
| Host | Identifies the target host. |
| User-Agent | Identifies client software. |
| Accept | Specifies acceptable response formats. |
| Content-Type | Specifies the body media type. |
| Authorization | Carries authentication information; redact secrets in reports. |
| Cookie / Set-Cookie | Sends cookies / instructs the browser to store one. |
| Origin | Identifies the request origin. |
| Referer | Identifies the referring URL when provided. |
| Cache-Control | Controls caching behavior. |
| Location | Identifies a redirect destination. |
| Access-Control-Allow-Origin | Specifies origins permitted by CORS. |

Security-related response headers named in the source:

| Header | Purpose |
| --- | --- |
| Content-Security-Policy | Helps reduce the impact of content-injection attacks. |
| Strict-Transport-Security | Enforces HTTPS for future connections. |
| X-Content-Type-Options | Helps prevent MIME-type sniffing. |
| Referrer-Policy | Controls referrer-information disclosure. |
| Permissions-Policy | Controls access to selected browser features. |
| X-Frame-Options | Controls whether a page can be embedded in frames. |

A server header that reveals a product or version may disclose information, but does not by itself
prove a vulnerability.

## Cookies and sessions

**Cookies** are small pieces of data stored by a browser and associated with a website. HTTP is
stateless; cookies can help preserve information between requests.

Simplified flow: a user logs in; the server creates a session identifier; the server sends a cookie;
the browser stores it and sends it with matching requests; the server uses it to identify the
session. Never place real secrets in course examples or reports.

| Cookie attribute | Purpose |
| --- | --- |
| Secure | Sends the cookie only over secure connections. |
| HttpOnly | Prevents JavaScript from accessing it through normal browser cookie APIs. |
| SameSite | Controls when cookies are sent with cross-site requests. |
| Expires / Max-Age | Sets an expiration date or lifetime. |
| Domain | Controls which hosts can receive the cookie. |
| Path | Controls which URL paths receive the cookie. |

Source cookie types: session cookies (normally expire when the browser session ends), persistent
cookies, first-party cookies, and third-party cookies. Risks include session hijacking, cookie
theft, fixation, cross-site scripting consequences, and insecure transmission.

A **session** maintains information about a user's interaction across requests. Session data may be
server-side or client-side, often in a signed or encrypted token. Security practices include
unpredictable identifiers, HTTPS, appropriate cookie attributes, identifier rotation after login or
privilege changes, expiration of inactive sessions, invalidation at logout, and protection from
fixation.

## Authentication and authorization

**Authentication** verifies identity; **authorization** determines permitted access.

| Authentication | Authorization |
| --- | --- |
| “Who are you?” | “What can you access?” |
| Happens before access decisions. | Follows identity verification. |
| Example: logging in. | Example: accessing an administrator dashboard. |

The source lists password, multifactor, biometric, token-based, and certificate-based
authentication. Factors include something known (password/PIN), possessed (security key/device),
and inherent (fingerprint/facial characteristic). Two passwords do not make two independent
factors.

Security review may consider weak passwords, credential abuse, missing MFA, insecure recovery,
account lockout, and improper session expiration.

## REST APIs and JSON

An **API (Application Programming Interface)** is a defined interface that lets software
applications communicate. **REST (Representational State Transfer)** is an architectural style
for networked applications; REST APIs commonly use HTTP methods on resources.

The source's example is a mobile banking application retrieving account information through an API.
Common operations include retrieving a collection or item, creating, replacing, partially updating,
and deleting a resource. API risks include weak authentication, broken authorization, excessive
data exposure, missing rate limits, poor validation, and leaked API keys.

**JSON (JavaScript Object Notation)** is a lightweight, language-independent format for structured
data exchange.

| JSON element | Meaning |
| --- | --- |
| Object | Collection of key/value pairs. |
| Key | Name used to identify a value. |
| Value | Actual information. |
| Array | Ordered collection. |
| String | Text. |
| Number | Numeric value. |
| Boolean | True or false. |
| Null | Empty or absent value. |

The server must not trust client-supplied values to determine permissions. Unsafe object binding
can create mass-assignment or access-control problems.

## WebSockets

**WebSockets** provide full-duplex communication between client and server over one long-lived
connection. Both sides can independently send and receive messages. The connection begins with an
HTTP request and server handshake, upgrades to WebSocket, and remains open until closed.

Source use cases include chat, multiplayer games, live market updates, notifications, collaborative
editing, and dashboards. Risks include missing authentication or authorization, weak origin
validation, unsafe message handling, injection, and sensitive-data exposure.

| HTTP | WebSockets |
| --- | --- |
| Request-response communication. | Full-duplex communication. |
| Typically independent requests. | Long-lived connection. |
| Common for websites and APIs. | Common for real-time applications. |

## Same-Origin Policy and CORS

**Same-Origin Policy (SOP)** is a browser control that restricts how documents and scripts from one
origin interact with another origin's resources. An origin consists of scheme, hostname, and port.
For example, `https://example.com:443` differs from the same host over HTTP, a subdomain, or a
different port.

SOP helps prevent one site from reading another site's sensitive data through a logged-in browser.
It does not prevent every cross-origin request; it primarily restricts cross-origin access to
responses and browser resources.

**CORS (Cross-Origin Resource Sharing)** is a browser-enforced mechanism by which servers specify
which origins may access resources through cross-origin browser requests. It uses response headers
such as:

| Header | Purpose |
| --- | --- |
| Access-Control-Allow-Origin | Permitted origins. |
| Access-Control-Allow-Methods | Permitted methods. |
| Access-Control-Allow-Headers | Permitted request headers. |
| Access-Control-Allow-Credentials | Whether credentials are allowed in qualifying requests. |
| Access-Control-Expose-Headers | Response headers visible to scripts. |
| Access-Control-Max-Age | How long preflight results may be cached. |

For certain requests, the browser sends an OPTIONS **preflight** to check permitted origin, method,
and headers; not every cross-origin request requires one. Overly permissive origin handling,
unsafe credential sharing, untrusted subdomains, and incorrect wildcards may expose sensitive
responses.

| SOP | CORS |
| --- | --- |
| Browser policy restricting cross-origin access. | Mechanism for controlled cross-origin access. |
| Establishes browser security boundaries. | Server authorizes selected cross-origin access through headers. |

CORS is not authentication or authorization and does not prevent direct requests from other clients.

## Practical exercises

Use your own application or a local training application:

1. In browser developer tools, inspect a request method, request/response headers, and status code.
2. Review local cookie domain, path, Secure, HttpOnly, and SameSite attributes.
3. Use a local or specifically intended test API to compare GET and POST request/response behavior.
4. Observe a local WebSocket handshake and messages.
5. Create two local origins, observe a CORS restriction, then configure the backend to allow only the
   intended local frontend origin.

## Key takeaways

- Client/server communication, HTTP, methods, headers, cookies, and sessions form the foundation
  of web applications.
- Authentication verifies identity; authorization checks permission.
- REST and WebSockets have different communication models; JSON represents structured data.
- SOP restricts browser cross-origin access; CORS permits controlled exceptions and is not an
  access-control substitute.

## Revision questions

1. Describe the browser/server/database flow.
2. How do HTTP requests and responses differ?
3. Which methods are safe or idempotent according to the source?
4. What do the listed cookie attributes control?
5. How do sessions maintain state?
6. What is the difference between authentication and authorization?
7. How do HTTP and WebSockets differ?
8. What are SOP and CORS, and what does CORS not do?
