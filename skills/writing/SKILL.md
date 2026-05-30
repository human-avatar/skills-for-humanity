---
name: writing
description: "Routes to the right writing skill for any fiction, non-fiction, or professional writing challenge. Use when you say 'my character feels flat', 'the story isn't working', 'this scene falls flat', 'the dialogue sounds wrong', 'the prose is clunky', 'the argument isn't landing', 'write a report', 'executive summary', 'the tone keeps shifting', 'line editing', 'my world feels thin', 'POV problems', 'inconsistency check', 'write copy', 'technical documentation', 'audience calibration', 'rhetorical analysis', or any time you have a writing problem but aren't sure which specific tool fits."
---

# Writing

Every writing problem has a name. Name it precisely, and the fix becomes obvious. The most common mistake is treating a structural problem as a prose problem, or a character problem as a plot problem — applying the wrong tool while the real issue goes unaddressed.

This routing skill reads your situation, identifies the problem type, and connects you to the right technique immediately.

---

## Your Process

### Step 1: Read the Situation

If the user hasn't described their writing challenge yet, ask:

> What's the writing problem? Paste the relevant passage, describe the situation, or tell me what isn't working.

Wait for their response before diagnosing.

---

### Step 2: Diagnose the Problem Type

**Framing check:** Confirm the specific writing challenge before continuing. State what you've identified — the content being worked on and its core problem type — in one sentence, then use `AskUserQuestion`:
- **Question:** "I'm reading this as: [your one-sentence framing of the specific writing challenge, content type, and what isn't working]. Is that right?"
- **Header:** "Framing"
- **Options:**
  - **Yes — proceed** — framing is correct
  - **Adjust** — one element is off; user will correct it before you continue
  - **Reframe** — different situation than read; incorporate the correction before proceeding

Read the situation and classify it against these problem clusters:

**Fiction craft** — The core problem is in the storytelling machinery: character psychology, plot architecture, scene structure, dialogue texture, world credibility, narrative arc, or point-of-view integrity.
→ Route to: `/writing-character-development`, `/writing-plot-structure`, `/writing-scene-construction`, `/writing-dialogue`, `/writing-worldbuilding`, `/writing-arc-design`, `/writing-pov`

**Continuity and consistency** — Something in the story contradicts itself: timeline errors, character knowledge violations, world-rule inconsistencies, physical continuity breaks.
→ Route to: `/writing-inconsistency-audit`

**Editing and revision** — The material exists but needs structural reordering, tonal coherence, sentence-level cleaning, prose quality elevation, or voice stabilisation.
→ Route to: `/writing-restructure`, `/writing-tone-alignment`, `/writing-line-editing`, `/writing-prose-elevation`, `/writing-voice-consistency`

**Professional and non-fiction** — A real-world document needs to be written or improved: a business report, marketing copy, technical documentation, analytical argument, or executive brief.
→ Route to: `/writing-report`, `/writing-copy`, `/writing-technical`, `/writing-argument`, `/writing-executive-summary`

**Rhetoric and audience** — The writing needs to be calibrated for a specific reader, or the rhetorical moves in a piece need to be surfaced and examined.
→ Route to: `/writing-audience-calibration`, `/writing-rhetoric`

---

### Step 3: Identify 3–4 Best-Fit Skills

**Before narrowing:** Show the complete set of candidate skills for the diagnosed cluster to the user first. Use `AskUserQuestion`:
- **Question:** "I've identified [N] skills in the [cluster name] cluster. Before I select the best fits, are there any you'd flag as especially relevant, or any angle I've missed?"
- **Header:** "Prioritise"
- **Options:**
  - **Proceed with your selection** — the set looks right
  - **Flag one** — user will name a specific skill to include
  - **Add a missing angle** — user will describe it

Within the most relevant cluster, identify the 2–4 skills that best match the specific problem. Use the routing guide below.

