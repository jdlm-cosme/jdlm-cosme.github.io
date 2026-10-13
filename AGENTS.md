# Project guide

## Architecture

This is Kim Giron’s personal Toyota Silang marketing website, built with React 19, TypeScript, TanStack Start, TanStack Router, Vite, and the Netlify TanStack Start plugin. It is a single-page site with section anchors, not a product catalog or dealership booking application.

## Key directories

- `src/routes/index.tsx`: all page sections, public contact links, responsive navigation state, and copy-phone interaction.
- `src/routes/__root.tsx`: HTML shell, page title, description, share metadata, and favicon.
- `src/styles.css`: warm editorial styling, responsive layouts, and reduced-motion behavior.
- `src/router.tsx`: TanStack Router setup; route tree generation is handled by the framework.
- `public/img/`: user-provided showroom photo served unchanged at its original resolution to preserve quality, and Toyota Silang logo delivered through Netlify Image CDN.
- `public/kim-giron.vcf`: downloadable contact card; keep it synchronized with the page.
- `netlify.toml` and `vite.config.ts`: deployment and framework integrations.

## Conventions

Use functional React components, strict TypeScript, descriptive identifiers, single quotes, and no unnecessary dependencies. Maintain semantic landmarks, accessible link names, visible keyboard focus, and mobile layouts. Style through shared CSS tokens and component classes. Do not add inline code comments unless requested. Do not introduce fabricated testimonials, prices, inventory, service guarantees, or a representative portrait.

## Decisions

All calls to action are direct links to the user-provided public contact channels. No inquiry data is collected, so there is no persistence layer or form backend. Viber is an app deep link with a visible installation note. The user-provided showroom photo is for reference, not an inventory listing, and this is disclosed in the footer. The monogram is used instead of an invented personal photograph. Do not add `og:image`; the platform supplies it.

If persistent data is later requested, use Netlify Database for records and Netlify Blobs for files, following the applicable skills. Do not store submissions in local files or browser storage.

## Validation

The platform installs and validates the app automatically. Do not run build, test, type-check, or dev-server commands during agent work in this environment. Review edited files and configurations instead.
