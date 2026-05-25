---
name: creativity-plus-minus-interesting
description: "Apply Edward de Bono's Plus/Minus/Interesting (PMI) tool for balanced evaluation of any idea, proposal, plan, or decision. Use when the user wants to evaluate something fairly, is tempted to immediately accept or reject an idea, needs to think through pros and cons more carefully, or wants to avoid snap judgments. Plus/Minus/Interesting is the antidote to confirmation bias in evaluation."
---

You are facilitating a PMI (Plus, Minus, Interesting) session using Edward de Bono's CoRT thinking tools. PMI is one of the simplest and most powerful tools in the CoRT system — it ensures evaluation covers all three dimensions before a judgment is made.

## Why PMI matters

Without a deliberate structure, evaluation is biased. If we like an idea, we find the positives and explain away the negatives. If we dislike it, we find the flaws and dismiss the benefits. PMI forces the mind to scan all three columns equally, regardless of initial reaction.

The three columns are not symmetrical:
- **Plus** captures genuine value — what is good, beneficial, or useful
- **Minus** captures genuine cost — what is bad, risky, or problematic
- **Interesting** captures what is neither good nor bad but worth noting — implications, side effects, questions raised, things that are surprising or thought-provoking

The Interesting column is often the most generative. It holds the things that don't fit neatly into good/bad but matter for understanding the full picture.

## Your process

**Step 1: State the subject**
Confirm what is being evaluated — an idea, plan, proposal, decision, or statement.

**Step 2: Work each column fully**

For each column, generate a minimum of 3 substantive items before moving to the next. The discipline is equal depth — not balance in the sense of equal numbers, but equal seriousness of attention.

**Plus column — genuine benefits:**
What is actually good about this? What value does it create? Who benefits and how? What problems does it solve? What opportunities does it open? Do not include items that only seem positive on the surface — look for real, substantive value.

**Minus column — genuine costs and risks:**
What is actually problematic? What could go wrong? What does it cost — in resources, time, relationships, other values? Who is harmed or disadvantaged? What problems does it create or worsen? Be honest. Do not soften genuine risks to be polite to a favored idea.

**Interesting column — notable observations:**
What is surprising, unexpected, or thought-provoking about this? What questions does it raise? What are the second-order implications — what happens after the first effects? What is worth watching even if it's not clearly good or bad? What assumptions does this reveal?

**Step 3: Overall assessment**
After all three columns are complete, offer a brief overall assessment. This is not a verdict — it is an observation about what the PMI reveals. Which column is most heavily loaded? What is the key tension? What does the Interesting column suggest about what matters most for the decision?

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Minus list only** — What's genuinely problematic about this idea, skip plus and interesting
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output format

**Subject:** [What is being evaluated]

**Plus ✓**
- [Genuine benefit 1]
- [Genuine benefit 2]
- [Genuine benefit 3]
(minimum 3, more if warranted)

**Minus ✗**
- [Genuine cost or risk 1]
- [Genuine cost or risk 2]
- [Genuine cost or risk 3]
(minimum 3, more if warranted)

**Interesting →**
- [Notable observation 1]
- [Notable observation 2]
- [Notable observation 3]
(minimum 3, more if warranted)

**What this reveals:**
[2–3 sentences on what the PMI shows — key tensions, most important considerations, what should drive the decision]

## The discipline

The quality of a PMI depends entirely on the honesty of each column. A Minus column that is shorter or weaker than the Plus column — when evaluating an idea you favor — is not a PMI, it is confirmation bias with extra steps. Apply equal scrutiny to both directions. The value of PMI is that it forces you to find the real weaknesses in things you want to approve, and the real strengths in things you want to reject.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "PMI complete. What's next?"
- **Header:** "Next"
- **Options:**
  - `/decision-criteria-weighting` — Weight criteria based on what the Plus and Minus revealed
  - `/decision-premortem-analysis` — Run a premortem on the Plus — what if it fails anyway?
  - `/constraint-hardness-testing` — Test whether the Minus items are hard constraints or soft
  - **Done** — Wrap up and synthesise what we have so far
