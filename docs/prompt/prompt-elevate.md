# prompt-elevate

> Takes any prompt and makes it substantially better — not just polished wording, but structural fixes that change how Claude responds.

**Trigger:** `/prompt-elevate`

---

## What it does

Analyzes a prompt for structural weaknesses — unclear intent, missing "why," wrong format specification, assumptions left implicit, steps out of order — then rewrites using Anthropic's best practices for prompting Claude. Delivers three things: the improved prompt ready to copy and use, a changelog of what changed and why, and the single most impactful change made.

---

## When to use

- "Improve this prompt"
- "This prompt isn't working"
- "Help me write a prompt for X"
- "Make this better"
- Any time Claude isn't behaving as expected and you want to fix the instructions
- Before using a prompt in production or sharing it with a team

## When NOT to use

- This skill is the entire `prompt` category — it's the only tool here

---

## Example

**Input:**
> "Analyze this email and tell me if it's good."

**Output:**

---

### Improved Prompt

```
You are a communication expert reviewing a business email.

Analyze the email below and provide a structured assessment covering:

1. **Clarity** — Is the main point immediately obvious? Where might the reader be confused?
2. **Ask** — Is there a clear call to action? Does the reader know exactly what to do next?
3. **Tone** — Is the tone appropriate for the relationship and context?
4. **Length** — Is anything redundant or missing?

For each area, give a specific finding and, where there's an issue, a one-sentence suggested fix.

Close with a **Priority edit** — the single change that would most improve this email.

<email>
[paste email here]
</email>
```

---

### What Changed

- **Added a role** — "You are a communication expert" focuses Claude's expertise and tone. Without a role, responses can be generic rather than professionally calibrated.
- **Replaced "good" with specific criteria** — "Good" is undefined; Claude will guess what it means and give a broad response. The numbered criteria tell Claude exactly what dimensions to evaluate.
- **Specified the output format** — The original gets an essay; the rewrite gets a structured assessment with actionable findings. The "Priority edit" request ensures something actionable emerges.
- **Added XML tags for the email** — Separating the email content from the instructions prevents Claude from blending them and makes the prompt extensible (swap out the email without touching the instructions).
- **Changed from evaluation to structured assessment** — "Tell me if it's good" invites a verdict; the rewrite asks for specific findings and suggested fixes, which produce more useful output.

### Quick Take

The most impactful change: replacing "if it's good" with four specific evaluation criteria — it converts a vague request into a structured task and eliminates the ambiguity that was the root of the original prompt's weakness.
