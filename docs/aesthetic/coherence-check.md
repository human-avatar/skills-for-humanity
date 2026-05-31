# aesthetic-coherence-check

> Tests whether the parts form a unified whole — finds the jarring inconsistencies that accumulate when work lacks a shared vision.

**Trigger:** `/s4h-aesthetic-coherence-check`

---

## What it does

Maps all major elements of an artifact, identifies where different design decisions conflict, and classifies each incoherence as surface (fixable with small changes) or structural (requires rethinking something fundamental).

---

## When to use

- Something feels off but you can't articulate what
- Multiple contributors have worked on something without a shared vision
- Before finalizing or shipping something
- "Does this hang together?"

---

## Example

**Input:**
> Review this product landing page approach for coherence: headline says "Simple and powerful for growing teams", the hero image shows a complex dashboard with 12 panels, the CTA is "Request a custom demo", the pricing section says "Start free in 2 minutes", and the testimonials section features Fortune 500 company logos.

**Output:**

**Incoherence 1: "Simple" vs. complex dashboard image**
The headline claims simplicity; the hero image is one of the most complex possible visual signals. A new visitor's first 3-second impression is contradicted by their next 3-second impression. *Severity: High — first impressions are formative.*

**Incoherence 2: "Growing teams" vs. Fortune 500 logos**
Growing teams and Fortune 500 companies have different buying contexts, budget considerations, and risk tolerances. The testimonials signal "enterprise" while the headline targets "growing." A visitor from a 20-person startup may read the Fortune 500 logos as "not for me." *Severity: Medium — affects whether the right audience self-identifies.*

**Incoherence 3: "Request a custom demo" vs. "Start free in 2 minutes"**
These two CTAs represent opposite conversion philosophies: high-touch (demo request) and self-serve (free start). On the same page, they compete. A visitor who is ready to sign up immediately will encounter the demo CTA first and potentially delay. A visitor who needs selling will see "start free" and proceed unsupported. *Severity: High — direct conversion impact.*

**Classification:**

*Surface incoherence (fixable):* Replace dashboard hero image with a simplified view of one use case. Move Fortune 500 logos to an enterprise-specific section rather than the primary testimonials.

*Structural incoherence (requires a decision):* The CTA conflict is a strategic question: is this product self-serve or sales-led? The page can't be both effectively. Make the decision, then redesign accordingly.

**Core question this surfaces:**
Who is this page actually for — a 20-person growing team who will start free, or a 200-person team who needs a demo? The incoherences all trace back to that undecided question.