Prioritize skills that match the **type of output** the user needs:
- They need a diagnosis → audit skills (`/writing-inconsistency-audit`, `/writing-pov`, `/writing-scene-construction`)
- They need a rebuild → design skills (`/writing-plot-structure`, `/writing-arc-design`, `/writing-character-development`)
- They need a revision → editing skills (`/writing-restructure`, `/writing-line-editing`, `/writing-tone-alignment`)
- They need a produced piece → production skills (`/writing-report`, `/writing-executive-summary`, `/writing-copy`)
- They need a rhetorical read → analysis skills (`/writing-rhetoric`, `/writing-argument`)

---

### Step 4: Present Options

Use the `AskUserQuestion` tool to present your diagnosis. Construct options dynamically based on the 2–3 best-fit skills you identified:

- **Question:** "Here's what I think you need. Which fits your situation best?"
- **Header:** "Skill"
- **Options:** (build dynamically — 2–3 skill options plus a fallback)
  - Label: [skill command name], Description: [one sentence on why this fits and what it produces]
  - (repeat for each diagnosed skill, up to 3)
  - Label: "More options", Description: "Show all skills in the Writing category"

Proceed based on their selection.

---

### Step 5: Execute

When the user picks an option:
- **A selected skill:** Run it immediately. Do not ask them to type another command. Use the context already gathered as the input.
- **More options:** Show the full skill table for the Writing category. Let them pick from the complete list, then execute.

---

## Routing Guide

| Situation | Top skills to offer |
|---|---|
| "My character feels flat / doesn't feel real" | `/writing-character-development` |
| "The story isn't working / the plot sags" | `/writing-plot-structure`, `/writing-arc-design` |
| "This scene isn't working / feels flat" | `/writing-scene-construction`, `/writing-dialogue` |
| "The dialogue sounds wrong / on the nose" | `/writing-dialogue`, `/writing-character-development` |
| "The world feels thin / like a backdrop" | `/writing-worldbuilding` |
| "The arc feels unearned / the ending doesn't land" | `/writing-arc-design`, `/writing-plot-structure` |
| "POV problems / head-hopping / narration inconsistent" | `/writing-pov`, `/writing-inconsistency-audit` |
| "Contradictions / continuity errors" | `/writing-inconsistency-audit` |
| "The piece is in the wrong order / buries the lede" | `/writing-restructure`, `/writing-executive-summary` |
| "The tone keeps shifting / voice drift" | `/writing-tone-alignment`, `/writing-voice-consistency` |
| "The sentences are clunky / wordy / passive" | `/writing-line-editing` |
| "The prose is flat / competent but not compelling" | `/writing-prose-elevation` |
| "Different contributors / brand voice inconsistent" | `/writing-voice-consistency` |
| "Write or fix a report / briefing document" | `/writing-report`, `/writing-executive-summary` |
| "Marketing copy / landing page / ad copy" | `/writing-copy`, `/writing-audience-calibration` |
| "Technical documentation / API docs / user guide" | `/writing-technical`, `/writing-audience-calibration` |
| "Build an argument / op-ed / make the case" | `/writing-argument`, `/writing-rhetoric` |
| "Executive summary / 1-page brief for leadership" | `/writing-executive-summary`, `/writing-report` |
| "Write for a specific audience / calibrate" | `/writing-audience-calibration` |
| "Rhetorical analysis / what is this piece doing" | `/writing-rhetoric`, `/writing-argument` |

---

## Notes

- **Don't confuse problem types.** A flat character is almost never a prose problem — it's a character-design problem. Line-editing flat prose won't fix it. Diagnose the layer first.
- **Structure before style.** If the piece has structural problems, fix those before applying prose elevation or line editing. Rewriting sentences in the wrong order is wasted work.
- **The context gathered in Step 1 is the input.** When the user selects a skill, run it on that context — they shouldn't have to re-explain the situation.
- **If the situation spans multiple problem types** (e.g., a scene that has both dialogue problems and structural problems), present both skills and let them choose the highest-leverage starting point.
