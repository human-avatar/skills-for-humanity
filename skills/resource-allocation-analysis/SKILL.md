---
name: resource-allocation-analysis
description: "Distributes limited resources across competing needs — making the trade-offs explicit rather than implicit. Triggers: 'resource allocation', 'how do we distribute this', 'competing priorities', 'trade-off analysis', 'how do we split this', 'allocation decision'."
---

# Resource Allocation Analysis

Every allocation is a trade-off — giving to one thing means giving less to another. The problem is that most allocations are made implicitly, leaving the trade-offs invisible. Making trade-offs explicit forces honest prioritisation and prevents the political habit of pretending everything can be fully funded.

---

## Your Process

**Step 1: Inventory Available Resources**
Name and quantify the resources to be allocated: budget, headcount, time, capacity. Be precise about what is actually available — not what is desired.

**Step 2: List All Competing Claims**
Every demand on the resource. Include maintenance and ongoing commitments, not just new initiatives. Claims that are implicitly assumed to be funded should be made explicit here.

**Step 3: Assess Each Claim**
For each claim: what is the strategic priority (how directly does this serve the most important goals)? What is the cost of under-resourcing it (what breaks, slows, or is lost if it receives less)?

**Step 4: Identify Constraints**
Are there minimums (must have at least X to function), maximums (more than Y produces no additional value), or dependencies (A must be funded before B makes sense)?

**Step 5: Draft an Allocation**
Distribute the available resource across claims. At this stage, make the trade-offs explicit: write down what each claim gives up under this draft allocation.

**Step 6: Sense-Check Against Overall Goals**
Does this allocation, taken as a whole, serve the most important outcomes? Where is the allocation driven by politics or inertia rather than strategic priority?

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Trade-off table only** — what each allocation gives up, skip the full recommendation
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

### Available Resources
| Resource | Total Available |
|----------|----------------|
| ... | ... |

### Competing Claims
| Claim | Strategic Priority | Cost of Under-Resourcing | Constraints |
|-------|------------------|-------------------------|-------------|
| ... | High / Medium / Low | ... | Min / Max / Dependency |

### Draft Allocation
| Claim | Allocation | Trade-off (what it gives up) |
|-------|-----------|------------------------------|
| ... | ... | ... |

### Strategic Alignment Check
Does this allocation serve the most important outcomes? Where does it diverge from strategic priority — and is that divergence justified?

---

## Notes

The most useful output is the trade-off column — if the trade-offs can't be written clearly, the allocation hasn't been thought through. Force each trade-off to be named before the allocation is finalised.
