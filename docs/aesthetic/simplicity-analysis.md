# aesthetic-simplicity-analysis

> Finds the simpler version while preserving what matters — not arbitrary reduction, but finding the core and discarding what is not it.

**Trigger:** `/s4h-aesthetic-simplicity-analysis`

---

## What it does

Identifies the single irreducible essence of a thing, classifies every element as essence, supporting, or obscuring, then strips to the minimum that still delivers the core. Produces both the simplified version and an honest accounting of what each removal costs. Works on messages, strategies, designs, product descriptions, arguments, pitches — any designed artefact.

---

## When to use

- "Simplify this"
- "What's the essence of this?"
- "Strip it back"
- "Less but better"
- "What could we remove?"
- Before finalizing any important communication where length might dilute impact

## When NOT to use

- When the question is complexity of a designed system — use `aesthetic-elegance-testing`
- When the question is internal consistency — use `aesthetic-coherence-check`
- When the purpose is finding a better structure, not cutting elements — use `narrative-structure-mapping`

---

## Example

**Input:**
> Our company description for the website: "We are a next-generation, AI-powered enterprise productivity platform that combines cutting-edge machine learning with an intuitive, user-friendly interface to help modern businesses of all sizes streamline their workflows, boost team collaboration, enhance operational efficiency, reduce friction across the organization, and accelerate time-to-value for every stakeholder. Our award-winning solution has been trusted by industry leaders across 12 verticals and has helped organizations reduce administrative overhead by up to 47% while improving team satisfaction scores significantly."

**Output:**

---

**Essence:** We make work faster by removing the friction that slows teams down.

---

**Element Classification**

| Element | Classification | Rationale |
|---|---|---|
| "next-generation, AI-powered" | Obscuring | Category noise — every competitor claims this; adds no signal, reduces trust |
| "enterprise productivity platform" | Supporting | Names the category, which has some value for search and orientation |
| "cutting-edge machine learning" | Obscuring | Inside-the-bottle language; users don't buy ML, they buy faster work |
| "intuitive, user-friendly interface" | Obscuring | All software claims this; the claim is invisible to readers |
| "modern businesses of all sizes" | Obscuring | Trying to claim all segments produces a claim meaningful to none |
| "streamline workflows" | Supporting | Concrete benefit; marginally useful |
| "boost team collaboration" | Obscuring | Second claim competes with the first; unclear whether this is a coordination tool or an automation tool |
| "enhance operational efficiency" | Obscuring | Third claim; further dilutes the first |
| "reduce friction" | Essence | This is the core; everything else is either a form of this or noise |
| "accelerate time-to-value" | Obscuring | Business jargon that conceals rather than communicates |
| "award-winning" | Obscuring | Trust signal but unspecific; which award, from whom |
| "12 verticals" | Supporting | Breadth signal — has some value if the reader is unsure it applies to their industry |
| "47% reduction in administrative overhead" | Essence | Specific, concrete, memorable — the strongest sentence in the description |
| "improved team satisfaction scores" | Supporting | Secondary benefit; adds something if the target audience cares about employee NPS |

**Simplified Version:**

> We remove the administrative overhead that slows teams down. Customers report 47% reductions in overhead across industries including [two specific examples].

---

**What Was Lost**

| Removed Element | What It Did | Acceptable Loss? |
|---|---|---|
| "AI-powered", "ML" | Category positioning for trend alignment | Yes — free removal; trusted readers won't be impressed; skeptical readers will distrust |
| "team collaboration", "operational efficiency" | Tried to claim multiple benefit areas | Yes — free removal; these claims were competing with the core message |
| "all sizes" | Tried to not exclude any prospect | Yes — acceptable trade-off; specificity converts better than universality |
| "award-winning" | Trust signal | Acceptable if replaced with the specific claim (47% overhead reduction is a better trust signal) |
| "12 verticals" | Horizontal breadth claim | Acceptable; replace with two specific industry examples for more concrete credibility |

**Verdict:** The simplified version delivers the essence clearly. The 47% claim was the strongest sentence in the original — it is now the core of the simplified version rather than the penultimate sentence after 80 words of category noise.
