---
name: resource-bottleneck-analysis
description: "Identifies what is actually constraining throughput — using Theory of Constraints logic: the system can only move as fast as its slowest point. Triggers: 'bottleneck analysis', 'what's actually slowing this down', 'where's the constraint', 'theory of constraints', 'find the bottleneck', 'why are we moving slowly'."
---

# Bottleneck Analysis

A system can only move as fast as its slowest stage. Improving any stage other than the bottleneck does not improve overall throughput — it just creates more work waiting in front of the constraint. Finding and addressing the bottleneck is the highest-leverage intervention available.

---

## Your Process

**Step 1: Map the Process or Value Chain**
Describe all the stages in sequence. What enters each stage, what happens, and what exits? The map should cover the full flow from input to output.

**Step 2: Identify Throughput per Stage**
For each stage: what is the throughput rate? How much work can it process per unit of time? Where does work visibly queue up, wait, or accumulate? Queuing upstream of a stage is the most reliable indicator of a bottleneck.

**Step 3: Identify the Current Bottleneck**
The bottleneck is the stage with the lowest throughput that gates everything downstream. Name it specifically. Everything else in the system is constrained by its capacity.

**Step 4: Exploit the Bottleneck (No New Investment)**
Before investing in more capacity: are we getting maximum output from the bottleneck as it currently exists? What work is arriving at the bottleneck that shouldn't be there? Can quality gates be moved earlier to protect bottleneck time? Can idle time at the bottleneck be eliminated?

**Step 5: Subordinate Everything Else to the Bottleneck**
Non-bottleneck stages should operate at the rate the bottleneck can consume. Optimising non-bottleneck stages creates inventory, not throughput. Identify any optimisations elsewhere in the system that are making the bottleneck problem worse.

**Step 6: Elevate the Bottleneck**
Only after Steps 4–5: what investment would increase the bottleneck's capacity? What would it cost, and what throughput improvement would result?

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Constraint identification only** — What's actually limiting throughput, skip the relief analysis
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

### Process Map
[Stage 1] → [Stage 2] → [Stage 3] → ... → [Output]

### Throughput per Stage
| Stage | Throughput Rate | Queue Size / Wait Time | Bottleneck? |
|-------|----------------|----------------------|-------------|
| ... | ... | ... | Yes / No |

### Current Bottleneck
**Stage:** [Name]
**Why it's the constraint:** [Throughput evidence]

### Exploit Options (No New Investment Required)
- [Specific action to get more from the existing bottleneck]

### Subordination Recommendations
- [What should stop being optimised because it feeds the bottleneck]

### Elevation Options (Investment Required)
| Option | Investment | Throughput Improvement |
|--------|-----------|----------------------|
| ... | ... | ... |

---

## Notes

The bottleneck moves after you fix it — the next constraint becomes the new bottleneck. Repeat the analysis after each intervention rather than assuming the system is now optimised.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Bottlenecks identified. What's next?"
- **Header:** "Next"
- **Options:**
  - `/resource-leverage-mapping` — Find leverage at the bottlenecks
  - `/constraint-workaround-mapping` — Work around the bottlenecks that can't be removed
  - `/strategy-force-economy` — Apply force economy principles at the bottlenecks
  - **Done** — Wrap up and synthesise what we have so far
