# network-contagion

> Spread is not about the pathogen. It is about the network it travels through.

**Trigger:** `/s4h-network-contagion`

---

## What it does

Models how things spread through networks — adoption, behavior change, ideas, viruses, financial contagion, cascading failures — by analyzing the reproduction number (R₀), threshold structure, and network topology that together determine whether spread accelerates, stalls, or dies out. Duncan Watts' research overturned the "influencer" theory of viral spread: large cascades depend on a susceptible network structure, not on extraordinary seed nodes. This skill operationalizes that insight by distinguishing simple contagion (one exposure is enough) from complex contagion (multiple exposures required), which calls for fundamentally different seeding and intervention strategies.

---

## When to use

- "Why did this go viral? / Why isn't this spreading?"
- "How do we get this behavior change to take hold across the organisation?"
- "Where will this cascade go next?"
- "What's the tipping point for our product?"
- "Could this failure / risk / panic spread through our system?"

---

## Example

**Input:**
> We launched a new internal engineering practice — structured post-mortems after every incident. We trained 8 engineers on it four months ago. Almost none of them have actually run one. Meanwhile, a different practice — daily async standups — spread organically to every team within six weeks of being introduced by one team lead. Why is one spreading and the other isn't, and what do we do about it?

**Output:**

**Spread Definition**

*Post-mortems:* **Complex contagion.** Running a structured post-mortem requires psychological safety (vulnerability about failure), managerial support (time allocation), and social normalisation (this is what engineers here do). No engineer will run one just because they were trained on the format. They need to see peers do it, see it lead to good outcomes rather than blame, and believe their manager supports it. Multiple exposures from trusted neighbours are required before adoption.

*Async standups:* **Simple contagion.** The behavior is low-stakes, low-cost, immediately useful, and observable. Seeing one person do it is enough to adopt. Single-exposure adoption is plausible.

This explains the asymmetry entirely. The async standup spread because it is simple contagion in a well-connected network. The post-mortem is not spreading because it is complex contagion being treated as simple contagion.

**Current State**

Post-mortem adoption: ~5% (8 of ~160 engineers trained; near-zero actual usage). Async standup adoption: ~85%. Post-mortem spread has been effectively zero despite a 4-month window — the absence of growth is diagnostic, not just slow growth.

**Reproduction Number (R₀)**

Post-mortems: R₀ ≈ 0.2 (estimated). Each trained engineer has influenced approximately 0.2 additional engineers toward adoption — well below the threshold of 1. Trajectory: dying out without intervention.

Async standups: R₀ ≈ 2.8 at peak spread phase. Well above threshold; now at near-saturation so R₀ is naturally declining.

**Threshold Analysis (Post-mortems)**

Estimated adoption threshold distribution: most engineers require 2–3 trusted peers in their immediate team to have run a post-mortem before they will attempt one. This is a high-threshold, locally-clustered adoption pattern. The trained seed group of 8 is spread across 8 different teams — meaning each team sees only 1 trained person, which is below the local threshold for any of them. The seed strategy inadvertently maximised network reach while minimising local density.

**Cascade Map (Post-mortems)**

| Stage | Trigger Condition | Expected Reach | Key Bottleneck |
|-------|------------------|---------------|----------------|
| Current | 8 isolated seed nodes | ~5% | Threshold not crossed in any local cluster |
| Local tipping | 3+ adopters in the same team | 1 team (~12%) | Need cluster seeding, not distributed seeding |
| Cross-team spread | Team 1 success is visible to adjacent teams | 25–40% | Needs deliberate storytelling / visibility |
| Saturation | Norm established: "we do post-mortems here" | 70–85% | High-threshold holdouts remain |

**Tipping Point**

The tipping point requires at least one full team to reach local saturation (all members have participated). The current distance from tipping: significant — no team is close. Estimated time to tip with current trajectory: never, without intervention.

**Structural Bottlenecks**

1. *Seed distribution is wrong for complex contagion.* Distributing one trained engineer per team produces 8 isolated nodes, each below the local threshold in their own team.
2. *Psychological safety is a threshold modifier.* Teams with lower psychological safety have higher adoption thresholds — some clusters are structurally unlikely to adopt regardless of exposure density.
3. *No cascade-enabling visibility.* Post-mortems happen privately; even when one does occur, other teams cannot observe it. The social proof signal does not propagate.

**Interventions (ranked by leverage)**

1. **Concentrate the seed — recluster the trained engineers.** Move two or three of the trained engineers to the same team, temporarily. Create local threshold-crossing density. Run one post-mortem in that team until it becomes normal. This takes one cluster past its threshold.
2. **Make outcomes visible.** Publish post-mortem summaries — not failure details, but improvement outcomes — in a shared channel. This generates the social proof signal that the network currently lacks.
3. **Manager activation.** Managers are threshold-reducers. A manager who explicitly endorses and attends a post-mortem lowers the psychological safety barrier for their entire team. Identify 2–3 engineering managers as the actual seed targets.
4. **Do not run another all-hands training.** Broad awareness seeding has zero effect on complex contagion. The training reached the wrong nodes via the wrong mechanism.

---

## Related skills

- [`/s4h-network-centrality`](centrality.md) — identify the specific seed nodes (high-closeness for simple contagion; high-clustering-coefficient for complex contagion)
- [`/s4h-network-weak-ties`](weak-ties.md) — map the bridges a spread cascade must cross to jump from the first tipping cluster to adjacent clusters
- [`/s4h-systems-feedback-mapping`](../systems/feedback-mapping.md) — model the reinforcing loops that amplify spread once the tipping point is crossed
