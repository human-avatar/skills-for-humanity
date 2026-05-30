---
name: writing-copy
description: "Writes and audits marketing copy, landing pages, ad copy, email copy, and product descriptions using the attention-desire-action framework. Use when copy isn't converting, describes features instead of benefits, or fails to earn the reader's next step. Triggers: 'copywriting', 'ad copy', 'landing page', 'email copy', 'marketing copy', 'write copy', 'the copy isn't converting', 'product description', 'headline isn't working'."
---

# Writing: Copy

Copy fails when it describes the product rather than the reader's experience of having it. "Comprehensive workflow management platform with real-time collaboration" describes features. "Your team stops losing work in email chains" describes an experience. The reader buys the experience, not the feature set. Every piece of copy that describes the product from the product's point of view rather than the reader's is leaving conversion on the table.

The three-layer model maps every effective piece of copy:

**Attention (the opening):** The sole function of the first line is to earn the second line. Not to establish credibility, explain the product, or summarise the offer — to earn the next sentence. Attention is lost in the first three seconds. The headline must name a specific benefit or problem, not a category. "Project management software" is a category. "Your team ships on time, every time" is a claim that addresses a specific pain.

**Desire (the body):** The body must make the reader feel the gap between their current state and a better one. This is not enthusiasm or puffery — it is specificity. "Boost productivity" is enthusiasm. "Cut the time your team spends on status updates from 3 hours a week to 10 minutes" is specific and credible. The desire is created not by telling the reader the product is good, but by making them feel what it would be like to have the problem solved.

**Action (the CTA):** The call to action must be singular (one action only), specific (not "learn more" but "start your free trial"), and low-friction (the language should make action feel easy and obvious, not like a commitment or a risk).

---

## Your Process

**Step 1: Attention — Does the Opening Earn the Next Sentence?**
Read only the headline and first line. Stop. Ask: does this give the reader a reason to continue? Specifically:

**Framing check:** Confirm the specific copy before continuing. State what you've identified — the content being analyzed (headline, body, CTA) and the product or offer it's for — in one sentence, then use `AskUserQuestion`:
- **Question:** "I'm reading this as: [your one-sentence framing of the specific copy — the format, product/offer, and apparent goal]. Is that right?"
- **Header:** "Framing"
- **Options:**
  - **Yes — proceed** — framing is correct
  - **Adjust** — one element is off; user will correct it before you continue
  - **Reframe** — different situation than read; incorporate the correction before proceeding
- Does it name a specific benefit, problem, or claim — not a category?
- Does it speak to the reader's experience, not the product's features?
- Is there a hook — something surprising, specific, or resonant?

If the headline is a category label ("Enterprise HR Software") or a generic claim ("The Best Solution for Your Business"), it has failed at attention.

**Step 2: Desire — Does the Body Create the Gap?**
Read the body copy. Ask:
- Does it make the reader feel the difference between their current state and a better one?
- Are the benefits specific and credible? (Numbers, specifics, outcomes — not adjectives)
- Does it address the reader's actual fear or resistance, or does it assume enthusiasm?
- Is the social proof (if present) specific and relevant?

**Step 3: Action — Is the CTA Singular, Specific, and Low-Friction?**
Evaluate the call to action:
- Is there only one action being asked for? (Multiple CTAs split attention and reduce conversion)
- Is the language specific? ("Start free trial" > "Learn more" > "Click here")
- Does the language make action feel easy? ("Takes 30 seconds" / "No credit card required" / "Cancel any time")
- Is the CTA visible and prominent — or buried?

**Step 4: Feature/Benefit Confusion**
Flag every statement that describes the product (feature) rather than the reader's experience of having the product (benefit). For each:
- Quote the feature statement
- Identify the underlying benefit (what does this feature do *for the reader*?)
- Write the benefit version

**Step 5: Overall Verdict and Headline Rewrite**
**Before narrowing:** Show the complete set of failures and weaknesses identified across Steps 1–4 to the user first. Use `AskUserQuestion`:
- **Question:** "I've identified [N] copy issues across attention, desire, action, and feature/benefit confusion. Before I select the most significant failure to lead with, are there any you'd flag as especially important, or any I've missed?"
- **Header:** "Prioritise"
- **Options:**
  - **Proceed with your selection** — the set looks right
  - **Flag one** — user will name a specific issue to prioritise
  - **Add a missing one** — user will describe it

State the copy's single most significant failure. Rewrite the headline based on the strongest benefit identified in the copy.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool. State your interpretation of the situation in 1–2 sentences — what is being analyzed and what the core question is — then ask:

- **Question:** "My read: [your 1–2 sentence interpretation]. How do you want to proceed?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Specific focus** — Zoom in on one aspect of this analysis
  - **Reframe** — The read is off; correct it and the analysis will follow the corrected framing

Proceed based on their selection. If the user reframes, incorporate the correction before running any analysis.

---

## Output Format

### Copy Audit

**Attention Assessment:** [Opening quoted] — [Verdict: earns next sentence / fails at attention] — [Specific diagnosis]

**Desire Audit:** [Benefit specificity and credibility / Gap-creation assessment / Fear/resistance addressed or ignored]

**Action Assessment:** [CTA quoted] — [Singular / specific / low-friction check] — [Friction language identified]

**Feature/Benefit Confusion:**
- [Quoted feature statement] → [Benefit rewrite]
- [Repeat]

**Overall Verdict:** [Primary failure in one sentence]

**Rewritten Headline:** [New headline addressing the strongest identified benefit]

**Rewritten CTA:** [If the CTA is failing — specific, low-friction alternative]

---

## Notes

- The single highest-return copy edit: turn the headline from a category or feature description into a specific benefit or outcome. This is almost always the first fix.
- "More" is not a benefit. "Faster" is not a benefit. Faster *doing what*, resulting in *what outcome*, for *this specific reader* — that is a benefit.
- Pairs with `/writing-audience-calibration` — copy must speak to the specific reader; generic copy that speaks to everyone reaches no one.
- Pairs with `/writing-argument` for long-form copy (sales pages, long emails) where the copy is structured as an argument that needs to be logically sound as well as emotionally resonant.
- Pairs with `/writing-tone-alignment` when copy spans multiple formats (headline, body, email sequence) and the tone needs to be consistent across them.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Copy written. What's next?"
- **Header:** "Next"
- **Options:**
  - `/writing-tone-alignment` — Align copy tone to the audience
  - `/writing-audience-calibration` — Calibrate the copy for the specific audience
  - `/communication-objection-mapping` — Address objections the copy must overcome
  - **Done** — Wrap up and synthesise what we have so far
