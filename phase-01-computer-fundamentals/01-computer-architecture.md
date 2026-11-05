# Computer Architecture

## Learning objectives

By the end of this lesson, you should be able to:

- Identify the major computer components in the source.
- Explain the roles of the CPU, ALU, control unit, registers, memory, storage, firmware, and
  motherboard.
- Describe the boot sequence listed in the course.
- Distinguish input devices from output devices.

## What is computer architecture?

Computer architecture is the study of a computer's internal components and how they work together.
Understanding those components helps explain how an operating system and applications use hardware.

## CPU and processor architecture

The **central processing unit (CPU)** executes instructions and performs calculations. **Processor
architecture** describes how a CPU is designed and processes instructions. The source lists x86,
x86-64, and ARM as examples.

Two CPU components highlighted in the source are:

- **Arithmetic logic unit (ALU):** Performs mathematical calculations and logical operations.
- **Control unit (CU):** Controls and coordinates instruction execution.

**Registers** are very small, fast memory locations inside the CPU. They temporarily hold data and
instructions that the CPU is currently using.

## Memory and storage

| Component | Purpose described in the source |
| --- | --- |
| RAM | Temporary memory for currently running programs and data; its contents are generally lost when power is turned off. |
| ROM | Non-volatile memory used for firmware and other essential instructions. |
| Cache | Very fast memory inside or near the CPU that holds frequently used data, reducing repeated access to slower RAM. |
| HDD | Storage using spinning magnetic disks. |
| SSD | Storage using flash memory; the source notes that it is generally much faster than an HDD. |

HDDs and SSDs store files, applications, and operating systems.

## Firmware and the boot process

**BIOS** and **UEFI** are firmware interfaces that initialize hardware and start the boot process.
The source describes BIOS as the older firmware standard and UEFI as its modern replacement with
more advanced features.

**Booting** means starting a computer and loading its operating system. The basic sequence in the
source is:

1. Press the power button.
2. BIOS/UEFI firmware initializes hardware.
3. Firmware finds a bootable device.
4. The bootloader starts.
5. The operating-system kernel loads.
6. System services start.
7. The login screen appears.

## Motherboard and input/output

The **motherboard** is the main circuit board connecting components such as the CPU, RAM, storage,
and other devices.

| Device type | Role | Source examples |
| --- | --- | --- |
| Input | Sends information to the computer. | Keyboard, mouse, microphone |
| Output | Displays or produces information. | Monitor, speakers, printer |

## Cybersecurity example

When diagnosing a startup problem, the boot sequence provides a way to describe which stage is
involved—firmware initialization, boot-device selection, bootloader, kernel, services, or login.
This lesson explains those stages; it does not prescribe changes to firmware or boot settings.

## Practical exercise

On a computer you own or are authorized to inspect:

1. Draw a simple diagram connecting the CPU, RAM, storage, and motherboard.
2. Label each listed device as input or output.
3. Reproduce the seven boot stages from memory.
4. Identify which statements describe memory and which describe persistent storage.

Do not open or modify hardware unless you are qualified and authorized to do so.

## Key takeaways

- The CPU executes instructions; the ALU and control unit have distinct roles.
- Registers, RAM, ROM, and cache are not interchangeable concepts.
- HDDs and SSDs are storage devices; the source distinguishes their storage mechanisms.
- Firmware starts the boot process before the operating-system kernel loads.
- The motherboard connects core computer components.

## Revision questions

1. What do the ALU and control unit do?
2. How do RAM and ROM differ in the source?
3. What is the role of cache memory?
4. List the seven boot stages in order.
5. How does an input device differ from an output device?
