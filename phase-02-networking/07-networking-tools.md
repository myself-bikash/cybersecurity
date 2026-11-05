# Networking Tools

## Learning objectives

By the end of this lesson, you should be able to:

- Match each networking tool in the source to its purpose.
- Distinguish packet analyzers, connectivity tools, configuration utilities, and DNS tools.
- Explain the authorization boundary for using network discovery and traffic-capture tools.

## Tool reference

| Tool | Purpose described in the source |
| --- | --- |
| Wireshark | Captures and analyzes network packets; can inspect TCP communication, DNS requests, HTTP traffic, and suspicious activity. |
| Nmap | Discovers hosts and scans ports and services; the source also lists service-version and OS detection. Use only on systems you own or have explicit permission to test. |
| tcpdump | Captures and inspects network traffic through a command-line packet analyzer. |
| Netcat | Reads and writes network connections; can establish TCP or UDP connections and transfer data. |
| ping | Tests network connectivity; the source notes that it commonly uses ICMP Echo Request and Echo Reply. |
| traceroute | Shows network hops between your device and a destination. |
| `ipconfig` | Displays network configuration on Windows. |
| `ip` | Displays and manages Linux network configuration. |
| `nslookup` | Queries DNS records. |
| `dig` | Performs detailed DNS queries. |
| `curl` | Sends requests to URLs, transfers data, and can be used to inspect HTTP responses. |

The PDF includes these ordinary diagnostic examples:

| Purpose | Example from the source |
| --- | --- |
| Check connectivity | `ping google.com` |
| Show the network path (Linux) | `traceroute google.com` |
| Display Windows network configuration | `ipconfig` |
| Display Linux addresses | `ip addr` |
| Query DNS | `nslookup google.com`, `dig google.com` |
| Request a URL and inspect response headers | `curl -I https://example.com` |

Tool options and outputs depend on the operating system and configuration. The PDF also includes a
sample Nmap scan command; executable scanning syntax is not reproduced here. Use Nmap only through
an approved procedure on systems you own or have explicit permission to test.

## Choosing a tool by task

| Task | Tools from the source |
| --- | --- |
| Inspect packets or protocols | Wireshark, tcpdump |
| Discover hosts, ports, or services in an authorized lab | Nmap |
| Check connectivity or network path | ping, traceroute |
| Review local network configuration | `ipconfig`, `ip` |
| Investigate DNS resolution | `nslookup`, `dig` |
| Send a web request or inspect a response | `curl` |
| Read/write network connections | Netcat |

## Practical exercise: tool selection

For each question, choose a tool from the table and explain why:

1. Which tool would you use to inspect DNS requests in a provided training capture?
2. Which tools can query DNS?
3. Which tools display local network configuration on Windows and Linux?
4. Which tool shows network hops to a destination?
5. Which tool is used for authorized host and service discovery?

Do not capture traffic that belongs to others or scan systems without explicit permission.

## Key takeaways

- The source lists tools for packet analysis, discovery, connectivity, configuration, DNS, and web
  requests.
- Similar-looking tools have distinct purposes; select based on the question being investigated.
- Network discovery and traffic capture must be limited to owned or explicitly authorized systems.

## Revision questions

1. Which tools does the source identify as packet analyzers?
2. What is the difference between `ipconfig` and `ip` in the source?
3. Which tools query DNS?
4. What does traceroute show?
5. What authorization is required before using Nmap?
