# Vulnerabilities and Threats

## Learning objectives

By the end of this lesson, you should be able to:

- Distinguish a threat, vulnerability, and attack.
- Recognize the malware, social-engineering, credential, availability, network, and access threats
  covered in the source.
- Summarize the source-listed impacts and defensive measures.
- Complete safe, non-invasive threat-analysis exercises.

## Threat, vulnerability, and attack

| Term | Definition | Source example |
| --- | --- | --- |
| Threat | Potential event, action, or circumstance that could cause harm. | A cybercriminal attempting to steal customer information. |
| Vulnerability | Weakness in software, hardware, configuration, controls, or processes that could be exploited. | A web application that does not properly validate input. |
| Attack | Intentional attempt to exploit a weakness, gain unauthorized access, steal information, disrupt service, or cause damage. | Unauthorized access to a website database by exploiting a weakness. |

## Malware

**Malware** is malicious software designed to damage systems, steal information, disrupt operations,
spy on users, or gain unauthorized access. The source lists ransomware, spyware, Trojans, worms,
rootkits, viruses, keyloggers, and bot malware.

Listed ways malware may spread include malicious email attachments or links, fake software
downloads, compromised websites, infected removable devices, software vulnerabilities, and
supply-chain compromises. Defenders study malware behavior to prevent infections, investigate
incidents, and protect systems.

| Category | Definition and source example | Source-listed prevention or detection |
| --- | --- | --- |
| Ransomware | Malware that blocks access to data or systems, often by encrypting files, and demands payment. Some operations also steal data and threaten publication. A company file server may become inaccessible. | Offline or immutable backups; updates; endpoint protection; least privilege; MFA; restricted unnecessary network access; phishing awareness. Paying does not guarantee restoration or deletion of stolen data. |
| Spyware | Secretly monitors activity and collects information such as browsing history, credentials, personal/system information, keystrokes, or other sensitive data. The source's example is a fake application that monitors activity and sends collected information to an attacker. | Trusted software sources; updates; endpoint security; review application permissions; avoid suspicious links and downloads. |
| Trojan | Malware disguised as legitimate or useful software. Unlike a worm, it does not inherently self-replicate. A fake installer may run hidden malicious code. | Trusted download sources; verify publisher/signature; endpoint protection; avoid suspicious attachments. It may steal credentials, download malware, provide unauthorized remote access, spy, or damage/modify information. |
| Worm | Malware that self-replicates and spreads between systems, often over networks, without manual copying. The source's example is a worm spreading from one vulnerable computer to others on the same network. It can consume resources or carry other payloads. | Patch known vulnerabilities; firewalls; network segmentation; traffic monitoring; disable unnecessary services. |
| Rootkit | Malicious techniques or software designed to hide unauthorized activity and maintain privileged access. The source's example is a compromised server whose malicious processes or files are hidden from normal monitoring tools. Types in the source: user-mode, kernel-mode, bootkit, and firmware rootkit. | Secure boot where appropriate; updates; endpoint detection; integrity monitoring; trusted recovery and reinstallation. |
| Virus, keylogger, bot malware | Listed as malware categories in the source; the source does not provide separate definitions for these terms. | Apply layered endpoint, patching, access, monitoring, and user-awareness controls appropriate to the environment. |

## Phishing and social engineering

**Phishing** uses deceptive messages, websites, or communications to trick people into revealing
sensitive information or taking unsafe actions. The source's example is a bank-impersonation email
claiming an account will be blocked and directing the user to a fake login page.

| Phishing type | Meaning |
| --- | --- |
| Email phishing | Fraudulent email. |
| Spear phishing | Targeted message aimed at a person or organization. |
| Whaling | Targeted phishing against senior executives or other high-value individuals. |
| Smishing | Phishing through SMS. |
| Vishing | Phishing through voice calls. |
| Clone phishing | Fake copy of a legitimate message with a malicious replacement link or attachment. |

