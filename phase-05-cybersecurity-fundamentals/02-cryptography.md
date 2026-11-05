# Cryptography

## Learning objectives

By the end of this lesson, you should be able to:

- Distinguish encryption from hashing and symmetric from asymmetric cryptography.
- Describe AES, RSA, ECC, SHA-256, salting, signatures, certificates, PKI, TLS, and key exchange.
- Explain the source's cautions about password storage and HTTPS.

## Cryptography

Cryptography uses mathematical techniques to protect information from unauthorized access,
modification, or forgery. The source lists online banking, HTTPS, password storage, digital
payments, secure messaging, cloud storage, digital certificates, and VPN connections as uses.
For example, it can help prevent unauthorized people from reading or modifying a message as it
travels across a network.

## Encryption and hashing

| Feature | Encryption | Hashing |
| --- | --- | --- |
| Purpose | Protect confidentiality. | Produce a digest for verification. |
| Reversible? | Yes, using the appropriate key and algorithm. | Designed to be one-way; a hash is not decrypted. |
| Key? | Standard encryption uses a key. | A hash function normally does not require a key. |
| Output | Ciphertext. | Hash/digest. |
| Source example/use | Secure communication. | File integrity, digital signatures, and secure password verification when used within an appropriate password-hashing scheme. |

The source's illustrative plaintext `HELLO` may become ciphertext such as `X7#K9@P2`; that is
an example of the concept, not a real cryptographic result.

Source hash example: `Hello World` produces the SHA-256 digest
`a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e`.

## Symmetric encryption and AES

**Symmetric encryption** uses the same secret key to encrypt and decrypt. Both parties need the key.
In the source's example, Alice encrypts a file with a secret key, sends it to Bob, and Bob uses that
same key to recover the original. Symmetric encryption is fast and suitable for large amounts of
data, and is efficient for storage and network communication. The key must be shared securely and
managed; if stolen, it may expose protected information.

**AES (Advanced Encryption Standard)** is a symmetric encryption algorithm:

| AES version | Key size |
| --- | --- |
| AES-128 | 128 bits |
| AES-192 | 192 bits |
| AES-256 | 256 bits |

The source lists file, database, and disk encryption, VPN technologies, and secure network
communication as uses. AES is encryption, not hashing.

## Asymmetric encryption: RSA and ECC

**Asymmetric cryptography** uses mathematically related public and private keys. The public key can
be shared; the private key must remain secret. In the source's simplified example, Bob shares a
public key, Alice encrypts information with it, and Bob decrypts it with his private key.

| Algorithm | Description from the source | Listed uses |
| --- | --- | --- |
| RSA (Rivest–Shamir–Adleman) | Public-key algorithm based on the mathematical difficulty of factoring large integers. | Digital signatures, public-key encryption, and certain key-establishment or key-transport systems. |
| ECC (Elliptic Curve Cryptography) | Family of public-key techniques based on elliptic-curve mathematics; the source says comparable security can use smaller keys than traditional RSA systems. | Signatures, secure communication, mobile devices, TLS, and key exchange. |

Asymmetric methods can support signatures and secure communication but are generally slower than
symmetric encryption, require private-key protection, and rely on trustworthy identity verification
for public keys. Public keys can be shared openly and may reduce the need to share a secret key
beforehand; secure private-key management remains essential.

| Comparison | RSA | ECC |
| --- | --- | --- |
| Mathematical basis | Integer factorization. | Elliptic-curve mathematics. |
| Key size in source comparison | Generally larger. | Generally smaller for comparable security. |
| Common uses | Signatures, encryption. | Signatures, key agreement. |

## SHA-256 and salting

**SHA-256** is a SHA-2 cryptographic hash function that produces a fixed 256-bit digest (64
hexadecimal characters). The source's sample input is `Hello`; it notes that changing even one
character normally produces a very different digest.

The source lists fixed output length, one-way design, collision resistance, and the avalanche
effect as properties. It lists integrity verification, signatures, protocols, data verification, and
cryptographic applications as uses.

**Password-storage warning:** SHA-256 alone is not suitable for storing user passwords. The source
names Argon2id, scrypt, or bcrypt, with unique salts, as dedicated password-hashing options.

**Salting** adds a unique, randomly generated value to a password before password hashing; the salt
is stored with the resulting hash. Different salts produce different stored hashes even when
passwords match. Salts make precomputed rainbow-table attacks less useful and require separate
guessing work per salted password. A salt need not be secret, should be unique and random, and
does not make a weak password strong by itself.
For example, if two employees use `password123`, unique salts mean their stored password hashes
will differ.

