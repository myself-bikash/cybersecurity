# JavaScript

## Learning objectives

By the end of this lesson, you should be able to:

- Describe JavaScript's role in interactive websites and web-application security.
- Identify the source's JavaScript syllabus.
- Relate the listed browser and client-side topics to security learning.

## What is JavaScript?

JavaScript is a programming language primarily used to make websites interactive. The source
identifies it as important for web-application security.

The **Document Object Model (DOM)** is the browser's structured representation of a page; JavaScript
can read or change that representation in response to events. The Same-Origin Policy (SOP) limits
how one origin's scripts can interact with resources from another origin. Browser storage and
cookies are client-side data mechanisms; a session is the server- or application-recognized period
of interaction, often associated with a cookie or token.

## JavaScript syllabus

1. Variables and data types.
2. Operators.
3. Conditions.
4. Loops.
5. Functions.
6. Arrays and objects.
7. DOM manipulation.
8. Events.
9. Asynchronous JavaScript.
10. Promises and `async`/`await`.
11. Fetch API.
12. HTTP requests.
13. Browser storage.
14. Cookies and sessions.
15. Same-Origin Policy.
16. Cross-Site Scripting (XSS).
17. Client-side security.

## Cybersecurity applications

The source lists understanding XSS vulnerabilities, understanding how browsers execute JavaScript,
analyzing client-side authentication, understanding cookies and sessions, and testing web
application security.

## Practical lab: client-side concept map

Using a local sample page or instructor-provided material:

1. Draw how a user action can trigger an event and change the DOM.
2. Identify where the Fetch API and HTTP requests fit.
3. Label browser storage, cookies, sessions, and the Same-Origin Policy as separate topics.
4. Explain at a high level why client-side code and authentication deserve security review.

**Deliverable:** A one-page client-side flow diagram labeling an event, DOM change, fetch/request,
and data-storage boundary, with one security observation.

Use only a local or explicitly authorized application. Do not attempt to exploit XSS.

## Key takeaways

- JavaScript makes websites interactive and is important for web security.
- The source includes core programming constructs, asynchronous work, browser interaction,
  storage, cookies/sessions, SOP, XSS, and client-side security.
- Security analysis should distinguish browser-side behavior from server-side behavior.

## Revision questions

1. What is the DOM?
2. Which JavaScript topics in the source relate to asynchronous activity?
3. What are the Fetch API and HTTP requests listed alongside?
4. Which browser topics does the source connect to security?
5. What does the source say JavaScript helps learners understand about XSS?

## Answer key

1. The DOM is the browser's structured representation of a document that scripts can inspect or
   change.
2. Asynchronous JavaScript, promises, and `async`/`await`.
3. They let browser code make requests and exchange data with web services.
4. Browser storage, cookies, sessions, the Same-Origin Policy, and client-side authentication.
5. It helps learners understand how browsers execute JavaScript and how XSS relates to web content.
