# network-centrality

> Not all nodes are equal. Centrality reveals which ones matter — and why.

**Trigger:** `/network-centrality`

---

## What it does

Maps a network to identify which nodes are most influential, most critical to information flow, or most connected to other powerful nodes. Distinguishes four distinct types of centrality — degree (how many connections), betweenness (how often on the shortest path between others), closeness (how quickly the network can be reached), and eigenvector (connected to the connected) — and translates the structural findings into actionable answers. Albert-László Barabási's research on scale-free networks established that hub-dominated structures are the rule in real-world networks, not the exception — and that those hubs are disproportionately influential in ways that compound over time.

---

## When to use

- "Who are the key players in this organisation / market / community?"
- "Who would we miss most if they left?"
- "Where is the information bottleneck?"
- "Who do I need to reach to influence this network?"
- "Who controls access or flow in this system?"

---

## Example

**Input:**
> We're trying to understand the influence structure in our 60-person product organisation. We have an internal Slack analytics export showing who communicates with whom. We want to know: who are the informal leaders, who is at risk of burnout from over-brokering, and whether there are any knowledge silos we're not aware of.

**Output:**

**Network Definition**
60 nodes (employees), directed edges weighted by weekly Slack message volume. Time horizon: 90 days. Questions: informal leadership, over-brokering risk, knowledge silos.

**Centrality Rankings (top nodes)**

| Person | Degree | Betweenness | Closeness | Eigenvector | Assessment |
|--------|--------|-------------|-----------|-------------|-----------|
| Priya (Eng Lead) | 1st | 3rd | 2nd | 1st | Hub + prestige: connected widely and to other connectors; informal leadership confirmed |
| Marcus (PM) | 4th | 1st | 3rd | 5th | Critical broker: sits on most shortest paths despite moderate degree; bottleneck risk |
| Yuki (Design) | 2nd | 8th | 1st | 3rd | High closeness: fastest to reach whole org; ideal for spreading information efficiently |
| Tom (Backend) | 18th | 2nd | 12th | 22nd | Hidden broker: low degree but high betweenness — the only bridge between backend cluster and the rest |
| Dana (Data) | 28th | 31st | 29th | 6th | Prestige anomaly: low connections but highly connected to powerful nodes — "shadow influencer" |

**Structural Features**

*Cut point identified:* Tom is an articulation node. If Tom leaves or becomes unavailable, the backend engineering cluster (8 people) loses its only regular communication channel to the product and design clusters. No redundant bridge exists.

*Over-brokering risk:* Marcus scores highest on betweenness by a significant margin. Cross-referencing message volume: Marcus sends 3.4x the median messages. This combination of high betweenness and high volume is a burnout signal — he is doing work that the network structure forces on him.

*Potential silo:* The data and analytics cluster (6 people) is connected to the rest of the organisation almost exclusively through Dana and one weak tie to Priya. The cluster has high internal density (members talk to each other frequently) but only two external bridges, both low-volume. This is consistent with the self-reported complaint that "data insights don't get acted on."

**Answer to the Original Questions**

*Informal leaders:* Priya leads on every relevant dimension — degree, closeness, eigenvector. Her influence is structural, not just perceived. Yuki is the second-most influential but through a different mechanism: she is the fastest information spreader, not the most connected.

*Burnout risk:* Marcus is the highest priority. His betweenness centrality is 2.1 standard deviations above the next highest individual. Organisational intervention options: create a second PM-to-engineering communication channel that doesn't route through Marcus; or make Marcus's brokering role explicit, reduce his execution load, and monitor message volume.

*Knowledge silos:* The data/analytics cluster has a structural hole between it and the product decision-making cluster. The "insights don't get acted on" complaint is likely a structural consequence, not a relationship problem. Recommendation: create a regular data-product sync that doesn't depend on Dana as sole bridge.

**Caveats**
Slack data reflects communication, not influence — some high-impact relationships happen in other channels. The analysis reflects a 90-day snapshot; network structure can shift significantly with team changes. Tom's criticality as a bridge may not be visible to management if his bridging function is informal rather than role-defined.

---

## Related skills

- [`/network-contagion`](contagion.md) — use centrality findings to identify the highest-leverage seed nodes for spreading information or driving adoption
- [`/network-weak-ties`](weak-ties.md) — dig into the structural holes the centrality analysis reveals (e.g., the data/analytics silo)
- [`/social-power-mapping`](../social/power-mapping.md) — translate structural centrality into an organizational power map with explicit political implications