## Digital signatures

A **digital signature** helps verify authenticity and integrity. The source's simplified process:

1. Prepare a document and calculate its cryptographic hash.
2. Use the sender's private key with a digital-signature algorithm to create a signature.
3. Send the document and signature.
4. The recipient verifies the signature with the sender's public key.

Signatures help verify the signer and detect changes. They can support non-repudiation depending on
key control, identity verification, and process. A signature does not automatically encrypt a
document.

## Digital certificates and PKI

A **digital certificate** connects an identity, such as a website domain or organization, with a
public key. It is generally issued and digitally signed by a trusted Certificate Authority (CA).
The source lists subject/domain, public key, issuer, validity period, serial number, and issuing-CA
signature as common contents.

**Public Key Infrastructure (PKI)** comprises policies, procedures, people, and technologies for
creating, issuing, managing, validating, and revoking certificates and public keys.

| PKI component | Role in the source |
| --- | --- |
| Certificate Authority (CA) | Issues and signs certificates. |
| Registration Authority (RA) | Helps verify applicants before issuance. |
| Certificates | Connect identities with public keys. |
| Public/private keys | Support public-key cryptography. |
| Certificate revocation | Invalidates certificates before normal expiration. |
| Certificate repository | Stores certificates and related information. |

The source's examples include a company issuing certificates to employee laptops so internal
services can authenticate company devices, and a browser checking the TLS certificate of a banking
website.

## TLS, HTTP, and HTTPS

**TLS (Transport Layer Security)** protects communication over a network through confidentiality,
integrity protection, and authentication—commonly server authentication using a certificate.
The source's HTTPS sequence has a browser connect, perform a TLS handshake, receive and validate a
server certificate, establish shared session keys, then protect communication with negotiated
algorithms.

| HTTP | HTTPS |
| --- | --- |
| Does not itself provide TLS protection; data may be exposed or modified in transit. | HTTP communication protected by TLS. |
| No TLS certificate validation. | Uses TLS certificate validation. |
| Usually uses port 80 in the source. | Usually uses port 443 in the source. |

HTTPS protects the connection; it does not guarantee that a website is honest or free from malware.

## Key exchange

**Key exchange** establishes shared secret key material over a communication channel. The source
names Diffie–Hellman and its elliptic-curve form, ECDH. Its conceptual example has Alice and Bob
agree on public parameters, create private key material, exchange corresponding public values, and
independently calculate the same shared secret. An observer of the public values should not be able
to feasibly calculate that secret.

Key exchange alone does not necessarily authenticate parties. Without authentication, a
man-in-the-middle attack may be possible. TLS combines key establishment with authentication
mechanisms.

## Symmetric vs. asymmetric cryptography

| Feature | Symmetric | Asymmetric |
| --- | --- | --- |
| Keys | Same secret key. | Public/private key pair. |
| Speed | Generally faster. | Generally slower. |
| Key sharing | Secret key must be shared securely. | Public key can be shared openly. |
| Main uses in the source | Bulk data encryption. | Authentication, signatures, and key establishment. |
| Examples | AES. | RSA, ECC. |

## Practical exercises

1. Change one character in sample text and compare its SHA-256 digest using a trusted local tool.
2. Modify a sample file and compare hashes to study integrity.
3. Inspect the certificate of an HTTPS site you own or are authorized to review; identify domain,
   issuer, and validity period.
4. Research Argon2id, bcrypt, and scrypt and explain why ordinary SHA-256 is not recommended for
   password storage.
5. Diagram the roles of public and private keys in encryption and digital signatures; distinguish
   the two operations.

## Key takeaways

- Encryption protects confidentiality and is reversible with the appropriate key; hashing produces
  a one-way digest.
- AES is symmetric; RSA and ECC are asymmetric.
- SHA-256 is for integrity and related uses, not password storage by itself.
- Salts should be unique and random; they are not secret and do not strengthen a weak password.
- Signatures, certificates, PKI, TLS, and key exchange have related but distinct roles.

## Revision questions

1. How do encryption and hashing differ?
2. What is the difference between symmetric and asymmetric cryptography?
3. What are AES, RSA, ECC, and SHA-256?
4. Why is a salt used, and does it need to be secret?
5. How does a digital signature differ from a digital certificate?
6. What does PKI manage?
7. What does TLS protect, and what does HTTPS not guarantee?
