---
name: human
description: "Global routing skill. Selects the best thinking tool from all 131 skills across 23 categories based on a plain-language description of any situation. Use when you say 'help me think through this', 'which skill should I use', 'I need to figure out what to do', 'where do I start', or any time you want structured thinking but aren't sure which category applies. Diagnoses the thinking challenge type and presents 3–4 best-fit skills as lettered options — user picks one and it executes immediately."
---

# Human

The master routing skill. You describe your situation in plain English. This skill diagnoses what kind of thinking challenge you're facing, identifies the best 3–4 tools across all 23 categories, and presents them as lettered options. You pick one and it runs — no second command needed.

---

## Your Process

### Step 1: Intake

If the user hasn't described their situation yet, ask:

> What are you trying to figure out? Describe the situation in 1–3 sentences.

Wait for their response before diagnosing.

---

### Step 2: Diagnose the Challenge Type

Read the situation and classify it against these five clusters:

**Think Sharper** — The problem is *reasoning quality*. Something needs validating, pressure-testing, or repairing. The person is asking: is this right? Will this work? What am I missing?
→ Categories: logic, probability, decision, constraint, game-theory

**Think Differently** — The problem is *fixation or lack of options*. The person is stuck, has only one idea, needs fresh directions, or needs to break out of a dominant frame.
→ Categories: creativity, analogy, play

**Think About People** — The problem is *human dynamics*. Other people's motivations, reactions, values, or relationships are central. The question involves what someone wants, fears, or will do.
→ Categories: communication, social, emotional, ethics, identity, narrative, writing

**Think in Time & Systems** — The problem involves *dynamics, patterns, or leverage*. Things are changing over time, part of a larger system, or connected to history. The question is about causes, cycles, or where to intervene.
→ Categories: systems, temporal, historical, resource, strategy

**See More Clearly** — The problem is *perception before analysis*. Something needs to be observed more carefully before it can be assessed. The question is about what's actually there.
→ Categories: aesthetic, sensory

---

### Step 3: Identify 3–4 Best-Fit Skills

Within the most relevant cluster, identify the 2–4 skills that best match the specific situation. Use the routing guide below.

Prioritize skills that match the **type of output** the person needs:
- They need a verdict → validation/audit skills (logic-check, ethics-check, constraint-hardness-testing)
- They need options → generation skills (creativity-alternatives, decision-option-mapping, constraint-workaround-mapping)
- They need to understand a person → people skills (emotional-motivation-mapping, social-power-mapping, communication-audience-modeling)
- They need to understand a system → systems skills (systems-leverage-analysis, systems-feedback-mapping)
- They need to decide → decision skills (decision-premortem-analysis, decision-criteria-weighting)
- They need to fix something → repair skills (logic-fixer, constraint-scope-reduction)

---

### Step 4: Present Options

Present your diagnosis and the options clearly:

> Here's what I think you need. Which fits your situation best?
>
> **A) [Skill name]** — [one sentence on why this fits and what it produces]
> **B) [Skill name]** — [one sentence on why this fits and what it produces]
> **C) [Skill name]** — [one sentence on why this fits and what it produces]
> **D) Show me more options** — list all skills in the [most relevant category] category

Wait for their selection.

---

### Step 5: Execute

When the user picks an option:
- **A, B, or C:** Run the selected skill immediately. Do not ask them to type another command. Use the context already gathered as the input.
- **D:** Show the full skill table for the most relevant category. Let them pick from the complete list, then execute.

If the person's situation seems to span two clusters (e.g., "I need to decide something but I also want to think ethically about it"), present skills from both. Lead with the more important one.

---

## Routing Guide

Use this table to narrow from situation to skill. It covers the most common challenge types — use judgment for everything else.

| Situation | Top skills to offer |
|---|---|
| "Is this argument / plan / reasoning sound?" | logic-check, logic-argument-validation |
| "I need to make a decision" | decision-premortem-analysis, decision-criteria-weighting, decision-option-mapping |
| "What could go wrong?" | decision-premortem-analysis, logic-fixer, constraint-hardness-testing |
| "I'm stuck, I keep coming back to the same idea" | creativity-lateral-thinking, creativity-assumption-excavator |
| "I need more / better options" | creativity-alternatives, creativity-concept-fan, decision-option-mapping |
| "How likely is this?" | probability-scenario-weighting, probability-confidence-calibration |
| "Is this ethical?" | ethics-check, ethics-council, ethics-impact-scan |
| "Who does this affect and how?" | ethics-empathy-circle, emotional-stakes-mapping, social-power-mapping |
| "Why is this person / team behaving this way?" | emotional-motivation-mapping, emotional-resistance-diagnosis, social-incentive-analysis |
| "How do I communicate this?" | communication-audience-modeling, communication-clarity-audit, communication-objection-mapping |
| "What's the leverage point in this system?" | systems-leverage-analysis, systems-feedback-mapping |
| "Has this happened before?" | historical-precedent-analysis, historical-failure-analysis |
| "Is this constraint real or assumed?" | constraint-hardness-testing, constraint-rule-inversion |
| "Is this decision reversible?" | decision-reversibility-analysis |
| "Something feels off about this design / plan" | aesthetic-coherence-check, logic-consistency-check, aesthetic-elegance-testing |
| "What am I not seeing?" | sensory-structured-observation, sensory-detail-mining, creativity-assumption-excavator |
| "Is this on-mission? Are we being consistent?" | identity-mission-alignment, identity-values-clarification |
| "What's the story here / how do I frame this?" | narrative-frame-analysis, narrative-structure-mapping |
| "Where should we put our resources?" | resource-leverage-mapping, resource-bottleneck-analysis |
| "What will this look like in 5 years?" | temporal-horizon-mapping, temporal-futures-mapping |
| "Help me with my writing / fix my story / review this document" | **`/writing`**, writing-restructure, writing-argument |
| "My character feels flat / the plot isn't working / the scene is off" | writing-character-development, writing-plot-structure, writing-scene-construction |
| "Edit this / tighten this / fix the structure or tone" | writing-restructure, writing-line-editing, writing-tone-alignment |
| "Write a report / brief / exec summary / copy / technical doc" | writing-report, writing-executive-summary, writing-copy, writing-technical |
| "How do I beat / outmaneuver / position against a competitor" | **`/strategy`**, strategy-terrain, strategy-positioning |
| "When should I act / is now the right moment / should I wait" | strategy-timing, strategy-victory, decision-premortem-analysis |
| "We're outgunned / under-resourced / need asymmetric leverage" | strategy-force-economy, strategy-positioning, strategy-alliance |
| "I need to think through a negotiation / game / bidding situation" | **`/game-theory`**, game-theory-signaling, game-theory-equilibrium |
| "How do I get people to cooperate / stop defecting / align incentives" | game-theory-prisoners-dilemma, game-theory-mechanism-design, game-theory-iterated |
| "How much should I bid / how do I design this auction" | game-theory-auction, game-theory-mechanism-design |

---

## Notes

- **Don't over-route.** Present 3–4 options maximum. More than 4 creates a new decision problem.
- **Lead with the most directly useful skill** for the stated situation. If someone is clearly facing a go/no-go decision, decision-premortem-analysis is more useful than a broad creativity session.
- **The context gathered in Step 1 is the input.** When the user selects a skill, run it on that context — they shouldn't have to re-explain the situation.
- **If the situation is genuinely ambiguous**, ask one clarifying question: "Is your main challenge generating options, or evaluating an option you already have?"
