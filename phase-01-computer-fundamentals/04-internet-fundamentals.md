# Internet Fundamentals

## Learning objectives

By the end of this lesson, you should be able to:

- Define the internet, client, server, domain name, URL, browser, web server, and packet.
- Outline the website request-and-response sequence in the source.
- Identify the protocol, domain, and path in the source's URL example.

## What is the internet?

The internet is a global network of interconnected computers and devices that communicate using
standard protocols. The source also describes it as a worldwide network connecting computers,
servers, phones, and other devices.

## Client-server architecture

| Term | Meaning in the source |
| --- | --- |
| Client | A device or application that requests a service. |
| Server | A computer or software that provides the requested service. |

**Example from the source:** A browser is the client, and Google's web server responds to a search
request.

## How a website works

The source describes this sequence:

1. You enter a website address.
2. The browser finds the server's IP address using DNS.
3. The browser connects to the server.
4. It sends an HTTP or HTTPS request.
5. The server processes the request.
6. The server sends a response.
7. The browser displays the website.

This sequence introduces the concepts; DNS and HTTP(S) are covered in greater depth later in the
course.

## Domains, URLs, browsers, and web servers

A **domain name** is a human-readable address used to access websites. Source examples include
`google.com`, `youtube.com`, and `wikipedia.org`.

A **URL (Uniform Resource Locator)** is the complete address of an internet resource. The source's
example is `https://www.example.com/login`:

| URL part | Value |
| --- | --- |
| Protocol | `https` |
| Domain | `www.example.com` |
| Path | `/login` |

A **web browser** accesses and displays websites. The source examples are Chrome, Firefox, Brave,
and Edge.

A **web server** is software or a computer that receives requests and delivers website content. The
source examples are Apache, Nginx, and Microsoft IIS.

## Data packets

When information travels over a network, it is divided into smaller units called **packets**. Each
packet contains information needed to deliver the data to its destination. The source's example is a
message whose data travels through networks in packets.

## Practical lab: trace a website request

Use a paper diagram or a browser on a device you own:

1. Draw the browser/client, DNS lookup, web server, request, response, and displayed page in the
   source's order.
2. Label the URL example's protocol, domain, and path.
3. Explain which part of the exchange is a request and which is a response.
4. Add packets as the units carrying data through the network.

This is a conceptual exercise. Do not inspect or interfere with network traffic that you are not
authorized to access.

## Key takeaways

- The internet connects devices that communicate using standard protocols.
- Clients request services; servers provide them.
- The source's website sequence includes DNS, a connection, an HTTP(S) request, and a response.
- A URL includes a protocol, domain, and path in the example provided.
- Network data is divided into packets.

## Revision questions

1. How do a client and server differ?
2. What are the seven steps in the source's website sequence?
3. Identify the protocol, domain, and path in `https://www.example.com/login`.
4. Name two browsers and two web servers from the source.
5. What is a data packet?
