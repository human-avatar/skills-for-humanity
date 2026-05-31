# analogy-structure-mapping

> Identifies the deep structural correspondence between two situations — genuine isomorphism vs superficial similarity.

**Trigger:** `/s4h-analogy-structure-mapping`

---

## What it does

Maps the structural elements of two situations independently, then compares them element by element to determine which correspondences are genuine (same structural role and dynamics) versus superficial (same label, different structure). Every analogy has valid and invalid predictions — this skill identifies both, so the analogy can be used where it holds and set aside where it breaks.

---

## When to use

- "Does this analogy hold?"
- "Is this really like that?"
- "Map the structure of this comparison"
- About to make a decision based on a historical parallel
- Testing whether a strategic model from another industry actually applies

## When NOT to use

- For stress-testing an established analogy's breaking points — use `analogy-boundary-testing`
- For bringing fresh outside perspectives rather than testing a specific comparison — use `analogy-perspective-shifting`
- For transferring a method from one domain to another — use `analogy-domain-transfer`

---

## Example

**Input:**
> We keep saying that building a developer community is "like building a city." We're using this to justify organic growth, investing in "infrastructure," and waiting for network effects. Is the structure actually isomorphic?

**Output:**

---

**Situation A structure (developer community):**
- Actors: developers (individual contributors), companies, community managers, platform operator
- Relationships: developers connected through shared tools, forums, events; companies connected to developers through hiring and usage
- Dynamics: grows through contributions (code, answers, reputation); value increases with content density and connection quality
- Constraints: requires minimum viable participation to be useful; depends on trust that investment compounds
- Goals: sustainable self-sustaining knowledge and contribution ecosystem

**Situation B structure (city):**
- Actors: residents, businesses, government, infrastructure providers
- Relationships: residents connected through shared physical space, services, labor market; businesses connected through supply chains and customer base
- Dynamics: grows through population density creating economic agglomeration; value increases with amenity and opportunity density
- Constraints: requires physical infrastructure investment before habitation; subject to geography and zoning
- Goals: economic and social environment that enables residents to live and work effectively

---

**Element mapping:**

| Element in A | Corresponding element in B | Genuine / Superficial | Reason |
|---|---|---|---|
| Developers | Residents | Genuine | Both are primary participants whose aggregate presence creates value for the ecosystem |
| Platform/tools | Roads, utilities | Genuine | Both are infrastructure that enables participation; investment in both precedes usage |
| Community content (answers, code) | Amenities (shops, services) | Genuine | Both are secondary value that accumulates as participation increases |
| Community manager | City government | Superficial | City governments have coercive authority (taxation, zoning); community managers have only soft power. Governance mechanics are completely different. |
| Network effects | Agglomeration | Genuine | Both describe the mechanism by which density creates disproportionate value |
| Organic growth | Urban organic growth | Superficial | Cities grow organically when the economic opportunity is real; developer communities can remain small indefinitely even when the tools are good if participation isn't cultivated actively. The "waiting" strategy that works in cities (build the road; residents follow) doesn't reliably work in communities. |

**Where the mapping breaks:**

The governance correspondence is the most significant break. City governments have coercive mechanisms — taxes, zoning, law enforcement — that force contribution and compliance. Community platforms have none of these. The implication: a community that is run "like a city government" (invest in infrastructure, set rules, then wait for organic growth) will not produce the self-sustaining participation a city does, because there is no coercive mechanism ensuring minimum participation. Developer communities require active cultivation — contributions must be explicitly rewarded, conflicts must be actively mediated — because there is no equivalent of property taxes or zoning law to maintain minimum participation.

**Valid predictions (analogy holds):**

- Investment in infrastructure (good tooling, documentation, forums) does precede valuable communities — just as roads precede neighborhoods. The sequencing insight transfers.
- Network effects are real — a community above a critical mass does become more useful per participant. The density insight transfers.
- Different "neighborhoods" (sub-communities around different tools/languages) will have different character. The diversity-within-ecosystem insight transfers.

**Invalid predictions (analogy breaks):**

- "Build the infrastructure and organic growth will follow" — this works in cities because economic incentives attract residents; it does not work reliably in communities where participation is purely voluntary.
- Governance by rules and infrastructure alone — cities can enforce compliance; communities can only attract it.
- The implied patience strategy — cities compound over decades; developer communities can die in 6–12 months of low activity. The timescale of the analogy doesn't transfer.

**Verdict:** The analogy is useful for the sequencing logic (infrastructure first) and for understanding network dynamics. It is misleading as a strategic guide because it imports a patience-and-organic-growth frame that works only when participation is not purely voluntary.
