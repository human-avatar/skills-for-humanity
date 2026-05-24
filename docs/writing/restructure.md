# `/writing-restructure`

> *The writer always knows where they're going. The reader only knows where they've been.*

**Category:** [Writing](README.md) · **Command:** `/writing-restructure`

---

## What it does

Diagnoses structural problems in non-fiction, essays, and documents — buried leads, wrong endings, and proportion mismatches — and produces a specific reorder recommendation with rationale. The output is a structural diagnosis and a new sequence, not sentence-level edits.

---

## When to use it

- A piece takes too long to get to the point
- The most important claim is buried in the middle or at the end
- A piece ends before it reaches its real conclusion, or continues past it
- The heaviest sections are not the most important ones
- You've assembled a piece from multiple sources or drafts and the order is inherited rather than designed
- An editor or reader has said "this buries the lede" or "I had to read to page four to find out what you were arguing"

---

## When *not* to use it

**Don't use this for fiction.** Fiction structure is addressed by `/writing-plot-structure` (narrative beats) and `/writing-scene-construction` (individual scenes). The restructure skill addresses non-fiction, essays, reports, articles, and professional documents — pieces with a central argument or finding that needs to reach the reader efficiently.

**Don't use this before you know what the piece is arguing.** If the piece's central claim can't be stated in one sentence, restructuring it will just rearrange confusion. Clarify the argument first. Sometimes what appears to be a structure problem is a thinking problem — the piece is long because the writer hasn't yet found the point.

The nearest neighbor: [`/writing-executive-summary`](executive-summary.md) — which front-loads the central finding, implications, and recommendation for a senior audience. If a piece needs both restructuring and an executive-facing brief, restructure the document first, then produce the summary from its new structure.

---

## Full example

**Input:**
> I've written a 2,000-word essay arguing that our company should adopt a remote-first policy. My manager says it "takes 800 words to get to the point." Here's the structure: (1) History of our office policy (300 words) (2) How COVID changed remote work globally (300 words) (3) What other companies have done (200 words) (4) Our situation specifically (200 words) (5) The case for remote-first (400 words) (6) Potential objections (300 words) (7) Recommendation (200 words) — Total: 1,900 words approximately.

---

**Output:**

### Structural Diagnosis

**Central Argument:** The company should adopt a remote-first policy.

---

**Actual Structure Map:**

1. **History of office policy** (300 words) — Context about where we've been. Function: establishes that the current policy is the baseline being challenged. Value to reader: low — the reader already knows this.

2. **How COVID changed remote work globally** (300 words) — External context about industry-wide change. Function: environmental framing. Value to reader: low — the reader likely knows this too, and even if they don't, it is not the argument; it is background for the argument.

3. **What other companies have done** (200 words) — Benchmarking. Function: social proof / precedent. Value to reader: medium — useful, but currently it appears before the argument it supports, which means the reader doesn't yet know why they should care about what other companies have done.

4. **Our situation specifically** (200 words) — The actual context that makes the argument relevant. Function: the bridge from general to specific. Value to reader: high — but it is section 4 of 7.

5. **The case for remote-first** (400 words) — The argument itself. Function: the central claim and its support. Value to reader: high — this is what the piece is for, and it is the fifth section.

6. **Potential objections** (300 words) — Counterarguments addressed. Function: strengthens the case. Value to reader: high.

7. **Recommendation** (200 words) — What should happen. Function: action call. Value to reader: high — but by this point the reader has read 1,700 words to arrive at the 200-word recommendation.

---

**Real Beginning:**

The piece's energy — the reason it exists — starts at section 5 (The case for remote-first). But the real beginning is actually the recommendation, stated as an upfront claim: *we should adopt a remote-first policy, and here is the case.*

Everything in sections 1–4 is context the writer needed to build the argument in their own mind. The reader doesn't need most of it to understand the recommendation; they need a fraction of it to evaluate the argument.

---

**Right Ending:**

The piece ends correctly at section 7 (Recommendation). This is the right structural endpoint. The issue is not the ending — it is everything before section 5.

---

**Proportion Audit:**

| Section | Words | Importance to reader | Match? |
|---|---|---|---|
| History of office policy | 300 | Low | Mismatch — too heavy |
| COVID context | 300 | Low | Mismatch — too heavy |
| What other companies did | 200 | Medium | Approximately correct |
| Our situation | 200 | High | Mismatch — too light |
| The case for remote-first | 400 | High | Correct |
| Potential objections | 300 | High | Correct |
| Recommendation | 200 | High | Correct |

The first 600 words are the lowest-value sections. The manager's "800 words" estimate is accurate: the reader reaches the argument at section 5, which begins at approximately word 800.

---

**Reorder Recommendation:**

**New structure:**

1. **Recommendation / Claim** (50 words, cut from section 7) — State the recommendation upfront: "We should adopt a remote-first policy. This brief makes the case." One sentence. This is the anchor.

2. **The case for remote-first** (400 words, section 5 moved to second) — The argument immediately follows the claim. The reader now knows what they're evaluating.

3. **Our situation specifically** (200 words, section 4 — expanded slightly) — The specific context that makes the argument apply to us, not to companies in general. Now it appears at the right place: after the argument, to anchor it to our specific circumstances.

4. **What other companies have done** (200 words, section 3) — Now the reader knows why this matters: it supports an argument they've already seen.

5. **Potential objections** (300 words, section 6) — Strengthens the case that has already been made.

6. **Recommendation / Next steps** (150 words, remainder of section 7) — Specific asks, owners, timeline.

7. **Cut entirely:** History of office policy (300 words) and COVID context (300 words). These are not serving the argument. If specific facts from these sections are essential, they can be incorporated in one sentence within section 2 or 3.

**New total: approximately 1,300 words (down from 1,900). The argument is reached in approximately 50 words. The recommendation is on the second page.**

**Rationale:** The manager's objection ("takes 800 words to get to the point") is correct. The current structure is built around the process of the writer's thinking — they established context, built up to the argument, then stated it. The reader needs the argument first, then the support. The reorder is not a cosmetic change — it is the difference between a document that works and one that requires patience.

---

## Related skills

- [`/writing-executive-summary`](executive-summary.md) — If the restructured essay needs a one-page brief above it for a senior audience
- [`/writing-argument`](argument.md) — If the essay's problem is the argument itself (warrant missing, evidence insufficient) rather than its order
- [`/writing-line-editing`](line-editing.md) — After restructuring is complete, line editing cleans the sentences in their new order
