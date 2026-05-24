# `/writing-copy`

> *Copy fails when it describes the product rather than the reader's experience of having it.*

**Category:** [Writing](README.md) · **Command:** `/writing-copy`

---

## What it does

Writes and audits marketing copy, landing pages, ad copy, email copy, and product descriptions using the attention-desire-action framework. Identifies feature/benefit confusion, diagnoses conversion failures, and rewrites the headline and CTA to address the reader's experience rather than the product's features.

---

## When to use it

- Landing page, ad, or email copy is not converting
- Copy describes what the product does rather than what the reader experiences
- The headline describes a category or feature rather than a benefit or outcome
- The call to action is vague or creates unnecessary friction
- Marketing copy is technically accurate but generates no desire
- You are writing new copy and want to build it on the right framework from the start

---

## When *not* to use it

**Don't use this for editorial or informational content.** Blog posts, thought-leadership articles, and explainer content are not copy — they have different objectives (inform, educate, build authority) and different success metrics. Applying the attention-desire-action framework to content that is not selling something produces copy-flavoured writing where something more generous and exploratory belongs.

**Don't use this when the product itself is the problem.** If conversion is low because the product doesn't solve the reader's actual problem, no amount of copy improvement will fix it. Copy amplifies the offer; it cannot create one. If the product-market fit is uncertain, fix that first.

The nearest neighbor: [`/writing-audience-calibration`](audience-calibration.md) — which profiles the specific reader the copy must reach. Generic copy that speaks to everyone reaches no one. The most effective copy improvement is often not the headline rewrite — it is correctly identifying who the reader is and what they specifically fear or want, which then makes the headline rewrite obvious.

---

## Full example

**Input:**
> Our SaaS company has a landing page with the headline: "Our platform provides comprehensive workflow management solutions for modern teams." It's not converting. The product helps remote teams track work without losing things in email chains. Monthly conversion from landing page visit to free trial is 1.2%.

---

**Output:**

### Copy Audit

**Attention Assessment:**

> *"Our platform provides comprehensive workflow management solutions for modern teams."*

Verdict: Fails at attention.

Diagnosis:
- "Our platform" — opens by naming the speaker, not addressing the reader. Nobody cares about your platform in the first word.
- "Provides" — weakest possible verb for a benefit statement. It describes existence, not value.
- "Comprehensive workflow management solutions" — three-word noun stack. This is a category label, not a benefit. It says "we are a type of software" without saying what that software does for the reader.
- "Modern teams" — audiences of zero. "Modern teams" means everyone, which means no one feels specifically addressed.

The opening earns no next sentence. A visitor who reads only the headline learns that this is some kind of project management software. They do not learn what specific problem it solves, who it solves it for, or why it is worth trying.

The 1.2% conversion rate is consistent with this headline: it is finding the people who are specifically searching for workflow software and would sign up for almost anything in the category. It is not creating desire in visitors who didn't already have it.

---

**Desire Audit:**

Without the full landing page body, the diagnosis is based on the product description: the product helps remote teams track work without losing things in email chains.

The gap the product fills: the specific frustration of important work disappearing into an email thread — of not knowing whether someone has seen something, of having to hunt through inbox to find a decision, of work duplicating because no one knew it was already done.

Current body copy likely describes features (task tracking, integration with email, dashboard views). The desire section should instead make the reader feel that frustration — and then show them the gap closing.

Strong desire-building approach: name the specific moment of frustration ("You assigned it in the meeting. It's been three weeks. You have no idea if anyone started.") before showing the solution. The feeling of recognition is what creates desire.

---

**Action Assessment:**

Standard CTA in this category: "Start free trial" or similar.

Assessment (based on category norms — full audit requires the actual CTA):
- If the CTA is "Learn More": failing. This creates a step between desire and action, requiring the reader to do more work before committing to any action.
- If the CTA is "Get Started": borderline. Not specific enough about what "getting started" means.
- "Start your free trial — takes 2 minutes": better. Specific ("free trial"), low-friction ("2 minutes"), action-oriented.
- "Try it free — no credit card required": strong. Removes the primary friction point (billing commitment) before the reader raises it.

---

**Feature/Benefit Confusion:**

| Likely feature statement | Underlying benefit |
|---|---|
| "Comprehensive workflow management" | Your team stops losing work |
| "Real-time collaboration" | Everyone sees the same version of what's happening |
| "Email integration" | Work assigned in email doesn't disappear |
| "Task tracking and assignment" | You know exactly who is doing what |
| "Dashboard visibility" | You can see if you're on track without asking |

Every feature in the left column can be rewritten as a reader-experience statement in the right column. The right column is what creates desire; the left column describes the mechanism that produces it.

---

**Overall Verdict:** Primary failure is the headline — it names a category, not a benefit. Secondary failure is likely feature/benefit confusion in the body. The product solves a specific, frustrating problem (work lost in email chains). The copy does not name that problem.

---

**Rewritten Headline:**

Option A (names the problem): *"Your team's work stops disappearing into email threads."*

Option B (names the outcome): *"Every task. Every owner. No more hunting through inbox."*

Option C (names the gain): *"Remote teams ship faster when everyone knows what's happening."*

Recommendation: Option A. It names the specific frustration ("disappearing into email threads") that the product was built to solve. A visitor who has experienced this frustration will read "your team's work stops disappearing" and feel seen. That recognition is the mechanism of desire.

**Rewritten CTA:**

*"Try it free — takes 2 minutes, no credit card."*

Specificity (free trial), friction removal (no credit card), low investment signal (2 minutes).

---

## Related skills

- [`/writing-audience-calibration`](audience-calibration.md) — Profile the specific reader; the headline rewrite becomes obvious once you know exactly who you're speaking to
- [`/writing-argument`](argument.md) — For long-form sales pages where the copy is structured as an argument
- [`/writing-tone-alignment`](tone-alignment.md) — When copy spans multiple formats and needs consistent register
