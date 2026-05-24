# `/game-theory-mechanism-design`

> *Don't demand honesty. Design a system where honesty is the dominant strategy.*

**Category:** [Game Theory](README.md) · **Command:** `/game-theory-mechanism-design` · **Source:** Hurwicz, Maskin, Myerson (Nobel 2007); William Vickrey

---

## What it does

Designs rules and incentive structures that produce desired outcomes from self-interested players with private information. Takes the desired outcome as the starting point and works backward to the mechanism that produces it — the reverse of standard game theory.

The revelation principle is the foundation: any outcome achievable by any mechanism can be achieved by a direct mechanism where truth-telling is the dominant strategy. The designer never needs to fight against self-interest — the goal is to align it.

---

## When to use it

- A system or process is producing the wrong behaviour and you have the ability to change its rules
- Players have private information (their true valuations, effort levels, costs, or preferences) that you need them to reveal honestly
- An evaluation, reporting, or allocation process consistently produces gamed or distorted outputs
- You're designing an auction, a performance review, a resource allocation process, a marketplace, or any other rule-governed system that affects self-interested participants
- The current incentives push people toward behaviour that is bad for the group, and you want to change that without relying on willpower or compliance

---

## When *not* to use it

**Don't use mechanism design when the problem is not about self-interested misrepresentation.** If people are giving inaccurate information because they're confused, poorly informed, or facing ambiguous criteria — not because they're strategically misreporting — the problem is a design or communication failure, not an incentive failure. A better form or clearer criteria will solve it. Adding complex incentive structures to a comprehension problem makes things worse.

**Don't over-engineer.** The revelation principle guarantees that a perfectly incentive-compatible mechanism exists, but it doesn't guarantee the mechanism is simple or cheap to implement. A mechanism that requires players to submit complex reports, that involves large transfers, or that depends on accurate information the designer doesn't actually have may be theoretically optimal but practically useless. The right design is the simplest one that adequately solves the incentive problem.

The nearest neighbor: [`/game-theory-prisoners-dilemma`](prisoners-dilemma.md) — which analyses an existing cooperation failure. Use prisoners' dilemma to diagnose why the current system produces bad outcomes; use mechanism design to fix it by redesigning the rules.

---

## Full example

**Input:**
> I'm a people manager designing the quarterly performance review system for my team of 8. The current system asks employees to rate themselves across 5 dimensions (quality of output, communication, initiative, collaboration, reliability) on a 1–5 scale, which feeds into an overall performance band. The problem: self-ratings are consistently inflated — nearly everyone rates themselves 4–5 across the board regardless of actual performance level — because employees know the ratings feed into their bonus and promotion decisions. The ratings are useless as diagnostic information and as a calibration tool.

---

**Output:**

### Mechanism Design

**Desired Outcome**

Employees report accurate self-assessments of their own performance across the five dimensions, such that the reported ratings are useful for: (a) identifying genuine development areas, (b) calibrating across the team for bonus and promotion purposes, and (c) informing manager conversations with real diagnostic content.

More precisely: the mechanism should make truthful rating — including giving oneself a 2 or 3 where that reflects genuine performance — the dominant strategy for each employee.

---

**Player Map**

**Each employee** holds private information about their own performance: they know, better than anyone, their actual quality of output, where they struggled, where they performed well, and what the honest calibration is. Their private information is genuinely valuable.

**Current incentives**: ratings feed directly into bonus and promotion outcomes. Any employee who rates themselves lower than their peers — even accurately — faces a real risk of receiving lower compensation and fewer advancement opportunities, regardless of whether their self-assessment is accurate. The downside of honest self-reporting (lower compensation) is clear and immediate; the benefit (a more useful feedback session with their manager) is diffuse and uncertain.

**What they do under the current mechanism**: inflate across all dimensions. A 4.2 average says "this person is good at everything in the upper range" — which is the same signal as a 4.5 average, which is the same as a 4.7 average. As ratings cluster at the top, the signal becomes noise.

---

**Misalignment Diagnosis**

Current equilibrium: near-uniform inflation to 4–5 across all employees. The ratings convey almost no information and cannot be used for compensation calibration or development conversations.

Why it fails: the mechanism directly connects self-reported ratings to compensation outcomes, creating an overwhelming incentive to rate high. There is no cost to inflation and a real cost to accuracy. The mechanism treats the self-rating as both a diagnostic tool (what am I actually good at?) and a competitive input (how do I compare to peers?). These two uses have conflicting requirements — honest diagnostics require psychological safety; competitive inputs require careful strategic self-presentation. Combining them in a single rating instrument destroys both uses.

---

**Mechanism Specification**

**Information revelation rule: Separate the diagnostic function from the compensation input**

The root problem is that self-ratings are doing two things that require contradictory incentives. The fix is to separate them entirely.

