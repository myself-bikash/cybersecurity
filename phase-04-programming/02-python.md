# Python Programming

## Learning objectives

By the end of this lesson, you should be able to:

- Explain why Python is used in the cybersecurity examples in the source.
- Describe the Python topics in the syllabus.
- Relate basic programming constructs to safe log, file, and report tasks.

## What is Python?

The source describes Python as a high-level language used in cybersecurity because it is readable,
has many libraries, and supports automation.

Source-listed applications include automating repetitive tasks, analyzing system logs, processing
network information, interacting with APIs, building security tools, and analyzing suspicious
files.

## Python syllabus

### Data and control flow

- **Variables** store information in a program.
- **Data types:** integer (the source example is `10`), float (`10.5`), string (`"Hello"`),
  Boolean (`True` or `False`), list (an ordered collection of values), and dictionary
  (key-value pairs).
- **Conditions** let programs make decisions. The source example is checking whether a password
  meets a minimum length requirement.
- **Loops** repeat instructions. The source names `for` and `while`; examples include checking
  multiple files automatically.

### Functions, collections, and files

- **Functions** are reusable blocks of code that perform tasks. The source example is a function
  that checks password strength.
- **Lists and dictionaries:** Lists store ordered values; dictionaries store key-value pairs. The
  source example is storing usernames and associated roles.
- **File handling** creates, reads, writes, and modifies files. A source security use is reading
  system logs and analyzing suspicious entries.

### Errors, modules, and program organization

- **Exception handling** manages errors without unexpectedly stopping a program. The source lists
  `try`, `except`, `finally`, and `raise`.
- **Modules and packages** support code reuse. The source examples are `os`, `sys`, `json`,
  `socket`, and `re`.
- **Object-oriented programming (OOP)** organizes programs using classes and objects. The source
  lists classes, objects, inheritance, encapsulation, polymorphism, and abstraction.

### Text, data exchange, and communication

- **Regular expressions (Regex)** identify text patterns. The source examples are finding email
  addresses, IP addresses, or suspicious strings in logs.
- **JSON** is a format for exchanging structured information; the source example is an API
  returning information about a user or security alert.
- **HTTP requests:** The source lists GET, POST, PUT, and DELETE. It notes their use in testing web
  applications and interacting with APIs.
- **Socket programming** lets programs communicate over a network. The source lists IP addresses,
  ports, client-server communication, and TCP and UDP sockets.
- **Multithreading** executes multiple threads concurrently; the source example is processing
  multiple log files or network tasks efficiently.
- **API interaction** retrieves information, submits requests, and automates workflows.
- **Automation** performs repetitive tasks automatically; the source example is collecting system
  information and generating reports.
- **Logging** records program events for debugging, monitoring, and security investigations.

## Practical lab: local log summary

Use a small synthetic log file you create yourself, with a few harmless labels such as `INFO`,
`WARNING`, and `ERROR`; do not use personal or operational logs.

1. Write down the count of each label before coding.
2. Plan or write a local script that reads the file and counts those labels.
3. Describe how it handles a missing or malformed file.
4. Compare the program's counts with your manual counts and note any difference.

For a runnable starting point, save these lines as `sample.log`:

```text
INFO service started
WARNING retry scheduled
ERROR sample failure
INFO health check passed
```

Save this script as `summarize.py` in the same folder, then run `python summarize.py`:

```python
from collections import Counter
from pathlib import Path

labels = {"INFO", "WARNING", "ERROR"}
counts = Counter()

try:
    with Path("sample.log").open(encoding="utf-8") as log_file:
        for line_number, line in enumerate(log_file, start=1):
            fields = line.split(maxsplit=1)
            if not fields:
                continue
            label = fields[0]
            if label not in labels:
                print(f"Skipping unrecognized line {line_number}")
                continue
            counts[label] += 1
except OSError as error:
    print(f"Could not read sample.log: {error}")
else:
    for label in sorted(labels):
        print(f"{label}: {counts[label]}")
```

Expected counts are `ERROR: 1`, `INFO: 2`, and `WARNING: 1`. Try renaming `sample.log` to check
the missing-file message, then restore its name. This example reads only the synthetic file in the
current folder.

**Deliverable:** The synthetic input, a short script or pseudocode, its count summary, and one
sentence explaining its missing-file behavior.

## Key takeaways

- Python's readability and libraries support the source's automation examples.
- The syllabus covers data, control flow, files, errors, reusable modules, OOP, text matching,
  JSON, HTTP, sockets, threads, APIs, automation, and logging.
- Log analysis and report generation are examples; access to input data still requires
  authorization.

## Revision questions

1. How do a list and a dictionary differ in the source?
2. What is exception handling, and which keywords are listed?
3. What is the difference between a module and a package as introduced here?
4. Which HTTP methods does the source list?
5. What topics does the source include under socket programming?
6. Why is logging useful?

## Answer key

1. A list is an ordered collection; a dictionary maps keys to values.
2. Exception handling responds to errors; the listed keywords are `try`, `except`, `finally`, and
   `raise`.
3. A module is reusable code; a package organizes related modules.
4. GET, POST, PUT, and DELETE.
5. IP addresses, ports, client-server communication, and TCP/UDP sockets.
6. Logging records events for debugging, monitoring, and security investigations.