Warning signs in the source: unexpected password requests, urgent threats or pressure, suspicious
links, unexpected attachments, unusual sender addresses, and requests to bypass normal procedures.
Defenses: verify the sender using another trusted channel, inspect domains carefully, avoid
unexpected attachments, use phishing-resistant MFA, and report suspicious messages.

**Social engineering** psychologically manipulates people into revealing information, providing
unauthorized access, or taking actions that compromise security. It targets human behavior rather
than directly attacking software. Phishing is one type of social engineering.

| Technique | Definition from the source |
| --- | --- |
| Pretexting | Create a false story or identity to gain trust. |
| Baiting | Offer something attractive to encourage unsafe behavior. |
| Quid pro quo | Offer a service or benefit in exchange for information or access. |
| Tailgating | Follow an authorized person into a restricted physical area. |
| Impersonation | Pretend to be a trusted person or organization. |
| Scareware | Use frightening security warnings to prompt unsafe action. |

The source's example is a caller impersonating IT support and asking for an employee password.
Defenses include awareness training, identity-verification procedures, clear reporting, physical
access controls, and never sharing passwords.

## Credential attacks

**Brute force** repeatedly tries possible credential combinations. Source-listed types are simple
brute force, dictionary attack, credential stuffing, and hybrid password guessing. Defenses include
strong unique passwords, MFA, login rate limiting, carefully designed lockout or progressive
delays, unusual-login detection, and secure password storage.

**Password spraying** tries a small number of common passwords across many accounts, distributing
attempts rather than trying many passwords against one account. Defenses include blocking common
and compromised passwords, MFA, authentication-log monitoring, detecting patterns across
accounts, and sensible rate limits.

| Brute force | Password spraying |
| --- | --- |
| Tries many passwords against one or more accounts. | Tries a small number of passwords across many accounts. |
| Can cause many failures on one account and trigger lockouts. | Distributes attempts across accounts to reduce account-specific lockouts. |
| Source-listed defenses: rate limits and MFA. | Source-listed defenses: MFA, monitoring, and password controls. |

These are threat descriptions, not instructions to attempt logins. Any password-security
assessment must be explicitly authorized and use a controlled lab.

## Denial of Service (DoS) and Distributed DoS (DDoS)

A **DoS** attack attempts to make a service unavailable to legitimate users, for example by
overloading resources. The source's example is an online shopping site unable to handle malicious
request volume. Impacts can include downtime, business interruption, financial loss, loss of
customer trust, and disruption of critical services. Source-listed defenses are rate limiting,
firewalls, traffic filtering, load balancing, DDoS protection services, and capacity planning.

A **DDoS** uses multiple sources, often compromised devices in a botnet. Categories named in the
source include the following. Its example is multiple compromised devices making a company's
website unable to serve legitimate visitors:

1. **Volumetric:** consumes network bandwidth.
2. **Protocol:** exhausts network-protocol or infrastructure resources.
3. **Application-layer:** overwhelms an application with resource-consuming requests.

Source-listed defenses: DDoS mitigation services, traffic filtering, rate limiting, CDNs, WAFs, and
network monitoring.

| DoS | DDoS |
| --- | --- |
| One or a limited number of sources. | Many distributed sources. |
| Source may be easier to identify. | Malicious traffic may be harder to distinguish from legitimate distributed traffic. |
| Can exhaust service resources. | Can overwhelm network, protocol, or application resources. |

## Man-in-the-Middle (MitM)

A **MitM** attack places an attacker between communicating parties to observe, intercept, or modify
communication. The source's example involves a malicious or compromised public Wi-Fi network.
Possible impacts include credential theft, session hijacking, data modification, information
disclosure, and impersonation.

Defenses: properly configured HTTPS, TLS certificate validation, avoiding untrusted networks for
sensitive activity, secure VPN connections where appropriate, MFA, and protected wireless
networks. Encryption and certificate validation make many MitM attacks harder, but insecure
applications or configurations can still create risk.

## Spoofing

**Spoofing** falsifies information or identity so a system or person believes communication comes
from a trusted source.

