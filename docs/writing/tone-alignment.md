# `/writing-tone-alignment`

> *The reader cannot trust a voice they cannot locate. Tone drift is the author's hand becoming visible.*

**Category:** [Writing](README.md) · **Command:** `/writing-tone-alignment`

---

## What it does

Diagnoses tone drift — unintended shifts in formality, warmth, urgency, stance, or sentence rhythm — by extracting an intended tone baseline and identifying specific departures with cause diagnosis and correction prescriptions. Repairs multi-author documents, pieces assembled from different sources, and writing where different sessions or moods have left audible seams.

---

## When to use it

- A document feels like it was written by two or three different people
- The opening is formal but the piece shifts to casual without transition
- A brand document assembled from multiple contributors sounds inconsistent
- You have written something over a long period and the voice has drifted between sessions
- A client or editor says "the tone changes mid-piece" or "it doesn't feel like us"
- A long document needs a voice consistency pass before finalisation

---

## When *not* to use it

**Don't use this when the register shift is intentional and marked.** Some pieces deliberately move between registers — a piece that opens with formal analysis and shifts to personal reflection signals that shift clearly and uses it for effect. The distinction is between a controlled, marked register shift and an unintentional drift. If the shift is deliberate, the question is whether it is executed well, not whether it exists.

**Don't use this before fixing structural problems.** If the piece needs to be restructured, do that first. Tone-aligning sections that will be deleted or moved is wasted effort.

The nearest neighbor: [`/writing-voice-consistency`](voice-consistency.md) — which addresses the full identity of the speaker (who is speaking) rather than just the register of the speech (how they are speaking). Voice consistency asks "does this sound like the same person?"; tone alignment asks "is that person speaking in a consistent register?" They often need to be run together on multi-author documents.

---

## Full example

**Input:**
> Our marketing team has written a brand blog post about our company's sustainability commitments. One contributor wrote the opening and data sections; another wrote the second half with practical advice. The post opens with a formal analytical tone and shifts to a casual listicle style mid-piece. Here's the structure: (1) Opening: 200 words of formal analysis with statistics. (2) Context section: 150 words, still formal. (3) "5 Things We're Doing": 250 words of bullet-list casual advice. (4) Call to action: 100 words, back to formal.

---

**Output:**

### Tone Audit

**Intended Tone (Extracted from Sections 1–2):**

- **Formality: 7/10** — Formal but not institutional. Full sentences, no contractions. Vocabulary is precise without being academic. Appropriate for a corporate sustainability report that's also meant to be read by the public.
- **Warmth: 5/10** — Professional and measured. Not cold, but not personal. Writes about "our commitments" and "our operations" rather than "you" and "we chose."
- **Urgency: 4/10** — Steady, considered. Not driving for action in the opening. Making a case through evidence.
- **Stance toward reader:** Treats the reader as an informed adult interested in corporate responsibility. Does not over-explain. Assumes the reader has some familiarity with sustainability metrics.
- **Sentence rhythm:** Varied sentence length. Some complex sentences with subordinate clauses. No fragments. No "listicle" rhythm.

---

**Flagged Departures:**

**Section 3: "5 Things We're Doing" — entire section**

Direction of drift: Formal analytical → Casual listicle (shift of approximately 4 levels on the formality scale)

Specific characteristics of the drift:
- Numbered list format replaces prose — shifts from essay to listicle
- Register changes ("Here's what we're actually doing" — the word "actually" is informal and slightly combative; it implies the preceding content was evasive)
- Vocabulary shift: "we're cutting" (casual) vs. "we have reduced" (formal); "right now" (casual) vs. "currently" or "at present" (formal)
- Sentence rhythm: short, punchy, imperative-adjacent sentences replace the considered pace of sections 1–2
- Stance shift: from "making a case" to "being transparent with you" — the reader relationship changes, which changes everything else

*Cause diagnosis: Second contributor. The second writer's natural voice is casual and action-oriented — effective in its own context, but a significant departure from the established register.*

---

**Section 4: Call to Action — partial departure**

Direction of drift: Back toward formal, but not fully recovered — the call to action is more urgent than sections 1–2 and uses the second person ("you can join us") which the opening avoided.

*Cause diagnosis: The final-paragraph CTA convention has pulled the writer toward marketing register. The original tone is analytical, not call-to-action oriented. This section is trying to close a piece that was not built to close this way.*

---

**Correction Prescriptions:**

**Section 3:** Replace the numbered listicle format with prose. The five items can remain as a structure, introduced by a transition paragraph, but rendered as continuous prose with topic sentences rather than bullet headers.

*Before (opening of Section 3):*
> "Here's what we're actually doing. 1. We're cutting our Scope 1 emissions by 40% by 2027. 2. We've moved our data centres to 100% renewable energy, right now."

*After:*
> "Our current commitments are specific and timed. We have reduced Scope 1 emissions by 18% since 2021 and are on track for a 40% reduction by 2027. Our data centres transitioned fully to renewable energy in Q2 2023."

Key changes: remove "actually" (combative); replace present progressive ("we're cutting") with present perfect ("we have reduced") to match the document's register; remove "right now" (casual); convert list items to sentences with subject-verb-object structure matching sections 1–2.

**Section 4:** Remove the second-person address ("you can join us") and the direct CTA if it doesn't serve the document's purpose. If a CTA is needed, render it in the document's established register:

*Before:*
> "You can join us in this work. We'd love to hear from you."

*After:*
> "We welcome partnerships and inquiries from organisations pursuing aligned goals. Contact details are below."

---

**Overall Assessment:** The piece has a clear tone in its opening that is broken by a contributor-drift in section 3. The correction is straightforward: convert the listicle section to prose matching the established register. The section 4 partial drift is a secondary issue that resolves with one sentence change. Total correction time: 30–45 minutes.

---

## Related skills

- [`/writing-voice-consistency`](voice-consistency.md) — For the full voice identity audit when multi-author drift is severe
- [`/writing-audience-calibration`](audience-calibration.md) — If the tone is consistent but calibrated to the wrong reader
- [`/writing-line-editing`](line-editing.md) — Many tone corrections happen at the sentence level; these two skills often work together
