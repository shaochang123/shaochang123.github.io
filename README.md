# Zhaoyang Lu's personal website

A personal English academic homepage for [shaochang123.github.io](https://shaochang123.github.io/), built with plain HTML, CSS, and a small progressive-enhancement script. A white background, bold headings, restrained blue accents, and thin separators keep the layout simple. Small highlights are limited to key phrases and manuscript status labels. No package installation or build step is needed.

## Preview locally

Open `index.html` directly, or serve the repository:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8000`.

## Edit the homepage

- `index.html`: profile, contact details, and the six content sections.
- `css/home.css`: responsive layout, typography, and colors.
- `css/fonts.css` and `fonts/`: self-hosted Manrope and Space Grotesk fonts, with their SIL Open Font License files. No third-party font requests are made at runtime.
- `js/home.js`: active navigation section and copyright year. All content and links remain usable without JavaScript.
- `img/github-avatar.jpg`: a local copy of the GitHub avatar, retrieved from `https://github.com/shaochang123.png?size=400`. Replace this file to refresh the avatar.
- `img/monogram.svg`: homepage favicon.

The email is `2404412990@shu.edu.cn`. The avatar and GitHub contact link both lead to `https://github.com/shaochang123`.

Content was adapted from the supplied CV and personal statement. Both manuscripts are explicitly labeled **Under review**, not published or accepted. Full author lists, paper links, and acceptance details can be added when available. News dates describe documented project milestones and awards. ACG and running were supplied by the site owner. Private application documents are not included in this repository.

Small contact and hobby icons are inline SVGs in `index.html`. Honors & Awards uses local contest/organizer logos and subject icons in `img/awards/`; see `img/awards/SOURCES.md` for provenance and the distinction between official logos and decorative icons. The page keeps its white background and uses no colored section panels.

## Repository and publishing

The local clone tracks `main` from `https://github.com/shaochang123/shaochang123.github.io.git` as `origin`. The homepage works as a static GitHub Pages site. Local edits do not update the public site until committed and pushed to the branch configured for Pages.

Earlier pages and learning examples are retained in the repository. The homepage uses its own stylesheet and script so that legacy pages keep their existing behavior.
