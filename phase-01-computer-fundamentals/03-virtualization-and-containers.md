# Virtualization and Containers

## Learning objectives

By the end of this lesson, you should be able to:

- Define virtualization, virtual machines, and hypervisors.
- Compare Type 1 and Type 2 hypervisors using the source's examples.
- Describe VirtualBox, VMware, and KVM as introduced in the PDF.
- Explain containers and the basic Docker terms in the source.
- Describe the source's security use case and isolation caution.

## Virtualization and virtual machines

**Virtualization** means creating virtual versions of computers or computing resources using
physical hardware.

A **virtual machine (VM)** is a software-based computer that runs its own operating system. The
source example is running Kali Linux inside Windows without replacing Windows.

A **hypervisor** is software that creates and manages virtual machines.

## Type 1 and Type 2 hypervisors

| Type | Description | Examples listed in the source |
| --- | --- | --- |
| Type 1 | Runs directly on hardware. | VMware ESXi, Hyper-V |
| Type 2 | Runs on an existing operating system. | VirtualBox, VMware Workstation |

## Virtualization products named in the source

- **VirtualBox:** Free virtualization software that can run different operating systems inside VMs.
  The source example is running Kali Linux on a Windows computer.
- **VMware:** Provides products for running and managing virtual machines.
- **KVM (Kernel-based Virtual Machine):** A Linux technology that turns the Linux kernel into a
  hypervisor.

## Containers and Docker

**Containers** package applications and their dependencies together. Unlike traditional VMs,
containers generally share the host operating system's kernel.

**Docker** is a platform for building, running, and managing containers. The source defines:

| Term | Definition |
| --- | --- |
| Image | A template used to create containers. |
| Container | A running instance of an image. |
| Dockerfile | Instructions for building an image. |
| Docker Hub | A registry for sharing container images. |

## Cybersecurity example and isolation

The source says VMs and containers can help create isolated environments for security testing and
malware analysis. It also explicitly warns that isolation is not absolute and that proper security
precautions are needed.

## Practical lab: compare environments

In an isolated lab on hardware you own or are authorized to use:

1. Draw a diagram showing the host operating system, a VM, a hypervisor, and a container.
2. Label the Type 1 and Type 2 examples from the comparison table.
3. Explain the difference between an image and a running container.
4. Write a short checklist of lab boundaries and recovery steps before installing a guest OS.
5. Do not use a VM or container to access or test systems without authorization.

Do not treat virtualization as a guarantee that a guest or container cannot affect its host.

## Key takeaways

- A VM runs its own operating system; a hypervisor creates and manages VMs.
- Type 1 hypervisors run directly on hardware; Type 2 hypervisors run on an existing OS.
- Containers package applications and dependencies and generally share the host kernel.
- The source names four Docker concepts: image, container, Dockerfile, and Docker Hub.
- VM/container isolation is useful but not absolute.

## Revision questions

1. What does a hypervisor do?
2. How does a Type 1 hypervisor differ from a Type 2 hypervisor?
3. Which examples does the source list for each hypervisor type?
4. How do VMs and containers differ in the source's description?
5. Why does the source caution against assuming isolation is absolute?
