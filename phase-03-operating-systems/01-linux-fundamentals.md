# Linux Fundamentals

## Learning objectives

By the end of this lesson, you should be able to:

- Describe the main parts of Linux architecture and the distributions named in the source.
- Recognize the Linux filesystem hierarchy and common shell/file-management tasks.
- Explain Linux permissions, users/groups, root privileges, packages, processes, services, and logs.
- Describe the source's networking, SSH, cron, Bash, and hardening topics.

## Why learn Linux?

The source notes that Linux is commonly used in servers, cloud infrastructure, security tools, and
penetration testing. It recommends learning to administer both Linux and Windows, not only using
their graphical interfaces.

## Linux architecture

Linux architecture describes how parts of the operating system work together:

| Component | Role in the source |
| --- | --- |
| Hardware | CPU, RAM, storage, and other physical devices. |
| Kernel | Manages hardware, memory, processes, and devices. |
| System libraries | Let applications interact with the kernel. |
| Shell | Accepts commands from users. |
| Utilities | Programs that perform different tasks. |
| Applications | Software used by users. |

**Example from the source:** When a Linux command is executed, the shell interprets it and may
request services from the kernel.

## Linux distributions

A **Linux distribution (distro)** is a complete operating system built around the Linux kernel with
additional software and tools.

| Distribution | Description in the source |
| --- | --- |
| Ubuntu | Beginner-friendly, general-purpose distribution used for desktops, servers, cloud infrastructure, and software development. The source includes an Ubuntu 22.04 LTS reference describing performance and security improvements; it is retained as a source-era example, not a current-version recommendation. |
| Kali Linux | Debian-based distribution designed for penetration testing, security auditing, and digital forensics. |
| Debian | Community-developed distribution described as stable and known for its package-management system. Ubuntu and Kali Linux are based on Debian. |
| Fedora | Modern Linux distribution with newer technologies. |

The source says Kali includes tools such as Nmap, Wireshark, Metasploit Framework, Burp Suite, and
Aircrack-ng. Kali is not automatically more secure than other distributions; it is a toolkit for
security professionals. This lesson does not explain how to use those testing tools.

## Linux filesystem hierarchy

Linux organizes files and directories hierarchically, beginning at the root directory `/`.

| Directory | Purpose listed in the source |
| --- | --- |
| `/` | Root of the filesystem. |
| `/home` | Regular users' personal directories. |
| `/root` | Root user's home directory. |
| `/etc` | System configuration files. |
| `/bin` | Essential user commands. |
| `/boot` | Boot-related files. |
| `/dev` | Device files. |
| `/var` | Logs and changing application data. |
| `/tmp` | Temporary files. |
| `/usr` | User applications and shared data. |
| `/opt` | Optional application software. |

## Terminal, shell, and file management

- **Terminal:** An interface where text commands are entered and displayed.
- **Shell:** A program that interprets and executes commands.

The source names Bash, Zsh, and Fish as shells. Its example `pwd` displays the current working
directory.

| Command | Purpose in the source |
| --- | --- |
| `ls` | List files. |
| `cd` | Change directory. |
| `pwd` | Show the current directory. |
| `cat` | Display file contents. |
| `less` | Read files page by page. |
| `grep` | Search text. |
| `mkdir` | Create a directory. |
| `touch` | Create an empty file. |
| `cp` | Copy files. |
| `mv` | Move or rename files. |
| `rm` | Remove files. Use carefully because it removes data. |
| `find` | Search for files. |

The PDF's example is:

```bash
mkdir cybersecurity
cd cybersecurity
touch notes.txt
ls
```

It creates a directory, enters it, creates `notes.txt`, and lists the directory. Practice file
operations only in a disposable directory that you own.

## File permissions

Linux permissions determine who can read, modify, or execute files.

| Permission | Meaning |
| --- | --- |
| `r` | Read. |
| `w` | Write. |
| `x` | Execute. |

The source groups permissions by:

| Symbol | Category |
| --- | --- |
| `u` | Owner. |
| `g` | Group. |
| `o` | Others. |

The source's example `chmod 755 script.sh` gives the owner read, write, and execute permissions,
and gives the group and others read and execute permissions.

`chmod` changes permissions; `chown` changes ownership. Incorrect permissions can expose files.

## Users, groups, and root privileges

A **user** represents an account; a **group** lets multiple users share permissions. The source
lists `whoami` to show the current username, `id` to display user and group IDs, and `groups` to
display group memberships.

**Root** is the Linux superuser and has extensive administrative privileges. `sudo` lets authorized
users execute commands with elevated privileges. Unnecessary root privileges increase the damage
that an attacker or compromised application can cause.

## Package management

Package management installs, updates, and removes software. The source says Debian-based systems
such as Ubuntu and Kali use APT. It lists these package operations:

| Operation | Purpose |
| --- | --- |
| Update | Refresh package information. |
| Upgrade | Update installed packages. |
| Install | Install software. |
| Remove | Remove software. |

