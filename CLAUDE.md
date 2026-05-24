# skills-for-humanity

A structured thinking toolkit delivered as Claude Code skills. Each skill encodes a complete reasoning methodology — not just instructions, but the full technique: when to apply it, when not to, how to sequence the steps, and what rigorous output looks like.

## Structure

```
skills/
  {category}/           ← category command, invoked as /{category}
    SKILL.md
  {category}-{skill}/   ← individual skill, invoked as /{category}-{skill}
    SKILL.md

docs/
  {category}/
    README.md           ← category index with skills table
    {skill}.md          ← full skill documentation with example
```

## Naming convention

- **Category commands:** `skills/{category}/SKILL.md` → invoked as `/{category}`
- **Individual skills:** `skills/{category}-{skill}/SKILL.md` → invoked as `/{category}-{skill}`

Example: `skills/ethics-council/SKILL.md` is invoked as `/ethics-council`. The folder name IS the command name.

## SKILL.md format

Every `SKILL.md` starts with YAML frontmatter:

```yaml
---
name: {command-name}
description: "One or two sentences describing what this skill does and what triggers it. Include the natural-language phrases that should activate it."
---
```

The body contains the full methodology: context/rationale, step-by-step process, output format, and notes on when to use vs. adjacent skills.

## Category command format

Category commands (`skills/{category}/SKILL.md`) diagnose the situation and route to the right individual skill. They read the user's input, identify which sub-skill fits, and invoke it inline. Pattern: describe the situation → diagnose the problem type → apply the right tool.

## Docs format

Each skill documentation page (`docs/{category}/{skill}.md`) follows this structure:
1. Title + tagline
2. What it does (2–3 sentences)
3. When to use it (bullet list)
4. When NOT to use it (2 paragraphs with the nearest-neighbor trap)
5. Full realistic example with input and complete structured output
6. Related skills (cross-links)

Each category README (`docs/{category}/README.md`) has:
- Category tagline
- What the category is (methodology + unifying principle)
- When to reach for it (bullets)
- When not to (2 paragraphs)
- Skills table (with `/{category}` command row at top, full command names like `/ethics-council`)
- Related categories

## Categories

| Cluster | Categories |
|---|---|
| Think Sharper | logic, probability, decision, constraint, game-theory |
| Think Differently | creativity, analogy, play |
| Think About People | communication, social, emotional, ethics, identity, narrative, writing |
| Think in Time & Systems | systems, temporal, historical, resource, strategy |
| See More Clearly | aesthetic, sensory |

## Development

When creating or editing skills, follow the format of existing skills closely. The `SKILL.md` body should encode the *how* of the methodology, not just describe it — a reader should be able to execute the technique from the instructions alone.

Use `/bmad-party-mode` (if configured) to pressure-test new skill designs with multiple agent perspectives before implementing.
