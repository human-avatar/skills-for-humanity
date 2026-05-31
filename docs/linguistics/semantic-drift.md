# linguistics-semantic-drift

> Whoever controls the definition controls the argument.

**Trigger:** `/s4h-linguistics-semantic-drift`

---

## What it does

Traces how a word or concept's meaning has shifted — historically, through community divergence, or via deliberate capture — identifying the mechanism of drift, who benefits from the new meaning, and what the shift costs or enables. Drawing on Wittgenstein's theory that meaning is use, Nick Haslam's work on concept creep, and the political economy of definitional control, this skill maps the semantic trajectory of contested terms and assesses the strategic implications of the drift.

---

## When to use

- "This word doesn't mean what it used to"
- A key term is being used differently by different people in the same conversation
- You suspect a term has been "captured" — its meaning shifted to serve a particular agenda
- "People keep having the same argument because they are using this term differently"
- A word you rely on for precision has expanded or narrowed in ways that undermine your ability to use it clearly
- You need to understand the history of a term before entering a debate that depends on it

---

## Example

**Input:**
> We're a mental health charity and we've noticed that "trauma" is being used in completely different ways — in clinical settings, by our service users, in mainstream media, and by younger staff. It's causing real problems: funders use the term clinically (DSM criteria), our service users use it more broadly, media coverage uses it loosely for any upsetting experience, and staff are now using "trauma-informed" as a general approach label rather than a specific clinical methodology. We don't know how to communicate consistently anymore.

**Output:**

**Term:** Trauma (and associated: "trauma-informed")

**Semantic Trajectory**

| Stage | Meaning | Context | Timeframe/Community |
|---|---|---|---|
| Clinical origin | Psychological wound from an event exceeding the person's capacity to cope; PTSD diagnostic anchor | DSM, clinical psychology | Pre-1990s professional use |
| Expansion 1 | Any severe psychological injury, not requiring formal diagnosis | Mental health advocacy, social work | 1990s–2000s; drove de-stigmatisation |
| Expansion 2 | Any significantly distressing experience, including cumulative lower-intensity events | Trauma-informed care movement, social services | 2000s–2010s; enabled "small-t trauma" distinction |
| Mainstream diffusion | Any upsetting, difficult, or unwanted experience | Media, social media, general public | 2015–present; "that was traumatic" as colloquial intensifier |
| Community reclamation | Preferred self-description for adverse experiences; resists clinical gatekeeping | Service user communities, peer support | 2010s–present; parallel to expansion 2 but user-led |

**Mechanism:** Concept creep — boundary expansion driven by motivated extension of a clinically and legally significant category.

Nick Haslam's concept creep framework describes exactly this pattern: a psychologically and legally significant category with strong normative valence ("this warrants intervention and compassion") expands its criteria over time, gaining coverage and de-stigmatisation at the cost of diagnostic precision. The expansion is not primarily strategic — it follows from genuine recognition that harm exists on a continuum — but it creates a term that now functions very differently across contexts.

"Trauma-informed" has undergone a secondary drift: originally a specific clinical and organisational methodology (with defined training, protocol, and evidence base), it has expanded to mean "sensitive to adversity and its effects" in general usage. This is the domain transfer mechanism — a technical term adopted as a general orientation label.

**Consequences**

- **What the drift enables:** More people can access the language and legitimacy associated with the term; service users can name and communicate their experiences without requiring clinical validation; "trauma-informed" practice language has spread widely and increased baseline sensitivity in many organisations
- **What the drift costs:** Funders using clinical definitions will not fund services for people who meet expanded-definition criteria; clinical teams and non-clinical staff working with the same population are using incompatible frameworks; the term has lost its diagnostic specificity precisely when that specificity is needed (eligibility decisions, research, outcome measurement); "trauma-informed" as general orientation has crowded out engagement with the specific methodology
- **Who benefits:** Media and content creators (intensifier function); service user communities (access to legitimacy); organisations wanting to signal values without committing to methodology. Loses: clinical researchers (contaminated datasets), commissioners needing clear eligibility criteria, practitioners trying to implement specific evidence-based approaches.
- **Stability:** The term is in active contest across all four communities you named. The clinical meaning is maintained by DSM/ICD gatekeeping but is under pressure from advocacy communities. The mainstream diffusion is largely irreversible at this point. "Trauma-informed" as methodology vs. orientation is an active professional debate in your sector.

**Strategic Implications**
You have three viable strategies:

1. **Explicit disambiguation at point of use.** Stop using "trauma" as a standalone term. Use "clinical trauma (meeting diagnostic criteria)" and "trauma as service users describe their experiences" as distinct terms in every document where the distinction matters. This costs readability but eliminates cross-community misunderstanding. For funders: use their clinical language. For service users: use their language. In mixed documents: define explicitly.

2. **Adopt a layered framework and make it visible.** Acknowledge publicly that your organisation works with the full continuum — from clinical PTSD through to adverse experiences that service users describe as traumatic — and make clear what threshold applies in each context. This is honest about the concept creep rather than trying to resist it.

3. **Invest in a replacement term for your specific purposes.** If "trauma" is too contaminated for the precision you need in certain contexts, identify or adopt a term that carries your intended meaning with less drift risk. "Adversity" (as in ACE/adverse childhood experiences) has clinical anchoring and less mainstream diffusion. "Psychological injury" retains severity connotation without the expanded usage. Neither is perfect but both are more stable than "trauma" in contested communication.

For "trauma-informed": consider retiring the phrase in grant applications and operational documentation in favour of naming the specific methodology (e.g., "Trauma Systems Therapy" or "Seeking Safety" or whichever evidence-based approach you actually use). Reserve "trauma-informed" for the genuine orientation meaning in public-facing and staff culture contexts, where precision matters less and signal matters more.

---

## Related skills

- [`/s4h-linguistics-framing`](framing.md) — The semantic drift often reflects an underlying frame change; map the frame to understand the drift
- [`/s4h-linguistics-connotation`](connotation.md) — Audit the current connotative freight of the drifted term and any replacement candidates
- [`/s4h-epistemology-epistemic-status`](../epistemology/epistemic-status.md) — Assess whether arguments relying on this term are using a consistent or contested meaning
