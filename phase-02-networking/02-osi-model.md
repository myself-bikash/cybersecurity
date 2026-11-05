# The OSI Model

## Learning objectives

By the end of this lesson, you should be able to:

- Name all seven OSI layers in order.
- Describe each layer's role and the examples given in the source.
- Explain the direction data moves through the model at the sender and receiver.

## What is the OSI model?

The Open Systems Interconnection (OSI) model is a seven-layer reference model that explains how
data communication works between networked systems. It divides communication into layers with
different responsibilities.

## The seven layers

| Layer | Name | Main function in the source |
| --- | --- | --- |
| 7 | Application | Provides network services to applications; examples include HTTP, DNS, SMTP, and FTP. |
| 6 | Presentation | Handles data format, representation, encoding, compression, and encryption. |
| 5 | Session | Establishes, manages, and terminates communication sessions between applications. |
| 4 | Transport | Handles end-to-end data delivery; TCP and UDP are listed as protocols. |
| 3 | Network | Handles logical addressing and routing; IPv4, IPv6, routers, and IP packets are listed. |
| 2 | Data Link | Transfers data between devices on the same local network; MAC addresses, Ethernet, switches, and frames are listed. |
| 1 | Physical | Transfers raw bits through physical media such as cables, radio signals, connectors, and electrical signals. |

The source's order from top to bottom is:

**Application → Presentation → Session → Transport → Network → Data Link → Physical**

When data travels from a computer, it generally moves from Layer 7 down to Layer 1. At the
receiving end, it moves upward.

## Practical example

When a computer sends a message to another computer, the OSI model provides a way to discuss the
communication in layers—from the application service down to the physical transmission, then back up
at the receiving end.

## Practical lab: layer mapping

Using a paper diagram or an authorized lab scenario:

1. Write the seven layer names in order in both directions.
2. Match each layer to its source-listed function and examples.
3. Mark where MAC addressing, IP routing, TCP/UDP, and HTTP/DNS are introduced in this model.
4. Explain why the OSI model is a reference model rather than a list of steps for one specific
   product.

## Key takeaways

- The OSI model has seven layers, each describing a different part of network communication.
- The source moves through the layers from Application down to Physical at the sender.
- At the receiving end, communication moves upward through the layers.
- The model helps organize networking concepts and examples.

## Revision questions

1. What are the seven OSI layers in order?
2. Which layer handles logical addressing and routing?
3. Which layer handles frames and MAC addressing?
4. Which layer handles end-to-end data delivery?
5. In which direction does data generally move at the sender and receiver?
