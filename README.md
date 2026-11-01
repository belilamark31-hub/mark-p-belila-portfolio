# Mark Christian Belila — Construction Virtual Assistant

A responsive, static portfolio website built with HTML, CSS, and vanilla JavaScript. It is designed for local preview and deployment to GitHub Pages.

## Preview locally

Open `index.html` in a current desktop or mobile browser. The contact form uses a `mailto:` link and therefore requires a configured default email application.

## Publish with GitHub Pages

1. Add the website files to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch and `/ (root)` folder, then save.
4. Open the published URL shown in Pages settings.

The site uses no build step, backend, paid library, API key, or external image dependency. Google Fonts are loaded remotely; system sans-serif fallbacks are provided if the font service is unavailable.

## Personalize before publishing

- The email contact and form recipient are set to `belilamark31@gmail.com`, and the Upwork card links to the supplied profile. The contact form prepares a message in the visitor’s default email application; it does not transmit or store form data.
- Replace the LinkedIn placeholder in `index.html` with your profile URL when available.
- The About section and header/footer brand marks use `assets/images/mark-belila-profile.jpg` for the supplied profile photo. Replace it with an updated image if needed.
- The Experience section summarizes the roles and dates from the supplied resume; confirm that the current role and dates are up to date before publishing.
- Six user-provided PDFs are linked from the matching portfolio project details in `assets/projects/`. They are attached without redaction, may include identifiable project information, and are included with permission confirmed by the user.
- All six gallery thumbnails are crops from representative pages of their matching supplied PDFs.
- The hero uses the supplied construction blueprint image at `assets/images/hero-construction-blueprint.png`.
- Review all portfolio content before publication. PDF descriptions summarize visible document contents and do not independently establish authorship or responsibility for technical design.

## Files

- `index.html` — semantic page structure and portfolio content
- `style.css` — responsive visual design and accessible focus/reduced-motion styles
- `script.js` — mobile navigation, project detail dialogs, contact-form email preparation, and dynamic copyright year
- `assets/images/` — replaceable illustrative SVG drawing-sheet placeholders
- `assets/projects/` — attached PDF work samples linked from their matching project details
