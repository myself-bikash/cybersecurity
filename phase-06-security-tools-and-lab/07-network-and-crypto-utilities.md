# Network and Cryptographic Utilities

## Learning objectives

- Describe Netcat's networking and troubleshooting role.
- Explain OpenSSL concepts and source-listed uses.
- Use a local file or certificate for safe cryptographic inspection.

## Netcat

**Netcat** (also called `nc`) is a command-line networking utility for establishing TCP or UDP
connections, transferring data, and troubleshooting communication. The source calls it a
networking “Swiss Army knife.”

Concepts include TCP connections, UDP communication, listening ports, clients, servers, and network
sockets. Uses listed in the source are testing connectivity, checking service reachability, sending
and receiving data, and simple client/server tests.

## OpenSSL

**OpenSSL** is an open-source cryptographic toolkit for cryptographic operations, certificates,
keys, and TLS-related functionality.

| Concept | Meaning |
| --- | --- |
| Private key | Secret cryptographic key that must be protected. |
| Public key | Cryptographic key that can be shared publicly. |
| Certificate | Electronic document connecting an identity with a public key. |
| Hashing | Generating a digest from data. |
| TLS | Protecting communication between networked systems. |

Source-listed local inspection commands:

| Command | Purpose |
| --- | --- |
| `openssl version` | Check the installed version. |
| `openssl dgst -sha256 example.txt` | Calculate a SHA-256 hash of a local example file. |
| `openssl x509 -in certificate.pem -text -noout` | Display information from a local certificate file. |

The PDF also includes a command that connects to a remote TLS server; it is not reproduced here.
Inspect only a test service you own or are authorized to review.

## Practical exercises

1. In two virtual machines on your isolated lab network, study the client/server and port concepts
   using benign test data; do not expose a listener to an untrusted network.
2. Review the installed OpenSSL version.
3. Calculate a digest of a sample file and compare it after a harmless edit.
4. Create a test private key and self-signed certificate using a trusted local training guide;
   inspect subject, issuer, validity, and public key.
5. Explain the difference between a self-signed certificate and one issued by a trusted
   Certificate Authority.

## Key takeaways

- Netcat supports network connectivity tests but can be misused; restrict practice to your
  isolated lab.
- OpenSSL helps inspect cryptographic data, certificates, and TLS-related information.
- Protect private keys and treat certificate or packet data as sensitive.

## Revision questions

1. What are the source-listed uses and concepts for Netcat?
2. How do TCP, UDP, client, server, and listening port relate?
3. What is OpenSSL used for?
4. How do public and private keys differ?
5. How does a self-signed certificate differ from one issued by a trusted CA?
