# `/game-theory-signaling`

> *Cheap talk is free, so it's worthless. A credible signal costs something — and is only worth paying if what you're claiming is true.*

**Category:** [Game Theory](README.md) · **Command:** `/game-theory-signaling` · **Source:** Michael Spence (1973, Nobel 2001); Thomas Schelling; George Akerlof (1970)

---

## What it does

Analyses credibility problems arising from information asymmetry and designs signals that are believable because they are costly in a way that is only rational if the claim is true. Identifies why verbal assurances fail, what costly signals are available, and how commitment devices can bind a sender to claimed future behaviour.

The core mechanism: a signal is credible if and only if it would not be rational for someone making a false claim to acquire it. Education, warranties, escrow, portfolio work, references, and public commitments all work the same way — they separate the types who genuinely have the claimed quality from those who don't.

---

## When to use it

- You need others to believe something true about you that they can't directly verify
- A verbal claim isn't working — you've said the right thing but the receiver remains unconvinced
- You're on the receiving end of a claim and need to assess whether to believe it
- You're trying to make a credible commitment about future behaviour
- An information asymmetry is preventing a beneficial transaction or relationship from forming

---

## When *not* to use it

**Don't use this framework when the receiver has direct access to the relevant information.** If your quality, commitment, or type can be verified directly — through a reference check, a portfolio review, a contract audit — signaling is not necessary and adding artificial signals just adds cost. The problem is not signaling; it's making the information accessible.

**Don't design costly signals that are wasteful relative to the benefit.** Spence's model shows that signaling can be socially inefficient — resources are consumed sending and reading signals that would be unnecessary if information were symmetric. When designing or choosing signals, prefer signals with productive side-effects (skills that are genuinely useful, not just credentialising) over pure cost signals.

The nearest neighbor: [`/game-theory-mechanism-design`](mechanism-design.md) — which designs *systems* that elicit honest information from many players. Signaling addresses a bilateral credibility problem (one sender, one receiver); mechanism design addresses the system-level problem of incentivising truthful revelation across all participants.

---

## Full example

**Input:**
> A candidate has 8 years of genuinely excellent, well-documented experience at a small consulting firm that hiring managers in the tech industry have never heard of. She's interviewing for a senior product strategy role at a well-known tech company. The hiring manager keeps politely expressing uncertainty — "we haven't seen work from firms like yours before" — and isn't moving forward. She knows she's genuinely qualified but nothing she's saying is working. How should she think about this?

---

**Output:**

### Signaling Analysis

**Information Asymmetry**

The candidate holds private information: she knows her actual quality — the depth of her strategic thinking, the calibre of problems she's worked on, the concrete results she produced. The hiring manager does not have this information and cannot easily obtain it, because the signal they would normally rely on (firm brand, institutional recognition) is absent.

The asymmetry is one-sided: she knows her quality; they don't. They face the classic adverse selection problem — they'd like to hire high-quality candidates but can't distinguish them from less-qualified people who would also apply to this role.

---

**Communication Goal**

She needs to establish, in a way the hiring manager finds credible: *I produce work at the level of senior product strategists at top-tier firms, and my absence from recognisable brands does not reflect lower capability — it reflects a different career path.*

More specifically, she needs to make two claims credible: (1) the quality of her strategic thinking and (2) the calibre of the problems she worked on.

---

**Cheap Talk Diagnosis**

The phrase "my work is really excellent" fails the cheap-talk test immediately: both a strong and a weak candidate would say exactly this. The hiring manager knows this, discounts the statement accordingly, and updates very little on hearing it. This is not cynicism — it is rational inference.

Even "here are examples of my work" falls partly into this trap, because the examples are curated by the candidate, who controls what is shared and how it is framed. The receiver cannot easily distinguish between genuinely excellent work and work that looks impressive to a non-expert.

The deeper problem: the hiring manager doesn't know enough about the candidate's domain (boutique strategy consulting for mid-market clients) to evaluate the work on its own terms. The usual shorthand — firm name, school, previous employer's brand — is doing cognitive work in hiring precisely because it is hard for weak candidates to fake.

