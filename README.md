# Kimberly Giron · Toyota Silang

A responsive personal marketing website for Kimberly Giron, Marketing Professional at Toyota Silang, Cavite. Inspired by the supplied reference, it includes the uploaded Toyota logo and showroom photograph, social profiles, directions, direct messaging links, and a downloadable contact card.

## Technologies

Plain HTML, CSS, and JavaScript. No dependencies, framework, backend, or build step. Google Fonts supplies DM Sans and Manrope, with sans-serif fallbacks.

## View locally

Open `index.html` directly in a browser. Optionally serve this folder with any static HTTP server. Clipboard access requires a secure context (HTTPS or localhost); when unavailable the page displays the number for manual copying.

## GitHub Pages

Push this directory to a GitHub repository. Under **Settings → Pages**, choose **Deploy from a branch**, select your branch and **/ (root)**, then save. `index.html` sits at the repository root. All local resource paths are relative, so repository project URLs work without configuration. `.nojekyll` bypasses Jekyll processing.

For Netlify, `netlify.toml` publishes the root directory without a build command.

## Editing

Update content and contact links in `index.html`, visual styling in `assets/styles.css`, and small interactive behaviors in `assets/script.js`. Keep the phone number in the script and `kimberly-giron.vcf` consistent when updating contact details. Images live in `assets/images/`; the original uploaded logo is retained alongside its transparent-padding-trimmed display version.
