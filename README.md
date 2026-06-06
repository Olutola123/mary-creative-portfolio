# Mary Akinyemi — Creative Portfolio

One‑page responsive portfolio for GitHub Pages.

Files:
- index.html
- css/styles.css
- js/main.js
- assets/ (place your images or use the included SVG placeholders)

Preview locally:
1. Open index.html in a browser, or run a simple HTTP server:
   - Python 3: `python -m http.server 8000` and open http://localhost:8000

Deploy to GitHub Pages:
1. Create a repository (or use existing).
2. Add files, commit, and push (example using SSH):
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin git@github.com:Olutola123/mary-creative-portfolio.git
   git push -u origin main

3. In the repository Settings → Pages, set Source to the branch you want to publish and root (or use gh-pages branch). Save.
4. GitHub Pages will publish at https://<your-username>.github.io/<repo-name>/ (or custom domain if set).

Customize:
- Replace assets/* with your real images and update alt text.
- Edit copy in `index.html` to add more projects, testimonials, or a downloadable resume link.
- Change `--accent` color in css/styles.css to match your brand.

Notes:
- I pushed these files to a new branch named `portfolio-site`. Open a pull request to merge into your default branch when ready.
