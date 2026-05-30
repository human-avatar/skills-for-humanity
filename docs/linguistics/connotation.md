# linguistics-connotation

> The gap between what a word means and what it does is where most communication misfires originate.

**Trigger:** `/linguistics-connotation`

---

## What it does

Audits key terms for the emotional register, political associations, and audience-specific valence they carry beyond their dictionary definitions — the connotative freight that determines how words land regardless of what they technically mean. Drawing on Steven Pinker's analysis of the "euphemism treadmill" and the pragmatics of word choice, this skill maps the gap between denotation and connotation, identifies where freight is amplifying or undermining the intended message, and generates replacement candidates with clear trade-off analysis.

---

## When to use

- "This word feels wrong but I can't explain why"
- A message is generating reactions you did not intend, despite the content being accurate
- You need to communicate the same content to audiences with different political or cultural associations
- You are choosing between synonyms and need to understand what each choice signals
- A term you use internally has acquired external connotations you are unaware of
- "Find me a better word for this"

---

## Example

**Input:**
> We're writing a change management communication for a major restructuring. Legal has approved the language but our HR director says it "doesn't feel right." Here's the key passage: "The company has identified inefficiencies in our current operating model. To address these and achieve necessary cost rationalisation, we will be eliminating a number of redundant roles. Affected employees will be provided with a structured offboarding process."

**Output:**

**Connotation Audit**

| Term | Denotation | Connotation | Freight type | Audience sensitivity | Assessment |
|---|---|---|---|---|---|
| "inefficiencies" | suboptimal processes | Implies people were performing badly; places blame on the workforce | Acquired (management jargon) | High for affected employees; neutral for investors | Undermining |
| "cost rationalisation" | reducing costs | Euphemistic management-speak; signals the company is hiding behind jargon | Intrinsic to register | High for general workforce; neutral for Finance | Undermining |
| "eliminating" | removing | Violent connotation; in HR contexts, feels dehumanising — "eliminating roles" reads as "eliminating people" | Intrinsic | Very high for anyone who has been or fears being made redundant | Undermining |
| "redundant roles" | positions no longer needed | "Redundant" has a technical meaning in UK employment law but a devastating personal connotation — to be called redundant is to be told you are surplus | Audience-specific (UK vs. US legal vs. personal) | Extremely high for employees; neutral for legal/Finance | Undermining |
| "structured offboarding process" | exit support programme | Corporate euphemism that signals the company is prioritising process over people; "offboarding" is borrowed from tech and feels cold | Acquired (tech HR jargon) | High for anyone not from a tech background | Undermining |
| "affected employees" | people losing their jobs | Impersonal; the passive construction ("affected") distances the company from agency | Intrinsic to passive register | High across audience | Undermining |

**Replacement Candidates**

**"inefficiencies in our current operating model" →**
- Current term signals: the workforce failed
- Candidate 1: "changes in our business priorities" — freight: forward-looking, neutral; gains: removes blame; costs: vague about cause
- Candidate 2: "the shape of the business has changed" — freight: honest about structural change; gains: dignified, explains without assigning fault; costs: may feel evasive to investors seeking accountability language
- Recommendation: "the shape of the business has changed" for internal communications; "changes in our strategic direction" for investor-facing versions

**"cost rationalisation" →**
- Current term signals: euphemism, management-speak, something being hidden
- Candidate 1: "reducing our cost base" — freight: direct, honest; gains: says what it means; costs: slightly blunter than the current register
- Candidate 2: simply name the business reason — "as the [X market] has contracted" or "as we complete our transition to [Y]" — freight: specific, honest; gains: tells people why, which is what they most need
- Recommendation: replace with the specific business reason wherever possible; direct description is more dignified than euphemism

**"eliminating redundant roles" →**
- Current term signals: violent, dehumanising
- Candidate 1: "closing a number of positions" — freight: neutral, administrative; gains: no violent or personal connotation; costs: still impersonal
- Candidate 2: "we are reducing our team size" — freight: honest, human-scale; gains: acknowledges this is about people; costs: slightly colloquial for formal communication
- Recommendation: "we are closing [N] positions" for formal/legal language; "we are reducing our team" for direct employee communication

**"structured offboarding process" →**
- Current term signals: cold, process-over-people, tech jargon
- Candidate 1: "exit support" — freight: practical, human; gains: says what it is without jargon; costs: still impersonal
- Candidate 2: "support for people leaving" — freight: direct, personal; gains: centers the person; costs: less formal
- Recommendation: "support for people who are leaving, including [specific support: severance, career counselling, reference letters]" — specificity is more reassuring than any label

**Register Consistency Assessment**
Overall register: formal corporate, varying between legal-technical and euphemistic-HR. This is the root of the HR director's unease — the passage combines legal precision ("structured offboarding process") with management euphemism ("cost rationalisation") with impersonal passives ("affected employees"). No single register is sustained. Recommendation: choose one register and hold it. For employee communications in a restructuring, a clear, direct, personal register consistently outperforms formal-corporate in maintaining trust and reducing rumour.

---

## Related skills

- [`/linguistics-framing`](framing.md) — Surface the frame these word choices are activating; connotation and framing problems often co-occur
- [`/linguistics-pragmatics`](pragmatics.md) — Analyze what the full text implies beyond what it says; connotation problems often generate unintended implicatures
- [`/communication-clarity-audit`](../communication/clarity-audit.md) — Audit the text for comprehension failures alongside connotation issues
