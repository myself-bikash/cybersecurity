# Final Quality Report

## Scope

This report evaluates the repository as a learning resource, including the phase-based course,
static MkDocs site, local progress dashboard, and phase assessment workspace. The score is a
reasoned snapshot, not an external accreditation or a claim that the curriculum is complete.

## Improvements in this pass

- Redesigned the actual course homepage with a responsive, safety-first course roadmap.
- Added a phase assessment workspace for all current phases 00–12.
- Added five automatically scored knowledge questions per phase, feedback, and retakes.
- Added phase-specific practical challenges, prerequisite self-checks, and an evidence-oriented
  weighted rubric.
- Reworked the learning record to distinguish lessons read, practiced, phases assessed, and mastery
  self-assessed.
- Migrated existing lesson-completion records as “read,” without turning old checkmarks into
  assessment or mastery claims.
- Made browser-local storage and self-reported scoring limitations explicit.
- Fixed homepage links that incorrectly pointed to Markdown source files, added the GitHub Pages base
  URL so the sitemap is populated, and added a keyboard skip link for the custom homepage.
- Fixed mobile assessment overflow, exposed lesson-save/storage errors in live regions, and corrected
  the dashboard so mastery counts require a ready prerequisite check.
- Added a generated-site quality gate to the deployment workflow.

## Test evidence

- `python -m mkdocs build --strict` completed successfully.
- `python scripts/check_built_site.py` checked 125 generated HTML pages, 22,211 local links and
  fragments, unique IDs, one main landmark and H1 per page, image alt attributes, and all 124 sitemap
  entries.
- Browser smoke-tested all 124 sitemap routes; every route returned HTTP 200 with one main landmark
  and one H1.
- Checked the homepage and assessment workspace at 320, 360, 390, 768, 1024, and 1440 CSS pixels;
  none had horizontal overflow.
- Browser-tested all 13 phase selectors, each with five questions and five rubric criteria; tested
  quiz/practical scoring, prerequisite gating, saved progress, legacy migration, reset confirmation,
  and visible storage-error feedback.
- All 21 resource-index URLs returned HTTP 200 using GET requests.
- `git diff --check` completed successfully.
- YAML configuration and workflow files parsed successfully.

## Quality estimate

### Score: 7.6 / 10

This is an improvement over the previous 7.2 estimate because the practical assessment flow and
dashboard status distinctions now exist and were exercised in a browser. It is not 10/10: scoring
is self-reported, question coverage is intentionally small, and planned advanced phases are not
implemented.

| Area | Score | Evidence and limitation |
| --- | ---: | --- |
| Learning progression | 8.5/10 | Clear phase sequence through fundamentals, applied topics, defense, forensics, and enterprise identity. |
| Practical learning and safety | 8/10 | Phase checkpoints and fictional/synthetic capstone work support safe practice; depth varies by lesson. |
| Assessment experience | 8/10 | Per-phase quizzes, retakes, a prerequisite check, and weighted practical rubric are implemented; practical scoring is self-assessed. |
| References and technical depth | 6/10 | A resource index exists, but lesson-level sourcing and reference verification remain uneven. |
| Advanced specialization coverage | 5/10 | Proposed phases 13–19 are mapped but do not yet have course lessons. |
| Website and maintainability | 8/10 | Responsive homepage, local dashboard, and strict MkDocs build work; no full automated accessibility audit is in place. |

## Remaining limitations

- Browser-local records are not synchronized, backed up, or independently verified.
- The practical rubric is based on learner self-rating; a score does not demonstrate externally
  verified competence.
- Five multiple-choice questions per phase are a useful checkpoint, not a comprehensive or secure
  final examination. Client-side quizzes are not proctored and should not be used for credentials.
- Learners should keep their own artifacts; the site stores only the artifact description and rubric
  answers, not files.
- Phases 13–19 remain proposed curriculum, not implemented lessons. The current course contains
  phases 00–12.
- Lesson-level citations and independent subject-matter review remain incomplete; HTTP availability
  does not verify the accuracy or currency of every lesson claim.
- The generated-site checks are basic safeguards, not a full WCAG conformance or assistive-technology
  audit. Keyboard/screen-reader review was not exhaustive.
- External-link availability is not checked in CI; the 21 resource-index destinations were checked
  manually for this pass only.
- The standalone React/Tailwind concept is not part of the MkDocs site and has no project build or
  integration test.

## Next priorities

1. Build and review advanced phases only when their learning objectives, safe labs, assessments,
   and maintained references can be authored to the same standard.
2. Expand and independently review phase knowledge questions; include scenario questions and
   defensible answer explanations.
3. Add lesson-level citations and a repeatable external-reference maintenance process.
4. Add stronger automated accessibility checks and manual keyboard/screen-reader review.
5. Improve the assessment rubric with review by another learner or instructor while preserving the
   explicit distinction between self-assessment and verified evaluation.

## Conclusion

The repo is now more useful as a guided self-study site: learners can practice, take a small
knowledge check, record evidence, and see what they have and have not assessed. Its honest label is
a strong beginner-to-intermediate learning foundation—not a complete advanced curriculum,
certification, or guarantee of professional readiness.
