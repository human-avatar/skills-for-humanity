# systems-leverage-analysis

> Finds where small interventions produce large, lasting change — using Meadows' leverage point hierarchy.

**Trigger:** `/s4h-systems-leverage-analysis`

---

## What it does

Maps interventions to Donella Meadows' 12-level leverage point hierarchy (from parameters — nearly powerless — to paradigm — most powerful). Identifies which level is being targeted by default, surfaces higher-leverage points that are being ignored, and diagnoses why they're being ignored.

---

## When to use

- "Where should we intervene?"
- Interventions have been tried and keep failing or reverting
- Want to find the highest-leverage change, not just the most obvious one
- "What actually changes this system?"

---

## Example

**Input:**
> We're trying to reduce employee burnout. We've tried: wellness programs, free therapy access, meditation app subscriptions, and encouraging people to take PTO. Burnout is still high. Where's the leverage?

**Output:**

**Current interventions mapped to Meadows' hierarchy:**

| Intervention | Leverage Level | Type |
|---|---|---|
| Wellness programs | Low | Parameters (adding a resource) |
| Free therapy access | Low-Medium | Information flows (access to support) |
| Meditation app | Low | Parameters (coping resource) |
| Encouraging PTO | Low-Medium | Rules (permission to use existing policy) |

**Default level being targeted:** Parameters and information flows — the lowest and second-lowest leverage levels. Adding resources to a system that is producing stress doesn't reduce stress; it helps people cope with it.

**Why these get chosen:** They're visible, fast to implement, and don't require confronting the organizational dynamics that produce burnout. Wellness programs are a safe intervention — no one opposes them. This is exactly what Meadows predicts: high-leverage points face the most resistance, so low-leverage points get implemented instead.

**Higher-leverage interventions being avoided:**

**Medium leverage — Rules and feedback loops:**
- *Explicit workload limits:* Define maximum utilization (e.g., no more than 70% of capacity on project work). This changes the rule structure, not just the coping resources.
- *Burnout as a performance metric for managers:* If managers are evaluated partly on team burnout rates, the information flows that currently obscure the problem become visible and actionable.

**High leverage — Goals and structure:**
- *Reduce the ratio of demands to capacity at the structural level:* Burnout is a demand/capacity mismatch. Adding coping resources doesn't change the ratio. Reducing demand (fewer projects, fewer priorities, smaller team spans of control) does.
- *Change what "performing well" means:* If career advancement signals require unsustainable hours, the goal of the system is producing burnout. Changing that signal is high-leverage.

**Highest leverage — Paradigm:**
- *Address the belief that productivity and presence are the same thing:* Most burnout cultures share the operating assumption that availability signals commitment. Changing that belief changes everything that follows from it.

**Recommendation:**
The current interventions address symptoms at the parameter level. The highest-feasible leverage point is the workload/capacity ratio (medium-high leverage) — specifically, tracking and limiting utilization as a management discipline, not just a wellness policy. This is politically harder than a meditation app subscription, which is precisely why it hasn't been tried.
