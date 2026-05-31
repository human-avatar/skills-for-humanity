# `/s4h-strategy-terrain`

> *He who occupies the ground first and awaits the enemy is at ease; he who comes later and hastens to fight is weary.*

**Category:** [Strategy](README.md) · **Command:** `/s4h-strategy-terrain` · **Source:** Sun Tzu, *The Art of War*, Books X–XI

---

## What it does

Maps the competitive landscape into favorable, contested, and dangerous ground before you commit to any position or contest. The analysis tells you which battles are worth having, which require preparation before engagement, and which should be avoided — because terrain determines outcome before the fight begins.

The framework draws on Sun Tzu's taxonomy of terrain and situations, applied to any competitive context: markets, negotiations, organizations, relationships. Position shapes outcome. The first strategic question is not "how do I win?" but "where should I fight at all?"

---

## When to use it

- About to make a significant competitive move and want to assess the landscape honestly before committing
- Considering entering a new market, segment, or competitive arena
- Under pressure to engage on ground that feels disadvantageous but you haven't articulated why
- Building a strategy and want to establish which positions are worth fighting for before making other decisions
- A well-resourced competitor is moving into your space and you need to decide where to stand and where to yield

---

## When *not* to use it

**Don't use terrain analysis as a reason to avoid necessary fights.** The discipline of naming dangerous ground is valuable; using it to rationalize avoidance of every difficult contest is not. Some high-value positions are contested. The analysis tells you what contesting them will cost — it doesn't automatically advise against it. If the position is valuable enough and the investment required is acceptable, contested ground is worth fighting for.

**Don't confuse terrain with tactics.** Terrain analysis tells you where to play; it doesn't tell you how to win once you've chosen the ground. The nearest neighbor: `/s4h-strategy-positioning` — which answers how to build an unassailable position on the ground you've chosen. Run terrain first to pick the ground, then positioning to make it yours.

---

## Full example

**Input:**
> We're a Series A startup with a solid product in the project management space. Our instinct is to compete directly with Asana and Notion for the general market. We have a genuinely better product for technical teams, but the consumer-facing features aren't there yet. Should we go head-to-head with them?

---

**Output:**

### Terrain Analysis

**Landscape Inventory**

Available positions in the project management competitive context:
- General horizontal market (Asana, Monday, Notion, ClickUp territory) — large, highly contested, well-funded incumbents
- Technical teams within enterprises (engineering, data, product) — segment within horizontal market, underserved by general tools
- Developer-native tooling (Linear, Jira, GitHub Projects) — contested by purpose-built players with network effects
- Vertical integration with developer workflows (CI/CD, code review, deployment pipelines) — largely unclaimed by PM tools
- SMB general market — commoditized, price-sensitive, high churn
- Enterprise contracts with technical procurement — high ACV, complex sales, relationship-dependent

**Favorable Ground**

Your strengths (genuinely better product for technical teams) meet a clear gap: Asana and Notion are designed for business generalists and are actively disliked by engineering teams who find them insufficiently structured. Your favorable ground is:

- *Technical team segment:* You have a product advantage here that the incumbents cannot easily replicate without alienating their core business user base — the trade-off that creates durable positioning
- *Developer workflow integration:* Technical teams want their PM tool to talk to their code; incumbents have built integrations reluctantly and they show
- *Bottoms-up enterprise adoption:* Engineering teams adopt tools independently; if they love it, procurement follows. Your product advantage converts to distribution advantage in this segment

**Contested Ground**

- *Mid-market technical teams at companies already paying for Asana/Monday enterprise licenses:* They know they dislike the tool, but switching costs are real — IT procurement, SSO, compliance. Tipping this requires both product and a champion in the engineering org willing to run a proof of concept
- *Developer-native segment (Linear customers):* Linear has strong NPS with engineering teams; a head-to-head here would require demonstrating clear superiority on the features technical teams care about most

**Dangerous Ground**

- *General horizontal market:* This is Sun Tzu's dispersive ground. Asana has $500M in cash, Notion has widespread mindshare, ClickUp is spending aggressively on marketing. You have no natural advantage in a generalist contest. The brute-force cost would be enormous; the return on that investment is near zero at current scale. A Series A budget spent on general market acquisition is money spent on someone else's favorable ground.
- *Consumer/prosumer segment:* Your product strengths (structure, technical depth) are liabilities here, not advantages. Consumer users want flexible, visual, fast. This is not your terrain.
- *Enterprise sales without established champions:* Long cycles, procurement complexity, and competitor lock-in make cold enterprise sales a resource drain. Dangerous until you have case studies and references from known companies.

**High-Ground Holder**

Asana holds the strongest current position in general enterprise — brand recognition, procurement relationships, compliance certifications, and a mature integration ecosystem. Their position is strong precisely because they have invested heavily in the non-product dimensions (security, legal, procurement) that technical teams don't care about but procurement does.

Linear holds strong ground with engineering-first companies and high-growth startups — particularly strong NPS among teams who chose deliberately rather than defaulted to an incumbent. Their position is less entrenched in large enterprises.

Taking Asana's position would require matching their brand, compliance, procurement, and integration investment — a multi-year, multi-hundred-million-dollar path. Taking Linear's position in its core segment would require a product that is clearly superior to a product that already has strong loyalty.

**Terrain Verdict**

- **Fight here:** Technical teams within enterprises currently using Asana or Monday but dissatisfied. Your product advantage is directly applicable; the incumbent's position is weakest in this segment because their product wasn't built for this user.
- **Build toward:** Developer workflow integration — a position that no incumbent holds and that creates durable advantage because it requires technical depth they can't easily acquire without disrupting their core user base.
- **Prepare before engaging:** Developer-native segment (Linear customers) — you need more evidence of superiority on the specific dimensions technical teams rank highest. Intelligence before terrain.
- **Avoid:** General horizontal market, consumer/prosumer, and cold enterprise sales without champions. These are expensive fights on ground your competitors own.

---

## Related skills

- [`/s4h-strategy-intelligence`](intelligence.md) — Audit what you actually know vs. assume about competitor positions before finalizing the terrain map
- [`/s4h-strategy-positioning`](positioning.md) — Once you've chosen the ground, build the unassailable position on it
- [`/s4h-strategy-victory`](victory.md) — Define what winning means before terrain analysis, so you know which ground is actually worth fighting for
- [`/s4h-strategy-timing`](timing.md) — Some terrain becomes favorable only at a specific moment; timing analysis pairs with terrain to identify when to move
