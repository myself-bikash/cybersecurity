# Phase 1 Practical Lab

## Learning objectives

By the end of this lab, you should be able to:

- Complete the practical tasks listed in the Phase 1 syllabus using authorized systems.
- Explain how the tasks connect to the computer, operating-system, virtualization, and internet
  concepts in this phase.
- Record observations without making changes to systems you do not own or administer.

## Safety and authorization

Use only a computer and virtual machines you own or are explicitly authorized to administer. Keep
practice environments isolated from systems that are not part of the lab. Do not use these tasks to
access another person's accounts, files, or network.

## Lab tasks

### 1. Install a Linux virtual machine

Using a hypervisor you are authorized to use, install a Linux guest operating system in a VM. Record
the host, guest, and hypervisor roles. Do not expose the VM to untrusted networks.

### 2. Install a Windows virtual machine

Install a Windows guest operating system in an authorized VM environment. Record how it differs
from the Linux guest in your setup. Follow applicable licensing and organizational requirements.

### 3. Understand the boot process

Write the sequence from power-on through firmware initialization, boot-device selection, bootloader,
kernel, system services, and login screen. Identify which parts are firmware and which are operating
system components as described in Lesson 1.

### 4. Create users and manage permissions

In a disposable lab VM, create or review user accounts and file permissions using the operating
system's supported interface. Record which account can read, modify, or execute a test file. Do not
change permissions on shared or production systems.

### 5. Monitor processes and system resources

Use the operating system's built-in interface to observe running processes and system-resource use.
Relate a running program to the process and thread concepts from Lesson 2. Do not terminate
processes unless you understand their role and are authorized to do so.

## Lab report

Record:

- The lab environment and authorization boundary.
- Which tasks you completed.
- What you observed about booting, accounts, permissions, processes, and resources.
- Any errors or tasks you could not complete.
- One lesson learned from each of the four Phase 1 modules.

Do not include passwords, personal information, or secrets in your report.

**Deliverable:** A lab report containing the environment and authorization boundary, completed
tasks, observations for all five tasks, errors or omissions, and one lesson learned from each module.

## Key takeaways

- The syllabus asks learners to install Linux and Windows VMs, study booting, manage users and
  permissions, and monitor processes and resources.
- A disposable VM provides a practice setting, but virtualization is not an absolute security
  boundary.
- Authorization and isolation apply to every lab activity.

## Revision questions

1. What are the five practical tasks listed in the Phase 1 syllabus?
2. Which Phase 1 concepts are involved in user and permission management?
3. Why should process termination be approached cautiously?
4. What information should be included in the lab report, and what should be excluded?

## Answer key

1. Install Linux and Windows VMs; describe booting; create/review users and permissions; monitor
   processes and resources.
2. Account identity, groups, file permissions, and least privilege from the OS lesson.
3. A process may be a required system service or application; stopping it can interrupt work or
   damage system availability.
4. Include the lab boundary, task status, observations, errors, and lessons; exclude passwords,
   personal information, and secrets.
