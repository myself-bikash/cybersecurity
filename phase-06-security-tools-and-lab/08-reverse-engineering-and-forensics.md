# Reverse Engineering and Digital Forensics

## Learning objectives

- Define reverse engineering, digital forensics, and memory forensics.
- Describe the roles of Ghidra, Autopsy, and Volatility.
- Explain digital evidence, metadata, hashes, chain of custody, disk images, and volatile data.
- Practice only with software you created or approved training evidence.

## Ghidra

**Ghidra** is a software reverse-engineering framework developed by the U.S. National Security
Agency, according to the source. It helps analyze compiled programs and understand how software
works.

**Reverse engineering** examines a program or system to understand its internal structure, behavior,
and functionality. The source lists analyzing executables, understanding compiled programs,
examining suspicious software, identifying potentially malicious functions, studying program logic,
and supporting malware analysis as uses.

| Feature | Purpose |
| --- | --- |
| Disassembler | Converts machine-code instructions into assembly-language representations. |
| Decompiler | Attempts to create a higher-level representation resembling source code. |
| Function analysis | Identifies and examines program functions. |
| Strings analysis | Extracts readable text from executable files. |
| Cross-references | Shows where functions, variables, or other elements are referenced. |

Related concepts: executable file, machine code, assembly language, disassembly, decompilation,
functions, registers, and memory addresses.

## Practical exercises and deliverables

**Practical exercise:** Open a harmless program you compiled yourself, analyze it with Ghidra,
examine functions and readable strings, view its assembly representation, and compare the
decompiled output with your source. Do not analyze or run unknown samples on a production system.

## Autopsy

**Autopsy** is an open-source digital-forensics platform for investigating evidence from computers,
storage devices, and other supported sources. It provides a graphical interface.

**Digital forensics** identifies, collects, preserves, examines, and reports digital evidence in a
reliable, systematic manner.

| Concept | Definition |
| --- | --- |
| Digital evidence | Information stored or transmitted digitally that may be relevant to an investigation. |
| File metadata | Information such as name, size, timestamps, and other file properties. |
| File hash | Digest used to help verify whether a file has changed. |
| Chain of custody | Documented record of who collected, handled, transferred, and examined evidence. |
| Disk image | Forensic copy of a storage device or supported volume. |

Source-listed uses include investigating files and folders, recovering deleted-file information
where possible, examining metadata and browser activity, and producing reports.

**Practical exercise:** Use a supported training image or a collection of test files. Create a case,
add the evidence, review files and metadata, examine deleted-file information where available,
generate a report, and document integrity. In real investigations, preserve the original evidence
and follow approved procedures; do not casually modify the original storage device.

## Volatility

**Volatility** is an open-source memory-forensics framework for examining computer-memory
captures.

**Memory forensics** analyzes volatile computer memory, usually RAM, to investigate activity and
possible incidents.

- **RAM dump:** captured copy of memory at a particular time.
- **Process:** running instance of a program.
- **Memory artifact:** information in memory that may reveal system activity.
- **Volatile data:** information that may disappear when a system loses power or restarts.

Source-listed uses include investigating running processes, loaded modules, suspicious processes,
network-related memory artifacts, malware activity, and incident response.

**Practical exercise:** Use a legitimate sample memory image for training, identify its operating
system context, examine processes and available network-related artifacts, identify suspicious
behavior from the sample, and write a short report.

**Steps and deliverable:** Use only your own compiled program, test files, and a provided training
image. Record the evidence source, calculate an integrity hash where appropriate, and keep the
original unchanged. Separate direct observations from interpretations and list at least one
limitation. Submit a short Ghidra comparison, an Autopsy case summary, and a memory-artifact report;
do not run unknown samples.

## Tool comparison

| Tool | Main purpose | Evidence or target |
| --- | --- | --- |
| Ghidra | Reverse engineering. | Executable programs. |
| Autopsy | Digital forensics. | Disk and file-system evidence. |
| Volatility | Memory forensics. | RAM captures. |

## Key takeaways

- Ghidra analyzes program structure; Autopsy examines disk/file evidence; Volatility analyzes
  memory captures.
- Evidence preservation, hashes, and chain of custody support reliable forensic work.
- Use self-created software and legitimate training evidence.

## Revision questions

1. What is reverse engineering?
2. What are a disassembler and decompiler?
3. What is digital forensics?
4. What does chain of custody document?
5. How do disk forensics and memory forensics differ?
6. Why can volatile data disappear?

## Suggested answers

1. Reverse engineering examines a program's structure and behavior to understand how it works.
2. A disassembler translates machine instructions into assembly; a decompiler attempts a
   higher-level representation resembling source code. Neither reliably recovers the original
   source.
3. Digital forensics systematically identifies, preserves, examines, and reports digital evidence.
4. Chain of custody records who collected, handled, transferred, and examined evidence, supporting
   its traceability.
5. Disk forensics examines persistent storage and file-system evidence; memory forensics examines
   a captured state of RAM and its transient artifacts.
6. Volatile data can be overwritten or lost when a system changes state, shuts down, or loses power.
