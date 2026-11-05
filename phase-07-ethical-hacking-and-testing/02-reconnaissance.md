# Reconnaissance and OSINT

## Learning objectives

- Define reconnaissance and distinguish passive from active reconnaissance.
- Explain OSINT, DNS records, WHOIS, subdomain discovery, technology fingerprinting, and attack
  surface mapping.
- Separate confirmed observations from assumptions.
- Practice with fictional or pre-generated information, not real targets.

## Reconnaissance

**Reconnaissance** collects information about a target before deeper security testing. It can help a
tester understand infrastructure, technologies, public-facing assets, and possible entry points.
The source's example inventory includes domains, DNS records, subdomains, web technologies, public
IP addresses, and exposed services.

| Passive reconnaissance | Active reconnaissance |
| --- | --- |
| Uses publicly available information without directly generating test traffic to the target. | Directly interacts with authorized target infrastructure. |
| Usually lower operational risk. | Generates network traffic and can trigger alerts or affect fragile systems. |
| Source examples: public websites, DNS, certificate transparency, WHOIS, documentation. | Source examples: host discovery, port scanning, service detection, web-server identification. |

The source also lists authorized DNS queries as active reconnaissance. Active reconnaissance
requires authorization and must follow rules of engagement. This lesson uses fictional or
pre-generated data instead of gathering information about a real organization.

## OSINT

**OSINT (Open-Source Intelligence)** collects and analyzes publicly available information. It does
not mean breaking into systems or private accounts.

| Source named in the PDF | Information it may contain |
| --- | --- |
| Search engines | Public websites and documents. |
| Company websites | Departments, services, and technology references. |
| WHOIS services | Domain registration information. |
| Certificate Transparency | Publicly logged TLS certificates. |
| Public DNS records | Domain infrastructure information. |
| Public code repositories | Publicly exposed code or configuration. |
| Job listings | Technologies and software an organization uses. |
| Public IP databases | Internet-facing infrastructure information. |

Public information can still be sensitive; do not misuse it or attempt to access private systems.

## DNS enumeration concepts

**DNS enumeration** collects information about a domain's DNS records and associated
infrastructure. The Domain Name System (DNS) translates domain names into information such as IP
addresses and mail-server destinations.

| Record | Purpose |
| --- | --- |
| A | Maps a domain to an IPv4 address. |
| AAAA | Maps a domain to an IPv6 address. |
| CNAME | Defines an alias for another domain. |
| MX | Identifies mail servers. |
| NS | Identifies authoritative name servers. |
| TXT | Stores text information, often for verification and email security. |
| SOA | Contains administrative information about a DNS zone. |
| PTR | Supports reverse DNS lookups. |

The source includes DNS query and lookup command examples; those procedures are not reproduced.
Use DNS data only for a domain you own, a purpose-built training dataset, or an explicitly
authorized assessment.

## WHOIS

**WHOIS** is a protocol and associated lookup service for domain-name and IP-resource registration
information. It may show registrar, registration/expiration dates, name servers, status, and
registrant details when public. Privacy protections and registry policies may hide details, and
records may be incomplete or out of date.

## Subdomain discovery

Subdomain discovery identifies subdomains associated with a primary domain. The source's
illustrative examples are `example.com`, `mail.example.com`, `dev.example.com`, `api.example.com`,
and `shop.example.com`. A forgotten development service could be less maintained, but discovering
a subdomain does not prove it is vulnerable.

## Technology fingerprinting

**Technology fingerprinting** identifies technologies used by a website, server, or application.
Possible clues include web-server software, programming language, content-management system,
frameworks, operating system, JavaScript libraries, and cloud/hosting services.

The source's hypothetical example combines Nginx, PHP, WordPress, and MySQL. Fingerprints can be
incomplete or misleading because headers may be hidden, modified, or inaccurate.

## Attack-surface mapping

**Attack-surface mapping** identifies points through which an attacker might interact with an
organization's systems.

Source-listed components include websites, APIs, public IP addresses, network services, remote
access systems, cloud resources, email, authentication systems, and third-party integrations.

| Fictional asset | Type | Example technology | Security question |
| --- | --- | --- | --- |
| Main website | Web application | Nginx | Are application controls maintained? |
| API | Application interface | REST API | Are access decisions enforced? |
| Mail server | Network service | Mail service | Are authentication controls strong? |
| Admin portal | Web application | Unknown | Is access restricted appropriately? |

## Practical exercise

Use a fictional domain or purpose-built training dataset:

1. Identify its supplied DNS records and name servers.
2. Identify supplied mail-server records.
3. Review fictional registration information.
4. Identify technologies from non-invasive sample data.
5. Create an asset inventory.
6. Separate confirmed facts from assumptions.

Deliverable: a short reconnaissance report that records sources and timestamps for each supplied
observation. Do not gather information about a real organization for this exercise.

## Key takeaways

- Passive and active reconnaissance differ in their interaction and operational risk.
- OSINT concerns public information, but public availability does not justify misuse.
- DNS, WHOIS, subdomains, and technology clues help describe an asset surface, not prove a
  vulnerability.
- Record sources, timestamps, confidence, and assumptions.

## Revision questions

1. How do passive and active reconnaissance differ?
2. What does OSINT mean?
3. What do A, AAAA, CNAME, MX, NS, TXT, SOA, and PTR records represent?
4. What information may WHOIS provide, and what are its limitations?
5. Why does a discovered subdomain not prove vulnerability?
6. What should an attack-surface inventory include?
