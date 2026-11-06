# Programming Projects and Phase Review

## Learning objectives

By the end of this lesson, you should be able to:

- Describe the six programming projects and skills listed in the source.
- Follow the suggested 99-day learning schedule as a plan, not a guarantee of mastery.
- Answer the source's Phase 4 readiness questions.

## Practical projects

Complete projects using only sample data, systems, and web applications you own or are explicitly
authorized to assess. Do not include passwords, personal information, secrets, or data belonging to
others.

### Project 1: Log analyzer — Python beginner

- Create or use an instructor-provided synthetic log containing harmless sample events.
- Read the sample, count a chosen event label, and generate a summary report.
- Check the result against a manual count; do not include credentials or personal data.
- **Skills:** Python, file handling, loops, Regex.

**Deliverable:** The synthetic input and a short report with event counts and a note on its limits.

### Project 2: Password strength checker — Python beginner

- Define a simple checklist such as length and character variety.
- Test it with synthetic placeholder strings only; never request or save a real password.
- Provide improvement suggestions and state that a toy checker cannot prove a password is safe.
- **Skills:** Conditions, functions, Regex, strings.

Use synthetic test inputs; do not collect or store real users' passwords.

**Deliverable:** A criteria table and results for at least five invented test strings, with no
passwords copied from real accounts.

### Project 3: File integrity checker — Python intermediate

- Create two harmless sample files in a disposable directory and calculate SHA-256 hashes.
- Save the baseline values, change one sample file, and compare the new hashes to the baseline.
- Explain that a changed hash indicates changed content, not whether the change was malicious.
- **Skills:** Hashing, file handling, dictionaries, modules.

**Deliverable:** A baseline-versus-current table and a short interpretation for each sample file.

### Project 4: Network information collector — Python intermediate

- On a local system you own, inspect only its own network configuration using approved, read-only
  information sources.
- Summarize the hostname and non-sensitive configuration; omit public addresses, identifiers, and
  any unrelated device information.
- **Skills:** Python, networking libraries, operating-system interaction.

Keep collection limited to a system you own or administer.

**Deliverable:** A redacted local-system report and a note defining what information was deliberately
excluded.

### Project 5: Automated security report generator — Python intermediate

- Use a small synthetic inventory and event file rather than collecting from an unmanaged machine.
- Summarize only the fields needed for the exercise and generate a local HTML report.
- Review the report for personal data, secrets, and unsupported security conclusions.
- **Skills:** Python, automation, JSON, logging, HTML.

**Deliverable:** The synthetic inputs, local HTML report, and a short privacy/content review.

### Project 6: HTTP security header analyzer — Python intermediate

- Use an instructor-provided response sample or a local test page you own; do not query public or
  third-party sites without explicit authorization.
- Read the supplied response headers, compare them with a checklist, and describe observations
  without claiming that headers alone prove a site is secure.
- **Skills:** HTTP, APIs, Python requests, web security.

Use only a local or explicitly authorized application.

**Deliverable:** A header checklist and a brief, appropriately limited assessment based on the
provided or local response.

## Suggested learning schedule

The source's schedule is a suggested plan, not a guaranteed mastery time:

| Stage | Topics | Suggested time |
| --- | --- | --- |
| 1 | Python fundamentals | 15 days |
| 2 | Python advanced concepts and projects | 10 days |
| 3 | Bash scripting | 7 days |
| 4 | PowerShell | 7 days |
| 5 | SQL | 7 days |
| 6 | HTML and CSS | 4 days |
| 7 | JavaScript | 12 days |
| 8 | C programming | 15 days |
| 9 | Assembly fundamentals | 7 days |
| 10 | Go fundamentals | 5 days |
| 11 | Advanced programming concepts | 10 days |
| **Total** |  | **99 days** |

The source notes that Bash and PowerShell can be learned alongside Linux and Windows
administration practice.

## What to know before Phase 5

Answer without looking at the lessons:

1. What is the difference between a compiler and an interpreter?
2. What are variables and data types?
3. What is the difference between a Python list and dictionary?
4. What is a function?
5. What is exception handling?
6. What is object-oriented programming?
7. What is Regex?
8. What is socket programming?
9. What is the difference between Bash and PowerShell?
10. What is SQL injection?
11. What is JavaScript DOM manipulation?
12. What is the difference between stack and heap?
13. What is a pointer?
14. What is a buffer overflow?
15. What is secure coding?

## Key takeaways

- The six projects connect programming concepts to security-oriented tasks.
- Projects must use authorized systems and synthetic or permitted data.
- The source's suggested learning schedule totals 99 days and is not a mastery guarantee.
- The readiness questions cover programming fundamentals, web/database security, and memory.

## Revision questions

1. Which project checks file changes using SHA-256?
2. Which projects use HTTP headers, network information, or system logs?
3. What is the total duration in the source's schedule?
4. Which languages does the source suggest learning alongside OS administration?
5. Which Phase 4 readiness questions do you need to revisit?

## Answer key

### Readiness questions

1. A compiler translates a program before execution; an interpreter executes instructions through
   a runtime as the program runs. Some languages use both approaches.
2. Variables name or reference stored values; data types describe the kinds of values and operations
   supported.
3. A list is ordered; a dictionary associates keys with values.
4. A reusable named block of code that can accept inputs and produce a result or side effect.
5. Handling errors so a program can report or recover from them rather than stopping unexpectedly.
6. Organizing software around objects and classes that combine data and behavior.
7. A notation for describing text patterns used to find or validate matching strings.
8. Program-to-program communication over network endpoints; practice only in an authorized setting.
9. Bash is commonly used on Linux; PowerShell is Microsoft's shell and scripting language for
   Windows administration.
10. A flaw caused by improperly incorporating untrusted input into a database query.
11. Using JavaScript to inspect or change the browser's structured page representation.
12. The stack commonly stores function-call data/local variables; the heap supports dynamic
    allocation.
13. A variable that stores a memory address.
14. Writing beyond a buffer's capacity, potentially corrupting adjacent memory.
15. Designing software to prevent common vulnerabilities through validation, access controls,
    protected data, and safe error handling.

### Project review

1. Project 3, the file integrity checker.
2. Project 1 uses logs; Project 4 collects local network information; Project 6 reviews HTTP headers.
   Project 5 also summarizes synthetic security events.
3. Ninety-nine days.
4. Bash and PowerShell.
5. This is learner-specific: revisit questions answered incorrectly or without an example, then
   retry them using the lesson notes.
