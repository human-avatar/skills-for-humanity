# design-user-needs

> Finds what people actually need, beneath what they say they want.

**Trigger:** `/s4h-design-user-needs`

---

## What it does

Applies jobs-to-be-done decomposition and latent need mapping to separate the real need from the stated request. People frame problems as solutions — "I need a dashboard," "give me notifications" — and taking these at face value leads to building the wrong thing precisely. This skill surfaces the functional, emotional, and social jobs underlying the request, examines what current workarounds reveal, and produces a design target stated as a need rather than a solution.

---

## When to use

- "What do users actually need here?"
- The stated requirement feels like a solution to a problem that hasn't been named
- User research has produced a list of requested features and you want to find the underlying need each one represents
- A design has been built and users aren't engaging with it — the real need may have been missed
- Starting a new design and want to make sure the brief is solving the right problem

---

## Example

**Input:**
> We're redesigning our project management tool. Users keep asking for: better search, a Gantt chart view, more notification controls, and a way to see who's responsible for what. We're not sure which to prioritise or whether we're solving the right things.

**Output:**

**Stated requests → Jobs-to-be-done decomposition:**

**"Better search"**

The stated request is a solution. What job is it hired to do?

- *Functional job:* Find something specific quickly when I remember it exists but can't locate it through navigation. The underlying problem is not search quality — it's that users are using search as a fallback when navigation fails. Better search may be treating a symptom.
- *Emotional job:* Feel confident I haven't missed something important; not feel anxious that something exists that I can't find.
- *Social job:* Not look disorganised in front of my team by not knowing the status of a project.

**Real need:** Reliable access to project state without depending on perfect memory of where things live.

---

**"Gantt chart view"**

Gantt charts are a solution — a specific visual representation. What job is it hired to do?

- *Functional job:* See dependencies between tasks and understand which things must happen before others can start. Also: communicate a project timeline to stakeholders in a form they'll recognise.
- *Emotional job:* Feel in control of the project; see it as a coherent whole rather than an undifferentiated list.
- *Social job:* Show up to a client or exec meeting with something legible — Gantt is a shared visual language for "project is under control."

**Real need:** Two separate jobs that may require two separate designs: (1) understanding dependencies for planning; (2) communicating timeline to stakeholders. A Gantt serves both, but so might simpler alternatives for each individually.

---

**"More notification controls"**

- *Functional job:* Receive relevant updates without being interrupted by irrelevant ones.
- *Emotional job:* Feel in control of my attention; not feel harassed or overwhelmed.
- *Social job:* Not miss something that makes me look uninformed — but also not respond to something that signals I'm micromanaging.

**Real need:** Intelligent filtering that surfaces what's relevant to me specifically, not just "more controls" (which puts the burden of configuration on the user).

---

**"See who's responsible for what"**

- *Functional job:* Know who to go to for a decision or an update without having to ask around.
- *Emotional job:* Feel that the project is organised; feel confident that things are owned.
- *Social job:* Avoid blame when things slip — "I didn't know who to ask" — and hold others accountable clearly.

**Real need:** Clear accountability at a glance, without navigating to each task individually.

---

**Current workarounds and what they reveal:**

Teams are maintaining a separate spreadsheet to track task ownership and a project calendar in Google Sheets for timeline visibility. This reveals: (1) the tool doesn't make ownership legible enough to replace a spreadsheet; (2) timeline communication is happening outside the tool entirely. Both are latent needs that have been satisfied by workaround — meaning users have accepted that the tool doesn't serve these jobs.

**Latent needs identified:**

- Ownership visibility without needing to open each task — *confidence: high* (workaround evidence)
- Timeline view that can be shared with non-users (stakeholders) — *confidence: high* (workaround evidence)
- Smarter notification relevance filtering based on role/relationship to a task — *confidence: medium*
- Search that works as a recovery mechanism when navigation fails, rather than a replacement for it — *confidence: high*

**Design targets (ordered by evidence strength):**

1. Make accountability legible at the project level without navigation — this is the highest-evidence unmet need, confirmed by workaround
2. Enable timeline communication to stakeholders — Gantt may be the right answer, but the job is communication, not chart type
3. Notification relevance, not notification controls — design the filtering intelligence, not the settings panel
4. Search as navigation recovery — improve navigability first; search is a fallback

---

## Related skills

- [`/s4h-design-constraints`](design-constraints.md) — once the real need is clear, map what constraints define the solution space
- [`/s4h-design-iteration`](iteration.md) — structure the prototype-test cycle to validate whether a design direction serves the real need
- [`/s4h-communication-audience-modeling`](../communication/audience-modeling.md) — for deeper analysis of different user segments and how their needs differ
