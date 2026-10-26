# Reform Solitary Confinement RI (stoptortureri.org)

Plain static copy of the Wix site at closehighside.wixsite.com/closehighside, rebuilt October 2026. No build step: every page is a hand-editable `.html` file.

- `index.html` and one `.html` per page, named after its old Wix URL, so `/join-us` keeps working on GitHub Pages and Cloudflare Pages
- `css/site.css`: all styling. `js/site.js`: mobile menu and email sign-up
- `images/`, `docs/` (PDFs), `video/`, `fonts/`: everything now lives here instead of on Wix

**Preview locally:** `python3 -m http.server 8080`, then open http://localhost:8080

## Hosting free on GitHub Pages

1. Create a GitHub repo and push this folder to it.
2. In the repo, go to Settings → Pages, choose "Deploy from a branch", pick `main` and `/ (root)`.

## Connecting stoptortureri.org

1. In Settings → Pages, enter `stoptortureri.org` as the custom domain. GitHub adds a `CNAME` file.
2. At the domain registrar, add A records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, plus a CNAME for `www` pointing to `<your-github-username>.github.io`.
3. Once DNS resolves, tick "Enforce HTTPS".

## What changed from Wix

- **Email sign-up** opens the visitor's email app with a message to reformsolitaryri@gmail.com, since a static site cannot store submissions. Export the existing subscriber list from Wix before closing that account.
- **Fonts:** Wix's Avenir and DIN fonts are licensed for Wix only, so the site uses close open-licence matches (Figtree, Barlow Condensed).
- **Not carried over:** the Wix blog, which only held Wix's sample posts, and a PDF viewer on the hidden Attempted Reforms page that already showed nothing.
