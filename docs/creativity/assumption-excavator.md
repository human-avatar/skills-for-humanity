# creativity-assumption-excavator

> Surfaces the hidden assumptions that make a problem seem harder — or different — than it is.

**Trigger:** `/s4h-creativity-assumption-excavator`

---

## What it does

Lists every assumption embedded in the current problem framing, challenges each one, and identifies the assumption that — if wrong — would most change the approach. This is the prerequisite skill: run it when the ground itself might be wrong.

---

## When to use

- A problem feels intractable despite trying multiple approaches
- Multiple solutions have failed for unclear reasons
- Something "obvious" keeps producing unexpected results
- Before using any other creative tool when you suspect the problem framing is off
- "I keep solving this but it keeps coming back"

## When *not* to use

- You're confident in the problem framing and need to generate solutions → [lateral-thinking](lateral-thinking.md)
- You need options before evaluating → [alternatives](alternatives.md)

---

## Example

**Input:**
> We need to improve developer onboarding. Our time-to-first-API-call is 47 minutes and industry average is reportedly under 20. We've tried better docs, a quickstart guide, and interactive examples. Nothing has moved the number significantly.

**Output:**

**Assumption inventory:**

| Assumption | Challenge |
|---|---|
| 47 minutes is the problem to solve | What if 47 minutes is correct for our product's actual complexity? The "industry average" may reflect simpler APIs. |
| Time-to-first-call is the right metric | What if developers who take 47 minutes are more successful long-term than ones who get to first-call in 12 minutes by copying a snippet they don't understand? |
| Developers want to get to first call faster | Some developers prefer thorough understanding before touching an API. Speed may not be their goal. |
| The docs/quickstart are the bottleneck | What if most of the 47 minutes is environment setup, not reading? The interventions tried all address comprehension, not setup friction. |
| The industry benchmark is comparable | Are we measuring the same thing? First authenticated call? First meaningful call? |
| Onboarding is primarily a documentation problem | What if it's an SDK problem — key language bindings are missing or have poor ergonomics? |
| "Improved" means faster | What if improved means more developers succeeding long-term, even if first-call time doesn't move? |

**Load-bearing assumption most worth testing:**
*The bottleneck is comprehension, not setup.* Every intervention so far has been documentation — but if the real friction is environment setup (auth, local config, dependency installation), none of those would move the metric. A 15-minute session recording watching 5 developers attempt onboarding cold would answer this definitively.

**Reframe that changes everything:**
If the bottleneck is setup, the right intervention is a zero-install sandbox or an improved SDK with better defaults — not better docs. The same 47 minutes spent reading is evidence of a docs problem; 47 minutes spent fighting configuration is evidence of a different problem entirely.

**Recommended next step:**
Watch 5 developers onboard cold. Time each phase separately. The distribution of where time goes will determine which tool to use next.
