# Wundergun

Dad vs. the flies. Marketing site for [wundergun.com](https://wundergun.com) — one dad, one salt gun, zero tolerance.

The page is the yellow-hero landing from the source HTML: Archivo Black / Archivo, reticle + fly animations, house rules, salt-gun CTA, and the Instagram reel.

Reel: https://www.instagram.com/reel/DceIW81iI9h/

## Local run

```bash
npm install
npm run dev
```

Vite serves the site at http://localhost:5173.

```bash
npm run build      # production assets in dist/
npm run preview    # serve the production build locally
```

Copy `.env.example` to `.env` if you want local waitlist / affiliate values. Both can stay empty.

## Environment variables

Set these in `.env` locally and in the Vercel project **Settings → Environment Variables**. They are public (`VITE_`) and baked in at build time.

| Variable | Purpose | Until wired |
| --- | --- | --- |
| `VITE_WAITLIST_URL` | Formspree or Buttondown form endpoint | Empty. Submit still shows the client-side thanks: *You're on the list. Keep your elbows off the table.* |
| `VITE_AFFILIATE_URL` | Salt-gun affiliate product URL | Empty. **Do not invent a product URL.** The “Get a salt gun” button stays on-page (`#gun`) until a real affiliate link is set. |

Examples:

```bash
# Formspree
VITE_WAITLIST_URL=https://formspree.io/f/xxxxxxxx

# Buttondown
VITE_WAITLIST_URL=https://buttondown.com/api/emails/embed-subscribe/your-username

# Only when you have a real affiliate destination — paste that URL here.
# Do not invent or guess a retailer/product link.
VITE_AFFILIATE_URL=
```


After changing env vars on Vercel, redeploy so Vite can rebuild.

## Vercel deploy

1. Import [Quidni-Group/wundergun](https://github.com/Quidni-Group/wundergun) in Vercel (Framework Preset: Vite, output `dist`).
2. Add `VITE_WAITLIST_URL` and `VITE_AFFILIATE_URL` when you have real values. Shipping without them is fine.
3. Deploy. Production hostname intent is **wundergun.com** (already registered). In Vercel: **Project → Settings → Domains** → add `wundergun.com` and `www.wundergun.com`, then point DNS at Vercel.

CLI (from this repo, after `npx vercel login` and `npx vercel link`):

```bash
npx vercel          # preview
npx vercel --prod   # production
```

## Placeholders

- Waitlist: structured as a real POST (`email` field) to `VITE_WAITLIST_URL`. Unwired = same thanks UX, no network call.
- Affiliate: `VITE_AFFILIATE_URL` only. No product URL is hardcoded.
- Domain: copy and canonical URL assume `wundergun.com`.
