# resource-allocation-analysis

> Distributes limited resources across competing needs — making the trade-offs explicit rather than implicit.

**Trigger:** `/resource-allocation-analysis`

---

## What it does

Inventories available resources and competing claims, assesses each claim against strategic priority and cost of under-resourcing, identifies constraints (minimums, maximums, dependencies), drafts an allocation, and checks it against overall goals. The most important output: the trade-off column — the explicit statement of what each claim gives up under the draft allocation. Allocation decisions that can't produce a filled trade-off column haven't been thought through.

---

## When to use

- "Resource allocation for this"
- "Competing priorities — how do we distribute this?"
- "How do we split the budget?"
- "Trade-off analysis on resource decisions"
- Any budget, headcount, or capacity planning cycle
- When all initiatives claim high priority and the real trade-offs are invisible

## When NOT to use

- When the question is where resources have the highest leverage — use `resource-leverage-mapping`
- When the question is finding where resources are being lost — use `resource-waste-audit`
- When the question is which bottleneck is limiting the whole system — use `resource-bottleneck-analysis`

---

## Example

**Input:**
> We have $2M engineering budget and 8 engineers for next year. Competing claims: maintaining existing product (estimated 2 engineers, $500k), building a new enterprise tier (estimated 4 engineers, $1M), improving infrastructure/reliability (estimated 2 engineers, $500k), and a new mobile app (estimated 4 engineers, $1M). Total requests exceed what we have. Allocate.

**Output:**

---

### Available Resources

| Resource | Total Available |
|----------|----------------|
| Engineering budget | $2,000,000 |
| Engineering headcount | 8 engineers |

---

### Competing Claims

| Claim | Strategic Priority | Cost of Under-Resourcing | Constraints |
|-------|------------------|-------------------------|-------------|
| Existing product maintenance | Critical — blocks all other work if broken | Existing customers churn; current revenue at risk; technical debt accumulates faster | Min 1.5 engineers; cannot be zero-funded |
| Enterprise tier | High — primary growth lever for next year | Sales team can't close enterprise deals; revenue plan misses; competitive window may close | Dependency: requires infrastructure improvements first |
| Infrastructure/reliability | High — enables everything else | Reliability problems compound across all teams; blocks enterprise tier due to uptime requirements | Must precede full enterprise tier build |
| Mobile app | Medium — valuable but not tied to immediate revenue plan | No mobile presence delays a segment of market; but existing web product serves current customers adequately | Dependency on enterprise tier completion; no minimum |

---

### Draft Allocation

| Claim | Allocation | Trade-off (what it gives up) |
|-------|-----------|------------------------------|
| Existing product maintenance | 2 engineers / $500k | Gives up the ability to make improvements; only bug fixes and critical changes. New features on current product freeze. |
| Infrastructure/reliability | 2 engineers / $500k (full year) | Gives up some infrastructure scope — specific reliability targets need to be triaged; can't address all tech debt simultaneously |
| Enterprise tier | 4 engineers / $1M | Gives up the mobile app entirely this year; enterprise takes all available growth capacity |
| Mobile app | **0 engineers / $0** — deferred to next year | Deferred completely. No mobile product this year. |

---

### Strategic Alignment Check

**Does this allocation serve the most important outcomes?**

Yes, with one significant risk. Concentrating all growth capacity on enterprise is the right move if the enterprise sales thesis is validated — it aligns with the revenue plan and the dependency chain (infrastructure → enterprise tier) is respected. The trade-off is binary: mobile is deferred entirely, not partially resourced.

**Where the allocation diverges from political expectation:**

The mobile app will have stakeholders who expected resources. Naming the deferral explicitly before planning is complete prevents the common failure mode where mobile stays "on the roadmap" without resources, creating confusion for months before the deferral is acknowledged.

**The one thing that could make this allocation wrong:**

If the enterprise sales thesis is not validated — if demand signals are weaker than expected by Q2 — the allocation should be re-examined at mid-year. Locking 4 engineers for the full year into an enterprise tier without a Q2 validation checkpoint is the highest risk in this plan.

**Recommendation:** Add a formal Q2 checkpoint where enterprise tier progress is evaluated. If fewer than 3 enterprise deals are in late-stage pipeline by Q2, reallocate 1–2 engineers to infrastructure improvements or mobile foundation work.
