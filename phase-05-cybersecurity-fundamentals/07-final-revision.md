# Phase 5: Final Revision and Assessment

Use this page for self-review after completing the lessons and project. Answer the assessment
without looking back at the notes, then revisit any topics that need work.

## Learning objectives

- Recall the phase's core security definitions and distinguish frequently confused concepts.
- Assess your understanding of the threats, technologies, and frameworks covered in this phase.
- Apply the concepts together in a bounded, authorized scenario.

## Important definitions from the source

| Term | Definition |
| --- | --- |
| Cybersecurity | Protection of systems, networks, applications, and information from cyber threats. |
| CIA triad | Confidentiality, Integrity, and Availability. |
| Authentication | Verification of identity. |
| Authorization | Determining what an authenticated user can access. |
| Accounting | Recording user and system activities. |
| Cryptography | Mathematical techniques for protecting information. |
| Encryption | Converting readable data into protected ciphertext. |
| Hashing | Producing a fixed-length digest from input data. |
| AES | Symmetric encryption algorithm. |
| RSA | Public-key cryptographic algorithm. |
| ECC | Family of elliptic-curve cryptographic techniques. |
| SHA-256 | Cryptographic hash function producing a 256-bit digest. |
| Salt | Random value added to a password before password hashing. |
| Digital signature | Cryptographic mechanism for verifying signed data. |
| Digital certificate | Electronic document connecting an identity with a public key. |
| PKI | Infrastructure for managing public keys and certificates. |
| TLS | Protocol for protecting communication over networks. |
| MFA | Authentication using two or more independent factors. |
| SSO | Single Sign-On. |
| OAuth 2.0 | Delegated authorization framework. |
| OIDC | Authentication and identity layer built on OAuth 2.0. |
| SAML | Standard for exchanging authentication- and authorization-related information. |
| Kerberos | Ticket-based network authentication protocol. |
| Malware | Malicious software. |
| Phishing | Deceptive communication designed to trick users. |
| Vulnerability | A weakness that could be exploited. |
| Threat | A potential cause of harm. |
| Attack | An attempt to exploit a weakness. |
| Privilege escalation | Gaining higher or unauthorized permissions. |
| Zero-day | Vulnerability exploited before a fix is available to defenders. |
| NIST CSF | Cybersecurity risk-management framework. |
| ISO 27001 | Standard for information-security management systems. |
| CIS Controls | Prioritized cybersecurity safeguards. |
| MITRE ATT&CK | Knowledge base of adversary tactics and techniques. |
| OWASP | Organization providing application-security resources. |

## Comparison questions

Explain each difference without looking at the notes:

1. Confidentiality vs. Integrity vs. Availability.
2. Authentication vs. Authorization.
3. Authentication vs. Accounting.
4. Encryption vs. Hashing.
5. Symmetric vs. Asymmetric Encryption.
6. AES vs. RSA.
7. RSA vs. ECC.
8. Hashing vs. Salting.
9. Digital Signature vs. Digital Certificate.
10. 2FA vs. MFA.
11. OAuth 2.0 vs. OpenID Connect.
12. SAML vs. Kerberos.
13. Virus vs. Worm vs. Trojan.
14. Brute Force vs. Password Spraying.
15. DoS vs. DDoS.
16. Threat vs. Vulnerability vs. Attack.
17. Vertical vs. Horizontal Privilege Escalation.
18. NIST CSF vs. ISO 27001.
19. MITRE ATT&CK vs. Cyber Kill Chain.
20. OWASP vs. CIS Controls.

## Knowledge assessment

Answer without looking at the notes.

### Basic level

1. What is cybersecurity?
2. What are the three components of the CIA triad?
3. What is confidentiality?
4. What is integrity?
5. What is availability?
6. What is authentication?
7. What is authorization?
8. What is the principle of least privilege?
9. What is encryption?
10. What is hashing?

### Intermediate level

11. Explain the difference between symmetric and asymmetric encryption.
12. What is AES?
13. What is RSA?
14. Why is salting important?
15. What is the purpose of digital signatures?
16. What is PKI?
17. How does TLS protect communication?
18. Explain the difference between 2FA and MFA.
19. What is the difference between OAuth 2.0 and OIDC?
20. How does Kerberos authentication work?

### Advanced foundation level

