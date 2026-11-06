# The TCP/IP Model

## Learning objectives

By the end of this lesson, you should be able to:

- Name the four TCP/IP layers.
- Describe each layer's function and examples from the source.
- Compare the TCP/IP model with the OSI reference model.

## What is the TCP/IP model?

TCP/IP is the practical networking model used for communication over the internet. The source
describes it as having four layers.

## Layers and OSI mapping

| TCP/IP layer | Related OSI layers | Function and examples from the source |
| --- | --- | --- |
| Application | 7, 6, 5 | Provides network services to applications; examples include HTTP, HTTPS, DNS, and SSH. |
| Transport | 4 | Handles communication between applications; examples include TCP and UDP. |
| Internet | 3 | Handles IP addressing and packet routing; IP is the example. |
| Network Access | 2, 1 | Handles communication over a local network; Ethernet and Wi-Fi are examples. |

The source also lists the Network Access layer first when explaining the four layers, followed by
Internet, Transport, and Application.

## OSI and TCP/IP comparison

| OSI | TCP/IP |
| --- | --- |
| Seven-layer reference model for understanding networking. | Four-layer model describing the protocol architecture used in real-world internet communication. |
| Separates Application, Presentation, and Session. | Groups those three OSI layers into Application. |
| Separates Data Link and Physical. | Groups those two OSI layers into Network Access. |

## Practical lab: map concepts between models

Using a table or diagram:

1. Write all four TCP/IP layers and their related OSI layers.
2. Place the source's examples (Ethernet, Wi-Fi, IP, TCP/UDP, HTTP/HTTPS, DNS, SSH) in the
   appropriate TCP/IP layer.
3. Explain which layers are grouped together in the TCP/IP model.

**Deliverable:** A four-row mapping table that places all seven protocol examples and shows the OSI
layers grouped by each TCP/IP layer.

## Key takeaways

- The source's TCP/IP model has Network Access, Internet, Transport, and Application layers.
- The Internet layer corresponds to OSI Layer 3; Transport corresponds to Layer 4.
- TCP/IP groups OSI's Application, Presentation, and Session layers together.
- TCP/IP groups OSI's Data Link and Physical layers into Network Access.

## Revision questions

1. What are the four TCP/IP layers?
2. Which TCP/IP layer corresponds to OSI Layers 1 and 2?
3. Where does IP fit in the source's model?
4. Which OSI layers are grouped into TCP/IP Application?
5. How does the source distinguish the purpose of OSI from TCP/IP?

## Answer key

1. Network Access, Internet, Transport, and Application.
2. Network Access.
3. Internet.
4. OSI Application, Presentation, and Session (Layers 7, 6, and 5).
5. OSI is a seven-layer reference model; TCP/IP describes the four-layer protocol architecture
   used for internet communication.
