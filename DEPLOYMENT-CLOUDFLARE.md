# Deploying Cosmos Atlas to Cloudflare Pages (Free)

No domain purchase, no paid plan, no CLI tools required. This uses Cloudflare Pages' free tier and its
direct GitHub integration.

## Step 1 — Push the project to GitHub

If you haven't already:

1. Create a free account at **github.com**.
2. Create a new **public** repository (e.g. `cosmos-atlas`) — leave README/gitignore/license unchecked,
   since this project already has them.
3. From the repository page, use **"uploading an existing file"** and drag in everything from inside this
   project folder (not the folder itself — its contents: `app`, `components`, `data`, `package.json`, etc.).
4. Commit the upload.

## Step 2 — Create a Cloudflare account

1. Go to **dash.cloudflare.com** and sign up (free).
2. No credit card is required for Cloudflare Pages' free tier.

## Step 3 — Create a Pages project

1. In the Cloudflare dashboard sidebar, go to **Workers & Pages**.
2. Click **Create** → **Pages** tab → **Connect to Git**.
3. Authorize Cloudflare to access your GitHub account, then select your `cosmos-atlas` repository.

## Step 4 — Build settings

Cloudflare will ask for a framework preset and build configuration. Set:

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`

These match `output: "export"` in `next.config.js`, which makes this project a plain static site — no
Cloudflare-specific adapter or Workers runtime needed.

## Step 5 — Environment variables

None are required. Leave this section empty and continue.

## Step 6 — Deploy

Click **Save and Deploy**. Cloudflare will install dependencies, run the build, and publish the `out`
folder. This usually takes one to a few minutes.

## Step 7 — Get your live URL

Once deployed, Cloudflare gives you a URL like:

```
https://cosmos-atlas.pages.dev
```

or `https://cosmos-atlas-xyz.pages.dev` if that name is taken — that's your live, public, permanently-free
site.

## Step 8 — Future updates

Every time you push a change to the `main` branch on GitHub, Cloudflare Pages automatically rebuilds and
redeploys — no manual step needed.

## Custom domain (optional, not required)

The free `.pages.dev` URL works for public sharing as-is. If you ever want a custom domain later, Cloudflare
Pages supports attaching one for free (you'd only pay if you buy the domain itself elsewhere) — but this is
entirely optional and not something you need to do.

## If the build fails

The two most common causes for a project like this:

- **Node version** — Cloudflare Pages defaults to a recent Node LTS, which is compatible with Next.js 15.
  If it picks an older version, set the environment variable `NODE_VERSION` to `20` in the Pages project's
  settings.
- **Output directory mismatch** — double check it's set to `out`, not `.next` (the default for
  server-rendered Next.js apps, which this project intentionally avoids via `output: "export"`).
