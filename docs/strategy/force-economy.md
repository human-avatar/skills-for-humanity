# `/strategy-force-economy`

> *Supreme excellence consists in breaking the enemy's resistance without fighting.*

**Category:** [Strategy](README.md) · **Command:** `/strategy-force-economy` · **Source:** Sun Tzu, *The Art of War*; Basil Liddell Hart, *Strategy*

---

## What it does

Identifies the minimum effective intervention that achieves the objective — finding leverage points where a small input creates a large output, and non-contest approaches that avoid direct competition entirely. Particularly useful when you're under-resourced relative to the opposition and brute-force matching is not available.

The framework surfaces at least three minimum-force alternatives to the direct approach, then identifies the single highest-leverage node in the competitive system — where a small, targeted move produces disproportionate results.

---

## When to use it

- Your team or organization is significantly smaller or less-resourced than the competitor you're facing
- The brute-force approach to an objective would consume resources disproportionate to the value of the win
- You suspect there's a smarter path but can't see it yet and need a structured search
- You've been thinking about a problem in terms of matching the opponent resource-for-resource and want to reframe
- A direct approach is creating more resistance than progress — the harder you push, the more organized the opposition becomes

---

## When *not* to use it

**Don't use force economy to avoid necessary investment.** Sometimes the high-cost path is the right path, and force economy analysis that always recommends the cheaper route is just risk aversion with a strategic veneer. The question is whether there is a minimum-force path that achieves the objective at acceptable quality — not whether you can avoid all cost.

**Don't confuse leverage with shortcuts.** Leverage points are real structural features of systems — they exist independently of your wanting them to. Finding them requires honest analysis of the competitive structure, not wishful thinking about which action will do the most work. The nearest neighbor: `/strategy-positioning` — which addresses building the structural position that makes future force economy possible. Investment in positioning now is often the best force economy move available.

---

## Full example

**Input:**
> We're a four-person engineering team trying to ship a key integration feature — connecting our product to a platform that most of our enterprise customers use daily. A competitor with a 40-person team just announced they're building the same integration and positioning it as a flagship feature. We don't have the resources to out-build them. What's our play?

---

**Output:**

### Force Economy Analysis

**Objective**

Ship an integration with Platform X that enterprise customers adopt as their default, such that switching to the competitor's version (once available) would require active migration effort and produce no meaningful improvement for the customer.

**Maximum-Force Approach**

Match the competitor feature-for-feature: full integration depth, all edge cases covered, polished UI, comprehensive documentation, dedicated support. Timeline: 4–6 months to parity.

Cost: 4 engineers × 4–6 months = 16–24 engineer-months of capacity. At a team of four, this is your entire team's bandwidth for the better part of a year. Other roadmap items stall. You're racing a 40-person team at 10% of their headcount. Even if you ship simultaneously, they iterate faster on v2 and v3. This path leads to permanent resource disadvantage on a feature that will become parity over time.

**Minimum-Force Alternatives**

**Alternative 1 — Ship 80% with depth on the 20% that matters most**
Identify the three workflows that account for 80% of the use case for your enterprise customers. Build those with exceptional depth and reliability. Leave the edge cases for v2. Time: 6 weeks for 2 engineers. This delivers a production-ready integration that handles what customers actually do, rather than a feature-complete integration that handles everything adequately. Your differentiation is that it works exactly right for the common case, not that it does everything.

Estimated cost: 12 engineer-weeks. Customer adoption: high among the 80% of customers whose workflows you've covered well.

**Alternative 2 — Co-build with a power user**
Identify one enterprise customer who has the most complex and representative integration use case. Build the integration in direct collaboration with them — their engineering team contributing requirements, testing, and potentially even implementation support in exchange for being first. Their organizational commitment to the integration creates a reference customer and a case study simultaneously. Time: 8 weeks, shared cost.

Estimated cost: 8 engineer-weeks internal + shared spec effort. Benefit: deep integration with a live customer, reference story before competitor ships, customer who is now invested in your success.

**Alternative 3 — Open-source the integration layer**
Build the core integration as an open-source library. Let customers and community contributors extend it. You maintain the core; others extend to edge cases. Your 40-person competitor ships a proprietary integration; you ship an open standard that any developer can inspect, modify, and contribute to. In enterprise contexts where procurement requires no vendor lock-in, this is a structural advantage.

Estimated cost: 6 engineer-weeks to build and document the core, plus ongoing community management. This approach takes longer to reach parity on features but is structurally differentiated in a way the competitor cannot easily replicate without open-sourcing their own work.

**Leverage Point**

The single highest-leverage node in this system: **the platform's own developer relations team.**

The platform (Platform X) has an incentive to have high-quality integrations built by third parties — it makes their platform more valuable. They likely have a partner integration program, a developer advocacy team, and an interest in showcasing integrations that work well.

A conversation with their developer relations team has the potential to: surface their existing documentation and integration test environments (reduces your build time), get your integration listed in their partner directory (distribution you don't have to build), and potentially result in co-marketing (their customers see your integration as officially recognized). This is a small-input, large-output move that your 40-person competitor either hasn't made yet or has made more slowly because their business development team handles it through formal channels.

Cost: one conversation. Potential output: documentation access, testing infrastructure, distribution, and co-marketing.

**Non-Contest Approaches**

- *Make irrelevant:* If Platform X has a competing product (many do), and customers who use Platform X are also evaluating Platform Y (your competitor's native platform), building the Platform Y integration first and positioning it as your priority creates a different story — one in which you're aligned with where customers are going, not where they've been.
- *Go around:* Build not the integration to Platform X, but an integration to the API aggregator that already integrates with Platform X (Zapier, Make, Workato). Deliver the integration to customers in 2 weeks rather than 6 months, using someone else's infrastructure. Quality is lower but time-to-value is dramatically faster. Use this to hold the account while you build the native integration.
- *Ally with:* Are there other software companies in your ecosystem that have already built a Platform X integration and might license or partner on the integration layer? Building on top of an existing integration rather than from scratch is a force multiplication the competitor building proprietary cannot access.

**Recommended Approach**

**Immediate (this week):** Reach out to Platform X's developer relations team. This is the leverage move that costs least and can change the build calculus significantly. Treat it as a prerequisite to the build decision.

**Ship plan:** Alternative 1 (80% depth with exceptional quality on the common case) built collaboratively with the power-user customer from Alternative 2. Use the open-source approach from Alternative 3 for the integration layer, closed for the product-layer logic. This combines the three alternatives into a path that:
- Ships in 8 weeks rather than 6 months
- Uses 2 engineers rather than 4
- Produces a reference customer and case study on ship day
- Creates structural differentiation (open core) that the proprietary competitor cannot easily replicate

The competitor's 40-person team ships a more feature-complete integration later. You ship a battle-tested, customer-validated, publicly inspectable integration first, with a customer reference behind it. In enterprise sales, that story beats feature completeness.

---

## Related skills

- [`/strategy-positioning`](positioning.md) — Investment in positioning now reduces force required in future contests
- [`/strategy-alliance`](alliance.md) — Alliances are the most reliable force multiplier; the Platform X developer relations approach is an alliance move
- [`/strategy-victory`](victory.md) — Force economy requires knowing your minimum victory condition — so you know when "good enough to ship" is actually good enough
- [`/strategy-timing`](timing.md) — In resource-constrained situations, timing the minimum-force approach to a moment when the opponent is mid-build is a force multiplier
