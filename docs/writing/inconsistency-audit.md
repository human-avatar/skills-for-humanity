# `/writing-inconsistency-audit`

> *One visible inconsistency tells the reader the author may have lost the thread. They spend the rest of the story half-watching for the next crack.*

**Category:** [Writing](README.md) · **Command:** `/writing-inconsistency-audit`

---

## What it does

Runs four systematic passes across a manuscript — timeline, character logic, world-rules, and physical continuity — to identify and categorise inconsistencies by type and severity. Produces a structured report per category with each issue quoted, located, and severity-rated.

---

## When to use it

- A reader or editor has flagged "contradictions" or "continuity errors" without specifying them
- A detective or mystery plot where the solution depends on specific information access
- A long manuscript with a complex timeline, multiple POV characters, or a large cast
- Preparing a manuscript for submission or publication
- You've revised heavily and sections have been moved or rewritten
- The story has an established magic system, rule set, or technology that appears frequently

---

## When *not* to use it

**Don't use this as a substitute for reading the manuscript.** The inconsistency audit requires the full text to be effective. This skill can structure the passes and identify what to look for, but a systematic audit requires close reading of the actual material — it cannot be performed without the text.

**Don't use this when the "inconsistency" is intentional.** Unreliable narrators, deliberately distorted timelines, and stories where different accounts of the same event contradict each other are not inconsistencies — they are the story's mechanism. Before running an audit, identify which apparent inconsistencies are intentional. These should be excluded from the report.

The nearest neighbor: [`/writing-pov`](pov.md) — which addresses a specific sub-category of inconsistency (narration accessing knowledge the POV character doesn't have) in more depth. If POV violations are the primary problem, use that skill; if you need a full four-category audit, use this one.

---

## Full example

**Input:**
> My murder mystery has a detective, Petra, solving the death of financier Edmund Vale. The killer, revealed in the final chapter, is Edmund's business partner, Conrad. Petra determines Conrad's guilt from a specific clue: a stock transaction that was executed while Conrad claimed to be at a charity gala. But I've been told by a reader: "Petra shouldn't be able to solve this — she doesn't have access to Conrad's trading records at that point in the story."

---

**Output:**

### Inconsistency Report

*Note: This audit focuses on the specific flagged issue (character knowledge access) and the categories most relevant to a detective mystery. A full manuscript audit would require the complete text.*

---

**Timeline:**

*Investigating the specific flagged issue from a timeline perspective:*

The reader's objection is a **knowledge-access error**, which manifests as a timeline problem: Petra accesses information before she should have it. The sequence needs to be reconstructed:

- Chapter 14: Petra interviews Conrad. He states he was at the Vale Foundation gala all evening.
- Chapter 17: Petra identifies the stock transaction as the crucial anomaly.
- Chapter 19: Petra confronts Conrad with the transaction records and reveals her case.

*Issue flagged: When does Petra obtain the trading records? If she obtains them in Chapter 17 through a request to the financial regulator or Conrad's brokerage, this is plausible — but there must be a scene in which she makes that request, or receives that document, that precedes Chapter 17. If there is no such scene, the records appear in Petra's possession without a causal chain.*

Severity: **Breaks the story.** In a mystery novel, the detective's knowledge access is load-bearing. The solution's legitimacy depends on the reader being able to verify that Petra's knowledge was obtained through plausible means. A knowledge acquisition that has no causal history undermines the mystery's fairness.

---

**Character Logic:**

**Issue 1:** Petra solving the case from trading records she doesn't have access to.

*Full reconstruction of the character-logic problem:*

For Petra to have Conrad's trading records, one of the following must be true and must appear in the text:
1. She obtained a subpoena or regulatory order — which requires a scene in which this is pursued and obtained.
2. A source provided them voluntarily — requiring a scene in which this source is identified and makes contact.
3. They were discovered during a physical search — requiring a scene in which the search occurred and the records were found.
4. They are public records (only for publicly listed companies with required disclosures) — which requires either that Conrad's trades are in a publicly listed vehicle, or that this is established.

*If none of these scenes exist, the reader is correct: Petra knows something she couldn't know. This is not a small continuity error — it is the case's solution being obtained through narrative convenience.*

Severity: **Breaks the story.**

---

**Issue 2 (secondary flag, dependent on full text):** Conrad's alibi.

*The trading records prove Conrad was *not* at the gala — but this requires that the transaction timestamp overlaps with gala attendance. For this to hold: (a) the gala's timeframe must be established; (b) the transaction's timestamp must fall within it; (c) Conrad could not have executed the trade remotely while appearing to be at the gala — or if he could, this must be accounted for.*

*In 2024, a sophisticated financial professional could execute a stock trade from a phone while attending a gala. If Conrad is tech-literate, the trading record proves only that he made a trade — not that he wasn't at the gala. Petra's case may have a logic gap.*

Severity: **Breaks immersion** (if not addressed) / **Breaks the story** (if Petra's case rests entirely on this evidence with no explanation of why remote trading was impossible or didn't occur).

---

**World Rules:**

*For a contemporary mystery set in the real world, the world rule relevant here is legal process: how does law enforcement (or a private investigator, depending on Petra's role) legitimately access private financial records?*

*Issue: If Petra is a police detective, she requires a warrant or regulatory cooperation. If she is a private investigator, she has fewer legal options — subpoenas are not available to private investigators, and obtaining records by other means may be inadmissible or illegal in ways that the story needs to address.*

*Current status: Unknown without full text, but flagged as requiring verification.*

Severity: Minor if addressed; **Breaks the story** if Petra's legal authority to obtain the records is not established.

---

**Physical Continuity:**

*No physical continuity issues flagged from the described scenario. Full manuscript audit would be required to check physical continuity throughout.*

---

**Summary:**

The reader's concern is valid and the story-critical issue is in **Character Logic** — specifically, Petra's knowledge access. This is a Severity: Breaks the story issue because it is the mechanism of the mystery's resolution.

**Most critical fix required:** Add a scene, at the correct chronological point, in which Petra obtains the trading records through a legally and logically plausible means (warrant obtained, source contacted, document discovered). The scene must occur before Chapter 17 and must establish clearly that the records are now in her possession. This single addition closes the gap.

---

## Related skills

- [`/writing-character-development`](character-development.md) — Establishes the character-logic baseline that the audit measures violations against
- [`/writing-worldbuilding`](worldbuilding.md) — Establishes the world-rules baseline
- [`/writing-pov`](pov.md) — Deeper analysis when POV violations are the primary issue
