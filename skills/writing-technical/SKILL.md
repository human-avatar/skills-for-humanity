---
name: writing-technical
description: "Writes and audits technical documentation, API docs, user guides, and specifications for completeness, sequence, precision, and audience calibration. Use when documentation is confusing, assumes too much knowledge, or leaves gaps a user can't bridge. Triggers: 'technical writing', 'API documentation', 'write documentation', 'user guide', 'technical docs', 'the documentation is confusing', 'write a spec', 'docs are missing steps'."
---

# Writing: Technical

Technical writing fails when it is written for the person who already knows how the system works. The person who already knows doesn't need the document. The document is for the person who doesn't know — and that person's experience of the document is the only test that matters. The test is simple: can a reader with the assumed knowledge execute the task using only this document? If they cannot, something is missing.

This is a higher bar than it sounds. Technical writers who know the system well have difficulty seeing the gaps — because for them, nothing is missing. The prerequisite knowledge is so obvious it doesn't seem worth stating. The step that requires understanding the system's mental model doesn't look like a step — it looks like common sense. These invisible assumptions are where most documentation fails.

The five failure modes in technical writing:

**Audience miscalibration:** Assumes knowledge the reader doesn't have, or over-explains what the reader already knows. Both are wrong. The first makes the document unusable; the second makes it condescending.

**Incompleteness:** Steps that require bridging knowledge the document doesn't provide. Often invisible to the writer because the knowledge is automatic.

**Sequence errors:** Prerequisites stated after they are needed, steps in the wrong order, troubleshooting information buried after the task it applies to.

**Precision failures:** Terms used inconsistently, ambiguous instructions ("configure the settings" — which settings?), passive voice that obscures who does what ("the file should be saved" — by whom, when, where?).

**Missing examples:** Non-obvious steps explained only in the abstract, without a concrete example that shows the reader what the correct output looks like.

---

## Your Process

**Step 1: Audience Profile**
Who is the reader? What do they already know? What do they not know? What is their goal — and what is the fastest path from their current knowledge to task completion? Is the documentation calibrated to this profile, or to a different one (a more advanced user, or a more novice one)?

**Framing check:** Confirm the specific document and audience before continuing. State what you've identified — the actual document being audited, its subject matter, and the assumed reader profile — in one sentence, then use `AskUserQuestion`:
- **Question:** "I'm reading this as: [your one-sentence framing of the document and its intended audience]. Is that right?"
- **Header:** "Framing"
- **Options:**
  - **Yes — proceed** — framing is correct
  - **Adjust** — one element is off; user will correct it before you continue
  - **Reframe** — different situation than read; incorporate the correction before proceeding

**Step 2: Completeness Audit**
Read the documentation as if you are the assumed reader and have only their assumed knowledge. Walk through each task:
- Are all prerequisites stated before they are needed?
- Is there any step that requires knowledge not provided in this document or in the stated prerequisites?
- Are error states covered? (What does the reader do if the expected result doesn't happen?)
- Are edge cases relevant to the assumed reader addressed?

Flag every gap: name the missing knowledge, identify where in the sequence the reader would encounter it.

**Step 3: Sequence Audit**
Check the order of information:
- Are prerequisites stated before the tasks that require them?
- Are steps in chronological order?
- Is troubleshooting information positioned near the steps it applies to, not collected at the end?
- Is the most important information (the task itself) reached without having to navigate through extensive context?

**Step 4: Precision Audit**
For every instruction, ask: could a reader with assumed knowledge interpret this in two different ways?
- Flag ambiguous instructions (specify what, where, when, and who)
- Check that technical terms are used consistently throughout (not "configuration file" in one place and "config" in another without establishing the shorthand)
- Check that passive voice doesn't obscure agency ("the token should be set" → "set the token in the environment variable `AUTH_TOKEN`")

**Step 5: Examples Audit**
Identify non-obvious steps — steps where the correct action or its output is not self-evident to the assumed reader. For each:
- Is there an example showing correct usage?
- Is there an example showing what the correct output looks like?
- For API documentation: are there example requests and responses?

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

### Technical Writing Audit

**Audience Calibration:** [Who the assumed reader is / Whether the documentation matches that reader / Specific miscalibrations]

**Completeness Gaps:**
- [Missing knowledge / Where the reader encounters the gap / What would fill it]
- NONE FOUND if complete

**Sequence Issues:**
- [What comes in wrong order + correct placement]
- NONE FOUND if correct

**Precision Flags:**
- [Quoted ambiguous instruction → Precise rewrite]
- [Inconsistent term usage identified]
- NONE FOUND if precise

**Missing Examples:**
- [Step that needs an example + suggested example type]
- NONE FOUND if all covered

**Rewrite Suggestions:** [Worst-offending sections rewritten with all issues addressed]

---

## Notes

- The completeness test is the only test that matters: can the assumed reader complete the task using only this document? Walk through the steps as that reader, not as the author.
- The most commonly missed completeness gap: the mental model. Some tasks require the reader to understand *why* a system works a certain way before the steps make sense. If that mental model isn't provided, the steps are technically present but functionally useless.
- Pairs with `/writing-audience-calibration` — audience profile is the anchor for every other decision; the calibration audit belongs here.
- Pairs with `/writing-restructure` — documentation structure often needs reordering, particularly moving prerequisites before the steps that need them.
- Pairs with `/writing-line-editing` — technical writing often suffers from passive voice and nominalisation; line editing is often the final pass.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Technical writing complete. What's next?"
- **Header:** "Next"
- **Options:**
  - `/writing-audience-calibration` — Calibrate technical level for the audience
  - `/communication-clarity-audit` — Audit technical clarity throughout
  - `/writing-restructure` — Restructure technical content for clearer flow
  - **Done** — Wrap up and synthesise what we have so far
