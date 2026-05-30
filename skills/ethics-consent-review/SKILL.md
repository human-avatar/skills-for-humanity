---
name: ethics-consent-review
description: "Review a UX flow, data practice, or communication pattern to verify that user consent is genuine — informed, voluntary, and meaningful. Use during design or implementation of checkout flows, onboarding, notification settings, permissions requests, terms of service, dark patterns, or any feature where users make choices about what they share or agree to. TRIGGERS: 'consent review', 'is this dark pattern', 'check this onboarding flow', 'is this consent genuine', any UX that involves users agreeing to something, sharing data, or opting in/out."
---

# Ethics Consent Review

Consent is not a checkbox. It is a meaningful act by a person who understands what they're agreeing to, genuinely has the option to decline, and isn't being manipulated into compliance.

Most consent failures aren't malicious — they're the accumulated result of copy-paste terms, optimised conversion flows, and defaults set by people who never questioned them. This review surfaces those failures before they become patterns users resent or regulators flag.

---

## The Three Tests

Every consent decision must pass three tests:

**Informed** — Does the person genuinely understand what they're agreeing to? Not technically (buried in ToS), but practically. If you explained it plainly in conversation, would they be surprised?

**Voluntary** — Does the person genuinely have the ability to decline? Is declining as easy as accepting? Are there consequences for declining that make the choice effectively coerced?

**Meaningful** — Does the person's choice actually matter? Is there genuine optionality, or is the "choice" cosmetic — the default is set to the outcome the business wants and the friction to change it is high?

---

## Your Process

**Step 1: Map the consent moment**
What specifically is the user being asked to consent to? When in the flow does this happen? What is the default? What happens if they decline?

**Framing check:** Confirm the ethical situation and the parties affected before continuing. State what you've identified — the specific consent moment, the UX or data practice under review, and who is giving consent — in one sentence, then use `AskUserQuestion`:
- **Question:** "I'm reading this as: [your one-sentence framing of the specific consent moment and context]. Is that right?"
- **Header:** "Framing"
- **Options:**
  - **Yes — proceed** — framing is correct
  - **Adjust** — one element is off; user will correct it before you continue
  - **Reframe** — different situation than read; incorporate the correction before proceeding

**Step 2: Apply the Informed test**
- Is the language plain enough for a non-expert to understand?
- Is the material information prominent, or buried in fine print?
- Is the full scope of what's being agreed to clear — or is it vague enough to cover future practices the user can't anticipate?
- Would a reasonable user be surprised by how this consent is actually used downstream?

**Step 3: Apply the Voluntary test**
- What happens if the user declines? Do they lose access to the core service? (If so, consent is coerced.)
- Is declining as visually and mechanically easy as accepting?
- Is there pressure — time limits, repeated prompts, fear language — that reduces voluntary choice?
- Are there bundled consents (agreeing to X requires also agreeing to Y) that prevent granular choice?

**Step 4: Apply the Meaningful test**
Review for dark patterns — design choices that steer users toward a specific outcome regardless of their preference:
- **Confirmshaming** — labelling the decline option pejoratively ("No thanks, I don't want to save money")
- **Roach motel** — easy to opt in, deliberately difficult to opt out
- **Hidden defaults** — default to the business-favourable option, buried change option
- **Misdirection** — visual hierarchy or motion that draws attention away from the decline option
- **Forced continuity** — consent obtained once treated as permanent consent for expanding uses

**Step 5: Assess the power dynamic**
Is this a context where users have genuine alternatives? Can they use a competing product without this consent? Are any users in a particularly vulnerable position (under duress, time pressure, low digital literacy) where their ability to exercise real choice is diminished?

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool. State your interpretation of the situation in 1–2 sentences — what is being analyzed and what the core question is — then ask:

- **Question:** "My read: [your 1–2 sentence interpretation]. How do you want to proceed?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Dark patterns only** — Flag manipulative design elements specifically
  - **Reframe** — The read is off; correct it and the analysis will follow the corrected framing

Proceed based on their selection. If the user reframes, incorporate the correction before running any analysis.

## Output Format

**Flow Being Reviewed:**
[What UX, what consent moment, what the default is]

**Informed Test**
- Plain language: ✅ / ⚠️ / ❌ — [finding]
- Material information prominent: ✅ / ⚠️ / ❌ — [finding]
- Scope clarity: ✅ / ⚠️ / ❌ — [finding]
- Surprise test: ✅ / ⚠️ / ❌ — [finding]

**Voluntary Test**
- Declining is easy: ✅ / ⚠️ / ❌ — [finding]
- No coercion: ✅ / ⚠️ / ❌ — [finding]
- Granular choice: ✅ / ⚠️ / ❌ — [finding]

**Meaningful Test**
Dark patterns detected:
- [Pattern name if present]: ✅ None / ⚠️ Minor / ❌ Significant — [finding]

**Power Dynamic**
[1–2 sentences: do users have genuine alternatives; any vulnerability concerns]

**Verdict**
[Is this consent genuine? What are the specific problems if any?]

**Recommended Changes**
- [Specific fix per failing item]

---

## Notes

The standard is not "legally defensible consent." It is "consent a reasonable person would consider genuine." Those are not the same standard, and in the long run, the second one matters more for user trust.

Where dark patterns are found, name them specifically. Vague concerns are easy to dismiss; named patterns with clear examples are not.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Consent reviewed. What's next?"
- **Header:** "Next"
- **Options:**
  - `/ethics-empathy-circle` — Apply empathy to those whose consent is in question
  - `/communication-audience-modeling` — Model how to communicate consent requirements
  - `/ethics-impact-scan` — Scan for impact on those whose consent was not obtained
  - **Done** — Wrap up and synthesise what we have so far
