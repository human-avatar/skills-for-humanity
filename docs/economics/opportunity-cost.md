# `/s4h-economics-opportunity-cost`

> *The price you paid is not the cost of your choice. The cost is the next-best thing you didn't do.*

**Category:** [Economics](README.md) · **Command:** `/s4h-economics-opportunity-cost` · **Source:** Alfred Marshall — *Principles of Economics* (1890)

---

## What it does

Maps the true economic cost of a choice by making explicit what is foregone — not just what is spent. Every resource committed to one use cannot simultaneously be committed to another; the cost of the choice is the value of the best available alternative that was given up. This skill surfaces that foregone value, compares it against the explicit cost of the chosen path, and delivers a verdict on whether the choice holds up once the full cost picture is visible.

Opportunity cost analysis is particularly powerful for revealing the true cost of apparently free choices (time, attention, internal headcount), and for decisions where the main failing is not evaluating *alternatives* before committing.

---

## When to use it

- "What are we giving up by doing this?"
- Any significant commitment of money, time, or organisational capacity where alternatives exist
- Decisions that are framed as "should we do X?" when the real question is "is X the best use of what we have?"
- When a choice looks cheap in absolute terms but the alternatives are valuable
- When someone is anchoring on the cost of the option rather than the cost of all paths, including inaction

---

## When *not* to use it

**Don't apply opportunity cost framing to decisions where no genuine alternatives exist.** If the choice is between doing something necessary and not doing it, and there is truly no competing use of the resource, opportunity cost analysis adds friction without insight. The relevant tool in that case is `/s4h-decision-premortem-analysis` — checking whether the commitment is sound, not whether alternatives were missed.

**Opportunity cost is not the same as marginal analysis.** Opportunity cost asks: "which path should we take?" Marginal analysis asks: "how much of this path should we take?" When the decision is about scale or quantity — more or less of something — use `/s4h-economics-margin`. When the decision is between discrete alternatives, opportunity cost applies.

The nearest neighbor: [`/s4h-economics-margin`](margin.md) — which handles the "how much?" dimension of resource allocation rather than the "which of these?" dimension.

---

## Example

**Input:**
> Our product team is debating whether to spend the next quarter building a new reporting dashboard that three enterprise clients have requested. The estimate is eight engineer-weeks plus one PM-quarter. The clients haven't made it a condition of renewal, but they've asked for it. We'd be pushing our planned infrastructure work — a database migration we've been deferring — to Q3 as a result.

---

**Output:**

### Opportunity Cost Analysis

**Choice Being Evaluated**
Build the reporting dashboard in Q2, committing 8 engineer-weeks and 1 PM-quarter. The infrastructure migration is pushed to Q3.

---

**Alternatives Considered**

| Alternative | Resource use | Expected value |
|---|---|---|
| **Build reporting dashboard** (proposed) | 8 eng-weeks + 1 PM-quarter | Retain 3 enterprise clients; avoid churn risk; possible upsell opportunity |
| **Complete database migration** (deferred) | 6–8 eng-weeks (est.) + 0.5 PM-quarter | Reduce technical debt; improve system reliability; unblocks future feature work estimated at 15–20% faster velocity for 2 quarters |
| **Partial: build lightweight export feature** | 3 eng-weeks + 0.25 PM-quarter | Partially addresses client request at lower cost; preserves capacity for migration |
| **Do neither; protect capacity** | 0 | Maintains optionality; allows reactive deployment to emerging priorities |

**Next-Best Alternative (Opportunity Cost Benchmark)**
Completing the database migration — this is what the team would do if the dashboard were ruled out. Estimated value: approximately 15–20% velocity improvement over 2 quarters for the full engineering team, plus reduced risk of an unplanned outage event.

---

**Total Cost Comparison**

| | Build Dashboard | Complete Migration |
|---|---|---|
| Explicit cost (eng-weeks) | 8 weeks | 6–8 weeks |
| Expected direct return | Client retention; relationship value | Velocity uplift; reliability |
| Opportunity cost | Value of deferred migration | Value of deferred dashboard |
| Deferral risk | Migration risk grows; Q3 may be more disruptive | Churn risk if clients escalate |

---

**Hidden Opportunity Costs**

- **Compounding technical debt:** Each quarter the migration is deferred, it becomes harder to execute — more data, more integrations, more risk of a live-system migration. The real cost of deferral grows nonlinearly.
- **PM attention:** A PM-quarter is not a neutral resource. The PM's Q2 time on the dashboard is time not spent on roadmap strategy, user research, or the features that drive organic growth.
- **Precedent-setting:** Building a bespoke dashboard for three clients signals that requesting features produces results. The opportunity cost includes future prioritisation pressure from other enterprise clients.
- **Team context-switching:** The engineering team that builds the dashboard will need to context-switch into the migration in Q3, costing 1–2 weeks of ramp-up that doesn't appear in any estimate.

---

**Verdict**

The dashboard does not obviously justify its opportunity cost. The clients have asked for it but haven't conditioned renewal on it — the churn risk is real but not immediate. Meanwhile, the deferred migration carries compounding risk that is easy to underestimate when evaluating a single quarter in isolation.

The strongest alternative is the partial option: a lightweight data export feature (3 weeks) that addresses the client request adequately while preserving capacity to begin the migration in Q2 rather than deferring to Q3. This reduces opportunity cost substantially and satisfies the most pressing part of the client request without the full dashboard commitment.

Recommendation: explore the partial option with clients before committing. If the clients accept a lightweight export, the answer is clear. If they insist on the full dashboard, the decision should be made with explicit recognition that the migration deferral is the real cost — and a plan should be in place for Q3.

---

## Related skills

- [`/s4h-economics-margin`](margin.md) — when the question is "how much should we invest in this?" rather than "which path to take?"
- [`/s4h-decision-criteria-weighting`](../decision/criteria-weighting.md) — run a weighted comparison of the alternatives once they're all visible
- [`/s4h-decision-premortem-analysis`](../decision/premortem-analysis.md) — stress-test the chosen option by imagining it fails
- [`/s4h-economics-incentive-mapping`](incentive-mapping.md) — understand what incentives are shaping which alternative gets proposed