| Type | Meaning |
| --- | --- |
| IP spoofing | Falsify the source IP address. |
| MAC spoofing | Change or impersonate a device MAC address. |
| Email spoofing | Falsify sender information. |
| DNS spoofing | Provide false DNS information. |
| Website spoofing | Create a fake site that imitates a legitimate one. |

The source's example is an email that appears to come from a company's official address. Defenses
include SPF, DKIM, and DMARC email authentication; secure DNS configuration; network filtering;
TLS certificate validation; and user awareness.

## Privilege escalation

**Privilege escalation** gains permissions or access rights beyond those originally assigned.

- **Vertical:** move from lower to higher access, such as a normal user gaining administrator or
  root privileges.
- **Horizontal:** access another user's resources at a similar privilege level, such as viewing
  another customer's information due to an application access-control weakness.

Defenses in the source: least privilege, secure application design, proper access control, regular
patching, permission reviews, and monitoring privileged actions. The source identifies the topic
as relevant to penetration testing and operating-system security.

## Zero-day vulnerability

A **zero-day vulnerability** is a software or hardware weakness for which a security fix is not yet
available to affected users or defenders at the time it is exploited. A **zero-day exploit** is a
technique or code used to take advantage of such a vulnerability. It is not simply an old,
unpatched vulnerability.

The source says zero-days are dangerous because defenders may not know of the weakness, a patch may
not exist, security tools may not recognize the attack, and systems may remain exposed before
mitigation. Defenses include defense in depth, network segmentation, application allowlisting,
endpoint monitoring, secure configurations, timely threat intelligence and incident response, and
virtual patching or other compensating controls where appropriate.

## Threat comparison

| Threat | Main behavior |
| --- | --- |
| Malware | General term for malicious software. |
| Ransomware | Blocks access to data and demands payment. |
| Spyware | Secretly collects information. |
| Trojan | Disguises malware as legitimate software. |
| Worm | Self-replicates and spreads. |
| Rootkit | Hides malicious activity and maintains privileged access. |
| Phishing | Tricks users into revealing information or taking unsafe actions. |
| Social engineering | Manipulates people. |
| Brute force | Tries many possible passwords. |
| Password spraying | Tries a few common passwords across many accounts. |
| DoS / DDoS | Makes a service unavailable / uses distributed sources to disrupt it. |
| MitM | Intercepts or modifies communication. |
| Spoofing | Falsifies identity or source information. |
| Privilege escalation | Gains higher or unauthorized permissions. |
| Zero-day | Concerns a vulnerability exploited before a fix is available to defenders. |

## Practical exercises

1. Examine sample phishing messages from a trusted awareness resource; identify warning signs
   without opening links or attachments.
2. Create a comparison chart for ransomware, spyware, Trojan, worm, and rootkit.
3. Compare brute force, dictionary attacks, credential stuffing, and password spraying, including
   defenses. Do not attempt logins.
4. Draw conceptual diagrams of DoS, DDoS, MitM, and IP spoofing; do not generate traffic or target
   real systems.
5. Compare ordinary-user, administrator, and root privileges in authorized Linux or Windows
   reference material or an isolated VM.
6. Research a publicly documented zero-day using public reports; summarize affected software,
   vulnerability, potential impact, and defender response. Do not reproduce an exploit.

## Key takeaways

- A threat may cause harm, a vulnerability is a weakness, and an attack is an attempt to exploit it.
- Malware includes distinct categories with different behaviors and defenses.
- Phishing is one type of social engineering.
- Brute force and password spraying differ in how attempts are distributed.
- DoS/DDoS threaten availability; MitM targets communication; spoofing falsifies identity or source.
- Privilege escalation increases access; a zero-day has no available fix at the relevant time.

## Revision questions

1. Distinguish threat, vulnerability, and attack.
2. How do a Trojan, worm, and rootkit differ?
3. How do phishing and social engineering relate?
4. How do brute force and password spraying differ?
5. How do DoS and DDoS differ?
6. What can a MitM attack affect, and which safeguards help?
7. Compare vertical and horizontal privilege escalation.
8. What makes a zero-day distinct from an old unpatched weakness?
