# SQL and Database Security

## Learning objectives

By the end of this lesson, you should be able to:

- Explain SQL's purpose and the database concepts in the source syllabus.
- Distinguish the SQL statements and clauses listed in the course.
- Explain SQL injection and the defensive role of prepared/parameterized statements.

## What is SQL?

SQL stands for Structured Query Language. It is used to communicate with relational databases.

## SQL syllabus

- Database fundamentals.
- Tables, rows, and columns.
- Primary keys and foreign keys.
- `SELECT`, `INSERT`, `UPDATE`, and `DELETE` statements.
- `WHERE` conditions.
- `JOIN` operations.
- `GROUP BY` and `ORDER BY`.
- Database permissions.
- SQL injection.
- Prepared statements.
- Database security.

## SQL injection and prepared statements

The source defines SQL injection as a vulnerability that occurs when untrusted input is improperly
included in database queries. It says understanding insecure queries helps explain how
parameterized queries prevent this vulnerability.

This lesson focuses on recognizing the risk and using secure query design. It does not provide
attack payloads or instructions for testing third-party databases.

## Practical lab: query-design review

Use an instructor-provided sample or create a tiny fictional table on paper (for example, rows
containing invented book titles and categories):

1. Identify tables, rows, columns, and key relationships.
2. Label which SQL statement or clause would be used for a read, insert, update, or delete task.
3. Identify where untrusted input reaches a database query.
4. Explain how prepared/parameterized statements address the source's described risk.
5. Do not run queries against any database unless you own it or have explicit permission.

**Deliverable:** A schema sketch, four task-to-statement matches, and a short note describing how
parameter binding keeps user-supplied values separate from query structure.

## Key takeaways

- SQL communicates with relational databases.
- The syllabus covers database structure, keys, queries, permissions, and security.
- Improperly including untrusted input in queries can create SQL injection.
- The source names prepared/parameterized statements as a prevention measure.

## Revision questions

1. What does SQL stand for?
2. How do primary and foreign keys fit into the syllabus?
3. What do `WHERE`, `JOIN`, `GROUP BY`, and `ORDER BY` relate to?
4. How does the source define SQL injection?
5. What defensive purpose do prepared statements serve?

## Answer key

1. Structured Query Language.
2. A primary key identifies a row in its table; a foreign key refers to a key in another table to
   represent a relationship.
3. They filter rows, combine related tables, group rows for summaries, and order results,
   respectively.
4. It occurs when untrusted input is improperly included in a database query.
5. They keep input values separate from SQL structure, helping prevent input from changing the
   intended query.