---

**Credible Costly Signals**

*Signal 1: Work product that only an expert can produce*
The most powerful signal is live, domain-relevant work that the receiver can evaluate directly. This is costly because it requires real skill to produce, and an underqualified candidate cannot fake it under expert scrutiny.

Specific form: ask to do a short (4-hour) take-home strategy exercise relevant to the company's actual problem space. Not a test designed to assess generic frameworks — a real piece of analytical work on a real problem. Proposing this is itself a signal (underqualified candidates avoid diagnostic tests); producing a strong output is the verification.

Cost differential: a genuinely skilled strategist can produce compelling work in 4 hours. A less skilled one cannot, regardless of how much they've polished their verbal presentation.

*Signal 2: Client references who can speak in the hiring manager's language*
References are an existing credibility mechanism, but the candidate should use them more precisely. A reference from a client CFO or CEO at a firm the hiring manager respects — someone who can say "she ran the kind of work I'd expect from McKinsey, at a fraction of the cost" — is far more credible than a reference from the firm's own senior partner.

Cost differential: getting a strong, specific, comparable reference requires actually having done strong, comparable work. A candidate with genuinely excellent experience has these references; one who is overstating their quality does not.

*Signal 3: Peer-validated output (published analysis, conference talks, advisory roles)*
If the candidate has produced public analysis — a detailed piece of industry research, a talk at a product or strategy conference, an advisory position with a recognisable company — this creates third-party validation that is hard to fake. The audience or the organisation conferring the advisory role is implicitly endorsing the quality.

Cost differential: writing an analysis rigorous enough to get published or invited to speak requires the actual capability. This cannot be manufactured retroactively.

---

**Commitment Devices**

The signaling problem here is primarily about *current type* (is she actually good?) rather than *future behaviour* (will she do what she promises?). So commitment devices are less central than costly signals. However, one is relevant:

*Conditional guarantee / first-90-days framing:* She can offer to accept a lower base salary with a 90-day performance review that triggers a raise if she meets agreed criteria. This is a commitment device: she is putting money at risk contingent on her own performance. A less-qualified candidate would be reluctant to make this offer because they'd be more uncertain about meeting the criteria. The offer signals confidence in her own quality.

---

**Recommended Signaling Strategy**

Prioritise in this order:

**Primary: Propose and deliver a live work sample.** Email the hiring manager: "I understand the hesitation about firm familiarity — I'd welcome the chance to remove the uncertainty. If you have a current product strategy question you're working through, I'd be glad to put together a 4-page brief on it. I'd ask for an hour of time with someone on your team to understand the context, and I'll turn something useful around within a week." This reframes the conversation from "trust me" to "verify me." It is a direct test of the claimed quality, and proposing it is itself a credibility signal.

**Secondary: Provide a specific, comparable reference.** Contact the most credible client — ideally a C-suite executive at a company the hiring manager knows — and ask them to prepare a specific 3-minute conversation with the hiring manager. Brief the reference on what to address: the calibre of problems worked on, the quality of deliverables compared to the best work they've seen from any source.

**Tertiary: Surface any public validation that exists.** If any external analysis, speaking history, or advisory work can be shared, include it without overplaying it. "I've done some writing on this space — here's a piece that might give you a sense of how I think" is more credible than framing it as a credential.

What not to do: add more verbal emphasis ("I really am at the right level"), add more examples from past work that require the hiring manager to take her word for quality, or attempt to make the firm's name more recognisable than it is. These are all cheap talk variants.

---

## Related skills

- [`/game-theory-equilibrium`](equilibrium.md) — the full equilibrium analysis of signaling games, including separating vs. pooling equilibria
- [`/game-theory-mechanism-design`](mechanism-design.md) — designing systems that elicit honest revelation from many players
- [`/communication-audience-modeling`](../communication/audience-modeling.md) — understanding the receiver's priors and updating them through the right channel
