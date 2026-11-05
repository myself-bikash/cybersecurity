# Cybersecurity Complete Course

A structured, phase-by-phase cybersecurity learning path covering computing foundations,
networking, operating systems, security principles, practical labs, defensive operations, digital
forensics, malware-analysis concepts, and enterprise identity security.

The original course PDF remains preserved at the repository root. This learning repository organizes
its topics into linked Markdown lessons, projects, revision material, and progress checklists. Where
the source is incomplete, that limitation is called out rather than guessed. Some assessments are
course-created and are labeled as such.

## Learning objectives

By progressing through the course, learners will be able to:

- Explain computer, operating-system, networking, and security fundamentals.
- Use programming and security tools for authorized learning and defensive work.
- Assess risks, understand common attack concepts, and recommend mitigations.
- Apply security concepts to systems, networks, web applications, APIs, and enterprise identity.
- Monitor events, respond to incidents, and interpret digital evidence with appropriate limitations.
- Document findings, complete structured projects, and communicate security recommendations.

## Prerequisites

No prior cybersecurity experience is required. Basic computer use is helpful; networking, operating
systems, and programming are introduced progressively. Practical exercises may require a computer
capable of running virtual machines, but learners can complete many lessons using diagrams,
synthetic data, or written analysis instead.

All hands-on activity must use systems, accounts, and data that you own or are explicitly authorized
to assess. Use isolated labs where specified. Do not test against public, school, workplace, or
third-party systems without clear authorization.

## Complete course roadmap

| Phase | Focus | Start here |
| --- | --- | --- |
| 00 | Introduction: cybersecurity, threats, roles, and case studies | [Phase 00 lessons](phase-00-introduction/01-cybersecurity-and-infosec.md) |
| 01 | Computer fundamentals | [Phase 01 overview](phase-01-computer-fundamentals/index.md) |
| 02 | Networking | [Phase 02 overview](phase-02-networking/index.md) |
| 03 | Operating systems: Linux, Windows, and administration | [Phase 03 overview](phase-03-operating-systems/index.md) |
| 04 | Programming languages and projects | [Phase 04 overview](phase-04-programming/index.md) |
| 05 | Cybersecurity fundamentals | [Phase 05 overview](phase-05-cybersecurity-fundamentals/index.md) |
| 06 | Security tools and lab | [Phase 06 overview](phase-06-security-tools-and-lab/index.md) |
| 07 | Ethical hacking and testing | [Phase 07 overview](phase-07-ethical-hacking-and-testing/index.md) |
| 08 | Web application and API security | [Phase 08 overview](phase-08-web-app-and-api-security/index.md) |
| 09 | Network and system security | [Phase 09 overview](phase-09-network-and-system-security/index.md) |
| 10 | Defensive security and SOC | [Phase 10 overview](phase-10-defensive-security-and-soc/index.md) |
| 11 | Digital forensics and malware analysis | [Phase 11 overview](phase-11-digital-forensics-and-malware-analysis/index.md) |
| 12 | Active Directory and enterprise security | [Phase 12 overview](phase-12-active-directory-and-enterprise-security/index.md) |

## How to use the course

1. Follow the roadmap in order; each phase builds on earlier concepts.
2. Read the phase overview and lesson objectives before starting its lessons.
3. Complete the practical exercises only in the authorized environment described by that lesson.
4. Use key takeaways and revision questions to check understanding.
5. Complete phase projects and mark the phase checklist as you progress.
6. Record questions and uncertainties; do not treat a detection, tool result, or single artifact as
   proof without context.

The MkDocs site provides navigation, search, and previous/next lesson links. To read locally without
building the site, open a phase overview and follow its Markdown links.

## Course progression

The course moves from foundational knowledge (Phases 00–05), through tools and authorized
practice (Phases 06–09), into defensive operations and investigation (Phases 10–11), and concludes
with enterprise identity and security (Phase 12). Each phase includes lessons and revision material;
many also include projects and checklists.

## Build the documentation site

Install the requirements and build the MkDocs Material site:

```sh
python -m pip install -r requirements.txt
mkdocs build --strict
```

For local preview, run `mkdocs serve` and open the local address printed by MkDocs. The original
PDF is excluded from the generated website.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed
to `main` or `master`, or when manually started. In the repository's **Settings → Pages**, select
**GitHub Actions** as the deployment source. The workflow preserves Markdown lesson sources and
deploys the generated site artifact.
