# Operating System Fundamentals

## Learning objectives

By the end of this lesson, you should be able to:

- Explain the purpose of an operating system, kernel, and shell.
- Distinguish user mode from kernel mode and processes from threads.
- Describe multitasking, memory management, virtual memory, and system calls.
- Recognize the filesystems and file permissions named in the source.

## What is an operating system?

An **operating system (OS)** is software that manages computer hardware and allows applications to
run. The source identifies hardware, memory, files, processes, and applications as areas an OS
manages, and lists Windows, Linux, and macOS as examples.

## Kernel and shell

- **Kernel:** The core part of an operating system. It manages the CPU, memory, hardware, and
  processes.
- **Shell:** An interface through which users communicate with the operating system.

**Example:** Bash is a Linux command-line shell.

## User mode and kernel mode

| Mode | Description in the source |
| --- | --- |
| User mode | Applications run with restricted permissions. |
| Kernel mode | The operating-system kernel runs with privileged access to hardware and system resources. |

The source notes that malware may attempt to gain higher privileges to control more parts of a
system. This is a security concept, not an instruction to attempt privilege escalation.

## Processes, threads, and multitasking

- **Process:** A running program.
- **Thread:** A unit of execution inside a process.
- **Multitasking:** An operating system managing multiple running programs at the same time.

**Examples from the source:** A web browser is a process that may contain multiple threads for
different tasks. Chrome, VS Code, and a music player can run simultaneously.

## Memory management and virtual memory

**Memory management** is the process of managing RAM and allocating memory to running programs.
**Virtual memory** lets an operating system use storage space to support memory management when
physical RAM is insufficient. The source also notes that each process has its own virtual address
space.

## System calls

System calls let applications request services from the operating-system kernel. Source examples
include:

- Opening files.
- Reading data.
- Creating processes.
- Accessing system resources.

## Filesystems and permissions

A **file system** organizes and manages how data is stored and accessed on storage devices. The
source examples are NTFS (Windows), ext4 (Linux), FAT32, and exFAT.

File permissions determine who can read, write, or execute files. The source gives these basic
Linux permissions:

| Permission | Meaning |
| --- | --- |
| Read (`r`) | View file contents. |
| Write (`w`) | Modify file contents. |
| Execute (`x`) | Run a file or enter a directory. |

Incorrect permissions can allow unauthorized users to access or modify sensitive files.

## Practical lab: operating-system concepts

Use a computer or virtual machine you own or are authorized to administer:

1. Identify one application and describe it as a process.
2. Explain how the kernel and shell differ; use Bash as the source's shell example.
3. Sort the source's filesystem names by the operating system or context stated in the lesson.
4. For a fictional file, state which users should be allowed to read, modify, or execute it.
5. Explain why overly broad permissions could create a security problem.

Do not change permissions on shared or production systems.

## Key takeaways

- The OS manages hardware and provides an environment for applications.
- The kernel is the OS core; the shell is a user interface.
- User mode has restricted permissions, while kernel mode has privileged access.
- A process may contain multiple threads.
- System calls let applications request kernel services.
- Permissions control access, and incorrect permissions can expose sensitive files.

## Revision questions

1. How do a kernel and shell differ?
2. What is the difference between a process and a thread?
3. What does virtual memory do according to the source?
4. Name two operations that can be requested through system calls.
5. What can read, write, and execute permissions allow?
