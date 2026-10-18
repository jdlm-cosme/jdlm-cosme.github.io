# Project architecture

This is a static marketing website for Kimberly Giron at Toyota Silang, Cavite, designed for both GitHub Pages and Netlify. The root `index.html` is the entry point. There is no framework, package manager, build step, API, or database.

- `assets/styles.css`: responsive layout, typography, colors, and accessibility states.
- `assets/script.js`: mobile navigation and phone-number copying with accessible feedback.
- `assets/images/`: user-provided Toyota logo and showroom photo; the display logo trims transparent padding from the preserved original.
- `kimberly-giron.vcf`: downloadable contact card.
- `netlify.toml`: publishes the repository root.
- `.nojekyll`: supports GitHub Pages as a plain static site.

Use relative paths for all local assets, scripts, downloads, and styles so GitHub Pages project subdirectories work. Preserve semantic HTML, heading structure, reduced-motion support, visible keyboard focus, skip navigation, and mobile usability. External new-tab links require `rel="noopener noreferrer"`. Keep contact information consistent across the HTML, script, and vCard. Do not introduce backend-only platform features that would break GitHub Pages portability. Social links and directions use the user's supplied URLs. No `og:image` is specified because the hosting platform supplies it.
