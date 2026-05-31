# network-weak-ties

> Your closest contacts share your blind spots. Your loose connections don't.

**Trigger:** `/s4h-network-weak-ties`

---

## What it does

Maps the structural holes in a network — the gaps between clusters where no bridge currently exists — and identifies the weak ties that span them. Grounded in Mark Granovetter's 1973 finding that novel information, job opportunities, and cross-domain ideas almost always arrive through acquaintances rather than close contacts, and Ronald Burt's structural hole theory showing that brokers who span these gaps earn measurable advantages in ideas, influence, and resources. The skill identifies where your network is siloed, who the current bridges are (and how fragile they are), and where building weak-tie connections would unlock the most value.

---

## When to use

- "Where are our organisational silos?"
- "Why are we always the last to hear about [opportunity / problem / shift in the market]?"
- "Why isn't knowledge flowing between these teams?"
- "I want to expand my professional network strategically — where should I invest?"
- "Who are the connectors in this community?"

---

## Example

**Input:**
> I run a 40-person consultancy with four practice areas: Strategy, Technology, Change Management, and Analytics. Each practice is strong internally — people within a practice collaborate well. But we keep losing pitches where clients want multi-disciplinary proposals, and the partners tell me the teams "don't know each other" well enough to pitch together credibly. I want to understand the structural problem and fix it.

**Output:**

**Cluster Map**

Four dense clusters identified, defined by practice area and physical/calendar proximity. Internal tie density is high within each practice (estimated 70–80% of possible ties are active, based on shared project history). Cross-practice tie density: low (estimated 10–15%).

| Cluster | Size | Internal Cohesion | External Connections |
|---------|------|-------------------|---------------------|
| Strategy | 10 | High | Primary: weak links to Technology (through 2 people); near-zero with Analytics |
| Technology | 12 | High | Connections to Strategy (2 people) and Change Management (1 person) |
| Change Management | 9 | High | Connections to Technology (1 person); weak link to Analytics (1 person) |
| Analytics | 9 | High | Connection to Change Management (1 person); near-zero with Strategy |

**Structural Hole Inventory**

| Gap | Clusters Separated | Current Bridges | Bridge Quality | Hole Importance |
|-----|-------------------|-----------------|----------------|-----------------|
| Strategy–Analytics | 10 + 9 people | 0 active bridges | None | Critical — these two practices appear together in 60% of multi-disciplinary pitches |
| Strategy–Change Management | 10 + 9 people | 1 weak bridge (James, Associate) | Fragile, low-seniority | High — "transformation" work requires both |
| Technology–Analytics | 12 + 9 people | 0 active bridges | None | High — data/tech proposals require joint credibility |
| Technology–Change Management | 12 + 9 people | 1 bridge (Sarah, Partner) | Single point of failure | High — Sarah carries this entire cross-practice connection |

**Current Brokers**

*Sarah (Technology Partner):* Single bridge between Technology and Change Management — and indirectly the closest any partner gets to spanning three practices. Carries disproportionate brokering load. If Sarah leaves or deprioritises this relationship, the Technology–Change bridge disappears entirely. Not currently recognised in formal role structure or compensation for this function.

*James (Strategy Associate):* One of only two cross-practice bridges involving Strategy. Low seniority — likely to move practices or leave within 2 years. The bridge is fragile.

**Functional Consequences**

*Why you're losing multi-disciplinary pitches:* Partners pitching together don't have established working relationships. They haven't solved a problem together, don't know each other's thinking styles, and can't vouch for each other credibly in a pitch room. Clients sense the unfamiliarity. This is not a sales skill problem — it is a structural network problem. You cannot build pitch credibility on the day of the pitch.

*The Analytics invisibility problem:* Analytics is structurally isolated from Strategy despite frequent co-occurrence on client work. Strategy partners don't know what Analytics can do; Analytics partners don't get called into strategy conversations early enough to shape the work. This gap is costing you scope.

*Single points of failure:* Two of your four cross-practice bridges are single-person connections. The network is more fragile than it appears.

**Bridge Recommendations**

1. **Create a cross-practice project rotation.** Assign one analyst or consultant from Analytics to work embedded in a Strategy engagement for 3 months. This creates direct collaboration history — the strongest possible weak-tie development. Rotate quarterly. The goal is to build 4–6 cross-practice relationships with real shared work history within 18 months.

2. **Formalise Sarah's brokering role.** Recognise her as the cross-practice lead for Technology–Change Management and give her a mandate (and time) to deepen this bridge. Identify a second person in each practice to shadow this function so the bridge isn't a single point of failure.

3. **Introduce a quarterly cross-practice "problems and capabilities" session.** One hour, each practice presents one hard problem they're working on and one capability they underutilise. Not a pitch — a genuine knowledge exchange. The goal is to create the low-stakes, repeated exposure that builds acquaintanceship ties across the structural holes.

4. **Fix the Strategy–Analytics hole first.** Given that 60% of multi-disciplinary pitches involve both practices, this is the highest-value structural hole to close. Identify one senior person in each practice to build a direct relationship — through a joint proposal, a shared internal workshop, or a co-authored thought leadership piece.

---

## Related skills

- [`/s4h-network-centrality`](centrality.md) — identify the brokers in this network by betweenness centrality score, and assess how fragile the current bridges are
- [`/s4h-network-contagion`](contagion.md) — model how knowledge, practices, or proposals would spread given the current bridge structure — and what changes once holes are closed
- [`/s4h-social-coalition-mapping`](../social/coalition-mapping.md) — use the structural hole map to build a deliberate coalition across the gaps for a specific pitch or initiative
