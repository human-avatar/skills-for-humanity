# `/s4h-strategy-alliance`

> *If you know the enemy and know yourself, your victory will not stand in doubt; if you know Heaven and know Earth, you may make your victory complete.*

**Category:** [Strategy](README.md) · **Command:** `/s4h-strategy-alliance` · **Source:** Sun Tzu, *The Art of War*; Niccolò Machiavelli, *The Prince*

---

## What it does

Maps every party in a situation by their actual interests, identifies natural allies requiring minimal persuasion, surfaces swing parties and what alignment would cost, determines which potential opponents need only to be neutralized rather than won over, and stress-tests each proposed alliance against Machiavelli's durability standard: is it built on shared interest or goodwill?

The analysis produces an alliance structure — not a stakeholder communication plan, but a prioritized map of who to activate first, what to offer, and what holds the coalition together under pressure.

---

## When to use it

- Pushing an initiative through an organization where different teams have different interests and some will be actively resistant
- Building a competitive coalition in a market context — partnerships, standards bodies, buyer communities
- A major decision requires buy-in from multiple parties who each see the situation differently
- Organizational politics are a real force in a context and you want to map them honestly before proceeding
- Previous coalition efforts have failed and you want to understand why before trying again

---

## When *not* to use it

**Don't build alliances before you know what you're asking people to ally for.** An alliance analysis without a clear objective maps the landscape without knowing what the terrain is for. Victory definition comes first; alliance structure is the means to achieve it. Parties aligned to a vague objective will fragment at the first point where the objective must become specific.

**Don't treat alliance building as lobbying.** The nearest neighbor: `/s4h-social-coalition-mapping` — which analyzes power and influence dynamics in social systems. Alliance strategy is specifically about interest-aligned coalition building in competitive contexts. If the question is "how do I influence this person?" rather than "whose interests align with mine?", the framing is different. Machiavelli's insight is that persuasion-based alliances (lobbying) are fragile; interest-based alliances are durable.

---

## Full example

**Input:**
> I'm a middle manager at a 600-person company. I want to launch an internal platform that would centralize how teams request and track work from a shared services team. The problem: three existing team leads — Engineering Operations, Finance Operations, and HR Operations — each run their own intake processes and have invested time building their own systems. My initiative would effectively replace what they've built, which threatens their autonomy and makes it look like their previous investment was wasted. I have support from my direct manager but not much else. How do I build the coalition I need?

---

**Output:**

### Alliance Map

**Party Inventory**

| Party | Actual interest | Current position | Capacity |
|---|---|---|---|
| Your direct manager | Looks like a successful leader; sees your success as theirs | Aligned | Medium — can advocate, limited political capital to spend |
| Eng Ops lead | Maintain autonomy over their intake; not look like their investment was wasted; not lose headcount or budget | Opposed (low engagement) | High — controls the Engineering intake process and team |
| Finance Ops lead | Same as Eng Ops; additionally: controls sensitive financial data requests, has compliance concerns about a shared platform | Opposed (low engagement) | High — controls Finance intake; has CFO visibility |
| HR Ops lead | Same as others; additionally: HR intake often involves sensitive personal data; has strong incentive to resist anything that might expose HR data to broader access | Opposed (low engagement) | Medium-High — controls HR intake; has CHRO visibility |
| The shared services team itself | Less friction handling requests; fewer duplicate tools to maintain; clearer visibility into incoming work | Latent ally — not yet activated | Medium — has operational pain, limited organizational voice |
| The teams that request services | Faster response times; one place to go; visibility into request status | Latent ally — they experience the pain your platform solves | High collectively — their usage patterns are the business case |
| Your skip-level / leadership | Operational efficiency; reduced duplication; team leads spending less time on process and more on delivery | Unknown — depends on how the initiative is framed | High — their endorsement would change the calculus for the three team leads |
| Finance team broadly | Faster responses to Finance Ops requests; budget visibility | Neutral to latent ally | Low individually, useful as evidence base |

**Natural Allies**

The shared services team is your clearest natural ally. They experience the operational friction your platform solves — duplicate tools, inconsistent processes, unclear request queues. They have no investment in the existing systems (the three team leads built those; the shared services team uses them reluctantly). Activating this alliance is your first move: get their operational pain documented, in their own words. This serves two purposes — it surfaces the evidence base for your initiative and it gives you a party with operational credibility behind the proposal.

The requesting teams are natural allies in aggregate. If you can show that a sample of engineering, finance, or HR requesters find the current system frustrating — wrong place to submit, unclear status, slow response — you have evidence that the problem is real from the customer side of the transaction. Collect this deliberately before any proposal reaches the three leads.

**Swing Parties and Alignment Conditions**

The three team leads are your swing parties. They are not natural opponents — their actual interest is not "preserve this specific system." Their actual interest is "don't lose autonomy, don't look like previous investment was wasted, don't have sensitive data at risk." Each of these concerns can be addressed directly:

