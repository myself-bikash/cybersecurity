# Network Protocols

## Learning objectives

By the end of this lesson, you should be able to:

- Define a network protocol.
- Match the protocols listed in the source with their roles.
- Compare TCP with UDP and FTP with SFTP.
- Explain the source's basic descriptions of DNS, DHCP, TLS, and email protocols.

## What is a network protocol?

A network protocol is a set of rules that determines how devices communicate and exchange
information. Different protocols perform different jobs.

## Protocol reference

| Protocol | Full form / purpose in the source | Role |
| --- | --- | --- |
| TCP | Transmission Control Protocol | Reliable data delivery. |
| UDP | User Datagram Protocol | Fast, connectionless communication. |
| HTTP | Hypertext Transfer Protocol | Transfers web data. |
| HTTPS | HTTP Secure | Encrypted web communication. |
| DNS | Domain Name System | Converts domain names into IP addresses. |
| DHCP | Dynamic Host Configuration Protocol | Automatically assigns IP configurations. |
| FTP | File Transfer Protocol | Transfers files; the source notes that standard FTP communication is not encrypted. |
| SFTP | SSH File Transfer Protocol | Secure file transfer over SSH. |
| SSH | Secure Shell | Secure remote system access. |
| SMTP | Simple Mail Transfer Protocol | Sends email. |
| IMAP | Internet Message Access Protocol | Retrieves and synchronizes email. |
| POP3 | Post Office Protocol v3 | Retrieves email, commonly by downloading it. |
| ICMP | Internet Control Message Protocol | Network diagnostics and error reporting. |
| TLS | Transport Layer Security | Encrypts communication; the source also describes authentication and integrity protection. |
| SNMP | Simple Network Management Protocol | Monitors and manages network devices. |
| LDAP | Lightweight Directory Access Protocol | Accesses directory information and services. |
| SMB | Server Message Block | Shares files and printers over networks. |

## TCP and UDP

| TCP | UDP |
| --- | --- |
| Provides reliable communication between devices. | Fast communication that sends data without establishing a connection or guaranteeing delivery. |
| The source says data arrives in order, lost data can be retransmitted, and duplicate data is handled. | The source gives online gaming, voice calls, and live streaming as examples that often use UDP. |

The source says loading a website over HTTPS usually uses TCP, while HTTP/3 uses QUIC over UDP.

## HTTP(S), DNS, and DHCP

- **HTTP/HTTPS:** HTTP lets browsers and web servers exchange information. HTTPS uses HTTP over
  a secure connection, generally protected by TLS.
- **DNS:** Converts domain names into IP addresses. The source's example is
  `google.com → IP address`.
- **DHCP:** Automatically provides network configuration, commonly an IP address, subnet mask,
  default gateway, and DNS server.

## File transfer and remote access

- **FTP and SFTP:** Both transfer files. The source distinguishes standard FTP as unencrypted and
  SFTP as secure file transfer over SSH.
- **SSH:** Allows secure remote access and control of another computer. The source's example is
  managing a Linux server from a laptop.

## Email and diagnostics

- **SMTP** sends email.
- **IMAP** accesses and synchronizes email.
- **POP3** retrieves email, commonly by downloading it.
- **ICMP** supports error reporting and diagnostics. The source notes that `ping` commonly uses
  ICMP Echo Request and Echo Reply messages.

## Other listed protocols

- **TLS** provides encryption, authentication, and integrity protection for network communication;
  the source example is protecting information exchanged with an HTTPS website.
- **SNMP** lets administrators monitor network devices such as routers, switches, and servers.
- **LDAP** provides access to directory information such as user accounts and organizational
  information.
- **SMB** allows computers to share files, folders, and printers over a network.

## Practical lab: protocol matching

Use flash cards or a worksheet, not a live network:

1. Match each protocol in the reference table to its role.
2. Sort protocols into web, name/configuration, file transfer/remote access, email, diagnostics,
   encryption, management, directory, and file-sharing categories.
3. Explain the TCP/UDP and FTP/SFTP comparisons using the source's distinctions.
4. Describe what DNS and DHCP provide in a fictional home network.

## Key takeaways

- Protocols define communication rules and perform different roles.
- TCP and UDP have different delivery behavior.
- DNS resolves names; DHCP provides network configuration.
- The source distinguishes unencrypted standard FTP from SFTP over SSH.
- TLS is used to protect communication; SMTP, IMAP, and POP3 have distinct email roles.

## Revision questions

1. What does TCP provide that the source says UDP does not guarantee?
2. What does DNS do?
3. Which protocol sends email, and which protocols retrieve it?
4. How does the source distinguish FTP from SFTP?
5. What roles do LDAP, SMB, SNMP, and ICMP have?