*Diagnostic self-assessment (truth-eliciting):*
Create a version of the self-rating form where responses have no direct computational input into compensation decisions. The self-assessment goes to the employee's manager for the development conversation but is not shared with HR, does not enter any rating aggregation, and is explicitly framed as "for our conversation only." This removes the incentive to inflate because the strategic payoff to inflation (higher bonus) is severed.

*Peer calibration input (competitive):*
For compensation and promotion calibration, use manager assessment and peer feedback rather than self-ratings. Managers rate employees; peers provide calibration input on cross-functional collaboration and communication. These raters have less systematic incentive to inflate (peers are also competing, so inflating a colleague risks relative disadvantage; managers are accountable to accuracy over time).

**Rules and allocation:**

For the development conversation:
- Self-ratings are submitted in advance and shared only with the direct manager
- The form asks for evidence (specific examples) alongside the rating — rating claims unsupported by examples are flagged for discussion, not accepted
- The manager scores the same dimensions independently before seeing the employee's self-assessment
- The conversation starts from the *gap* between employee self-rating and manager rating, not from the employee rating alone

For compensation:
- Manager assessment is primary input
- Peer ratings provide calibration on the two dimensions managers have least visibility on: communication and collaboration
- Self-ratings are explicitly excluded from compensation calculations

**Transfers and participation constraints:**

The mechanism needs to be individually rational — employees should prefer participating to opting out, and should prefer honest self-assessment to strategic inflation.

Incentive: introduce a modest accuracy incentive. After each quarter, employee self-ratings are compared against manager ratings and peer calibration. Employees whose self-ratings closely match the calibration baseline receive a small "reflection bonus" (a meaningful but modest sum — not so large it distorts, but large enough to be noticed). This rewards accuracy directly and makes strategic inflation slightly costly.

Alternatively, if monetary transfers are impractical: make it explicit that self-awareness (accurately identifying your own development areas) is itself a rated dimension, scored by the manager, and feeds into the "initiative" dimension of the evaluation. Employees who consistently show poor self-awareness relative to their actual performance receive a lower initiative rating. This makes inflation costly in a different way.

---

**Manipulation Check**

*Testing a high performer who knows they're excellent:*
Under the proposed mechanism, what is their best strategy? They can either (a) rate themselves accurately high, receive a good development conversation, and face no accuracy penalty; or (b) inflate slightly from accurate high, gain nothing (their ratings are already high and compensation is based on manager assessment anyway), and potentially be flagged for low self-awareness. Dominant strategy: honest reporting. ✓

*Testing a low performer who wants to hide their gaps:*
Under the proposed mechanism, they can (a) rate themselves accurately, have a development conversation that identifies their gaps (useful to them if they want to improve), and face no direct compensation penalty from the self-rating; or (b) inflate, gain nothing on compensation (still based on manager assessment), be identified as having poor self-awareness, and lose the conversation value. Dominant strategy: honest reporting is rational, or at minimum the cost of inflation is removed. ✓

*Testing an employee who inflates peer ratings for a colleague they like:*
The peer rating is used for calibration, not as a raw input. Multiple peers rate each dimension; outlier peer ratings are flagged and reviewed by the manager. The ability to manipulate via a single inflated peer rating is limited. ✓

*Residual vulnerability:* Employees might provide accurate self-ratings on dimensions they feel safe about (technical quality, reliability) and inflate on dimensions that feel more subjective and risky (communication, initiative). Monitor for systematic differential inflation across dimensions as an early warning sign.

---

**Revised Mechanism** *(incorporating the residual vulnerability)*

For the two most subjective dimensions — communication and collaboration — provide behavioural anchors for each rating level rather than abstract labels. "4 on communication" should be defined by specific, observable behaviours (e.g., "proactively surfaces problems to stakeholders before they escalate; adapts communication style to different audiences without being asked"). Behavioural anchors reduce subjective inflation because raters must endorse specific observable claims, not just a number.

---

**Implementation Notes**

This mechanism requires the manager to invest more effort up front: rating each employee independently before the self-assessment conversation, rather than reading the self-assessment and reacting. This is the right trade-off — the mechanism's information value depends on independent assessments — but it must be built into the review schedule and acknowledged as a real time commitment.

Transition note: the first cycle of the new mechanism will still produce some inflation by habit. The diagnostic tool's value becomes apparent after 2–3 cycles as development conversations improve and managers begin trusting the self-assessment data. Set expectations accordingly and don't abandon the mechanism after one cycle.

---

## Related skills

- [`/game-theory-prisoners-dilemma`](prisoners-dilemma.md) — diagnosing the cooperation failure that the mechanism is designed to fix
- [`/game-theory-equilibrium`](equilibrium.md) — verifying that the mechanism produces the intended equilibrium
- [`/game-theory-auction`](auction.md) — specialised mechanism design for competitive bidding and allocation
- [`/social-incentive-analysis`](../social/incentive-analysis.md) — the social and political dimensions of incentive redesign
