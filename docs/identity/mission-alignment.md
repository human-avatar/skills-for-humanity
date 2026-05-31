# identity-mission-alignment

> Tests whether a proposed decision is genuinely aligned with stated mission — or is rationalising a departure from it.

**Trigger:** `/s4h-identity-mission-alignment`

---

## What it does

Takes the operational mission (not the tagline) and a proposed decision, tests whether the connection between them is direct or rationalised, applies the Genuine Pursuer Test (would someone fully committed to this mission find it obvious?), and classifies the decision as On-Mission, Adjacent, Off-Mission, or Mission-Expanding. Catches the specific failure mode of "mission stretching" — where the mission is interpreted more broadly than intended to justify an attractive decision that doesn't actually fit.

---

## When to use

- "Mission check on this"
- "Is this on mission?"
- "Are we drifting?"
- "Does this serve our purpose?"
- When a decision feels like a stretch from the core purpose
- When someone invokes "mission alignment" to justify a decision and you want to test the claim

## When NOT to use

- For character and integrity questions — use `identity-character-testing`
- For clarifying what values are actually operative — use `identity-values-clarification`
- For testing whether a proposal serves the right stakeholders — use `ethics-check` or `ethics-impact-scan`

---

## Example

**Input:**
> Our mission: "Help independent musicians build sustainable careers." We're a platform that helps musicians sell music and merchandise directly to fans. We're considering launching a music licensing marketplace where brands can license independent musician tracks for ads and content. It would generate significant revenue. Is this on mission?

**Output:**

---

### Mission Statement (Plain Version)

Help independent musicians build sustainable careers — specifically by enabling direct financial relationships between musicians and their fans, removing the intermediary who takes most of the value.

### Proposed Decision

Launch a music licensing marketplace where brands license independent musician tracks for commercial use (ads, branded content).

### Direct Mission Service

**Directly serves mission:** Partially

**Connection:** Music licensing generates income for independent musicians, which contributes to financial sustainability. The causal chain from "licensing marketplace" to "musician builds sustainable career" is real, though indirect.

**What it's actually serving:** Revenue growth for the platform; competitive differentiation in a crowded direct-to-fan market; expansion into a different buyer segment (brands, not fans).

### Rationalisation Risk Assessment

There is moderate rationalisation risk here. The mission says "sustainable careers" — and licensing income is career income. But the mission as understood by musicians who chose the platform specifically says something more specific: *fan-funded* sustainable careers. The distinction matters because the two revenue sources require different trust relationships.

A musician who built their audience on direct fan support may find brand licensing income at odds with that relationship — some fan communities actively devalue artists who license to brands. The licensing marketplace serves the income goal but may undermine the fan relationship mechanism the platform was built on. This is a case where the mission can be read broadly enough to include the proposal, but the original intent of the mission suggests it was meant more narrowly.

### Genuine Pursuer Test

Someone fully committed to the mission "help independent musicians build sustainable careers through direct fan relationships" would: feel this is interesting but note the tension. They would ask: "Does brand licensing strengthen or complicate the direct fan relationship that is our core mechanism?" They would not find this obviously right.

### Classification and Recommendation

**Classification:** Adjacent — reaches the mission outcome (musician income) through a mechanism (brand licensing) that is different from and potentially in tension with the platform's core mechanism (direct fan relationships).

**Recommendation:** Proceed with modification. The licensing marketplace can be built in a way that preserves mission integrity: (1) make participation opt-in and visible to fans so musicians control their brand relationship, (2) position it explicitly as supplemental income rather than a core revenue pathway, (3) test with a subset of musicians who have explicitly expressed interest in licensing. The risk is building a feature that attracts a different kind of musician (commercialization-focused) and shifts the platform's character away from the direct fan economy that the existing community chose.

If the licensing marketplace becomes the primary revenue feature, the mission will need to be honestly updated — not stretched to accommodate it.
