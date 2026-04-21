# Deploy Guide: GitHub → Cloudflare Pages

## Step 1 — Push to GitHub

```bash
cd ct-ari-website
git init
git add .
git commit -m "Initial CT-ARI website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ct-ari-website.git
git push -u origin main
```

Create the GitHub repo first at https://github.com/new (name: ct-ari-website, public or private).

---

## Step 2 — Connect Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages**
2. Click **Connect to Git** → authorize GitHub → select `ct-ari-website`
3. Set build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**

Cloudflare will build and deploy automatically. Every `git push` to `main` triggers a new deploy.

---

## Step 3 — Connect custom domain

1. In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**
2. Enter: `tineri-ari.md`
3. Cloudflare will auto-add the DNS record since your domain is already on Cloudflare

Done — your site will be live at https://tineri-ari.md

---

## Step 4 — Set up Decap CMS (content editor)

1. In `public/admin/config.yml`, replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
2. Go to https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**
   - Application name: `CT-ARI CMS`
   - Homepage URL: `https://tineri-ari.md`
   - Callback URL: `https://api.netlify.com/auth/done`
3. Install **Netlify Identity** as a free OAuth proxy: go to https://app.netlify.com, create a free site, enable Identity, add your GitHub OAuth credentials
4. Access the CMS at: `https://tineri-ari.md/admin`

> Note: Decap CMS OAuth is the only part that uses a free Netlify account as an auth proxy. No Netlify hosting is used.

---

## Step 5 — Add your documents

The site now renders the CT-ARI document pack directly from markdown pages in `src/pages/docs/`.
Edit or add documents there, then update the document index pages in `src/pages/ro/documente.astro` and `src/pages/ru/documente.astro` if you add more items.

---

## Step 6 — Verify the governance application feed

The public apply pages no longer use a hardcoded Google Form.

They hydrate the real governance application route from the Dopomoha public feed:
- `src/components/GovernanceApplyPage.astro`
- `src/data/meetingLaunch.ts`

Before go-live, verify:
1. `meetingLaunchConfig.governanceFeedUrl` points to the correct live body feed.
2. that feed returns a non-empty `applicationUrl`.
3. the fallback route still matches the live governance apply path for the same body.
