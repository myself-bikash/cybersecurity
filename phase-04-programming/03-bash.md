# Bash Scripting

## Learning objectives

By the end of this lesson, you should be able to:

- Describe Bash and the source's Bash syllabus.
- Recognize the source's basic script example.
- Identify appropriate, authorized administrative automation tasks.

## What is Bash?

Bash is a command-line shell and scripting language commonly used in Linux. It can automate Linux
administration and security tasks.

## Bash syllabus

The source lists:

1. Shell basics.
2. Variables.
3. User input.
4. Conditions (`if`, `else`).
5. Loops (`for`, `while`).
6. Functions.
7. Command-line arguments.
8. File handling.
9. Pipes and redirection.
10. Environment variables.
11. Exit codes.
12. Process management.
13. Text processing with `grep`, `sed`, and `awk`.
14. Cron automation.
15. Error handling.

The source's example prints a message:

```bash
#!/bin/bash
echo "Linux Security Learning"
```

## Cybersecurity applications

The source lists automating log analysis, collecting system information, managing users, checking
file permissions, and automating system maintenance.

## Practical lab: script planning

In a disposable directory in a Linux VM you own or are authorized to administer:

1. Create a harmless test file and note its path.
2. Write or outline a script that reports whether that file exists, then try it with a nonexistent
   path.
3. Identify the condition, argument or variable, output, and exit-status behavior.
4. Keep all files inside the disposable directory; do not change accounts, permissions, or services.

**Deliverable:** The script or pseudocode, the two test paths, expected messages, and the intended
success/error exit statuses.

## Key takeaways

- Bash combines a shell with scripting for Linux administration and automation.
- The source syllabus spans shell basics, control flow, files, environment, processes, text
  processing, cron, and errors.
- Keep scripts within systems and data you are authorized to manage.

## Revision questions

1. What are the `if`/`else` and `for`/`while` topics used for?
2. Which text-processing utilities does the source name?
3. What are pipes and redirection topics in the syllabus?
4. Name three cybersecurity applications of Bash from the source.

## Answer key

1. Conditions choose actions; loops repeat instructions.
2. `grep`, `sed`, and `awk`.
3. They connect command output to other commands or files, supporting text and data flow.
4. Examples include log analysis, collecting system information, checking permissions, or
   maintenance automation.