21. Explain how ransomware can affect an organization.
22. How is password spraying different from brute force?
23. Explain a Man-in-the-Middle attack.
24. What is privilege escalation?
25. What makes a zero-day vulnerability dangerous?
26. Explain the six functions of NIST CSF 2.0.
27. How does MITRE ATT&CK help security professionals?
28. Explain the seven stages of the Cyber Kill Chain.
29. What is the purpose of OWASP Top 10?
30. How would you assess the cybersecurity risks of a small company?

## Practical review lab: security design for a small organization

Use the fictional TechNova scenario from the project lesson or create a fictional organization of
your own. Do not collect real personal data or test systems that you do not own or have explicit
authorization to assess.

1. List five important assets and identify their confidentiality, integrity, and availability needs.
2. Select two threats and explain the related vulnerability, possible impact, and defensive control.
3. Propose authentication, authorization, and accounting measures for one sensitive application.
4. Map one defensive action to each NIST CSF 2.0 function.
5. Identify which additional framework or model—ISO 27001, CIS Controls, MITRE ATT&CK, Cyber Kill
   Chain, or OWASP—would help organize another part of the assessment.
6. Explain what evidence you would need to justify a risk rating.

**Steps and deliverable:** Complete the six items in order. Label each risk assumption separately
from observed facts, and give every recommendation an owner or responsible role and a reason.
Submit a one-page asset/risk register, a CIA/AAA design diagram, a six-function CSF map, and a
short list of evidence gaps. Keep the organization and all data fictional.

## Key takeaways

- Security principles, cryptography, authentication, threats, and frameworks are connected parts
  of risk management.
- Comparison questions help identify concepts that sound similar but serve different purposes.
- Risk assessments require context and evidence; the fictional project's ratings are illustrative.
- Practical exercises must remain within systems you own or are explicitly authorized to assess.

## Revision questions

1. Which three concepts from this phase are easiest to confuse, and how do you distinguish them?
2. Which assessment questions did you need to revisit, and what lesson will you review?
3. What evidence would you gather before recommending controls for a real organization?

## Suggested answers

1. Answers vary. Common pairs include authentication/authorization (identity vs. permissions),
   encryption/hashing (reversible confidentiality vs. one-way digest), and threat/vulnerability
   (possible cause vs. weakness). State what each term answers and give a distinct example.
2. Answers vary; revisit any comparison or assessment item answered incorrectly and explain the
   corrected distinction in your own words.
3. Confirmed assets, data sensitivity, configurations, exposure, existing safeguards, business
   impact, incident history, and stakeholder requirements. Record uncertainty rather than guessing.

### Quick answer guide to the 30-question assessment

1. Cybersecurity protects information and systems against unauthorized access, change, disclosure,
   disruption, or destruction.
2–5. CIA means confidentiality (authorized access), integrity (authorized, accurate changes), and
   availability (timely access for authorized users).
6–8. Authentication verifies identity; authorization grants permissions; least privilege limits
   each identity to required permissions.
9–10. Encryption is reversible with a key; hashing is a one-way digest.
11–14. Symmetric encryption shares one secret key; asymmetric uses a public/private pair. AES is
   symmetric, RSA is asymmetric, and a unique salt makes password hashes less alike and thwarts
   precomputed lookups.
15–17. Digital signatures support integrity/authenticity evidence; PKI manages keys and
   certificates; TLS protects data in transit and can authenticate the server, not the site's
   overall trustworthiness.
18–20. 2FA uses two distinct factor categories; MFA uses two or more. OAuth 2.0 delegates
   authorization while OIDC adds identity; Kerberos uses KDC-issued tickets for services.
21–25. Ransomware can deny access to data and disrupt operations; spraying uses few candidates
   across accounts unlike many guesses against one account; MitM can observe or alter
   communications; privilege escalation increases access; a zero-day lacks an available vendor fix
   at the relevant time.
26–29. NIST CSF 2.0 functions are Govern, Identify, Protect, Detect, Respond, Recover. ATT&CK
   organizes observed adversary behavior; the Kill Chain models seven attack stages; OWASP Top 10
   raises awareness of common application risks.
30. Inventory assets and business needs, identify plausible threats and weaknesses, assess impact
   and likelihood using evidence, record uncertainty, and prioritize proportionate controls.

## Phase completion checklist

- [ ] I can explain the principles and cryptography terms without relying on memorized examples.
- [ ] I can distinguish authentication/authorization models and their roles.
- [ ] I can identify the source-listed threats and their general defenses without attempting them.
- [ ] I can compare all six security frameworks/models in the lesson.
- [ ] I completed the fictional TechNova assessment and can justify its illustrative limitations.
- [ ] I completed the 30-question assessment and reviewed weak areas.
