# Contributing

Thanks for contributing to this cybersecurity learning repository.

## Scope

This project is primarily a structured educational resource. Contributions should improve technical accuracy, teaching quality, learner experience, or maintainability.

## What to contribute

- Clarify explanations and learning objectives
- Improve phase progression and practical exercises
- Fix broken or outdated links
- Add practical labs or safe, authorized examples
- Improve accessibility and documentation quality
- Strengthen assessment design and course governance

## Contribution workflow

1. Review the curriculum and project structure before editing large sections.
2. Keep changes aligned with the existing educational progression.
3. Preserve existing useful content whenever possible.
4. Prefer technical accuracy and clear learning outcomes over word count.
5. Validate changes with `python -m mkdocs build --strict`, then run
   `python scripts/check_built_site.py` to check the generated pages, landmarks, IDs, and local links.

## Quality expectations

- Keep examples safe, realistic, and explicitly authorized where they involve labs.
- Do not claim job guarantees or certification outcomes.
- Avoid any content that could mislead learners into unsafe testing.
- Prefer official or authoritative references where possible.

## Submission guidelines

- Use clear, descriptive commit messages.
- Keep the scope narrow and consistent with the issue or improvement you are addressing.
- Update related documentation when changing course structure or terminology.
- Avoid adding unnecessary files or filler content.

## Review standards

Contributions should be reviewed for:

- Technical correctness
- Educational value
- Safety and responsible guidance
- Link integrity
- Maintainability and consistency

The deployment workflow runs both build checks before publishing.

## Safe-use note

This repository is for authorized learning and lab environments. Do not use the content to target systems or networks without explicit permission.
