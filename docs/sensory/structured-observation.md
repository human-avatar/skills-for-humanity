# sensory-structured-observation

> Applies disciplined observation to a situation — suspending interpretation to see what's actually there before deciding what it means.

**Trigger:** `/sensory-structured-observation`

---

## What it does

Separates observation from interpretation by requiring raw observation (what can be directly seen, heard, or read) before any inference is generated. Observes at three levels — events, patterns, absences — prioritizes surprising or incongruent findings, then generates competing interpretations and identifies the most testable one. Most valuable when you feel you already understand a situation — that feeling is usually a sign that interpretation has overtaken observation.

---

## When to use

- "Observe this carefully"
- "Structured observation"
- "What do you actually see here?"
- "Look more carefully"
- "Suspend interpretation"
- Before a diagnosis, design review, or strategic analysis — especially when the current understanding feels certain
- When previous interventions didn't work as expected

## When NOT to use

- For excavating specifics from an existing abstract summary — use `sensory-detail-mining`
- For detecting weak signals in ambiguous data — use `sensory-signal-detection`
- For auditing assumptions in a plan or strategy — use `creativity-assumption-excavator`

---

## Example

**Input:**
> Observe this user session transcript: a new user signs up, lands on the dashboard, sits idle for 8 seconds, clicks the "Reports" tab, immediately clicks the back button, spends 40 seconds on the dashboard without clicking anything, then starts clicking around the "Team" tab — opens 3 different sub-pages in the Team section in 45 seconds. Then closes the browser.

**Output:**

---

**Target:** New user session, first login, duration ~2 minutes

---

### Observations

| Level | Observation (no interpretation) |
|-------|----------------------------------|
| Event | User lands on dashboard; no action for 8 seconds |
| Event | First deliberate navigation: clicks "Reports" |
| Event | Immediately clicks back from Reports — less than 3 seconds elapsed |
| Event | Returns to dashboard; no clicks for 40 seconds |
| Event | Navigates to "Team" tab |
| Event | Opens 3 sub-pages within "Team" in 45 seconds |
| Event | Session ends — browser closed |
| Pattern | User's only sustained engagement occurred in the Team section |
| Pattern | Two periods of non-interaction on the dashboard (8s and 40s) — dashboard does not prompt action |
| Pattern | Quick exit from Reports suggests it either didn't match expectation or had nothing actionable immediately visible |
| Absence | No interaction with the dashboard's primary content/widgets |
| Absence | No interaction with the main CTA (if one exists on the dashboard) |
| Absence | No return to Reports after the Team exploration |
| Absence | Session ended without completing any obvious setup or task |

---

### Surprising or Incongruent Observations

- **Reports was the first deliberate click, but the user left in under 3 seconds.** Reports being the first click suggests it was expected or familiar — possibly the reason for signing up. The immediate exit is incongruent with that intent. Something on the Reports page did not match what the user expected to see.
- **The 40-second idle on the dashboard after leaving Reports.** The user did not leave the product — they returned to the dashboard. This suggests consideration, not abandonment. What happens during those 40 seconds is the key unknown: were they reading the dashboard, waiting for something to load, or uncertain what to do?
- **Three sub-pages opened in Team in 45 seconds.** This is the only rapid, sequential exploration in the session. It suggests genuine interest or search behavior — looking for something specific.

---

### Interpretations per Key Observation

| Observation | Interpretation A | Interpretation B |
|-------------|-----------------|-----------------|
| Reports clicked first, exited immediately | Reports is where the user expected to start; page was empty (no existing reports yet) and provided no guidance on what to do next | Reports requires setup that the user doesn't yet understand is required; they see nothing actionable |
| 40-second idle on dashboard | User is reading or considering; dashboard provides orientation | User is uncertain where to go and the dashboard offers no clear next step |
| Three Team sub-pages in 45 seconds | User is looking for something specific (a team member, a setting, an invite function) | User is exploring to understand the product's scope; curiosity-driven rather than task-driven |

---

### Most Testable Interpretation

**"Reports was empty at first login and displayed no empty-state guidance, causing the user to leave immediately — not because of disinterest but because there was nothing to do."**

Prediction: If this interpretation is correct, then (a) users who come from a demo or who are invited by an existing user (and thus see populated data from day one) will have a significantly longer time-on-Reports at first login, and (b) adding an empty state with a specific first action ("Create your first report" or import prompt) will reduce the Reports early-exit rate.

This is falsifiable in 1 week with backend data on Reports first-session behavior segmented by user type, and testable in 2 weeks with an empty-state A/B test.
