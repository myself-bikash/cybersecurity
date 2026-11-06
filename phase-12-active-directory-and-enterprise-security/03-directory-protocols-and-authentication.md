# Directory Protocols and Authentication

## Learning objectives

- Explain LDAP directory structure and distinguish LDAP from Active Directory.
- Distinguish authentication from authorization.
- Describe Kerberos tickets and NTLM challenge-response at a conceptual level.
- Explain Windows authentication choices and the role of DNS in AD.

## 1. LDAP and directory names

**LDAP (Lightweight Directory Access Protocol)** accesses and manages information in directory
services. AD supports LDAP for directory queries and management; LDAP is a protocol, not another
name for Active Directory. For example, an application could query a directory for Alice's
username, email address, department, group membership, and OU.

| Port | Source-described use |
| --- | --- |
| TCP 389 | LDAP. |
| TCP 636 | LDAP over TLS, commonly called LDAPS. |
| TCP/UDP 3268 | Global Catalog LDAP. |
| TCP 3269 | Global Catalog LDAP over TLS. |

LDAP on port 389 is not automatically encrypted. LDAP may be configured with StartTLS; LDAPS
commonly uses TLS from the start of the connection. Secure configuration and certificate validation
matter.

LDAP names form a hierarchy. In `CN=Alice,OU=Employees,DC=company,DC=com`:

| Term | Meaning |
| --- | --- |
| DC | Domain Component. |
| OU | Organizational Unit. |
| CN | Common Name. |
| DN | Distinguished Name identifying an object in the hierarchy. |
| RDN | Relative Distinguished Name. |

| LDAP | Active Directory |
| --- | --- |
| Communication protocol for querying and managing directory information. | Microsoft directory service that stores and manages identities and objects. |
| Can communicate with different directory services; not limited to Microsoft. | Supports LDAP and other Windows authentication technologies. |

## 2. Authentication and authorization

**Authentication** verifies that a user, computer, or service is who or what it claims to be.
Examples include passwords, smart cards, certificates, security keys, and Kerberos tickets.
**Authorization** determines which resources or actions an authenticated identity may access.

| Authentication | Authorization |
| --- | --- |
| Verifies identity: “Who are you?” | Determines permissions: “What can you access?” |
| Identity verification. | Applies permissions and access policies. |
| Logging into Windows is an example. | Accessing a restricted folder is an example. |

An account can authenticate successfully but still lack permission to a resource.

## 3. Kerberos

**Kerberos** is a ticket-based network authentication protocol. It avoids repeatedly sending the
user's password across the network. AD commonly uses it as its preferred domain protocol when
conditions are met.

| Component | Meaning |
| --- | --- |
| Client | User or computer requesting authentication. |
| Key Distribution Center (KDC) | Trusted service that issues Kerberos tickets; in AD, it runs on domain controllers. |
| Authentication Service (AS) | KDC component involved in initial authentication. |
| Ticket Granting Service (TGS) | KDC component that issues service tickets. |
| Ticket Granting Ticket (TGT) | Ticket used to request additional service tickets. |
| Service ticket | Ticket used to authenticate to a particular service. |

At a high level, a client authenticates to the KDC and receives a TGT; it requests a service ticket
for a resource, presents that ticket to the service, and access is granted only if authorization
allows it. The source lists TCP/UDP 88 for Kerberos authentication and TCP/UDP 464 for Kerberos
password-change operations.
For example, after Alice signs in to a domain computer, a service ticket can support her access to
an authorized file server without sending her password to that server.

Kerberos uses timestamps to help prevent replay attacks. Significant clock differences between a
client, domain controller, and service can cause authentication failures. A weak service-account
password, excessive privileges, or unsafe delegation can still undermine a Kerberos environment.

## 4. NTLM and Windows authentication

**NTLM (NT LAN Manager)** is an older Microsoft challenge-response authentication protocol that
may still be encountered. At a high level, a server issues a challenge, the client calculates a
response using credential-derived information, and the server or domain controller verifies it.
During normal challenge-response authentication, the password is not simply sent in plaintext.

