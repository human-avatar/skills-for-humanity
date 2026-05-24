# sensory-signal-detection

> Separates meaningful signal from background noise — finds what actually matters among everything present.

**Trigger:** `/sensory-signal-detection`

---

## What it does

Classifies information as strong signal, weak signal, or noise. Identifies the strong signals and their implications. Creates a manageable attention map from overwhelming information.

---

## When to use

- Overwhelmed with data or information
- "What actually matters here?"
- Too many indicators pointing in different directions
- Need to prioritize what to pay attention to

---

## Example

**Input:**
> We're trying to understand why user engagement is declining. We have: DAU is down 12%, time-in-app is down 8%, push notification CTR is down 22%, support tickets are up 15%, a forum thread of 40 users complaining about the new navigation, social mentions mentioning "confusing", power user cohort retention is unchanged, new user retention is down 18%.

**Output:**

**Signal classification:**

| Metric | Classification | Reasoning |
|---|---|---|
| DAU down 12% | Strong signal | Broad behavioral measure; hard to fake or mistake |
| Time-in-app down 8% | Supporting signal | Directionally consistent with DAU drop; confirms engagement, not just frequency |
| Push CTR down 22% | Weak signal | Could be notification fatigue, permission changes, or OS updates — not specific to product engagement |
| Support tickets up 15% | Strong signal | Active effort by users to seek help indicates real friction |
| Forum thread (40 users) | Weak signal | Self-selected vocal minority; directionally useful but not representative |
| Social mentions: "confusing" | Weak signal | Anecdotal; directionally consistent but low sample |
| Power user retention: unchanged | Strong signal | Power users are unchanged — this tells you what's NOT the problem |
| New user retention down 18% | Strong signal (key) | Most specific signal in the set; points to a specific population |

**The signal pattern:**

The critical insight is in what's moving vs. what isn't: **power user retention is unchanged but new user retention is down 18%.** This is the key signal. It means the product is working for people who already know how to use it, but is failing for new users who are trying to learn it.

This is consistent with the "confusing navigation" complaints — experienced users adapted; new users hit a wall.

**Noise to deprioritize:**

Push CTR decline could be unrelated to product engagement (iOS/Android permission changes have caused industry-wide CTR drops). Don't let it drive the analysis.

The forum thread and social mentions are consistent with the key signal but don't add new information — they illustrate the problem the data already found.

**Recommended focus:**
New user onboarding experience, specifically in the navigation areas that changed recently. The strong signal points to a new-user-specific problem, probably introduced by a recent change.
