# Advanced Programming Concepts and Secure Coding

## Learning objectives

By the end of this lesson, you should be able to:

- Explain the memory and operating-system concepts listed in the source.
- Distinguish stack and heap at the level described in the PDF.
- Identify common data structures and algorithm topics.
- Describe the secure-coding concepts included in the course.

## Memory management

Memory management allocates, uses, and releases computer memory. The source says learners should
understand how programs use RAM, allocation, deallocation, memory leaks, and memory corruption.

## Stack and heap

| Stack | Heap |
| --- | --- |
| Stores function-call information and local variables in many implementations. | Stores dynamically allocated memory. |
| Usually managed automatically. | Allocation and release depend on the language/runtime. |
| Typically follows last-in, first-out behavior. | Does not inherently follow LIFO. |
| Often smaller. | Often larger. |

These are the distinctions described by the source; implementation details can depend on the
language and runtime.

## Pointers and buffer overflows

A **pointer** is a variable that stores a memory address. The source highlights pointers in C and
low-level programming.

A **buffer overflow** occurs when a program writes more data into a buffer than it can hold. The
source says this can corrupt adjacent memory and potentially cause security vulnerabilities.

These are different concepts: a pointer refers to a location; a buffer is a region that holds data.
An overflow is an out-of-bounds write, not simply the use of a pointer.

## Data structures and algorithms

Data structures organize and store information. The source examples are arrays, linked lists,
stacks, queues, hash tables, trees, and graphs.

An **algorithm** is a step-by-step procedure for solving a problem. The source lists searching,
sorting, recursion, time complexity, and space complexity.

## Operating-system interactions and networking libraries

The source says programs interact with operating systems through system calls, processes, files,
permissions, and memory.

It also lists networking libraries, with Python examples:

- `socket`
- `requests`
- `http.client`

## Secure coding

Secure coding means writing software to prevent common security vulnerabilities. The source lists:

- Input validation.
- Output encoding.
- Authentication.
- Authorization.
- Secure password storage.
- Parameterized SQL queries.
- Secure session management.
- Error handling.
- Secrets management.

## Practical lab: secure-design review

Review a small, instructor-provided program or design description:

1. Identify where input enters and what validation is described.
2. Note how output, authentication, authorization, errors, sessions, and secrets are handled.
3. If a database is involved, explain whether the source's parameterized-query concept is applied.
4. Do not test real services, use real credentials, or add exploit payloads.

**Deliverable:** A completed review table with one row per secure-coding concept, the evidence in
the sample (or *not shown*), and one safe design recommendation.

## Key takeaways

- Programs allocate, use, and release memory; memory misuse can cause leaks or corruption.
- Stack and heap have different roles and allocation characteristics in the source.
- Data structures and algorithms organize information and solve problems.
- Secure coding includes input/output handling, access control, data protection, and error handling.

## Revision questions

1. What is memory management?
2. How do stack and heap differ in the source's comparison?
3. What is a pointer?
4. How does the source define a buffer overflow?
5. Name four data structures and three algorithm topics.
6. Name five secure-coding concepts from the source.

## Answer key

1. Allocating, using, and releasing memory so programs can operate without waste or corruption.
2. The stack commonly stores function-call information and local variables with automatic
   management; the heap supports dynamic allocation and has runtime/language-dependent management.
3. A variable that stores a memory address.
4. Writing more data into a buffer than it can hold, potentially corrupting adjacent memory.
5. Data structures: arrays, lists, stacks, queues, hash tables, trees, or graphs. Algorithms:
   searching, sorting, recursion, or complexity analysis.
6. Examples include input validation, output encoding, authentication, authorization, secure
   password storage, parameterized SQL, secure sessions, error handling, and secrets management.
