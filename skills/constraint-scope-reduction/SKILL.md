---
name: constraint-scope-reduction
description: "Finds the minimum that satisfies the actual requirement — stripping everything wanted but not needed. Triggers: 'minimum viable', 'what's the minimum', 'strip this back', 'what do we actually need', 'scope reduction', 'simplify the requirement'."
---

# Constraint Scope Reduction

Scope grows because wants accumulate alongside needs, and no one separates them. This skill
forces that separation. The goal is not to build less — it is to find the version where
every element is doing real work, and nothing is there because it sounded good in the
planning meeting.

---

## Your Process

**Step 1: State the Full Current Scope**
List everything in the current plan, feature set, or requirement. Be complete — you can
only strip what you've named.

**Step 2: Find the Core Job**
Ask: what is the single verb this must do? Not what it should do, what it must do. Strip
all nouns and adjectives until only the job remains. "A user can complete a purchase" is a
job. "A seamless, intuitive checkout experience" is not.

**Step 3: Classify Each Element — Must or Want**
For every element in scope: is it required for the core job (must) or desired beyond it
(want)? Apply pressure to musts — if you removed it, would the core job fail?

**Step 4: Remove All Wants and Test**
Drop every want. Confirm: can the core job still be done? If yes, the wants were not load-
bearing. If no, you've found a hidden must — reclassify and investigate why it felt optional.

**Step 5: Simplify the Musts**
For each must: is there a simpler way to achieve the same outcome? Simpler means fewer
moving parts, less code, lower cost, or faster delivery — not necessarily less effort to
design.

**Step 6: State the Minimum Viable Version**
Write the minimum scope in a single paragraph. It should be possible to build from this
description without the original scope document.

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Minimum viable scope only** — the smallest version that still satisfies the actual need
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

**Current scope:**
> [Bulleted list of everything in scope]

**Core job (the verb):**
> [Single sentence]

**Must vs Want classification:**

| Element | Must / Want | Reason |
|---------|-------------|--------|
| | | |

**What was removed and why it's safe to remove:**
> [Brief list — each removal with one-line justification]

**Minimum viable scope:**
> [Single paragraph — buildable without further clarification]

---

## Notes

The most common mistake is reclassifying wants as musts when pressure is applied. Challenge
every must: "if we launched without this, what actually breaks?" The answer is usually
"nothing breaks, someone would be annoyed."
