# Threats, Risk, and the Attack Surface

## Learning objectives

By the end of this lesson, you should be able to:

- Recognize the attack categories and examples listed in the source.
- Define threat, vulnerability, risk, and attack surface as used in the course.
- Outline the seven stages of the Cyber Kill Chain included in the source.
- Analyze a security scenario without attempting an attack.

## Threat and vulnerability definitions

- **Vulnerability:** A weakness or flaw in a system, such as an unpatched software bug or a weak
  password.
- **Threat:** An entity or event that could exploit a vulnerability, such as a hacker or malware.
- **Risk:** The potential for loss or damage when a threat exploits a vulnerability.

The PDF expresses the relationship as **Risk = Threat × Vulnerability**. It does not define units or
a calculation method for this expression, so treat it as a simplified conceptual relationship, not
a complete risk-assessment formula.

## Attack surface

The attack surface is the set of possible entry points an unauthorized user could use to access a
system. The source's examples include open network ports, employee email accounts, unpatched
software, and exposed APIs. Reducing the attack surface can make a system harder to compromise.

## Attack categories in the source

The PDF contains an incomplete sentence: “Cyberattacks are generally categorized by their .”
The categories below are the categories it then lists; the missing basis for the categorization is
not supplied.

### Malware

| Type | Description in the source |
| --- | --- |
| Ransomware | Encrypts a victim's files or systems and demands a ransom payment, often in cryptocurrency, for a decryption key. |
| Spyware | Secretly monitors activity, captures keystrokes, or collects personal and financial data; keyloggers are one example. |
| Trojan | Disguises itself as legitimate software to trick users into installing a hidden backdoor or payload. |
| Worm | Self-replicates and spreads across networks without needing a host program or human interaction. |
| Rootkit | Hides deep within an operating system while providing attackers with privileged, root-level access. |
| Botnet | A network of infected computers, sometimes called zombies, controlled remotely to launch coordinated attacks. |

### Social engineering

| Type | Description in the source |
| --- | --- |
| Phishing | Deceptive emails, texts, or other messages intended to obtain sensitive credentials or financial details. |
| Spear phishing | Phishing targeted at a particular person or organization. |
| Whaling | Phishing directed at high-profile executives. |
| Smishing / vishing | Phishing via SMS / voice calls or voicemail. |
| Pretexting | Using a fabricated scenario to manipulate someone into releasing information. |
| Business email compromise (BEC) | Impersonating an executive or trusted vendor to induce fraudulent transfers or payments. |

### Network and infrastructure attacks

- **Denial of service (DoS) / distributed denial of service (DDoS):** Overwhelming a target server,
  network, or website with traffic or fake requests to make it unavailable; the source distinguishes
  DDoS by use of multiple distributed machines or a botnet.
- **Man-in-the-middle (MitM) / on-path attack:** Intercepting, observing, or altering communication
  between parties without their knowledge.
- **DNS spoofing / poisoning:** Corrupting DNS information to redirect users to a malicious or
  counterfeit site.
- **Zero-day exploit:** An attack targeting a previously unknown software vulnerability before the
  vendor can patch it.

### Application and code injection attacks

- **SQL injection (SQLi):** Inserting malicious SQL code into input fields to manipulate backend
  databases and steal or delete data.
- **Cross-site scripting (XSS):** Injecting client-side scripts into trusted web pages viewed by
  other users.
- **Drive-by download:** Unintentionally downloading malware while visiting a compromised or
  malicious website.

### Identity and access attacks

- **Credential stuffing / password attacks:** Using automated tools to test stolen username-password
  pairs across multiple services, taking advantage of password reuse.
- **Brute force:** Systematically guessing passwords or encryption keys.
- **Session hijacking:** Stealing or intercepting a valid session token to impersonate a user in a
  web application.

### Specialized and modern threats

- **Supply-chain attack:** Compromising a third-party software vendor, hardware manufacturer, or
  service provider to infect downstream customers.
- **Insider threat:** An intentional or accidental breach involving an employee, contractor, or
  partner with authorized access.
- **Cryptojacking:** Secretly using a victim's CPU or GPU resources to mine cryptocurrency.
- **AI-powered / deepfake attack:** Using AI, voice cloning, or deepfake video for convincing social
  engineering scams.

## Cybersecurity attack lifecycle

The source presents the Cyber Kill Chain as a seven-stage progression:

| Stage | Description in the source |
| --- | --- |
| Reconnaissance | Gathering information on a target. |
| Weaponization | Creating a malicious payload tailored to a target. |
| Delivery | Sending the payload, for example through a phishing email. |
| Exploitation | Triggering a vulnerability. |
| Installation | Establishing a persistent backdoor. |
| Command and control (C2) | Opening a communication channel to an attacker's server. |
| Actions on objectives | Stealing data, deploying ransomware, or destroying systems. |

This is a conceptual model for understanding and discussing attacks, not a set of instructions.

## Practical lab: defensive scenario mapping

Use a fictional company scenario. Do not probe a real system or send test messages.

1. Select one source-listed threat, such as phishing or ransomware.
2. Identify a plausible vulnerability and asset in the fictional scenario.
3. Describe the potential impact as a risk statement.
4. List which stages of the lifecycle defenders might need to investigate.
5. Suggest non-invasive safeguards or monitoring questions, without attempting to reproduce the
   attack.

**Deliverable:** A one-page scenario map listing the asset, threat, vulnerability, potential impact,
relevant lifecycle stages, and two defensive questions.

<details class="scenario-card">
<summary>Quick check: separate the risk from the evidence</summary>

A fictional shop uses an outdated storefront component. A customer reports an unfamiliar account
notification. Identify one **asset**, one possible **vulnerability**, one possible **threat**, and
one **risk**. Which claim is currently an observation, and which claim would still be a hypothesis?

<details>
<summary>Check your reasoning</summary>

The customer account or storefront may be an asset; the outdated component may be a weakness; a
person or event that could take advantage of it is a threat; and the potential loss is risk. The
notification is an observation if it was actually received. A claim that the component caused an
account compromise is still a hypothesis until corroborating evidence supports it.

</details>
</details>

## Key takeaways

- A threat may take advantage of a vulnerability; risk describes potential loss or damage.
- The attack surface includes possible entry points such as exposed services, accounts, software,
  and APIs.
- The source groups threats into six categories and gives examples in each.
- The Cyber Kill Chain is a model for discussing attack progression; it does not describe every
  incident.

## Revision questions

1. What is the difference between a threat and a vulnerability?
2. Name four attack-surface examples from the source.
3. How does credential stuffing differ from brute force in the source's descriptions?
4. What are the seven Cyber Kill Chain stages?
5. What information is missing from the source's sentence about how cyberattacks are categorized?

## Answer key

1. A threat is a potential cause of harm; a vulnerability is a weakness it could take advantage of.
2. Examples include open ports, employee email accounts, unpatched software, and exposed APIs.
3. Credential stuffing reuses stolen username-password pairs; brute force systematically guesses
   credentials.
4. Reconnaissance, weaponization, delivery, exploitation, installation, command and control, and
   actions on objectives.
5. The source does not state the basis for its categorization; the list alone cannot supply it.
