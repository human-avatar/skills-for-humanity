# epistemology-justification

> A belief can feel certain without being justified. Make the support structure explicit, then find where it breaks.

**Trigger:** `/epistemology-justification`

---

## What it does

Traces the justification chain for a belief — what makes you think that? And what makes you think *that*? — until it reaches a foundation, a coherent web, or a trusted process. Classifies the justification structure (foundationalist, coherentist, or reliabilist), assesses each link in the chain, and identifies the weakest point: the specific claim that, if false, would most damage the whole structure. Ends with a clear map of what would strengthen or undermine the belief.

---

## When to use

- "Is this belief actually justified, or do I just feel confident about it?"
- A key assumption has been in place for a long time without being examined
- "We keep citing the same two data points for everything — what is the foundation here?"
- You want to know what would change your mind, and realize you haven't thought it through
- A plan is built on a chain of beliefs and you want to find the riskiest link before committing

## When *not* to use

- You haven't classified what kind of claim it is → [epistemology-knowledge-types](knowledge-types.md) first
- You need to calibrate across many claims in a domain, not trace one belief in depth → [epistemology-epistemic-status](epistemic-status.md)
- The belief has hit a structural wall — investigation won't settle it → [epistemology-limits](limits.md)
- The issue is whether a conclusion follows from premises, not whether the premises are grounded → [logic-check](../logic/logic-check.md)

The nearest-neighbor trap: justification is often confused with evidence-gathering. Evidence-gathering asks "what data is out there?" Justification asks "does the data I have (and the way I'm using it) actually support this belief?" A belief can have lots of evidence attached to it and still be unjustified — if the evidence doesn't actually support the belief, or if the chain from evidence to belief contains an invalid step.

---

## Example

**Input:**
> Our growth team is operating on the belief that "content marketing is the right acquisition channel for us." It's been the operating assumption for two years. We're now questioning it because CAC is high and growth is slow. I want to understand whether this belief was ever justified, and where the justification chain is weakest.

**Output:**

### The Belief
"Content marketing is the right acquisition channel for our company."

### Justification Chain
1. "Content marketing is right for us" is justified by → "content marketing works for B2B SaaS companies with a long sales cycle"
2. "Content marketing works for B2B SaaS with a long sales cycle" is justified by → "industry benchmarks and several well-known B2B companies (HubSpot, Intercom) succeeded with it"
3. "Those examples apply to us" is justified by → [implicit: we are similar enough to those companies that their experience transfers]
4. "We are executing content marketing well enough to see results" is justified by → [assumed: we produce quality content and distribute it effectively]
5. "Two years is not yet enough time to evaluate" is justified by → [hoped: the channel will perform better given more time]

**Chain terminates at:** Basic belief (implicit self-similarity assumption) + Hoped premise (time will fix it)

### Structure Classification
**Primary structure:** Foundationalist — the chain traces back to a foundation claim (we are like HubSpot/Intercom) that is doing enormous load-bearing work but has never been examined

**Secondary:** A hoped premise (more time = better results) has functionally been promoted to an assumed premise after two years, without evidence

### Link Assessment
| Link | Type | Assessment | Notes |
|------|------|------------|-------|
| Content marketing works for B2B SaaS with long sales cycle | Industry inference | Sound | This is well-supported and not the problem |
| HubSpot/Intercom examples apply | Analogy | Shaky | Those companies had different ICP, ACV, brand recognition, and content moats; similarity is assumed, not established |
| We are executing well enough | Internal assessment | Unsupported | No benchmarking against external standards; evaluated internally by the team doing the work |
| Two years is not yet enough time | Temporal | Circular | The "more time" justification has been recycled each year; this is motivated reasoning |

### Weakest Link
**The critical point:** "We are similar enough to HubSpot/Intercom that their success transfers to us"
**Why it's critical:** This is the link that connects the general claim (content works for B2B SaaS) to the specific claim (content works for *us*). It has never been examined. HubSpot built content marketing as a category-creator at a time when the playbook didn't exist; Intercom entered with exceptional product design and existing brand equity. Neither is a clean comparison for most B2B SaaS companies. If the similarity assumption fails, the whole chain fails — and there's no evidence it's been tested.

**Secondary weak link:** The quality of execution. The team assessing whether content marketing is the right channel is the same team executing the content. That's a reliability problem — a motivated process assessing its own results.

### Overall Justification
**Assessment:** Unjustified as currently held
**Reasoning:** The belief was arguably reasonable as an initial hypothesis two years ago, when the industry evidence was positive and the decision was a bet worth making. It is no longer justified as a continuing operating assumption. The analogy justification has not been tested; the execution quality has not been benchmarked; the "more time" premise has been recycled without evidence. Two years of underperformance is evidence, and it's been discounted without a principled reason.

### What Would Change This
**Would strengthen:** Evidence that the ICP we're targeting researches through content (customer interviews, discovery call analysis); attribution data showing content-influenced pipeline; benchmark CAC against companies of similar stage/ACV showing content is competitive; a content quality audit against leading examples in the space.

**Would undermine:** Discovery call data showing customers found us through other channels; churn analysis showing content-sourced customers have lower LTV (suggesting poor ICP fit); a proper attribution model showing content's contribution is largely correlated with, not causing, pipeline.

---

## Related skills

- [epistemology-knowledge-types](knowledge-types.md) — classify what kind of claim it is before testing justification
- [epistemology-epistemic-status](epistemic-status.md) — map confidence across the full domain if multiple beliefs need assessment
- [epistemology-limits](limits.md) — if the justification chain hits a structural wall (counterfactual, underdetermination)
- [decision-premortem-analysis](../decision/premortem-analysis.md) — if the goal is to find failure modes in a plan, not just a belief