The source examples are `sudo apt update`, `sudo apt upgrade`, `sudo apt install nmap`, and
`sudo apt remove nmap`. Installing or removing software changes the system; perform such operations
only in an authorized lab and do not use a security tool against systems outside its approved scope.

Use package operations only on systems you administer and follow the system's change-management
requirements.

## Processes and services

A **process** is a running instance of a program. Linux assigns each process a process ID (PID).
The source lists `ps aux` to display processes, `top` to monitor processes and resource usage, and
`kill PID` to send a signal to the process identified by `PID`. Do not stop a process unless you
understand its role and are authorized.

A **service** is a background program that performs a function; the source examples are an SSH
server, web server, and database server. Linux commonly uses systemd to manage services. The source
examples are `systemctl status ssh`, `sudo systemctl start ssh`, `sudo systemctl stop ssh`, and
`sudo systemctl enable ssh`.

## System logs

Logs record operating-system events and help investigate errors, suspicious activity, and security
incidents. The source lists `journalctl`, `journalctl -b` for the current boot, and
`journalctl -u ssh` for a service's logs.
It names `/var/log/auth.log` for authentication events on many Debian-based systems and
`/var/log/syslog` for general system messages on many Debian-based systems. `/var/log/` contains
system and application logs.

## Networking

The source lists these Linux networking tools:

| Command | Purpose |
| --- | --- |
| `ip addr` | Display IP addresses. |
| `ip route` | Display routing information. |
| `ping` | Test connectivity. |
| `ss` | Display socket information. |
| `curl` | Send web requests. |
| `ssh` | Connect to remote systems. |

It also gives `ip addr` and `ss -tuln` as examples. Use network commands only within an authorized
context.

## SSH configuration

SSH provides secure remote access to another computer. The source says the SSH server configuration
is commonly stored in `/etc/ssh/sshd_config`. Its security settings include disabling direct root
login where appropriate, using strong authentication, preferring SSH keys over password
authentication where practical, and restricting access to authorized users.

Changes to remote-access settings can prevent administrators from connecting. Make changes only
with authorization and a recovery plan.

## Cron and Bash

**Cron** schedules commands to run automatically. The source's example `crontab -e` opens a
crontab for editing; its expression `0 2 * * * command` means run the command every day at 2:00 AM.

**Bash** is a command-line shell and scripting language. The source lists variables, input/output,
conditions, loops, functions, and command-line arguments as Bash fundamentals. Its script example
is:

```bash
#!/bin/bash
echo "Welcome to Linux"
```

## Linux security and hardening

The source defines Linux hardening as reducing security weaknesses and protecting the operating
system against attacks. It lists these practices:

1. Keep the operating system updated.
2. Use strong passwords.
3. Configure proper file permissions.
4. Avoid unnecessary root privileges.
5. Disable unused services.
6. Configure a firewall.
7. Secure SSH access.
8. Monitor system logs.
9. Remove unnecessary software.
10. Back up important data.

## Practical lab: Linux administration

Use a Linux virtual machine you own or are explicitly authorized to administer:

1. Identify the kernel, shell, filesystem root, and user home directory.
2. Review file permissions in a disposable directory and explain the owner/group/other categories.
3. Identify user and group information using the source's listed concepts.
4. Observe processes, services, and logs; do not terminate or reconfigure system components without
   authorization.
5. Review the SSH and hardening recommendations without applying remote-access changes to a
   production server.

**Deliverable:** A two-page lab note with the Linux architecture and filesystem diagram, permission
example from the disposable directory, user/group observation, process/service/log observation, and
three hardening recommendations with their rationale.

## Key takeaways

- Linux distributions combine the Linux kernel with software and tools for different purposes.
- The filesystem begins at `/`, and directories have different roles.
- Users, groups, permissions, and root privileges control access.
- Processes, services, and logs support system administration and troubleshooting.
- SSH, cron, Bash, and hardening are part of the source's Linux curriculum.

## Revision questions

1. What are the six Linux architecture components in the source?
2. How does the source distinguish Kali Linux, Ubuntu, Debian, and Fedora?
3. What is the purpose of `/etc`, `/var`, and `/home`?
4. How do `chmod` and `chown` differ?
5. Why should unnecessary root privileges be avoided?
6. What is the purpose of `systemctl`?
7. What are system logs used for?
8. What is Bash scripting?

## Answer key

1. Hardware, kernel, system libraries, shell, utilities, and applications.
2. Ubuntu is general-purpose; Kali is Debian-based for security work; Debian is community-developed
   and stable; Fedora is a modern distribution with newer technologies.
3. `/etc` stores configuration; `/var` holds logs and changing data; `/home` holds regular users'
   personal directories.
4. `chmod` changes permissions; `chown` changes ownership.
5. Root can make broad system changes, so unnecessary privilege increases the impact of mistakes or
   compromise.
6. `systemctl` queries or manages systemd services.
7. They record system events used to understand errors and investigate suspicious activity or
   incidents.
8. Bash scripting combines shell commands and programming constructs to automate tasks.
