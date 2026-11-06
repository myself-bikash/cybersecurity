# IP Addressing

## Learning objectives

By the end of this lesson, you should be able to:

- Define an IP address and distinguish IPv4 from IPv6.
- Compare public/private and static/dynamic addresses.
- Explain subnetting, CIDR, subnet masks, gateways, NAT, and ARP.
- Recognize the private IPv4 ranges listed in the source.

## What is an IP address?

An IP address is a logical address used to identify an interface on an IP network.

## IPv4 and IPv6

| Version | Size and source example |
| --- | --- |
| IPv4 | 32-bit addressing; example: `192.168.1.10`. The source describes four numbers called octets, each from 0 to 255. |
| IPv6 | 128-bit addressing, designed to provide a much larger address space; example: `2001:db8::1`. |

## Public and private addresses

- **Public IP:** Globally routable on the internet. The source notes that an ISP typically assigns a
  home network a public IP address.
- **Private IP:** Used inside local networks and not directly routed across the public internet.

The source lists these private IPv4 ranges:

| Range label in the source | Address range |
| --- | --- |
| Class A private | `10.0.0.0`–`10.255.255.255` |
| Class B private | `172.16.0.0`–`172.31.255.255` |
| Class C private | `192.168.0.0`–`192.168.255.255` |

## Static and dynamic addresses

- **Static IP:** Manually configured or reserved to remain consistent.
- **Dynamic IP:** Assigned automatically, commonly through DHCP.

## Subnetting, CIDR, and subnet masks

**Subnetting** divides a large IP network into smaller networks. The source gives separate HR,
finance, and IT networks in a large office as an example.

**CIDR (Classless Inter-Domain Routing)** represents a network with a prefix length. For
`192.168.1.0/24`, the source says `/24` means the first 24 bits identify the network portion.

A **subnet mask** identifies which portion of an IPv4 address belongs to the network and which
portion belongs to the host. The source example `255.255.255.0` corresponds to `/24`.

## Default gateway

A **default gateway** is the device a computer sends traffic to when the destination is outside its
local network. The source says this is usually the router.

## NAT

**Network Address Translation (NAT)** translates IP addresses between networks. The source's
example is a home router allowing multiple devices with private IP addresses to share one public
IPv4 address using NAT, commonly PAT.

## ARP

**Address Resolution Protocol (ARP)** helps an IPv4 device discover the MAC address associated
with a local IPv4 address. The source example: a computer knows its router's IP address but needs
its MAC address to send an Ethernet frame.

The source identifies **ARP spoofing** as an attack in which forged ARP messages manipulate
IP-to-MAC mappings. This is a security concept; this lesson does not provide instructions for
performing it.

## Practical lab: address-concept worksheet

Using only the examples in this lesson and a fictional or authorized lab network:

1. Label each sample as IPv4 or IPv6.
2. Mark which listed ranges are private IPv4 ranges.
3. Explain the difference between a static and dynamic address.
4. Label the network and host portions in the source's `/24` example as described in the source.
5. Draw how a default gateway, NAT, and ARP fit into the source's home-network examples.

Do not reconfigure a production network or use addresses to access a system without authorization.

**Deliverable:** A completed worksheet classifying the sample addresses and a diagram labeling
gateway, NAT, local IPv4-to-MAC resolution, and the `/24` network/host split.

## Key takeaways

- IP addresses identify interfaces on IP networks.
- IPv4 uses 32 bits; IPv6 uses 128 bits.
- Public/private and static/dynamic describe different address properties.
- Subnetting, CIDR, and subnet masks describe network divisions and address portions.
- NAT translates addresses; ARP helps resolve a local IPv4 address to a MAC address.

## Revision questions

1. How many bits are in IPv4 and IPv6?
2. What are the three private IPv4 ranges listed in the source?
3. What does `/24` mean in the source's example?
4. When does a computer use its default gateway?
5. What does ARP help an IPv4 device discover?

## Answer key

1. IPv4 uses 32 bits; IPv6 uses 128 bits.
2. `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16` (the ranges listed in the table).
3. The first 24 bits identify the network portion in that example; the remaining bits identify
   hosts within it.
4. It sends traffic to the gateway when the destination is outside its local network.
5. The MAC address associated with a local IPv4 address.
