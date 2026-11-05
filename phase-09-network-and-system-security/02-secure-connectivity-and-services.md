# Secure Connectivity and Core Services

## Learning objectives

- Explain VPN and wireless security models and their common risks.
- Describe DNS resolution, DNS threats, and defensive technologies.
- Explain email threats and compare SPF, DKIM, and DMARC.
- Review connectivity and service controls in an owned environment.

## 1. VPN security

A **Virtual Private Network (VPN)** creates a protected communication tunnel between a device and
another network or VPN endpoint. It commonly uses encryption and authentication to protect traffic
over an untrusted network.

| VPN type | Purpose |
| --- | --- |
| Remote-access VPN | Connects an individual device to an organization's network. |
| Site-to-site VPN | Connects two or more networks. |

| Protocol | Source description |
| --- | --- |
| WireGuard | Modern VPN protocol with a relatively simple design. |
| OpenVPN | VPN technology using TLS-based security. |
| IPsec | Suite of protocols used to secure IP communications. |
| IKEv2 | Establishes and manages IPsec security associations. |

Avoid obsolete or weak configurations such as PPTP. Risks include weak authentication, stolen
credentials, outdated software, incorrect encryption settings, exposed management interfaces,
unpatched appliances, and excessive access after connection.

**Practices:** require strong authentication and MFA; update VPN systems; restrict access to
necessary resources; monitor sign-ins; disable unused accounts; use modern configurations; review
remote-access permissions. A VPN connection does not make a user or device automatically
trustworthy.

## 2. Wireless network security

Wireless security protects Wi-Fi networks, access points, connected devices, and communications.

| Protocol | Source's security description |
| --- | --- |
| WEP | Insecure and obsolete. |
| WPA | Legacy; no longer recommended. |
| WPA2 | Widely used; security depends on configuration. |
| WPA3 | Newer and generally stronger security. |

The source describes these threat categories:

- **Evil twin:** a fake access point imitates a legitimate network.
- **Rogue access point:** an unauthorized access point connects to an organization's network.
- **Deauthentication attack:** forged management traffic disrupts a wireless connection; protected
  management frames help defend against certain forms.
- **Weak-password attack:** weak credentials or insecure configuration put access at risk.
- **Packet sniffing:** exposed or insufficiently protected traffic may be observed.

**Practices:** prefer WPA3 where supported; use a secure WPA2-AES configuration when WPA3 is
unavailable; use strong Wi-Fi credentials; disable WPS when unnecessary; change default router
administrative credentials; update firmware; separate guest Wi-Fi; enable protected management
frames where supported; and monitor for unknown access points.

## 3. DNS security

The **Domain Name System (DNS)** translates human-readable domain names into IP addresses. A
simplified resolution process is: the device checks its local cache, queries a resolver when
needed, receives DNS information, and connects to the destination.

The source identifies DNS spoofing, DNS cache poisoning, DNS tunneling, DNS amplification, and
domain hijacking as threat categories. These involve false DNS information, misuse of DNS
communications, traffic amplification, or unauthorized changes to domain control.

| Technology | Purpose |
| --- | --- |
| DNSSEC | Provides origin authentication and integrity protection for DNS data. |
| DoH | DNS over HTTPS. |
| DoT | DNS over TLS. |
| DNS filtering | Blocks or restricts access to selected malicious domains. |

**Important distinction:** DNSSEC does not encrypt DNS queries. DoH and DoT protect DNS
communication between a client and resolver, but do not by themselves guarantee that a returned
domain is safe.

**Practices:** use trusted resolvers; enable DNSSEC validation where supported; protect registrar
accounts with MFA; monitor DNS records for unexpected changes; restrict zone transfers; monitor
unusual DNS traffic; and use DNS filtering where appropriate.

## 4. Email security

Email security protects accounts, mail servers, messages, and attachments from phishing, malware,
spam, spoofing, and unauthorized access.

| Threat | Description |
| --- | --- |
| Phishing | Deceptive message intended to prompt disclosure or an unsafe action. |
| Spear phishing | Targeted phishing aimed at an individual or organization. |
| Email spoofing | Forged sender information makes a message appear to come from another address or domain. |
| Business email compromise | Impersonation of a trusted business contact to prompt a transfer or disclosure. |
| Malicious attachment | File intended to execute malicious code or exploit software. |

| Technology | Main purpose |
| --- | --- |
| SPF | Identifies mail servers authorized to send for a domain. |
| DKIM | Uses a digital signature to help verify a domain-associated message and detect relevant modification. |
| DMARC | Lets domain owners specify receiver handling and reporting for messages failing applicable SPF/DKIM checks. |

**Practices:** enable MFA; configure SPF, DKIM, and DMARC; train users to recognize phishing;
scan attachments and links; use anti-spam and anti-malware controls; monitor unusual sign-ins;
restrict forwarding rules; and protect administrative mail accounts.

## Practical exercises

Use your own router, devices, accounts, or a simulated configuration:

1. Review your own Wi-Fi router's security mode, firmware status, administrator credentials, and
   guest-network separation. Do not impersonate an access point or disrupt wireless service.
2. Diagram DNS resolution from a local device to its configured resolver and explain which
   protections apply on each segment.
3. Use a sanitized sample DNS/email record set to identify where DNSSEC, SPF, DKIM, and DMARC
   controls apply. Do not change a domain you do not own.
4. Review a sanitized email header from a test account and identify authentication results without
   opening suspicious attachments or links.

## Key takeaways

- VPNs protect connectivity but do not replace identity, authorization, endpoint health, or
  monitoring controls.
- Wireless protocol choice, configuration, and device management all matter.
- DNSSEC provides DNS data integrity/authentication, not confidentiality; DoH/DoT protect the
  client-to-resolver connection.
- SPF, DKIM, and DMARC have complementary email-domain authentication roles.

## Revision questions

1. How do remote-access and site-to-site VPNs differ?
2. What VPN risks remain even when a tunnel is encrypted?
3. Which wireless protocol does the source identify as obsolete?
4. How do DNSSEC, DoH, and DoT differ?
5. What does DNS filtering do?
6. How do SPF, DKIM, and DMARC differ?
7. Name four email threats and two defensive practices.
