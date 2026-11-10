# Audit Report

## Executive summary

This repository is already a substantial and thoughtfully structured cybersecurity learning platform. It demonstrates a clear educational progression from foundational computing through networking, operating systems, programming, and security fundamentals. The material is organized by phases, includes a learning dashboard, and is designed for GitHub Pages with MkDocs Material.

The current course has a strong educational backbone. The main gaps are not a lack of breadth, but a lack of formal governance, explicit assessment architecture, advanced specialization coverage, and stronger quality controls. The repository is good as a teaching resource; it needs additional structure and verification to become a more professional and maintainable learning platform.

## Improvements since the initial audit

- The homepage now presents the actual phase roadmap, capstone, safety guidance, and learning choices.
- The dashboard distinguishes reading, practice, phase assessment, and mastery self-assessment.
- All current phases 00–12 have a short auto-scored knowledge check, feedback, and retake.
- Each phase has a practical evidence challenge, prerequisite self-check, and weighted rubric.
- Older lesson checkmarks migrate as “read,” not as assessed or mastered.
- Assessment limitations are explicit: practical ratings are self-reported, browser-local, and not credentials.
- Browser testing found and fixed broken homepage links, assessment overflow, missing learner feedback,
  and an incorrect dashboard mastery count when prerequisites needed review.
- GitHub Pages now has an explicit base URL and populated sitemap. Deployment checks cover generated
  internal links, fragments, unique IDs, H1/main landmarks, and image alt attributes.

## Existing strengths

- Clear phase-based curriculum structure from 00 through 12.
- Strong progression from fundamentals into application security and detection.
- Practical emphasis on labs, projects, and safe-use guidance.
- Solid foundation for a GitHub Pages learning site.
- Built-in progress tracking through browser-local state.
- Attractive and readable project landing pages.
- Good fit for beginners who want a guided learning path.

## Existing weaknesses

- Assessments are available across phases, but five multiple-choice questions per phase are a limited knowledge sample and the practical rubric is self-scored.
- Advanced-specialization lesson content is missing beyond Phase 12.
- Some lessons have incomplete or missing citations and do not consistently tie activities to verified portfolio evidence.
- Governance documents are duplicated between the root and `docs/`, so updates need consistent maintenance.
- The deployment now checks generated internal links and basic document structure. External-link
  freshness, lesson metadata, and full accessibility conformance still need stronger automated checks.

## Missing advanced specialization coverage

The repository covers phases 00–12 well, but it does not yet include the advanced specialization tracks required for a complete professional program. The most important missing modules are:

- Cloud security engineering (AWS, Azure, GCP, IAM, Kubernetes, IaC, serverless)
- Advanced penetration testing (internal networks, AD attack paths, exploitation, reporting)
- Malware analysis and reverse engineering (assembly, PE, dynamic analysis, YARA)
- Application security engineering (SDLC, SAST, DAST, SBOM, DevSecOps)
- Wireless and mobile security
- Advanced SOC and threat detection engineering
- Security architecture and engineering

## Technical and structural observations

### Strengths

- Phase folders are logically ordered and easy to navigate.
- The course is aligned with broad cybersecurity learning objectives.
- The learning path is beginner-friendly and gives a guided progression.

### Issues to address

- Advanced phases should be introduced as distinct, professional tracks rather than ad hoc topic expansions.
- Assessment criteria should be consistent across all phases.
- Learning materials should include explicit prerequisites, challenge levels, and verified references.
- The project would benefit from a small governance layer: ownership, contribution rules, quality gates, and security posture.

## Recommended improvements

### Critical

- If the goal remains the originally proposed advanced curriculum, author phases 13–19 as actual
  lessons with objectives, controlled practice, assessments, and maintained sources. The roadmap
  alone is not course content.

### High

- Broaden and independently review phase knowledge questions; add scenario-based items and
  defensible explanations.
- Add complete, checked, lesson-level references and a repeatable external-reference process; internal
  generated-site links are now checked during deployment.
- Expand automated checks for lesson metadata and accessibility behavior.
- Provide a way to receive peer or instructor feedback while keeping self-assessment distinct from
  verified evaluation.

### Medium

- Clarify licenses and relevant feature tiers before recommending tools.
- Maintain a single source of truth for duplicated root and published governance documents.
- Align lesson projects more consistently with explicit portfolio evidence and revision guidance.

## Prioritized implementation plan

1. Complete missing lesson-level citations and define an ongoing external-reference review process.
2. Expand and independently review the current assessment bank.
3. Expand automated metadata, external-link, and accessibility checks.
4. Author advanced specialization phases only with substantial instruction, safe practice, assessments, and maintained sources.
5. Consolidate duplicated root and published governance documents where practical.

## Final assessment

This repository is already a meaningful and useful beginner-to-intermediate learning platform with a clear progression and now a consistent self-assessment flow. It is not yet a complete advanced curriculum or independently verified training program. Its strongest next steps are deeper references, broader assessment validation, and substantive advanced modules.

## Priority summary

| Priority | Area | Summary |
| --- | --- | --- |
| Critical | Advanced curriculum | Phases 13–19 remain planned curriculum, not implemented lessons |
| High | Assessment validity | Knowledge checks are short; practical self-ratings are not independently verified |
| High | Technical references | Several lessons need complete, checked, lesson-level citations |
| High | Quality checks | Extend the new generated-site checks with metadata, external URL, and accessibility validation |
| Medium | Documentation ownership | Avoid drift between root-level and published copies |
| Medium | Portfolio quality | Align each lesson's challenge, evidence expectations, and feedback more consistently |
| Low | Further UX polish | Continue keyboard, mobile, and assistive-technology review |
