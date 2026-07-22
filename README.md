# Zakaria Moustakim — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy: GitHub → Vercel (free, live URL in ~2 minutes)

### 1. Push the code to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: portfolio site"
```

Create a new **empty** repo on GitHub (no README/license) at
https://github.com/new — e.g. `portfolio`. Then:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project**, select the `portfolio` repo you just pushed.
3. Vercel auto-detects Next.js — leave all settings as default.
4. Click **Deploy**. In ~60–90 seconds you'll get a live URL like
   `https://portfolio-yourname.vercel.app`.
5. (Optional) Add a custom domain under **Project Settings → Domains**.

From now on, every `git push` to `main` auto-deploys a new version — no
extra steps.

### Alternative: deploy without Vercel's GitHub integration

If you'd rather deploy straight from your terminal instead of connecting
GitHub to Vercel:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Editing content

All copy (projects, solutions, tech stack, metrics, testimonial, timeline)
lives in one place: `lib/data.ts`. Edit that file and push — no need to
touch components.

Your photo is at `public/images/zakaria.jpeg` — swap in a higher-res shot
any time by replacing that file (keep the same name, or update the path in
`components/Hero.tsx`).

## Wiring up the contact form

The form in `components/Contact.tsx` currently just shows a confirmation
message on submit. To actually receive submissions, pick one:

- **Formspree** (easiest, no backend): sign up at formspree.io, set the
  `<form>`'s `action` to your Formspree endpoint and method to `POST`.
- **Resend** or another email API: add a Next.js API route
  (`app/api/contact/route.ts`) that sends the form data via email, and call
  it with `fetch` from `handleSubmit`.
