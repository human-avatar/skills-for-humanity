# play-perspective-reversal

> Fully inhabits the opposing perspective to find what is invisible from your own position.

**Trigger:** `/s4h-play-perspective-reversal`

---

## What it does

Steps into the opposing perspective (competitor, critic, user, adversary) and reasons genuinely from within it — not to dismiss it, but to find what it sees that your own position structurally can't. The output includes legitimate points worth actually responding to.

---

## When to use

- "What are we missing that our critics see?"
- Steelman the opposition
- Think like the competitor
- Play devil's advocate — thoroughly, not superficially

---

## Example

**Input:**
> We're building an AI writing assistant for enterprises. Think like a skeptical enterprise IT decision-maker evaluating whether to approve it.

**Output:**

*Inhabiting the perspective: IT Director, financial services firm, 3,000 employees, responsible for approving SaaS tools.*

**What I see from here:**

The proposal lands on my desk: "AI writing assistant, $X per seat per month, improves team productivity." Here's what I'm thinking, and none of it sounds like what the vendor thinks I'm thinking.

**My actual first question:** Where does the data go?

Every piece of text employees type into this thing is a potential data leak. Customer names, deal terms, internal strategy, personnel discussions. Where is it processed? Whose infrastructure? What are the data retention policies? Does it train on our data? This is not a compliance checkbox for me — one incident and I'm accountable.

**My second question:** What happens to the writing our people produce?

If everyone starts using an AI to write, what's the variability in output quality across employees? The top performers were already strong writers. The tool may help mediocre performers produce adequate text — but adequate and "sounds like everyone else" is not what our client communications should be. I'm worried about homogenization, not just quality.

**My third concern:** Hallucinations in professional communication.

A writing assistant that confidently completes a financial disclosure with incorrect numbers, or a contract with invented terms, is worse than no tool. What's the liability exposure if an AI-assisted communication contains a material error?

**What would make me say yes:**

- On-premise or private cloud deployment — our data never leaves our infrastructure
- Clear, audit-able logs of what the tool was used for and by whom
- Explicit non-training guarantee on our data
- A rollout plan that starts with low-risk functions (internal drafts, not client communications) with monitoring

**Legitimate points worth taking seriously:**
The data governance concern is real, not paranoia. The liability concern is real for regulated industries. These aren't objections to overcome — they're requirements to design for. A product built for enterprises should have answers to these questions before the demo, not after.