The source identifies concerns including credential relay, Pass-the-Hash exposure, legacy
compatibility, weak configurations, and more limited mutual-authentication protections in some
scenarios. Inventory dependencies, reduce unnecessary NTLM use, and monitor remaining use before
restricting it.

| Kerberos | NTLM |
| --- | --- |
| Ticket-based; uses a KDC and service tickets. | Challenge-response verification; does not use Kerberos service tickets. |
| Supports mutual authentication in appropriate configurations. | Mutual-authentication protections are more limited. |
| Commonly preferred in AD domains. | Often remains for fallback or legacy compatibility. |

Windows authentication may use Kerberos, NTLM, local accounts, smart cards, certificates, or
Windows Hello for Business.

| Local authentication | Domain authentication |
| --- | --- |
| Account exists and is managed on an individual computer. | Account exists in AD and is centrally managed. |
| Ordinary local login does not require a domain controller. | Fresh domain authentication normally depends on domain infrastructure. |
| Permissions are managed on the individual system. | Identity and policies can be managed centrally. |

Cached domain logon information may be used when a domain controller is unavailable; this does not
mean the computer contacted a domain controller at that moment.

## 5. DNS in Active Directory

**DNS (Domain Name System)** translates names to IP addresses and helps computers locate network
services. AD depends on DNS so domain-joined computers can locate domain controllers. Service
(SRV) records advertise services such as LDAP and Kerberos.
For example, DNS can resolve `server.company.com` to an address such as `192.168.1.10`.

| DNS record | Purpose |
| --- | --- |
| A | Maps a hostname to an IPv4 address. |
| AAAA | Maps a hostname to an IPv6 address. |
| CNAME | Creates an alias for another hostname. |
| MX | Identifies mail servers. |
| PTR | Maps an IP address to a hostname. |
| SRV | Identifies the location of a service. |
| TXT | Stores text information. |

Examples of AD service records in the source are `_ldap._tcp.dc._msdcs.company.com` and
`_kerberos._tcp.company.com`.

DNS misconfiguration can prevent clients from locating domain controllers, cause authentication or
service outages, redirect clients through incorrect records, or expose poorly secured dynamic DNS
updates. Restrict record modification, use secure dynamic updates where appropriate, monitor
unexpected changes and suspicious queries, protect DNS servers, and maintain redundancy.

## Practical exercise

1. In the isolated lab, diagram a domain sign-in and service-access flow; label LDAP, DNS SRV
   records, the KDC, a TGT, and a service ticket.
2. Use synthetic examples to classify statements as authentication or authorization and explain why.
3. Do not collect credentials or probe a real directory.

**Deliverable:** an annotated sign-in diagram and a short table classifying at least four synthetic
actions as authentication or authorization, with a reason for each.

## Key takeaways

- LDAP is a directory protocol; AD is a directory service.
- Authentication verifies identity; authorization decides access.
- Kerberos uses tickets; NTLM uses challenge-response and may remain for compatibility.
- DNS service records help domain clients locate AD services.
- Protocol events and configuration should be interpreted in their environment.

## Revision questions

1. What do DC, OU, CN, DN, and RDN mean in LDAP names?
2. Which ports does the source associate with LDAP and the Global Catalog?
3. How do authentication and authorization differ?
4. What are a TGT and a service ticket?
5. How do Kerberos and NTLM differ?
6. Why are DNS SRV records important to AD?

### Answer key

1. DC is Domain Component, OU Organizational Unit, CN Common Name, DN Distinguished Name, and RDN
   Relative Distinguished Name; together they locate an object in a directory hierarchy.
2. LDAP commonly uses TCP 389, LDAPS TCP 636, and Global Catalog LDAP 3268/3269; encryption depends
   on secure configuration and TLS.
3. Authentication verifies identity; authorization decides what that identity may access.
4. A TGT lets a client request service tickets; a service ticket is presented to a particular
   service, subject to authorization.
5. Kerberos uses KDC-issued tickets; NTLM uses challenge-response and may remain for compatibility.
6. DNS SRV records advertise domain services so clients can locate domain controllers and
   authentication services.
