# investigation-source-trace

> Trace a claim back to its origin — who first made it, what evidence it rested on, and how it changed in transmission.

**Trigger:** `/s4h-investigation-source-trace`

---

## What it does

Source trace reverses the laundering process that most claims undergo before you encounter them: going upstream from the current form of a claim to find its earliest traceable source, evaluating that source's credibility and evidence, and mapping how the claim changed at each transmission step. It identifies where caveats were dropped, where scope quietly expanded, and where the current form of the claim diverges from what the original source actually established. The output is a verdict on whether the claim as you've encountered it is faithful to what the evidence supports.

---

## When to use

- "I've heard that X is true" — but you don't know where X comes from
- A claim has become "conventional wisdom" in your domain and you want to know if that's warranted
- Someone cites a source but the source cites a source which cites a source — and no one has checked the original
- You suspect a specific finding has been generalized far beyond its original scope
- A statistic is everywhere but no one can tell you where it came from

## When *not* to use

- You know the source and want to evaluate the evidence quality → [investigation-evidence-audit](evidence-audit.md)
- Multiple sources cite the claim and you want to assess whether they're genuinely independent → [investigation-triangulation](triangulation.md)
- The claim is so complex you need to decompose it before tracing it → [investigation-claim-decomposition](claim-decomposition.md) first

The nearest neighbor trap: Source trace is not a literature review. A literature review finds papers about a topic; source trace traces a specific claim backward to determine whether its origin supports its current form. You are following one thread back through the epistemic supply chain — not surveying a field.

---

## Example

**Input:**
> I keep seeing the claim that "most change management initiatives fail — 70% of them." We're about to design an internal transformation program and this number keeps coming up in presentations. Where does it actually come from?

**Output:**

**Claim as received:**
"70% of change management initiatives fail." Stated as an established fact, usually without citation, in business writing, consulting presentations, and leadership literature. Confidence level: asserted as consensus.

**Earliest traceable source:**
After tracing through citations, the claim routes to McKinsey & Company publications from the mid-1990s, most prominently associated with a 1993 McKinsey Quarterly article referencing internal observation, and subsequently to *Reengineering the Corporation* (Hammer & Champy, 1993), which stated that "our unscientific estimate is that as many as 50% to 70% of the organizations that undertake a reengineering effort do not achieve the dramatic results they intended." The claim also appears in Kotter's *Leading Change* (1996) with similar framing.

**Original claim:** An "unscientific estimate" (the authors' words) of 50-70% failure in a specific context (business process reengineering in the early 1990s) where "failure" meant not achieving dramatic intended results.

**Original caveats:** The authors explicitly called it unscientific. The range was 50-70%, not a precise 70%. The context was business process reengineering specifically — not change management generally.

**Transmission map:**

| Step | Source | Change Made | Change Type |
|------|--------|-------------|-------------|
| Origin | Hammer & Champy (1993) | "50-70% unscientific estimate, BPR, dramatic results" | — |
| Step 2 | Kotter and management literature (1995-2000) | Range compressed to ~70%; applied to "change initiatives" broadly | Scope expansion + precision fabrication |
| Step 3 | Consulting and advisory firms (2000-2010) | Presented as established statistic without citation; applied to all transformation | Caveat stripping + scope expansion |
| Step 4 | Blog posts, LinkedIn, conference slides (2010-present) | "Studies show 70%" — now treated as empirical consensus | Fabrication (implied rigor doesn't exist) |
| Current form | "Most change management initiatives fail — 70% of them" | Universal, precise, empirically grounded | — |

**Source credibility assessment:**
- **Evidence type:** Practitioner estimate, not a study. Not Tier 1-5 in any evidence hierarchy.
- **Replication:** The specific 70% figure has not been established by independent empirical research. Academic work on change initiative outcomes (e.g., Burnes 2011, Hughes 2011) has explicitly critiqued this statistic as without evidential foundation.
- **Conflicts of interest:** The original authors were selling a reengineering methodology; failure rates that high create urgency for their approach.
- **Known contradictions:** Multiple researchers (notably Mark Hughes in *Journal of Change Management*, 2011) have traced this statistic and concluded it lacks an empirical basis.

**Verdict:**
The current claim significantly distorts the original. What was an acknowledged unscientific estimate about a specific type of change initiative in a specific era has become a precise universal statistic with implied empirical backing. The 70% figure is not the result of any study measuring change initiative outcomes.

**Most defensible version:** "There is practitioner lore suggesting change initiatives often fall short of their original ambitions, but this is not an empirically established figure and the 70% number specifically is without evidential foundation."

---

## Related skills

- [investigation-evidence-audit](evidence-audit.md) — when the source is known and you want to evaluate its evidence quality
- [investigation-triangulation](triangulation.md) — when you have multiple sources and want to establish whether they are genuinely independent
- [investigation-claim-decomposition](claim-decomposition.md) — when the claim needs to be broken down before it can be traced
