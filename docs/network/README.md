# 🕸️ Network

> *Structure determines what spreads, who matters, and what holds.*

---

## What this category is

Network tools apply graph-theoretic and sociological thinking to situations where connections — not just the entities themselves — determine outcomes. The core insight, developed across decades by researchers including Albert-László Barabási, Mark Granovetter, Duncan Watts, and Robert Metcalfe, is that position in a network is often more predictive of behaviour and outcomes than any intrinsic property of the node. Who you are connected to, how you are positioned relative to others, and whether you sit on a bridge or in a cluster shapes what information you receive, what influence you can exert, and what risks you face.

This category covers four distinct mechanisms. Centrality tells you which nodes matter most, and why — distinguishing hubs (many connections) from brokers (controlling flow) from influencers (connected to the influential). Contagion tells you how things spread through networks and why spread succeeds or fails — the same idea can go viral in one network structure and die in another. Weak ties tells you where the structural holes are in a network — the gaps where bridging connections would unlock information, opportunity, and collaboration that dense clusters cannot generate internally. Network effects tells you how value scales with participation and where tipping points, lock-in, and winner-take-all dynamics emerge.

The unifying principle: you cannot understand the behaviour of a networked system by analysing nodes in isolation. Structure is causal.

---

## When to reach for it

- You need to identify who has the most influence, reach, or control in an organisation or market
- Something is spreading — or failing to spread — and you need to understand why
- Teams, departments, or communities are siloed and not sharing information or opportunities
- A product or platform's value depends on how many others use it
- You want to understand why an opportunity, idea, or piece of news came from an unexpected source
- A cascading failure, viral event, or epidemic needs to be modelled or contained
- You are trying to build or defend a competitive moat based on network position

---

## When *not* to reach for it

**Don't use network tools when the situation is bilateral, not structural.** If the question is about one relationship — a negotiation, a partnership, a conflict between two parties — network analysis adds overhead without insight. Use [emotional](../emotional/) for one-on-one dynamics or [decision](../decision/) for bilateral trade-offs.

**Network analysis is not a substitute for judgment about people.** Centrality metrics tell you who is structurally positioned to be influential — they say nothing about whether that influence is benign, whether the person is trustworthy, or whether their centrality is a result of competence or coincidence. The nearest neighbor: [social](../social/) — which focuses on power, incentives, and coalitions in organizational settings where the relationships are specific and the politics are real.

The nearest neighbor: [Systems](../systems/) — which models feedback loops and dynamic behavior in interconnected systems. Use systems tools when the causal structure and the feedback loops matter; use network tools when the topology of the connections matters.

---

## Skills in this category

| Skill | What it does | Trigger when... |
|---|---|---|
| **`/s4h-network`** | Routes to the right network skill for your situation | Not sure which tool fits; describe your situation |
| [`/s4h-network-centrality`](centrality.md) | Identifies which nodes have the most influence, reach, or control | "Who are the key people?" "Where's the bottleneck?" "Who connects everyone?" |
| [`/s4h-network-contagion`](contagion.md) | Models how things spread — or fail to spread — through a network | "Why did this go viral?" "Why isn't this spreading?" "What's the tipping point?" |
| [`/s4h-network-weak-ties`](weak-ties.md) | Maps structural holes and the bridging connections that span them | "Where are the silos?" "Why are we missing information?" "Who are the connectors?" |
| [`/s4h-network-effects`](network-effects.md) | Analyzes how value scales with participation and where moats form | "Do we have network effects?" "When do we hit critical mass?" "Is this winner-take-all?" |

**Not sure which tool?** → Invoke `/s4h-network` — it diagnoses your situation and picks the right skill.

---

## Related categories

- [Systems](../systems/) — for feedback loops and dynamic behavior in interconnected systems; use when causal structure matters as much as topology
- [Social](../social/) — for power, incentives, and coalition-building in specific organisational settings
- [Strategy](../strategy/) — for translating network position into competitive advantage and positioning
- [Historical](../historical/) — for network dynamics that have played out before — diffusion of innovations, epidemic cascades, platform wars
