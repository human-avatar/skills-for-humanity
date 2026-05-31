# `/s4h-writing-voice-consistency`

> *Voice can be extracted from strong passages, characterised as a fingerprint, and used to audit departures. It is not mysterious — it is a set of identifiable choices.*

**Category:** [Writing](README.md) · **Command:** `/s4h-writing-voice-consistency`

---

## What it does

Extracts a voice fingerprint from the strongest existing passages, characterises it across 5–7 specific dimensions, scans for departures, and produces a voice guide for multi-author or brand use. Turns an intuition ("this doesn't sound like us") into a specific, testable standard.

---

## When to use it

- A document written by multiple contributors sounds like it was written by multiple contributors
- Brand copy has drifted from its established voice over time or across channels
- A long document sounds like it changed voice between drafts or sessions
- You need a practical voice guide for a team, not a theoretical style manual
- An editor or client says "this doesn't sound like you/us" without being able to specify why
- Onboarding new writers to an established brand or publication voice

---

## When *not* to use it

**Don't use this when there is no strong existing passage to extract from.** Voice consistency requires something to be consistent with. If the brand or writer's voice is not yet established — if all existing material is equally inconsistent — this skill can help articulate an aspirational voice, but it cannot audit against a baseline that doesn't exist.

**Don't use this to unify individual authorial voices in a collection.** An anthology, essay collection, or multi-author volume where each contribution has a distinct voice is not a voice consistency problem — it is a feature. Voice consistency applies to documents that are intended to speak with one voice, not collections that celebrate many.

The nearest neighbor: [`/s4h-writing-tone-alignment`](tone-alignment.md) — which addresses register drift (formality, warmth, urgency) rather than the full voice identity. Tone alignment corrects a specific dimension of voice; voice consistency addresses the whole. For multi-author documents with severe inconsistency, run both.

---

## Full example

**Input:**
> We have a company white paper on AI ethics in hiring, written by three contributors. The three sections are noticeably different registers. Contributor A (section 1, methodology) writes in a dense academic style. Contributor B (section 2, findings) writes in clear professional prose. Contributor C (section 3, recommendations) writes in casual, direct language. The paper is going to a board audience. We need it to sound like one voice.
>
> Here is a sample from each contributor:
>
> Contributor A: *"The analytical framework employed herein necessitates consideration of multiple interrelated variables, including but not limited to the differential impact trajectories of algorithmic decision systems across sociodemographic strata."*
>
> Contributor B: *"Our analysis found that AI screening tools perform significantly worse for candidates from underrepresented groups, with error rates 2–3x higher than for majority-group candidates."*
>
> Contributor C: *"Look, the AI tools are biased. We know this. The question is what we actually do about it. Here are three things that would make a real difference."*

---

**Output:**

### Voice Analysis

**Step 1: Identify the Strongest Passage**

Contributor B is the baseline. Section 2 (findings) represents the voice this paper should occupy throughout:
- Specific and quantified ("2–3x higher")
- Clear subject-verb-object sentences without bureaucratic padding
- Uses "we" — the organisation is the speaker
- Writes to a reader who is intelligent and pressed for time
- Does not over-explain but does not assume specialised jargon

---

**Fingerprint (7 Characteristics):**

1. **Sentences: specific and complete.** Subject-verb-object. No nominalisation strings. No sentences where the subject is "it" or "there."

2. **Quantification: always specific.** "Significantly worse" becomes "error rates 2–3x higher." Numbers are used where they exist. Hedging language ("substantial," "notable," "significant") is replaced with the actual figure or, if unavailable, the acknowledgment that a figure isn't available.

3. **We as speaker.** The organisation speaks in first person plural ("our analysis found," "we recommend"). Not third-person institutional distance ("the study concluded") and not the removed passive ("it was found that").

4. **Vocabulary: professional, not academic.** Domain terms are used (algorithmic decision systems, sociodemographic) where they are the precise word, but they are not used as decoration and are not stacked. "Differential impact trajectories" → "different outcomes." "Analytical framework employed herein" → "how we analysed this."

5. **No throat-clearing.** Paragraphs begin with the claim or the fact. Not with "It is important to note that" or "When considering the implications of this analysis."

6. **Stance: confident and direct.** Claims are stated, not hedged into oblivion. "AI screening tools perform significantly worse" — not "there may be some evidence suggesting that AI screening tools could potentially perform somewhat differently."

