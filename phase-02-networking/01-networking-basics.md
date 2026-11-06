# Networking Basics

## Learning objectives

By the end of this lesson, you should be able to:

- Define a computer network.
- Compare LAN, WAN, MAN, and PAN.
- Describe the topologies and network devices listed in the source.
- Distinguish the roles of a switch and a router.

## What is a computer network?

A computer network is a group of computers and devices connected to communicate and share
information. The source's example is a laptop, mobile phone, and printer connected to the same
Wi-Fi network.

## Network types

| Type | Full form | Coverage and source example |
| --- | --- | --- |
| LAN | Local Area Network | Home, office, or building; for example, a college computer laboratory. |
| WAN | Wide Area Network | Large geographical area; the source gives the internet as an example. |
| MAN | Metropolitan Area Network | City-wide network. |
| PAN | Personal Area Network | Network around an individual; for example, a phone connected to Bluetooth earbuds. |

## Network topology

Network topology describes how devices are physically or logically connected.

| Topology | Description in the source |
| --- | --- |
| Star | All devices connect to a central switch. |
| Bus | All devices share one main communication cable. |
| Ring | Devices connect in a circular arrangement. |
| Mesh | Devices have multiple connections to other devices. |
| Tree | Devices are arranged in a hierarchical structure. |

## Network devices

| Device | Function described in the source |
| --- | --- |
| Router | Connects different networks and forwards packets between them. |
| Switch | Connects devices within a LAN; forwards Ethernet frames using MAC addresses. |
| Hub | Sends received data to every connected port instead of forwarding it only to the intended device; the source describes it as older equipment. |
| Modem | Provides the connection between a network and an ISP by converting signals for the access technology. |
| Access point | Connects wireless devices to a wired network using Wi-Fi. |
| Gateway | Connects networks or systems that may use different protocols or architectures. A default gateway is usually the router's local IP address. |
| Firewall | Monitors and controls incoming and outgoing traffic according to security rules. |

### Switch and router comparison

| Switch | Router |
| --- | --- |
| Connects devices inside a network such as a LAN. | Connects different networks. |
| Forwards Ethernet frames using MAC addresses. | Forwards packets between networks. |

**Example from the source:** A home router connects a private home network to the internet.

## Cybersecurity example

A firewall can block unauthorized connections to a computer. Network devices have different roles,
so understanding whether traffic is within a LAN or moving between networks helps describe where a
network control is applied.

## Practical lab: map an authorized network

Use a fictional diagram or a home/lab network you own or are authorized to document:

1. Label its network type (LAN, WAN, MAN, or PAN) where applicable.
2. Draw its topology using the source's topology names.
3. Mark routers, switches, hubs, modems, access points, gateways, and firewalls that are present.
4. Describe which device connects local devices and which connects different networks.

Do not access or modify a network you do not own or have permission to administer.

**Deliverable:** A labeled network diagram showing applicable network types, topology, device roles,
and the boundary between the local network and other networks.

<details class="scenario-card">
<summary>Quick check: which device would you investigate?</summary>

In a fictional office, one laptop can print to a local printer but cannot reach a service on another
network. Name the device roles that may be involved, then describe one observation you would gather
before changing a configuration.

<details>
<summary>Check your reasoning</summary>

The LAN connection may involve a switch or access point; communication to another network involves
a router or default gateway, and a firewall may apply rules. Confirm the laptop's network settings
and whether other authorized lab devices show the same behavior before making a change. The
scenario alone does not establish a firewall or routing failure.

</details>
</details>

## Key takeaways

- Networks connect devices to communicate and share information.
- LAN, WAN, MAN, and PAN describe networks with different coverage.
- Topology describes physical or logical device connections.
- A switch connects devices within a LAN; a router connects different networks.
- Network devices have distinct functions and should not be treated as interchangeable.

## Revision questions

1. What do LAN, WAN, MAN, and PAN stand for?
2. How do star and mesh topologies differ?
3. What is the difference between a router and a switch?
4. What does an access point connect?
5. What function does the source assign to a firewall?

## Answer key

1. Local Area Network, Wide Area Network, Metropolitan Area Network, and Personal Area Network.
2. Star devices connect to a central switch; mesh devices have multiple connections to one another.
3. A switch forwards frames within a LAN; a router forwards packets between networks.
4. An access point connects wireless devices to a wired network using Wi-Fi.
5. A firewall monitors and controls traffic according to security rules.
