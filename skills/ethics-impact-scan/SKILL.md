---
name: ethics-impact-scan
description: "Run a quick ethical impact assessment on a proposed feature, change, or decision before it ships. Use when the user is about to build or ship something and wants to surface who benefits, who's harmed, and at what scale — before commitments are made. TRIGGERS: 'ethics scan', 'impact check', 'who does this affect', 'is this safe to ship', any new feature proposal where stakeholder impact is unclear. Lightweight — takes minutes, not hours."
---

# Ethics Impact Scan

A pre-ship ethical scan. Not a deep council — a structured sweep that forces you to see who's in the blast radius before you commit.

It runs two lenses: **utilitarian** (net effect on aggregate wellbeing) and **justice/fairness** (whether benefits and burdens are distributed equitably). These two together catch the most common pre-ship blind spots: harm that's small-per-person but large-in-aggregate, and harm that falls disproportionately on people with the least power.

---

## Your Process

**Step 1: Clarify the subject**
State what is being scanned — a feature, change, product decision, or policy. If the subject is vague, ask one clarifying question before proceeding.

**Step 2: Map the stakeholder field**
Before applying any lens, identify everyone affected:
- Direct users (who uses this feature and how?)
- Indirect parties (who is affected by users' use of this feature?)
- Third parties (suppliers, partners, communities)
- Non-users (people who don't opt in but are still affected)
- Future parties (people who will be affected by the precedent this sets)

Don't skip non-users and future parties. They are the most commonly missed.

**Step 3: Apply the Utilitarian Lens**
For each stakeholder group:
- What is the likely benefit?
- What is the likely harm?
- What is the scale (how many people, how significantly)?

Then: Is the net effect positive? Who bears disproportionate cost to generate that net positive?

**Step 4: Apply the Justice Lens**
- Are benefits distributed fairly, or do they flow primarily to users who already have more power, resources, or access?
- Are burdens distributed fairly, or do they fall primarily on those with the least power to resist them?
- Would the decision-makers accept this outcome if they didn't know which role they'd occupy?

**Step 5: Surface the flags**
Produce a short list of ethical flags — things that warrant attention before shipping. A flag is not a veto; it is a signal that deserves a conscious decision. Distinguish:
- 🔴 **Block** — this is a significant harm that should be resolved before shipping
- 🟡 **Watch** — this is a risk worth monitoring or mitigating, but not a blocker
- 🟢 **Note** — this is worth being aware of, but is low-risk

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Go/no-go verdict only** — recommendation and top conditions, skip the benefit/harm map
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

**Subject:** [what is being scanned]

**Stakeholder Map**
| Stakeholder | Affected How | Scale |
|---|---|---|
| [group] | [benefit or harm] | [rough scale] |

**Utilitarian Assessment**
[2–3 sentences on net effect: who benefits, who's harmed, is the aggregate positive]

**Justice Assessment**
[2–3 sentences on distribution: are benefits and burdens equitably spread, who bears disproportionate cost]

**Flags**
- 🔴 / 🟡 / 🟢 [flag + one sentence explanation]

**Bottom Line**
[One sentence: is this clear to ship, ship with mitigations, or needs more work]

---

## Notes

The scan is designed to be fast. It is not a substitute for the ethics-council on high-stakes decisions — it is the filter that tells you whether you need one. A clean scan means you've thought clearly about impact. A flagged scan means you have a specific thing to address or escalate.

Do not use the scan to *justify* a decision you've already made. Run it before you've committed.
