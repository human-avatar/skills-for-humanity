# `/writing-pov`

> *POV is a contract with the reader. Every violation tells them the author lost the thread.*

**Category:** [Writing](README.md) · **Command:** `/writing-pov`

---

## What it does

Audits point-of-view for contract violations (interiority, observation, knowledge, and consistency), assesses whether the chosen POV serves the story's core effect, and produces specific flagged instances with recommendations. Catches head-hopping, unwanted omniscient access, and observation violations in close-third or first-person narration.

---

## When to use it

- Readers report feeling "pulled out" of the narrative without knowing why
- The narration accesses other characters' thoughts in what is meant to be close-third
- Characters know things the POV perspective shouldn't give them access to
- A manuscript moves between POV characters without clear transitions
- The chosen POV is limiting the story in ways you want to diagnose
- Copy-editing stage: a systematic check for POV violations before submission

---

## When *not* to use it

**Don't use this for omniscient narration that is working.** Well-executed omniscient narration is not a violation — it is a contract fulfilled consistently. The violations this skill catches are unintended access to interiority, not intended omniscient access. If you are writing omniscient narration and doing it consistently, this audit will generate false positives. Apply it only to close-third or first-person work, or to omniscient narration where consistency is in question.

**Don't use this to fix POV problems caused by character problems.** Sometimes the narration accesses another character's interiority because the author needs the reader to know something that the POV character doesn't know, which the POV character couldn't know. The solution is not to fix the POV — it is to redesign the information architecture so the POV character can access the knowledge through legitimate means. The POV violation is a symptom of a story design problem.

The nearest neighbor: [`/writing-inconsistency-audit`](inconsistency-audit.md) — which logs POV violations as a subcategory of character-logic errors. This skill provides the deeper analysis when POV is the primary problem, rather than treating violations as one item among many.

---

## Full example

**Input:**
> My literary novel is written in close third, following a single protagonist, Diane, through her year after her husband leaves. I've had feedback that "sometimes we know what other characters are thinking." Here is a representative passage:
>
> *Diane stood at the kitchen window, watching her daughter Clara play in the yard. Clara was thinking about her father — she always was these days — turning the memory of his voice over in her mind like a stone. Diane didn't know this. She thought Clara seemed fine.*

---

**Output:**

### POV Audit

**Type Identified:** Close third — single POV character (Diane). The narration has committed to Diane's subjective experience and should access only what Diane observes, thinks, and feels.

**Contract Stated:** In close third following Diane, the narration can access:
- Diane's thoughts, feelings, sensations, memories
- What Diane observes with her senses (what she sees, hears, smells, physically feels)
- Diane's interpretations and inferences about other characters (clearly marked as Diane's reading, not confirmed fact)

The narration cannot access:
- Other characters' thoughts or feelings directly
- Information Diane has not been given
- Events occurring outside Diane's presence

---

**Violations:**

**Violation 1 — Interiority access:**

> *Clara was thinking about her father — she always was these days — turning the memory of his voice over in her mind like a stone.*

This is a direct interiority violation. The narration has entered Clara's mind. In close third following Diane, this is impossible: Diane cannot know what Clara is thinking. The parenthetical "she always was these days" compounds the violation — it suggests habitual access to Clara's inner life.

*What makes this particular violation interesting: the author presumably included it to show the reader something that Diane cannot see — Clara's hidden grief. But this is precisely the problem. The author is using the narrative to deliver information that the story is supposed to demonstrate Diane cannot access. The reader is being given a truth that bypasses Diane's limited perspective.*

*The violation is doing real story work, which is why it's there — and which is why fixing it requires redesign, not just deletion.*

---

**Violation 2 — Observation plus inference presented as fact:**

> *She thought Clara seemed fine.*

This is not a violation — this is correctly executed. "She thought" marks this as Diane's interpretation, not narrative fact. This is exactly how close third should handle Diane's reading of another character.

*Note: this line also shows the author does know the technique — the violation and the correct form appear in the same paragraph. The violation was a choice to deliver information directly, not an ignorance of the convention.*

---

**Fit Assessment:**

The violation is doing something important: it is showing the reader that Diane is wrong — that Clara is not fine, that Diane cannot see her daughter's pain, that Diane's limited perspective is part of her character's problem in this story. This is a dramatically sound intention. The problem is the method.

Close third is well-suited for this story because Diane's limited perspective *is the story's subject* — her inability to see what is happening around her while she is absorbed in her own loss. The POV is correct. But it needs to deliver the Diane-is-wrong insight without violating the contract.

**Recommendation for Violation 1:**

Two legitimate options:

*Option A — Stay in Diane's perspective and let the reader infer:*

> *Diane stood at the kitchen window, watching her daughter Clara play in the yard. Clara was crouched over a rock, turning it over and over, not playing. She had been doing that a lot lately — finding things to handle, to examine, to put down. Diane thought she seemed fine.*

The reader sees what Diane doesn't: Clara's behaviour says something. Diane's conclusion ("seemed fine") reads as ironic without violating the perspective. The reader is ahead of Diane, which is where the story wants them to be.

*Option B — Add a brief, bounded scene from Clara's POV with a clear transition:*

If the novel requires direct access to Clara's interiority at multiple points, consider adding Clara as a second POV character with clearly marked section breaks. This expands the contract to multi-POV close third and must be applied consistently: Clara's sections would follow the same rules, limited to her access only.

**Recommendation:** Option A is the stronger choice for this story. The dramatic effect — Diane is not seeing her daughter — is more powerful when delivered through observed behaviour than when stated directly. The POV violation was trying to do the work efficiently; the correct technique does it more powerfully.

---

**Overall Verdict:** One significant violation (Violation 1) from a single passage; the technique around it is correct (Violation 2 was handled properly). The violation is not ignorance — it is an authorial shortcut that can be replaced with a technique that achieves the same effect more powerfully. Recommend a single-pass audit of the full manuscript for instances where the narration accesses other characters' interiority directly; most will be repairable with the Option A method demonstrated above.

---

## Related skills

- [`/writing-inconsistency-audit`](inconsistency-audit.md) — For a full manuscript audit where POV violations appear alongside other continuity errors
- [`/writing-voice-consistency`](voice-consistency.md) — Voice and POV are linked; close-third that drifts into authorial voice is both a POV and a voice problem
- [`/writing-scene-construction`](scene-construction.md) — If POV violations are caused by the scene needing information the POV character can't access, the scene architecture needs redesigning
