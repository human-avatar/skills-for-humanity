# psychology-persuasion

> What actually changes minds and drives action — and how to select the right approach for the context.

**Trigger:** `/psychology-persuasion`

---

## What it does

Profiles the audience, identifies what's being changed (belief, attitude, decision, or behavior), selects the most effective influence approach for the context — drawing on the Elaboration Likelihood Model, Cialdini's six principles, and inoculation theory — runs an ethical check, and produces the constructed approach or message. Output is actionable: the analysis tells you which approach to use and why; the construction gives you something you can actually use.

---

## When to use

- "How do I get buy-in on this?" — stakeholder alignment challenge
- "My argument is solid but it's not landing" — the right approach for the audience may be missing
- "How would I pitch this to [person who currently opposes it]?"
- Preparing for a negotiation, presentation, or difficult conversation where the outcome depends on persuasion
- Designing a campaign, message, or communication where behavior change or attitude change is the goal

## When *not* to use

- The primary obstacle is entrenched behavior (habit, default, routine) rather than belief or attitude → [psychology-behavior-change](behavior-change.md) — behavior is often changed more effectively through environment design than argument
- You don't yet understand what the person actually wants → [psychology-motivation](motivation.md) first — selecting an influence approach before knowing the root motivation is likely to produce an approach that addresses the stated interest, not the real one

The nearest-neighbor trap: **persuasion is not the same as communication clarity.** If someone doesn't understand your argument, the fix is [communication-clarity-audit](../communication/clarity-audit.md). If they understand it and still don't agree, the fix is persuasion — which is a different problem. Persuasion assumes the message is understood; its question is why the audience isn't updating, and what would actually move them. Confusing clarity with persuasiveness leads to the same argument being restated more clearly, which doesn't work if the argument is landing on the wrong motivational lever.

---

## Example

**Input:**
> I'm a product manager trying to get sign-off from our CFO to invest $400K in rebuilding our data infrastructure. The CFO is analytical, financially conservative, and highly skeptical of tech spend that doesn't have a clear near-term revenue line. We've modeled it as a 2-year payback on engineering efficiency, but they pushed back in the last meeting saying they don't buy the efficiency ROI. I need a different approach.

**Output:**

### Change Target
**Decision** — CFO needs to approve $400K infrastructure investment that they currently oppose.

### Audience Profile
- **Motivation to process:** High — the CFO is analytical and will evaluate arguments on their merits. This is a central route audience.
- **Prior position:** Opposed. And specifically, they've already seen and rejected the efficiency ROI argument, so that path is closed.
- **Relationship:** Internal — the PM has ongoing access and standing, but credibility depends on the quality of the next interaction.
- **What they value:** Near-term revenue clarity, financial conservatism, skepticism of tech spend without hard ROI. The efficiency framing failed because it's a soft ROI — "we'll move faster" is not a revenue line, and the CFO correctly knows that efficiency gains often don't convert to savings in headcount-constrained orgs.

### Recommended Approach
**Primary lever:** Central route — reconstruct the argument on the CFO's terrain (financial risk), not the PM's terrain (engineering efficiency). The current framing appeals to the PM's values; it needs to appeal to the CFO's.

**Reframing the financial case:** The efficiency ROI failed because it's speculative. The alternative frame is **risk cost**: what is the cost of *not* rebuilding? Current state data infrastructure failures create concrete risks — what happens to revenue if [specific system] fails? What's the cost of the manual workarounds currently running? What deals have been lost or slowed because of data quality issues? This grounds the investment in risk management rather than efficiency gain, which is closer to how a conservative CFO thinks.

**Social proof (targeted):** If any peers in the CFO's network or companies the CFO respects have made analogous infrastructure investments with documented outcomes, that's worth surfacing. Not "everyone is doing this" (which reads as sales pressure) but "here's how [company the CFO has mentioned as a benchmark] framed this investment and what the outcome was."

**Commitment/consistency:** In the prior meeting, the CFO pushed back on efficiency ROI. Before the next meeting, ask: "What would a compelling financial case for this look like to you?" This does two things — it gives you the exact frame to hit, and it creates a mild commitment. The CFO who defines the terms of a convincing case is more likely to be moved by an argument that meets those terms.

**Inoculation:** The CFO will likely raise "we could defer this another year" as the objection. Pre-empt it: "I know the default is to defer infrastructure until there's a burning platform. Here's what the deferral cost looks like in concrete terms over the next twelve months." Inoculate against the delay argument before they make it.

### Ethical Assessment
**Clear** — All recommended approaches work with the CFO's analytical capabilities and genuine interests. The goal is not to obscure the risk or inflate the ROI; it's to frame the investment accurately in terms the CFO is designed to respond to. The risk-cost framing is legitimate: the question is whether the current infrastructure actually does create the risks described, which requires honest modeling.

### Constructed Approach
Open the next conversation by closing the loop: "I heard you on the efficiency ROI — you're right that it's speculative. I want to show you a different analysis." Then present the risk-cost frame:

1. **Current-state risk inventory** (3-4 specific, costed risks the infrastructure creates): "These three things could happen in the next 12 months if we don't rebuild, and here's the revenue exposure for each."
2. **Deferral cost** (concrete, not abstract): "Each quarter we defer costs us X in engineering workarounds and Y in sales cycle friction. Here's the data."
3. **Peer framing** (if available): "Here's how [benchmark company] framed this decision and what the outcome was at 18 months."
4. **Close with a question**: "Given that frame, what would need to be true for you to feel confident about this investment?" — which either surfaces remaining objections or elicits a near-yes.

---

## Related skills

- [psychology-motivation](motivation.md) — diagnose what the audience actually wants before selecting the influence approach
- [psychology-behavior-change](behavior-change.md) — when the goal is behavioral shift rather than belief or decision change
- [communication-objection-mapping](../communication/objection-mapping.md) — structured anticipation of counterarguments
- [ethics-consent-review](../ethics/consent-review.md) — when influence approaches raise questions about manipulation vs. legitimate persuasion
