# Linux and Windows Administration Projects

## Learning objectives

By the end of these projects, you should be able to:

- Practice the Linux and Windows administration tasks in the source in authorized VMs.
- Record progress through the two source checklists.
- Explain key differences between the operating systems and their administration concepts.

## Safety and authorization

Use disposable virtual machines that you own or are explicitly authorized to administer. Do not
change shared, workplace, or production systems. Take suitable recovery steps before modifying
users, permissions, services, firewalls, SSH settings, or security policies.

## Linux practical projects

Complete each item in a Linux VM:

- [ ] Install Ubuntu or Kali Linux in a virtual machine.
- [ ] Create three Linux users.
- [ ] Create a group and add users to it.
- [ ] Configure different file permissions using `chmod`.
- [ ] Install and remove software using APT.
- [ ] Monitor processes using `ps` and `top`.
- [ ] Start and stop services using `systemctl`.
- [ ] Inspect authentication logs.
- [ ] Configure and test SSH access.
- [ ] Create a Bash script and a cron job.
- [ ] Apply basic Linux security hardening.

The source also asks learners to build a Linux server, create users with different permissions, and
configure SSH. Those tasks are covered by the checklist above.

## Windows practical projects

Complete each item in a Windows VM:

- [ ] Create a Windows virtual machine.
- [ ] Create multiple Windows user accounts.
- [ ] Configure NTFS file permissions.
- [ ] Explore Task Manager and Windows Services.
- [ ] Investigate login events using Event Viewer.
- [ ] Create Windows Firewall rules.
- [ ] Practice basic PowerShell commands.
- [ ] Explore Windows Registry.
- [ ] Inspect Windows network configuration.
- [ ] Configure basic Windows security policies.
- [ ] Apply Windows security hardening.

The source's summary tasks—investigate Event Viewer, configure Windows Firewall, and harden both
operating systems—are included above.

**Deliverable:** A completed checklist and concise lab journal recording the VM/scope, task status,
observations, recovery steps, and one lesson learned for Linux and Windows. Do not record secrets.

## Test yourself before Phase 4

Answer without looking at the lessons:

1. Explain Linux architecture.
2. What is the difference between Kali Linux, Ubuntu, and Debian?
3. What is the Linux root directory?
4. What is the difference between `chmod` and `chown`?
5. What is the difference between a normal user and root?
6. What is the purpose of `systemctl`?
7. What are Linux system logs?
8. What is Bash scripting?
9. What is the Windows Registry?
10. What is NTFS?
11. What is the difference between Windows services and processes?
12. What is Event Viewer?
13. What is PowerShell?
14. What is the difference between NTLM and Kerberos?
15. What is Group Policy?

## Key takeaways

- The source provides 11 Linux and 11 Windows projects.
- Use virtual machines and authorized systems for practice.
- Account, permissions, service, firewall, SSH, and policy changes can affect system availability
  and should be made carefully.

## Revision questions

1. Which projects did you complete in the Linux VM?
2. Which projects did you complete in the Windows VM?
3. Which tasks required elevated privileges, and how did you keep changes within scope?
4. Which review questions need more study before Phase 4?

## Answer key

### Test yourself

1. Linux architecture includes hardware, kernel, system libraries, shell, utilities, and
   applications, working together to run software and manage resources.
2. Debian is a community-developed distribution; Ubuntu is general-purpose and Debian-based; Kali
   is Debian-based and tailored to security testing and forensics.
3. `/` is the root of the Linux filesystem; `/root` is the root user's home directory.
4. `chmod` changes permissions; `chown` changes file ownership.
5. A normal user has limited access; root has broad administrative privileges.
6. `systemctl` manages or reports on systemd services.
7. System logs record operating-system and application events for troubleshooting and investigation.
8. Bash scripting uses shell commands and programming constructs to automate tasks.
9. The Registry is a hierarchical database of Windows and application configuration settings.
10. NTFS is a Windows filesystem that organizes files and supports access permissions.
11. A process is a running program instance; a service is a background program that performs a
    system or application function.
12. Event Viewer displays recorded Windows application, security, system, and setup events.
13. PowerShell is Microsoft's command-line shell and scripting language for administration and
    automation.
14. NTLM is a Windows authentication protocol; Kerberos is a ticket-based network authentication
    protocol.
15. Group Policy centrally manages configuration for Windows users and computers.

### Revision questions

1–2. Learner-specific: name the projects actually completed and summarize one observation from each;
mark unfinished projects as not completed.
3. Tasks such as creating accounts, editing permissions, managing services, changing firewall
rules, and changing SSH or security policies may require elevation. Use only a disposable authorized
VM and record a recovery plan.
4. Learner-specific: name a question that was missed or could not be explained with an example, then
revisit that lesson.
