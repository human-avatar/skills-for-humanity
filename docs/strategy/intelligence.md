# `/strategy-intelligence`

> *Know yourself and know your enemy; in a hundred battles you will never be in peril.*

**Category:** [Strategy](README.md) · **Command:** `/strategy-intelligence` · **Source:** Sun Tzu, *The Art of War*, Book XIII

---

## What it does

Performs a rigorous audit of what you actually know vs. what you're assuming — about yourself and about your opponent — before taking action. Separates known facts from working assumptions, identifies the intelligence gaps most likely to cause strategic failure, and maps paths to closing them.

The discipline is enforcing the fact/assumption distinction. Most strategic plans contain far more assumption than fact in the opponent column. The intelligence audit makes that gap visible, rates each assumption by impact if wrong, and identifies what's worth finding out before acting.

---

## When to use it

- Preparing for a negotiation, pitch, or competitive move and wanting to know your actual leverage vs. perceived leverage
- About to make a decision based on what you believe about a competitor, employer, or counterpart — and wanting to verify how much of that is actually known
- Sensing that your self-assessment may be flattering rather than accurate
- An important strategic move failed and you suspect the failure was an intelligence failure — acting on assumptions that turned out to be wrong
- Preparing for a difficult conversation and wanting to separate what you know from what you're projecting

---

## When *not* to use it

**Don't use intelligence audit as a reason to keep gathering information indefinitely.** The goal is to identify which gaps are worth closing before acting — not to eliminate all uncertainty before moving. Perfect intelligence doesn't exist. The output is a decision about which gaps change your strategy if wrong and which don't. Gaps that don't change your strategy don't need closing before you act.

**Don't confuse intelligence with surveillance.** The framework is about auditing your own knowledge and identifying legitimate paths to closing gaps — public sources, direct inquiry, network access. The nearest neighbor: `/strategy-deception` — which addresses the reverse question of what your opponent knows or believes about you, and how to manage it.

---

## Full example

**Input:**
> I've been at this company for four years. I lead a team of six, we consistently hit targets, and I know my market rate is above what I'm being paid. I have a performance review coming up in three weeks and I want to negotiate a meaningful raise. I'm confident I deserve it — but I'm not sure what my actual leverage is.

---

**Output:**

### Intelligence Audit

**Self-Assessment**

*Strengths:*
- Four years of tenure with demonstrated institutional knowledge — replacement and onboarding cost is real
- Team of six performing consistently — management track record, not just individual contribution
- Market rate data indicates compensation gap — this is a concrete, external anchor for the negotiation
- Performance review timing is favorable — a structured forum for the conversation

*Weaknesses (candid):*
- "Consistently hitting targets" — what does this mean specifically? Hitting targets is the floor, not the ceiling. The question is whether your contribution is clearly visible at the level above your manager, or whether your value is largely local
- Four years at one company can be read two ways: institutional indispensability, or comfort with a known environment. Which framing your employer holds matters
- No external offer in hand — your walk-away point is abstract unless you know what you'd actually do if declined
- "I know my market rate is above what I'm being paid" — on what basis? A single salary survey? Recruiter conversations? Offers? The precision of this data matters significantly

*Hard constraints:*
- If declined, what are you actually prepared to do? Resign? Accept and escalate? Start searching? If you haven't decided, your walk-away position is not a position — it's a posture. The employer will read this if you haven't decided it yourself.

---

**Opponent Assessment**

| Item | Status | Risk if wrong |
|---|---|---|
| Budget exists for raises at this review cycle | Assumption | High — if there's a headcount freeze or comp review held to January, you may be negotiating against a closed window |
| Manager has authority to approve the raise you want | Assumption | High — many managers can approve small increases but need VP or HR approval above a threshold |
| Your manager wants to retain you and will advocate | Assumption | High — you may be assuming goodwill that hasn't been tested |
| Manager is aware of your market-rate gap | Assumption | Medium — if they haven't seen the data you have, their internal anchor may be significantly lower |
| No competing candidate ready to step into your role | Assumption | Medium — if there's someone being developed for your position, your leverage is lower than you think |
| Company is not in a cost-reduction phase | Assumption | High — if a RIF or budget cut is coming, this is the wrong moment for the conversation |
| Your contributions are visible above your manager's level | Assumption | Medium — visibility above your manager determines whether your manager's advocacy actually moves the decision |

**Intelligence Gaps (ranked by impact)**

1. **Does your manager have the authority and genuine motivation to advocate for the raise you want?** If they lack either, the negotiation is not with your manager — it's with whoever does have authority, and you need a different approach. This is the single gap most likely to cause the negotiation to produce a polite "I'll see what I can do" and then nothing.

2. **Is there a budget or timing constraint you're not aware of?** A comp review cycle that hasn't opened, a freeze that hasn't been announced, a budget tied to fiscal year end — any of these changes the entire framing of the conversation. What you're asking for may be unavailable at this moment regardless of merit.

3. **How precise is your market rate data?** A salary survey range is an anchor; an actual recruiter conversation about a specific role is leverage. If your data is survey-level, getting one recruiter conversation before the meeting changes your negotiating position materially.

**Recommended Information Gathering**

*Gap 1 (authority and motivation):* A direct conversation — not the negotiation itself, but a prior conversation — where you ask your manager "I want to talk about compensation at the review. Is this something you can champion directly, or does it need to go through HR/above you?" This closes the authority gap and signals that you're serious without being confrontational. Cost: one conversation, worth it.

*Gap 2 (timing and budget):* Ask HR or your manager informally about the review cycle timeline and how comp adjustments are processed. Frame it as wanting to prepare properly. Most of this is actually available through direct inquiry — people assume it's sensitive when it usually isn't. Cost: low. Do this first.

*Gap 3 (market rate precision):* Have one recruiter conversation in the next two weeks. Not to take a job — to have a real data point you can cite if challenged. "I've had conversations with recruiters and the range I'm seeing for this scope is X–Y" is a different anchor than "salary surveys suggest." Cost: two hours. High value.

**Assumption Risk Summary**

High-risk assumptions requiring action before the review:
- Manager authority and motivation: close this gap through direct conversation before the review
- Budget/timing availability: close through HR inquiry this week
- Walk-away position: decide your actual walk-away before the meeting, not during it — the negotiation will surface it

---

## Related skills

- [`/strategy-terrain`](terrain.md) — Intelligence feeds the terrain map; inaccurate terrain comes from assumptions held as facts
- [`/strategy-deception`](deception.md) — Once you know what your counterpart believes about you, you can manage that deliberately
- [`/strategy-timing`](timing.md) — Intelligence gaps may warrant delaying action; timing analysis weighs the cost of waiting for better intelligence vs. acting now
- [`/strategy-victory`](victory.md) — Minimum and maximum victory conditions clarify which intelligence gaps actually matter for the decision
