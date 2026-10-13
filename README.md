# Kim Giron — Toyota Silang

A personal marketing page for Kim Giron, a marketing professional at Toyota Silang in Cavite, Philippines. The page introduces her services and makes it easy to connect through Facebook, TikTok, WhatsApp, Viber, email, or a phone call.

## Technologies

The site uses React 19, TypeScript, TanStack Start and Router, Vite, Tailwind CSS 4, Lucide icons, and the Netlify TanStack Start integration. Custom CSS provides the warm editorial layout. The user-provided showroom photo and Toyota Silang logo are served through Netlify Image CDN.

## Local development

Use Node.js 22 or newer and pnpm:

```sh
pnpm install
pnpm dev
```

The development page opens at `http://localhost:3000`. To emulate Netlify features, including Image CDN, use `netlify dev --port 8889` instead. The deployment pipeline builds the app and publishes `dist/client` using `netlify.toml`.

## Content and contacts

Page copy and contact links live in `src/routes/index.tsx`. Update `public/kim-giron.vcf` too when changing contact information. Share-card metadata lives in `src/routes/__root.tsx`, and the responsive design lives in `src/styles.css`.

WhatsApp opens a browser-friendly chat link. Viber requires the installed app. Calling and email links open the visitor’s configured apps. Saving the contact downloads a standard vCard. The copy-number button uses the browser clipboard and provides a manual-copy message if access is denied.

The site does not collect or store visitor data and needs no database, login, API keys, or contact-form backend. The showroom photo is for reference only, and vehicle availability, quotations, and offers must be confirmed with Kim.
