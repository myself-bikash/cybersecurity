# Build a Lab and Explore Kali Linux

## Learning objectives

- Explain what cybersecurity tools and a cybersecurity lab are.
- Design an isolated lab with the systems named in the source.
- Compare Kali Linux and Ubuntu.
- Identify common Kali/Linux administration commands and package-management tasks.

## Cybersecurity tools

Cybersecurity tools are software applications or utilities used to identify weaknesses, analyze
networks, test applications, monitor systems, investigate incidents, and protect digital assets.
Professionals use them to understand system behavior, identify potential vulnerabilities, and
improve security.

A tool does not automatically make someone a professional. Understand what it does, why it is used,
and whether its findings are accurate.

## Cybersecurity laboratory

A **cybersecurity lab** is a controlled environment of computers, virtual machines, networks, and
intentionally vulnerable applications for learning and authorized testing. Virtualization allows
multiple virtual computers to run on one physical computer.

| Component | Purpose in the source |
| --- | --- |
| Host operating system | Runs the main computer. |
| Kali Linux | Provides security-testing tools. |
| Ubuntu Linux | Provides a normal Linux server environment. |
| Windows VM | Provides a Windows testing environment. |
| OWASP Juice Shop | Intentionally vulnerable web-application practice target. |
| Metasploitable | Intentionally vulnerable practice machine. |
| Virtual network | Allows controlled communication between lab machines. |
| Snapshots | Allow restoration of virtual machines. |

Virtualization platforms named in the source: VirtualBox, VMware Workstation, KVM/QEMU, and
Hyper-V. A recommended lab has Kali Linux, Ubuntu Server, a Windows VM, and OWASP Juice Shop.
Keep vulnerable targets on an isolated virtual network and never expose them directly to the
public internet.

### Lab safety rules

1. Test only systems you own or have explicit authorization to test.
2. Use intentionally vulnerable applications for simulations.
3. Keep vulnerable VMs isolated.
4. Do not scan public IP addresses without authorization.
5. Take snapshots before experimenting.
6. Never use real passwords or confidential data in practice.
7. Restore the lab after destructive experiments.

## Kali Linux

**Kali Linux** is a Debian-based distribution designed for penetration testing, digital forensics,
security research, and cybersecurity training.

The source lists network security testing, vulnerability assessment, web and wireless security
assessment, password-security testing, digital forensics, reverse engineering, and security
research as uses. Features include a large tool collection, multiple hardware platforms, virtual
machine and live-USB use, Linux command-line utilities, and support for additional security
software.

| Kali Linux | Ubuntu |
| --- | --- |
| Designed mainly for penetration testing and security work. | General-purpose operating system. |
| Includes many security tools. | Focuses on general computing and server use. |
| Commonly used by security professionals. | Commonly used by developers and administrators. |
| Provides a specialized security-testing environment. | Provides a general Linux environment. |

Kali is not inherently more secure than Ubuntu; it is specialized for security testing rather than
automatic protection from attacks.

## Basic command-line reference

The source lists these commands for local system navigation and inspection:

| Command | Purpose |
| --- | --- |
| `pwd` | Display the current directory. |
| `ls` | List files and directories. |
| `cd` | Change directory. |
| `mkdir` | Create a directory. |
| `touch` | Create an empty file. |
| `cat` | Display file contents. |
| `sudo` | Run a command with elevated privileges. Use with care. |
| `whoami` | Display the current username. |
| `ip addr` | Display network-interface information. |
| `ip route` | Display routing information. |
| `ps` | Display running processes. |
| `ss -tuln` | Display listening network sockets. |
| `man` | Display a command's manual. |

Kali uses APT for package management. The source lists:

- `sudo apt update` — refresh package information.
- `sudo apt upgrade` — upgrade installed packages.
- `sudo apt install package-name` — install a package.
- `sudo apt remove package-name` — remove a package.
- `apt search package-name` — search for packages.

These are local system-administration tasks, not instructions to test another system.

## Practical exercises

1. Install Kali Linux in a virtual machine.
2. Explore its desktop and terminal.
3. Create files and directories.
4. Identify your VM's network interfaces.
5. Review running processes.
6. Install and update software using the VM's package manager.
7. Take a VM snapshot.
8. Configure an isolated lab network and confirm vulnerable systems are not publicly reachable.

## Key takeaways

- A lab reduces risk by separating training systems from real organizations.
- Kali is a specialized Linux distribution; Ubuntu is general-purpose.
- Snapshots and isolation are essential when training with vulnerable systems.
- Tool output requires human interpretation and verification.

## Revision questions

1. What is a cybersecurity lab?
2. Which systems are included in the source's recommended lab?
3. Why must intentionally vulnerable VMs be isolated?
4. How do Kali Linux and Ubuntu differ?
5. What can local system-inspection commands tell you?