7. **Sentence rhythm: varied, with short sentences for emphasis.** Not all the same length. The most important sentence in a section is often the shortest.

---

**Representative Sample Passage (Voice Fingerprint):**

> *"Our analysis found that AI screening tools perform significantly worse for candidates from underrepresented groups — error rates 2–3x higher than for majority-group candidates. This is not a marginal difference. It is large enough to change hiring outcomes at scale."*

This passage exemplifies all seven characteristics simultaneously. It is the reference point for the full document.

---

**Departures:**

**Contributor A — Section 1 (Methodology): Severe departure**

> *"The analytical framework employed herein necessitates consideration of multiple interrelated variables, including but not limited to the differential impact trajectories of algorithmic decision systems across sociodemographic strata."*

Characteristics violated:
- 1 (sentences): Nominalisation stack — "necessitates consideration," "differential impact trajectories"
- 2 (quantification): Zero specific figures; everything is abstract
- 4 (vocabulary): "Herein," "differential impact trajectories," "sociodemographic strata" — academic register, not professional
- 5 (throat-clearing): "including but not limited to" is pure throat-clearing
- 6 (stance): Passive and hedged throughout

Direction of departure: Toward dense academic prose. Approximately 5 levels of formality above the fingerprint.

*Rewrite:*
> *"Our analysis examined how AI screening tools affect different groups of candidates. We looked at three factors: error rates by demographic, the type of roles where tools are used, and whether human review overrode AI recommendations."*

---

**Contributor C — Section 3 (Recommendations): Moderate departure**

> *"Look, the AI tools are biased. We know this. The question is what we actually do about it. Here are three things that would make a real difference."*

Characteristics violated:
- 1 (sentences): Fragment-adjacent ("We know this"); the opening "Look" is conversational in a way that exceeds the fingerprint's register
- 4 (vocabulary): "Look," "actually do about it" — casual register below the fingerprint
- 6 (stance): Overcorrects into colloquialism; the fingerprint is confident but not conversational

Direction of departure: Toward casual, direct voice. Approximately 3 levels of informality below the fingerprint.

*Rewrite:*
> *"AI hiring tools are producing biased outcomes. This is established. The question is what we do about it. Three changes would materially reduce the harm."*

Changes: Remove "Look" (casual); "We know this" → "This is established" (same meaning, correct register); "what we actually do about it" → "what we do about it" ("actually" is casual emphasis); "make a real difference" → "materially reduce the harm" (specific and in the vocabulary of the paper's subject).

---

**Voice Guide (for distribution to contributors):**

**Our voice in one paragraph:**
We write as an organisation that has done serious work and wants to communicate its findings clearly to intelligent, busy people. We are specific — we use numbers when we have them and acknowledge their absence when we don't. We write in first person plural. We don't hedge our claims into meaninglessness or inflate them with academic formality. We say what we found, what it means, and what we recommend.

**DO / DON'T pairs:**

| DO | DON'T |
|---|---|
| "Error rates were 2–3x higher" | "Significant differential performance outcomes were observed" |
| "We found" / "Our analysis shows" | "The study concluded" / "It was found that" |
| "AI tools perform worse for underrepresented candidates" | "Algorithmic systems demonstrate differential impact trajectories across sociodemographic strata" |
| "Three changes would help" | "Multiple potential interventions exist which might prove beneficial" |
| Start paragraphs with the claim | Start paragraphs with "It is important to note that" |

**Three most common departures to watch for:**
1. Nominalisation stacks (academic contributor tendency): convert "the employment of systematic consideration" → "using a systematic approach"
2. Over-casualisation (recommendations section tendency): "Look" / "actually" / "real difference" → professional equivalents
3. Passive constructions that remove the organisation as the actor: "It was recommended" → "We recommend"

---

## Related skills

- [`/s4h-writing-tone-alignment`](tone-alignment.md) — For register-specific repairs when the full voice identity is sound but one dimension (formality, warmth) has drifted
- [`/s4h-writing-audience-calibration`](audience-calibration.md) — Voice must be calibrated to the audience; a consistent voice aimed at the wrong reader is still failing
- [`/s4h-writing-prose-elevation`](prose-elevation.md) — Elevation must stay in voice; verify elevated passages sound like the fingerprint
