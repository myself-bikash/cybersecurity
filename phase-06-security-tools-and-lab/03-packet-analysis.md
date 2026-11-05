# Network Packet Analysis

## Learning objectives

- Define packet capture, packet, interface, and display filter.
- Describe what Wireshark and tcpdump are used for.
- Identify the major areas of the Wireshark interface and the TCP three-way handshake.
- Analyze only traffic you own, are authorized to inspect, or have in an approved training capture.

## Wireshark

**Wireshark** is an open-source network protocol analyzer for capturing and inspecting packets. It
helps explain communication, investigate suspicious activity, and troubleshoot network problems.
The source lists TCP/UDP, DNS, HTTP, TCP handshake, and unusual activity analysis among its uses.

| Term | Definition |
| --- | --- |
| Packet | A unit of data transmitted across a network. |
| Packet capture | Collecting network traffic for analysis. |
| Network interface | Hardware or software connection used to communicate; examples are Ethernet, Wi-Fi, and loopback. |
| Display filter | Shows only captured packets that match specified conditions. |

Common Wireshark display filters in the source:

| Filter | Purpose |
| --- | --- |
| `ip` | Display IP packets. |
| `tcp` | Display TCP packets. |
| `udp` | Display UDP packets. |
| `dns` | Display DNS traffic. |
| `http` | Display HTTP traffic. |
| `icmp` | Display ICMP packets. |
| `tcp.port == 80` | Display TCP packets using port 80. |
| `ip.addr == 192.168.56.10` | Display packets involving that example lab address. |

The interface has three main sections:

1. **Packet List:** captured packets.
2. **Packet Details:** selected packet's protocol information.
3. **Packet Bytes:** packet data in hexadecimal and ASCII where possible.

## TCP three-way handshake

The TCP three-way handshake establishes a TCP connection:

1. **SYN:** the client requests a connection.
2. **SYN-ACK:** the server acknowledges and responds.
3. **ACK:** the client acknowledges the server's response.

## tcpdump

**tcpdump** is a command-line packet analyzer used to capture and inspect network traffic. The
source lists capture, monitoring, filtering, troubleshooting, and saving captures for later analysis
as uses. Its command examples are not reproduced here; capture only traffic from your own system
or an explicitly authorized lab.

| Wireshark | tcpdump |
| --- | --- |
| Graphical interface; detailed visual analysis. | Primarily command-line; lightweight capture and inspection. |
| Useful for learning protocols visually; rich graphical filtering. | Useful for server monitoring and automation; powerful command-line filtering. |

## Practical exercises

1. Use a sanitized training capture or capture only traffic from your own computer in an approved
   lab.
2. Identify TCP packets and DNS queries.
3. Observe a TCP three-way handshake.
4. Compare the information visible in HTTP and HTTPS captures; avoid collecting credentials or
   private traffic.
5. Identify source and destination IP addresses in the training capture.
6. Export a training capture for later analysis.
7. Compare how Wireshark and tcpdump present the same authorized capture.

Packet captures can contain private or sensitive information. Capture only traffic you are
authorized to inspect; use training captures when possible.

## Key takeaways

- Wireshark and tcpdump analyze traffic; neither automatically explains whether an event is malicious.
- Display filters narrow an existing capture; they do not establish authorization to capture it.
- Packet captures should be handled as sensitive data.

## Revision questions

1. What is a packet, packet capture, interface, and display filter?
2. What are the three Wireshark interface sections?
3. What are the three steps in a TCP handshake?
4. How do Wireshark and tcpdump differ?
5. Why can a packet capture require careful privacy handling?
