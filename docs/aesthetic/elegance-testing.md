# aesthetic-elegance-testing

> Tests whether a solution is more complex than it needs to be — distinguishing necessary complexity from accidental complexity that accreted over time.

**Trigger:** `/s4h-aesthetic-elegance-testing`

---

## What it does

Separates the irreducible core of a solution from everything that accreted around it — edge case handling, stakeholder additions, defensive layers, hedged commitments. Audits each element against the core job, counts the concept overhead, and produces a specific list of simplifications. Works on any designed thing: process, system, strategy, document, product feature, argument.

---

## When to use

- "Is this over-engineered?"
- "This feels too complex"
- "Is there a simpler way to do this?"
- Reviewing a design, process, or plan after several revision cycles
- When a solution has been built incrementally and you suspect it's accumulated weight

## When NOT to use

- For finding the essence of a message or communication — use `aesthetic-simplicity-analysis`
- For checking whether a design is internally consistent — use `aesthetic-coherence-check`
- For systems where complexity is necessary and the goal is understanding it — use `systems-feedback-mapping`

---

## Example

**Input:**
> Our onboarding flow: welcome email → verification email → in-app welcome modal → required profile completion (12 fields) → product tour (8 steps) → optional video library → optional help center suggestion → weekly check-in email for 4 weeks → "getting started" checklist (6 items) → CSM outreach at day 7 if checklist incomplete.

**Output:**

---

**Core Job:** Get a new user to their first meaningful success with the product as quickly as possible.

---

**Element Audit**

| Element | Necessary or Accreted | Rationale |
|---|---|---|
| Welcome email | Necessary | Sets expectations; first brand contact post-signup |
| Verification email | Necessary | Technical requirement for account security |
| In-app welcome modal | Accreted | Duplicates welcome email; creates friction at exactly the moment users want to explore |
| Profile completion (12 fields) | Accreted | 12 fields is a form, not a profile. 3–4 fields are likely sufficient for personalization; the rest serve internal data needs, not user success |
| Product tour (8 steps) | Accreted | 8 steps is a lecture. Research consistently shows guided tours above 4 steps have low completion rates; users abandon to explore |
| Optional video library | Accreted | Solving the wrong problem — if users need a library of videos to understand the product, the product has a clarity problem, not a content problem |
| Optional help center suggestion | Accreted | Pre-emptive defensive move; shows friction, not care |
| Weekly check-in emails (4 weeks) | Partially accreted | One well-timed check-in has value; four assumes users need hand-holding rather than testing whether they do |
| Getting started checklist (6 items) | Necessary | Concrete success path; high value if the items are genuinely the right first actions |
| CSM outreach (day 7 if checklist incomplete) | Necessary | Human intervention for stalled users; high value |

**Concept Count:** 10 elements currently required vs. 4 at the irreducible minimum (verify, get started, checklist, CSM for stuck users) — overhead: 6 elements

**30-Second Explanation Test:** Fail. "You get a welcome email, then verify, then complete your profile which has 12 fields, then there's a product tour with 8 steps, then you can browse the video library, and we send weekly emails for a month, and there's a checklist..." cannot be explained in 30 seconds in a way that makes a new user confident rather than anxious.

---

**Sources of Unnecessary Complexity**

| Accreted Element | How It Was Introduced | Cost of Removal |
|---|---|---|
| 12-field profile | Marketing/analytics wanted user data at signup | Some segmentation data lost; replaceable with progressive profiling as users engage |
| 8-step product tour | Product team wanted to showcase all features | Users will explore features on their own once they see initial value; tour delays that |
| In-app welcome modal | Added by growth team to increase email-to-activation metrics | Removed; metrics should move to "reached first value," not "opened modal" |
| Weekly check-in emails | Added after support complained about inactive users | Replace with one behaviorally-triggered email at day 7 if not yet activated |
| Video library | Added as a support deflection tactic | Leave as resource, remove from onboarding flow |
| Help center suggestion | Added as a support deflection tactic | Remove; shows lack of confidence in the product |

**Recommended Simplifications:**

1. Remove the in-app welcome modal — it's noise at a moment of high intent
2. Reduce profile completion to 3–4 fields; move the rest to progressive profiling
3. Replace the 8-step tour with a single guided action that creates first value
4. Replace 4 weekly emails with one triggered email at day 7 for non-activated users
5. Remove the video library and help center suggestion from the onboarding sequence (they can exist as resources, not as onboarding steps)

The simplified flow: verify → 3-field profile → one guided first action → checklist of 6 → triggered day-7 human outreach for stuck users.
