# ethics-consent-review

> Reviews a UX flow or data practice to verify that user consent is genuine — informed, voluntary, and meaningful.

**Trigger:** `/ethics-consent-review`

---

## What it does

Applies three tests to a consent moment: Informed (does the user genuinely understand what they're agreeing to?), Voluntary (can they actually decline without meaningful penalty?), and Meaningful (is the choice real or cosmetic?). Audits for dark patterns — specific design choices that steer users toward a business-preferred outcome regardless of their preference. The standard is genuine consent, not legally defensible consent.

---

## When to use

- "Consent review on this"
- "Is this a dark pattern?"
- "Check this onboarding flow"
- "Is this consent genuine?"
- Any UX involving users agreeing to something, sharing data, or opting in/out
- Before shipping notification settings, permissions requests, or checkout flows

## When NOT to use

- For auditing data collection practices beyond consent — use `ethics-data-audit`
- For full ethics analysis of a product decision — use `ethics-check`
- For pre-ship impact assessment of a feature — use `ethics-impact-scan`

---

## Example

**Input:**
> Review our email marketing consent in the signup flow: at the end of a 5-step signup form, there's a pre-checked box that says "I agree to receive helpful tips, product updates, and occasional promotions from [Company]. You can unsubscribe anytime." The checkbox is small, below the main "Create Account" button, in grey text. Users who uncheck it get a pop-up saying "Are you sure? You might miss important updates." Clicking "Yes, uncheck" proceeds normally.

**Output:**

---

**Flow Being Reviewed:**
Email marketing consent via pre-checked checkbox at end of 5-step signup. Positioned below the primary CTA in low-contrast grey text. Uncheck triggers a confirmshaming pop-up.

---

**Informed Test**
- Plain language: ✅ — "helpful tips, product updates, and occasional promotions" is understandable
- Material information prominent: ❌ — small, grey text below the primary CTA is designed to not be read; material information should not require hunting
- Scope clarity: ⚠️ — "occasional promotions" is vague; users cannot predict frequency or volume
- Surprise test: ⚠️ — many users will not notice the checkbox at all; those who do receive unexpected marketing will be surprised, because they don't remember consenting

**Voluntary Test**
- Declining is easy: ⚠️ — technically possible but friction-laden (two-step process: uncheck → confirmshaming pop-up → confirm uncheck)
- No coercion: ❌ — "Are you sure? You might miss important updates" is coercion. It uses fear of loss to pressure users back toward the checked state. This is not neutral — it's active pressure.
- Granular choice: ❌ — "tips, updates, and promotions" are bundled. Users cannot consent to product updates but decline promotions.

**Meaningful Test**

Dark patterns detected:

- **Hidden defaults** — pre-checked box with low visual weight is a textbook hidden default. The business-favoured outcome (subscribed) is the default; changing it requires noticing the checkbox and overcoming friction. ❌ Significant
- **Confirmshaming** — "Are you sure? You might miss important updates" is a named dark pattern: the decline option is labelled pejoratively to create emotional discomfort. ❌ Significant
- **Misdirection** — low-contrast grey text below the primary button draws attention away from the consent moment. ⚠️ Moderate

**Power Dynamic:**
Users are at the end of a 5-step signup process (invested time, entering credit card or personal details, focused on completing the task). Decision fatigue and task completion bias work against careful consent evaluation. This is a context where the power dynamic disadvantages the user.

**Verdict:**
This consent is not genuine. It is technically disclosed but practically invisible, and the confirmshaming actively pressures users who notice the checkbox to reverse their decision. Users who end up subscribed will include many who did not consciously consent.

**Recommended Changes:**

1. **Remove pre-check** — unchecked by default is the minimum for genuine consent on optional marketing communications
2. **Remove confirmshaming pop-up** — a user who unchecks a box has expressed their preference; confirming it twice is coercion
3. **Move to distinct consent step** — if this is genuinely important to the business, give it its own moment with appropriate weight, not a hidden checkbox at step 5
4. **Separate update consent from promotions consent** — allow users to opt into product updates (high value, low friction) separately from promotional email (the source of most opt-outs)
