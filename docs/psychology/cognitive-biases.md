# psychology-cognitive-biases

> Diagnostic scan: which cognitive biases are actively distorting thinking in this specific situation.

**Trigger:** `/psychology-cognitive-biases`

---

## What it does

A targeted diagnostic — not a laundry list of named biases, but an assessment of which distortions are most live given the specific decision, belief, or behavior in question. It identifies the active bias, describes how it's operating in this situation specifically, and recommends a concrete counter-move for each. Output is an action-oriented table with an overall distortion risk assessment.

---

## When to use

- "What biases might be at play in this decision?"
- "Are we thinking clearly about this, or are we rationalizing?"
- A major decision has been reached quickly and with unusual consensus
- Someone has been pushing for a particular outcome and also conducted the analysis supporting it
- There's a vivid recent event (a success, a failure, a competitor move) that may be distorting frequency or probability estimates
- A project keeps getting continued despite persistent underperformance

## When *not* to use

- The question is about whether to trust a specific intuition → [psychology-heuristics](heuristics.md) (heuristics are the fast-thinking mechanism; biases are the systematic distortions they produce — use heuristics when you want to assess a specific instance of gut judgment)
- The behavior you're analyzing seems to serve an unstated need → [psychology-motivation](motivation.md) (motivated reasoning and cognitive bias often co-occur; when someone's bias looks suspiciously self-serving, check motivation too)

The nearest-neighbor trap: **cognitive biases are not the same as logical fallacies.** A logical fallacy is an error in the structure of an argument (the conclusion doesn't follow from the premises). A cognitive bias is a systematic distortion in how information is perceived, weighted, or remembered — the flaw is in the input, not just the inference. [logic-check](../logic/logic-check.md) catches structural errors; psychology-cognitive-biases catches perceptual and attentional distortions. Complex cases have both.

---

## Example

**Input:**
> We're deciding whether to acquire a small startup. The deal team is excited — they spent three months on due diligence and have a detailed financial model that shows a 3x return in five years. The CEO who championed the acquisition is presenting to the board next week. One board member flagged that we've looked at four similar acquisitions in the last two years and none has performed as modeled. What biases might be at play here?

**Output:**

### Situation
Evaluating whether to proceed with a startup acquisition after a three-month due diligence process led by a CEO who championed the deal.

### Active Biases

| Bias | How it's operating here | Counter-move |
|------|------------------------|--------------|
| **Confirmation bias** | The due diligence was conducted by the deal team after the CEO had already championed the acquisition. Three months of work generates a large body of information — but the framing was "build the case," not "test the case." Confirming evidence was likely gathered more thoroughly than disconfirming evidence. | Commission an independent "red team" review: a small team specifically tasked with finding the reasons NOT to proceed. This must be structurally separate from the deal team. |
| **Sunk cost fallacy** | Three months of deal team time, modeling work, and CEO sponsorship represent significant sunk costs. The board presentation next week adds social commitment. The question is not "is this a good acquisition?" but "do we proceed after all this work?" — which is the wrong question. | Explicitly reframe the board question: "If we had done no diligence at all, would we start this process today?" The three months of work is not a reason to proceed; it's context. |
| **Optimism bias / planning fallacy** | The 3x return in five years model is a forward projection made by people who want the deal to work. All four prior acquisitions modeled well and underperformed. This is the strongest signal in the situation. | Require the deal team to explain each prior acquisition's miss specifically and show how this deal is structurally different. If they can't articulate the causal mechanism for why this one is different, the model should be heavily discounted. |
| **Authority bias** | CEO sponsorship creates implicit pressure for the board to defer. Senior sponsorship of a deal shapes the quality of challenge it receives — junior board members in particular may pull their punches. | Structure the board session so objections are submitted in writing before the presentation, preventing the CEO's framing from anchoring the discussion. |

### Biases Assessed and Not Active
Availability heuristic was checked: there's no obvious vivid recent success distorting probability estimation here. In-group bias: the board appears to have at least one skeptic (the member who flagged the prior acquisitions), suggesting in-group pressure isn't silencing dissent entirely.

### Overall Distortion Risk
**High** — Three major biases (confirmation, sunk cost, optimism) are all operating in the same direction: toward proceeding. The most diagnostic piece of information — four prior acquisitions that modeled well and underperformed — is being underweighted. This is not necessarily the wrong acquisition; but the current analysis cannot be trusted on its own. The counter-moves above should be completed before any board vote.

---

## Related skills

- [psychology-motivation](motivation.md) — when the bias looks motivated (someone has a stake in the conclusion)
- [psychology-heuristics](heuristics.md) — when the question is whether to trust a specific instance of fast judgment
- [logic-check](../logic/logic-check.md) — when the argument also has structural/inferential problems
- [decision-premortem-analysis](../decision/premortem-analysis.md) — structured technique for surfacing what could go wrong before committing
