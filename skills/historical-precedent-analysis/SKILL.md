---
name: historical-precedent-analysis
description: "Finds and applies genuinely similar historical situations to inform a current decision — distinguishing true precedents from superficial analogies. TRIGGERS: 'historical precedent', 'has this happened before', 'what does history say', 'find a precedent', 'what did others do in this situation'."
---

# Historical Precedent Analysis

History doesn't repeat — but structures do. The error is searching for surface
similarity (same industry, same technology, same geography) and missing structural
similarity (same underlying dynamics, same constraint set, same incentive conflicts).
Superficial precedents produce false confidence. Structural precedents produce genuine
insight. This skill finds the real ones.

---

## Your Process

**Step 1: Abstract the Situation**
Strip away domain-specific language and surface details. What is the underlying
structural pattern? Describe it in terms that could apply across industries and eras:
a new entrant facing incumbents with switching-cost moats; a coalition with aligned
goals but divergent interests trying to coordinate; a technology displacing a
profession whose members control the adoption decision. State the situation in these
structural terms — this is what you'll search for in history.

**Step 2: Search for Structural Precedents**
Deliberately look outside the obvious domain. The most obvious precedent (same
industry, earlier decade) usually has the most surface similarity and the least
structural insight — the surface differences are visible but the structural
similarities are already assumed. Search across industries, eras, and scales for
situations with the same underlying dynamics. Find 2-3 with the strongest structural
match.

**Step 3: Describe Each Precedent**
For each: what was the specific situation, what approaches were tried, what was the
outcome? Be concrete — vague historical reference ("like the industrial revolution")
is not a precedent. A precedent is a specific case with specific decisions and
specific results.

**Step 4: Structural Mapping**
For each precedent: where does the structural similarity hold most clearly? Where
does it break down? What are the key variables that differ between the historical
case and the current situation — and how might those differences change what the
precedent implies?

**Step 5: Extract the Lesson**
Not "do what they did" — that's surface imitation that ignores structural
differences. The lesson is: what does their experience suggest matters most in this
type of situation? What was the decisive variable? What would have changed the
outcome if it had been different?

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Closest precedent only** — the single most structurally similar historical case, fully developed
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

**Situation (Abstracted):** [structural description in domain-neutral terms]

**Precedents**

| Precedent | What/When | What Was Tried | Outcome |
|---|---|---|---|
| [descriptive name] | [specific context] | [approach taken] | [what happened] |

**Structural Mapping**

| Precedent | Where It Maps | Where It Diverges | Key Differing Variables |
|---|---|---|---|
| [name] | [structural overlap] | [structural gap] | [variables that differ] |

**Lesson:** [the transferable principle — the underlying rule, stated without
domain-specific language]

**Caveats:** [where the precedent fails to apply and what would need to be different
for it to hold]

---

## Notes

The strongest precedent is often the most surprising one — from a completely
different domain that shares the underlying dynamics. Don't default to the obvious
comparison within the same industry. The abstractions done in Step 1 determine the
quality of everything that follows — spend time there.
