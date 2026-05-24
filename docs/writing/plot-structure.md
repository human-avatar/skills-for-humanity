# `/writing-plot-structure`

> *Most plot problems are structural. The sentences may be excellent. The architecture is broken.*

**Category:** [Writing](README.md) · **Command:** `/writing-plot-structure`

---

## What it does

Diagnoses structural failures in a story using the five-beat dramatic framework — inciting incident, first turning point, midpoint, dark night, climax and resolution — and produces a structural map identifying missing or broken beats, cause-and-effect chain failures, and specific remedies. The framework is not prescriptive; it is descriptive of how dramatic tension works.

---

## When to use it

- Readers report "losing interest" in the middle
- The story feels like a series of events rather than a building momentum
- The ending feels rushed, unearned, or disconnected from what came before
- The protagonist doesn't seem to be in real danger of anything
- You're outlining a new story and want to stress-test the architecture before drafting
- The plot and the character arc feel like they're running on separate tracks

---

## When *not* to use it

**Don't use this for purely episodic structures.** Some narratives are deliberately episodic — they are a series of encounters rather than a building arc, and the reader experiences them as a journey through a world rather than a mounting dramatic question. Applying the five-beat framework to these can produce false diagnoses of "missing midpoint" when the form is simply different.

**Don't use this before you have a story to diagnose.** This is a diagnostic tool, not a generation tool. If you are generating a story from scratch, start with `/writing-character-development` and `/writing-arc-design` to build the character's internal need and arc endpoint first — the external plot should grow from those.

The nearest neighbor: [`/writing-arc-design`](arc-design.md) — which addresses the internal emotional arc that must mirror the external structure. Plot structure and arc design must be diagnosed together; a plot that is structurally sound but disconnected from the character's internal change will still produce a story that feels hollow.

---

## Full example

**Input:**
> I'm writing a thriller about a forensic accountant named Carla who discovers evidence of a money-laundering operation inside her own firm. The middle sags — readers say it loses momentum around chapter 12 out of 24. The book is 90,000 words.

---

**Output:**

### Structural Map

**Inciting Incident:** (Chapters 1–3)
Carla discovers an anomaly in a client file that shouldn't be there — a set of transactions that, taken together, describe a money-laundering pattern. The incident functions: it happens to Carla directly (she finds it herself), it raises a specific answerable question (what is this, and who is doing it?), and it immediately creates danger (she now knows something she's not supposed to know).

*Diagnosis: Functioning correctly. The question is raised, the protagonist is active, the stakes are personal.*

---

**First Turning Point:** (Chapter 6)
Carla confronts her supervisor — tentatively, with plausible deniability — and is met with a response that is too smooth, too fast, too reassuring. She knows he knows. She knows she can no longer trust the firm. She continues investigating without telling anyone inside.

*Diagnosis: Weak. This is a commitment beat and it is passive — Carla decides to *continue* rather than to *act*. There is no cost. She hasn't burned a bridge, made an irreversible choice, or accepted a risk. The reader has no reason to believe the stakes have changed.*

*Recommended fix: Carla should take an action at the first turning point that cannot be undone — copying files she isn't authorised to access, contacting someone external, or tipping her hand in a way that creates real danger. The no-going-back quality is what makes it a turning point.*

---

**Midpoint:** (Chapter 12 — identified as the sag point)
Carla gets access to the full ledger and confirms the operation is much larger than she thought. It involves senior partners. This *should* be a false victory or false defeat that shifts the story's direction — but it functions only as escalation. The story's direction does not change; it simply gets more serious. Carla is still in the same mode (investigating alone), still asking the same question (who and how much?), still using the same approach (digital forensics). The midpoint has not changed what the story is about.

*Diagnosis: This is the source of the sag. The midpoint needs to change the nature of the problem, not just its magnitude. Two options:*

*False victory option: Carla believes she has enough evidence to go external — she contacts a regulator, or makes contact with a journalist — and appears to win. Then: the contact is inside the operation, or the evidence disappears, or her identity is exposed. The story's first half (can she find evidence?) is over; the second half (now that they know she knows, can she survive?) begins.*

*False defeat option: Carla is found out at Chapter 12 — someone in the firm knows she's been investigating. She loses her access, is placed under surveillance, and is warned off. The story's direction inverts: she was hunting; now she is being hunted.*

---

**Dark Night:** (Chapters 18–20)
Carla's source is killed in what is staged as an accident. She realises the operation has people inside law enforcement. She has evidence she cannot deliver and is now being framed for the original money-laundering. She appears to have lost: the evidence is compromised, her ally is dead, she is the suspect.

*Diagnosis: The dark night exists and has real cost. The main weakness: Carla is passive here. She reacts to losses rather than fighting and losing. The dark night is most powerful when the protagonist tries their hardest and it still isn't enough — when active effort produces defeat, not when defeat simply arrives.*

*Recommended fix: Give Carla one last active attempt before the collapse — she tries to deliver the evidence through a channel that seemed safe, and it fails, and the failure makes the situation catastrophically worse. She has done her best and lost. That is the dark night.*

---

**Climax and Resolution:** (Chapters 22–24)
Carla uses her accounting expertise — specifically, knowledge of how the money-laundering pattern works — to create a counter-trap that exposes the operation by triggering its own concealment mechanism. The operation's attempt to hide itself becomes the evidence against it.

*Diagnosis: The climax correctly requires Carla's specific skill. The resolution requires what only she could do. This is well-designed — the plot and character capability are genuinely integrated.*

---

**Cause-and-Effect Chain:**

| Beat | Causes | Effect |
|---|---|---|
| Inciting incident | Anomaly in client file | Carla begins investigating |
| First turning point | Supervisor's response | Should force irreversible commitment — currently weak |
| Midpoint | Scope of operation revealed | Should shift the story's nature — currently only escalates |
| Dark night | Source killed, Carla framed | Carla has lost all apparent options |
| Climax | Carla's expertise + desperation | Counter-trap exposes operation |

The chain from dark night to climax is solid. The chain from first turning point to midpoint is the problem: because the first turning point doesn't create real stakes, the midpoint has no escalation to work with — it can only add new information, not raise what is at risk.

---

**Diagnosis:** Two structural repairs needed:
1. First turning point (Chapter 6): make Carla's commitment irreversible — an action with real cost that she cannot walk back.
2. Midpoint (Chapter 12): change the nature of the problem, not just its magnitude. The story's first half (investigation) should be over at the midpoint; the second half (something different — survival, or a different kind of fight) should begin.

---

## Related skills

- [`/writing-arc-design`](arc-design.md) — The internal arc must mirror this external structure; repair the plot structure and arc design together
- [`/writing-scene-construction`](scene-construction.md) — Once beats are correctly placed, individual scenes within them must deliver what the structure requires
- [`/writing-restructure`](restructure.md) — If the beats exist but are in the wrong position or proportion