*Eng Ops lead:*
Alignment condition — co-ownership. If the platform is framed as "Eng Ops builds and runs the engineering intake layer within the shared platform," their previous investment is the foundation rather than the obstacle. They are the architect of the engineering workflow, not the victim of someone else's platform. Cost of alignment: give them genuine ownership of their intake configuration. They are not replaced; they are elevated.

*Finance Ops lead:*
Alignment condition — data governance control. Finance Ops's real concern is that a shared platform creates visibility into sensitive financial requests. Offer them: their intake remains behind a permission boundary they control, with audit logs they own, and no cross-functional visibility into Finance-specific data unless they choose to expose it. This requires building the permission model into the platform design, but it converts a compliance concern into a feature they can present to their CFO as a governance improvement.

Cost of alignment: design investment in fine-grained permissions. Worth it — this concern is also real for future platform adoption.

*HR Ops lead:*
Alignment condition — similar to Finance, but the stakes are higher (GDPR, personal data, sensitivity). Offer the same permission model, and go further: position HR Ops as the privacy governance lead for the platform — they define the data handling standards. This converts their opposition into a role they can present to the CHRO as increased influence, not decreased.

Cost of alignment: time (conversations before the proposal, incorporating their requirements), design investment, and genuine shared credit.

**Parties to Neutralize**

The CFO and CHRO have high capacity and are currently unknown positions. They have not been engaged. The risk is that the Finance Ops or HR Ops leads escalate to them as a defensive move — presenting the initiative as a threat before you've framed it as an opportunity.

Neutralization approach: brief both before the formal proposal reaches them through their teams. Not to sell the initiative — to share what you're doing, that you've engaged their leads, and that their leads' concerns are being incorporated. This converts a potential escalation ("someone is threatening our system without consulting us") into a "I was consulted and it's being handled" situation. Cost: two 20-minute conversations. This is significantly cheaper than managing an escalation.

**Alliance Stability Assessment**

| Alliance | Basis | Machiavelli test | Stability rating |
|---|---|---|---|
| Direct manager | They see your success as theirs — genuine shared interest in outcomes | Passes — interest-based | High |
| Shared services team | Platform solves their operational pain — clear shared interest | Passes — interest-based | High |
| Requesting teams (aggregate) | Better service is genuinely in their interest | Passes | High — but diffuse; needs activation |
| Eng Ops lead (if co-ownership offered) | Platform success becomes their success; their investment is the foundation | Passes if genuinely structured that way | Medium-High — depends on follow-through |
| Finance Ops lead (if permission model delivered) | Compliance concern resolved; CFO visibility maintained | Passes if delivered | Medium-High — dependent on trust being established |
| HR Ops lead (if governance role given) | Real authority increase | Passes if genuine | Medium — highest skepticism of the three; needs most relationship investment |

All three team lead alliances are contingent on follow-through. If the co-ownership and governance commitments are made and not honored post-launch, these alliances collapse and become active opponents with specific grievances. This is the highest stability risk in the coalition.

**Recommended Structure**

*Sequence:*

1. **This week:** Activate the shared services team. Get their operational pain documented.
2. **Week 1–2:** Collect evidence from requesting teams — brief survey or 5 conversations.
3. **Week 2–3:** One-on-one conversations with each of the three team leads. Not a proposal — a consultation. "I'm thinking about this problem. What would you need for this to work for your team?" This surfaces their real concerns and signals co-design rather than imposition.
4. **Week 3–4:** Redesign the proposal to incorporate their three specific concerns (co-ownership, permission model, governance role). Brief your manager on the approach.
5. **Week 4–5:** Brief the CFO and CHRO before the formal proposal. Short, informational, respectful.
6. **Week 5–6:** Formal proposal — now with shared services team support, requesting team evidence, three team leads consulted and concerns incorporated, and skip-level leadership briefed.

The difference between this sequence and walking in with a proposal is the difference between asking for buy-in and building it. The coalition, properly built, makes the proposal almost self-executing: the people who might have opposed it are co-authors of the parts that matter most to them.

---

## Related skills

- [`/s4h-strategy-force-economy`](force-economy.md) — Alliances are the most powerful force multiplier; the coalition approach here is the force economy answer to a three-team-lead opposition
- [`/s4h-strategy-intelligence`](intelligence.md) — Knowing what each party actually wants (vs. what they say they want) requires the intelligence discipline; the party inventory above required inference that should be validated
- [`/s4h-strategy-victory`](victory.md) — Alliance strategy requires a shared victory definition; if the three team leads define success differently from you, the co-ownership framing needs to address that explicitly
- [`/s4h-social-coalition-mapping`](../social/coalition-mapping.md) — For deeper analysis of the power and influence dynamics at play in the organizational context
