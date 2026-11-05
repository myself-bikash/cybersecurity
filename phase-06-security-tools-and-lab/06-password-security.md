# Password-Security Tools

## Learning objectives

- Describe John the Ripper, Hashcat, and Hydra at a high level.
- Define password hash, dictionary attack, brute-force attack, wordlist, hash mode, and rate
  limiting.
- Explain safe boundaries for password auditing and authentication testing.

## Password auditing concepts

- **Password hash:** fixed-length output produced by a password-hashing function.
- **Dictionary attack:** tries words and likely combinations from a list to assess whether a
  password is weak.
- **Brute-force attack:** tries many possible combinations.
- **Wordlist:** file containing words or candidate passwords used during an audit.
- **Hash mode:** identifies the hash format being analyzed.
- **Attack mode:** determines how candidate passwords are generated.
- **Rule-based attack:** modifies candidate words according to defined rules.
- **GPU acceleration:** uses supported graphics hardware to speed certain computations.

The source's exercises concern password strength and hashing. Do not recover passwords from real
accounts, databases, or hash collections. This lesson does not include cracking commands or
candidate lists.

## John the Ripper

**John the Ripper** is an open-source password-security auditing tool that tests password strength
by attempting recovery from supported password-hash formats. The source lists password-strength
auditing, hash analysis, identifying weak passwords, testing policies, and authorized audits as
uses.

The source describes identifying a sample hash format, using a small educational wordlist, observing
how password complexity affects recovery, and recommending stronger policies. For safe study,
use only synthetic sample data and discuss expected strength without running password-recovery
operations.

## Hashcat

**Hashcat** is a password-recovery and auditing tool that uses CPU and supported GPU hardware to
test candidate passwords against hashes. The source lists password-security auditing, strength
testing, supported-hash analysis, recovery-difficulty measurement, and policy evaluation as uses.

| John the Ripper | Hashcat |
| --- | --- |
| General-purpose password-auditing tool. | Specialized high-performance password-recovery tool. |
| Supports many hash formats. | Supports many hash formats. |
| Useful for flexible auditing. | Often used for GPU-accelerated testing. |
| Strong command-line workflow. | Strong command-line workflow. |

The source's comparison exercise uses examples of a short common password, predictable password,
longer random password, and unique passphrase. Use fictional examples in a worksheet; never use
real account credentials.

## Hydra

**Hydra** is a network-login auditing tool for testing authentication security across supported
services. Uses in the source include auditing password policies, login security, authentication
defenses, lockout, and rate limiting.

- **Authentication service:** verifies user credentials.
- **Rate limiting:** restricts how frequently a user or client can make requests.
- **Account lockout:** temporarily prevents additional login attempts after a defined number of
  failures.

The source's practical exercise studies an intentionally vulnerable local service's behavior. To
avoid credential attacks, this course substitutes analysis of a mock login event log or
pre-generated local test results. Do not attempt logins against real accounts or services.

## Practical exercises

1. Compare synthetic examples of short/common, predictable, longer-random, and passphrase-style
   passwords; explain which policy is strongest without trying to recover any password.
2. Read a mock password-audit summary and recommend policy improvements.
3. Review a sanitized authentication log and identify how rate limiting, lockout, and logging
   affect account protection.
4. Explain why hashes should be created specifically for a lab and why real credentials must never
   be used.

## Key takeaways

- John the Ripper and Hashcat support password-security audits; Hydra audits network logins.
- Hashes, formats, and candidate-generation concepts are important to understanding audit results.
- Password recovery and login testing can expose credentials or affect services; authorization and
  synthetic data are essential.
- Strong, unique passwords and appropriate authentication controls reduce risk.

## Revision questions

1. What are password hashes, wordlists, dictionary attacks, and brute-force attacks?
2. How do John the Ripper and Hashcat compare in the source?
3. What do hash mode and attack mode mean?
4. What do rate limiting and account lockout do?
5. What data is appropriate for a password-audit exercise?
