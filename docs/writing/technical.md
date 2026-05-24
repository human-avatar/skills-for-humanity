# `/writing-technical`

> *The test is simple: can a reader with the assumed knowledge execute the task using only this document?*

**Category:** [Writing](README.md) · **Command:** `/writing-technical`

---

## What it does

Writes and audits technical documentation, API docs, user guides, and specifications for audience calibration, completeness, sequence, precision, and example coverage. The single test that drives every output: can the assumed reader complete the task without leaving the document?

---

## When to use it

- Documentation confuses users who have the assumed knowledge
- Users report "missing steps" or "it doesn't explain how to actually do X"
- An API, SDK, or library needs documentation that a developer can follow without prior knowledge of the system
- You're writing documentation and want to design it for the reader's actual knowledge from the start
- Technical docs have been copy-edited but still generate support tickets for information that should be in the docs
- A specification is ambiguous enough that engineers are implementing it differently

---

## When *not* to use it

**Don't use this for reference documentation.** Reference documentation (API endpoints listed with parameters, configuration option tables) has a different structure than task-oriented documentation. Reference docs are looked up, not read sequentially. The completeness test is different: can a developer find the parameter they need? Not: can a developer complete an end-to-end task?

**Don't use this when the product itself is not ready to document.** Documentation written for an unstable API will be wrong before it is published. If the implementation is still changing, the documentation work will compound. Write documentation when the interface is stable.

The nearest neighbor: [`/writing-audience-calibration`](audience-calibration.md) — which profiles the assumed reader and identifies knowledge calibration failures. Audience calibration is the first and most important decision in technical writing; everything else depends on correctly identifying what the reader knows and doesn't know. For documentation calibration problems specifically, run audience-calibration first.

---

## Full example

**Input:**
> We have documentation for authenticating with our API using OAuth 2.0. Developers say it's confusing and they can't complete the authentication flow without looking elsewhere. Here is the documentation:
>
> **Authentication**
>
> Our API uses OAuth 2.0 for authentication. To authenticate, register your application in the developer portal to receive your client ID and client secret. Include your access token in the Authorization header as a Bearer token.
>
> *Authorization: Bearer {your_access_token}*
>
> Access tokens expire after 1 hour. Use the refresh token endpoint to obtain a new access token.

---

**Output:**

### Technical Writing Audit

**Audience Calibration:**

The documentation assumes OAuth 2.0 knowledge — specifically: it assumes the developer knows what the OAuth 2.0 flow is, what the difference between an access token and a refresh token is, and how to obtain an access token (a multi-step process that is entirely absent from this documentation).

If the assumed reader knows OAuth well, this documentation is a useful reference reminder. If the assumed reader is a developer who has heard of OAuth but hasn't implemented it before, this documentation is nearly useless — the most important thing (how to get the access token) is not here.

Calibration verdict: Miscalibrated toward advanced users. Most developers integrating with a new API have not recently implemented OAuth and need the flow explained.

---

**Completeness Gaps:**

The most critical gap: the documentation names the access token but does not explain how to obtain one.

OAuth 2.0 token acquisition requires multiple steps that are entirely absent:

1. Registration (mentioned) — register in developer portal, receive client ID and client secret ✓
2. **Authorization request** — MISSING. The developer must redirect the user to the authorization endpoint with specific parameters (client_id, redirect_uri, scope, response_type). This is not mentioned.
3. **Authorization code exchange** — MISSING. After the user authorizes, they are redirected back with an authorization code. The developer must exchange this code for an access token via a POST request to the token endpoint. This entire step is absent.
4. **Using the token** — documented (Bearer header) ✓
5. **Refreshing the token** — mentioned but incomplete (the refresh token endpoint URL is not provided, the request format is not shown)

The reader is told they need an access token and told how to use it. They are not told how to get it. This is a completeness failure that makes the documentation unusable for its primary audience.

---

**Sequence Issues:**

Current sequence: registration → use token → refresh token

Correct sequence: registration → authorization request → code exchange → use token → refresh token

The documentation skips steps 2 and 3 entirely. A developer following this documentation in order will: register their application, then look for where to "include the access token" — and have no access token to include.

---

**Precision Flags:**

1. "Use the refresh token endpoint to obtain a new access token" — which endpoint? URL not provided.
   > Fix: "Send a POST request to `https://api.example.com/oauth/token` with your refresh token in the request body (see Refresh Token example below)."

2. "Register your application in the developer portal" — where is the developer portal?
   > Fix: Include the URL or a link.

3. "Include your access token in the Authorization header as a Bearer token" — this is correct but the example uses `{your_access_token}` as a placeholder without specifying the format. What exactly does a valid access token look like? Is it a JWT? An opaque string?
   > Fix: Show a realistic example token format in the example (even if it's a placeholder, it should look like the real thing in structure).

---

**Missing Examples:**

1. The authorization request: no example URL showing the full request with parameters (client_id, redirect_uri, scope, response_type=code).

2. The token exchange request: no example POST request showing the body parameters and expected response format.

3. The refresh token request: mentioned without an example.

4. Error responses: no examples of what authentication failures look like (401 Unauthorized, expired token response format). A developer who gets an error has no documentation to tell them what it means.

---

**Rewrite — Worst Offending Section:**

The entire authentication section needs to be rebuilt. Here is the corrected version:

---

**Authentication**

Our API uses OAuth 2.0 authorization code flow. The process has four steps.

**Step 1: Register Your Application**

Log in to the [developer portal](https://developers.example.com) and create a new application. You will receive:
- A `client_id` (public identifier for your app)
- A `client_secret` (keep this private — treat it like a password)
- A redirect URI you specify (where users are sent after authorizing)

**Step 2: Request Authorization**

Redirect your user to the authorization URL:

```
https://api.example.com/oauth/authorize
  ?client_id=YOUR_CLIENT_ID
  &redirect_uri=YOUR_REDIRECT_URI
  &scope=read write
  &response_type=code
```

After the user approves, they are redirected to your `redirect_uri` with a `code` parameter:

```
https://yourapp.com/callback?code=AUTH_CODE_HERE
```

**Step 3: Exchange the Code for an Access Token**

Send a POST request to the token endpoint:

```
POST https://api.example.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=AUTH_CODE_HERE
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&redirect_uri=YOUR_REDIRECT_URI
```

Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "8xLOxBtZp8"
}
```

**Step 4: Make Authenticated Requests**

Include the access token in the `Authorization` header:

```
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Refreshing an Expired Token**

Access tokens expire after 1 hour. To get a new one without requiring the user to re-authorize:

```
POST https://api.example.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
&refresh_token=8xLOxBtZp8
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
```

---

The rewrite adds: the missing steps 2 and 3, a concrete example for every request, the actual endpoint URLs, example responses showing the token format, and the refresh endpoint with example.

---

## Related skills

- [`/writing-audience-calibration`](audience-calibration.md) — Profile the assumed reader before writing; all other decisions depend on this
- [`/writing-restructure`](restructure.md) — Documentation often needs reordering, especially moving prerequisites before the steps that need them
- [`/writing-line-editing`](line-editing.md) — Technical writing often suffers from passive voice and nominalisation; final pass after content is complete
