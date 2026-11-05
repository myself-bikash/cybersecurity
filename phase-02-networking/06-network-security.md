# Network Security

## Learning objectives

By the end of this lesson, you should be able to:

- Define packet analysis, port numbers, and open/closed/filtered ports.
- Describe the TCP handshake and flags listed in the source.
- Explain the network-security concepts and standards named in the course.
- Relate these concepts to defensive monitoring and authorized lab work.

## Network security and packet analysis

**Network security** protects networks, devices, and transmitted information from unauthorized
access, attacks, and misuse.

**Packet analysis** examines network packets to understand communication between devices. The
source's example is using Wireshark to inspect DNS requests and TCP connections to identify
suspicious activity.

## Port numbers

A port number identifies a communication endpoint associated with an application or service. The
source lists the following standard or commonly used ports; actual configurations can differ.

| Port(s) | Protocol / service |
| --- | --- |
| 20, 21 | FTP |
| 22 | SSH / SFTP |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 67, 68 | DHCP |
| 80 | HTTP |
| 110 | POP3 |
| 123 | NTP |
| 143 | IMAP |
| 161 | SNMP |
| 389 | LDAP |
| 443 | HTTPS |
| 445 | SMB |
| 3306 | MySQL |
| 3389 | RDP |

## Open, closed, and filtered ports

- **Open port:** A service is listening and accepting connections on that port.
- **Closed port:** The destination is reachable, but no service is listening on that port.
- **Filtered port:** A firewall or network device prevents a scanner from determining whether the
  port is open or closed.

An open port is not automatically a vulnerability.

## TCP handshake and flags

The source describes a three-way TCP handshake:

1. **SYN:** The client requests a connection.
2. **SYN-ACK:** The server acknowledges and responds.
3. **ACK:** The client confirms; the connection is established.

TCP flags are control indicators in TCP headers:

| Flag | Meaning in the source |
| --- | --- |
| SYN | Start connection. |
| ACK | Acknowledge received data. |
| FIN | Finish connection. |
| RST | Reset connection. |
| PSH | Request prompt delivery to the application. |
| URG | Indicates urgent data. |

## DNS security

DNS security protects domain-name resolution against manipulation and malicious activity. The
source lists DNS spoofing, cache poisoning, hijacking, and tunneling as threats.

## VPN and proxy

- **VPN (Virtual Private Network):** Creates an encrypted tunnel between a device and a VPN
  endpoint. The source lists protecting traffic over untrusted networks, remote access to private
  networks, and hiding traffic from some local network observers as uses. A VPN does not make a
  user completely anonymous.
- **Proxy server:** Acts as an intermediary between a client and another server. The source's
  example is a browser sending a request through a proxy rather than directly to the destination.

## Firewall rules, IDS, and IPS

**Firewall rules** define which network connections are allowed or blocked. Source examples include
allowing HTTPS, blocking unauthorized incoming connections, and allowing SSH only from trusted IP
addresses.

| Control | Meaning in the source |
| --- | --- |
| IDS (Intrusion Detection System) | Detects suspicious activity and generates alerts. |
| IPS (Intrusion Prevention System) | Detects and can automatically block malicious traffic. |

## Network segmentation and VLANs

**Network segmentation** divides a large network into smaller isolated sections. The source
examples are separating employee computers, guest Wi-Fi, and server networks; this can limit the
spread of attacks.

A **VLAN (Virtual Local Area Network)** divides one physical switched network into multiple
logical networks. The source example is separate VLANs for students, teachers, and administration.

## Wireless security: threats and standards

Wireless security protects Wi-Fi networks from unauthorized access and attacks. The source lists
unauthorized access, rogue access points, evil twin attacks, Wi-Fi password attacks, and packet
interception as common threats.

| Standard | Description in the source |
| --- | --- |
| WPA2 | Uses strong encryption, commonly AES-CCMP. |
| WPA3 | Includes stronger protection against password-guessing attacks through SAE in WPA3-Personal. |

The source recommends WPA3 when supported; otherwise, it recommends properly configured
WPA2-AES.

## Practical lab: analyze a provided capture

Use only a capture supplied for training or generated in an isolated lab you own or are authorized
to use:

1. Identify DNS requests and TCP connections in the capture.
2. Locate a TCP handshake and label SYN, SYN-ACK, and ACK.
3. Match visible port numbers to the source's reference table, allowing for configuration differences.
4. Describe whether the evidence is consistent with allowed or blocked communication.
5. Do not capture other people's traffic or use scanning tools outside the authorized lab.

## Key takeaways

- Ports identify communication endpoints; open ports alone do not prove a vulnerability.
- TCP establishes a connection through SYN, SYN-ACK, and ACK.
- DNS security, VPNs, proxies, firewall rules, IDS/IPS, segmentation, VLANs, and wireless security
  address different network-security concerns.
- A VPN does not guarantee anonymity.
- WPA3 is preferred by the source when supported; it also lists properly configured WPA2-AES.

## Revision questions

1. How does the source distinguish open, closed, and filtered ports?
2. What are the three TCP-handshake messages?
3. What do IDS and IPS each do?
4. How does a VLAN relate to a physical switched network?
5. What does the source say a VPN does not guarantee?
