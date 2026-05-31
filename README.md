# Plant Genomics Portfolio

A personal portfolio website for a Plant Molecular Biology / Genomics / Bioinformatics researcher.

## Tech Stack
- React 18
- Vite 5
- CSS Modules (no external UI library needed)

---

## Getting Started

### 1. Install Node.js
Download from https://nodejs.org (LTS version recommended).
Verify installation:
```bash
node -v   # should show v18+ or v20+
npm -v
```

### 2. Install dependencies
```bash
cd plant-genomics-portfolio
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## Personalising Your Site

All content is in one file: **`src/data/content.js`**

Open it and update:

| Field | What to change |
|---|---|
| `personal.name` | Your full name |
| `personal.institution` | Your university/institute |
| `personal.email` | Your email address |
| `personal.linkedin` | Your LinkedIn URL |
| `personal.github` | Your GitHub URL |
| `personal.scholar` | Your Google Scholar URL |
| `personal.cvUrl` | Place `cv.pdf` in `/public/` folder |
| `personal.bio` | Your bio paragraphs |
| `stats` | Your real numbers |
| `publications` | Your real papers + DOI links |
| `research` | Your real research areas |
| `skillTabs` | Add/remove skills and tags |

---

## Adding More Skills Later

In `src/data/content.js`, find the `skillTabs` array.
Each tab has a `cards` array. Add a new card like:

```js
{
  icon: 'ti-star',       // any Tabler icon name
  title: 'My new skill',
  desc: 'Short description.',
  tags: ['Tool A', 'Tool B'],
}
```

---

## Deploying for Free

### Option A — Netlify (easiest, drag & drop)
1. Run `npm run build` → creates a `dist/` folder
2. Go to https://netlify.com → "Add new site" → "Deploy manually"
3. Drag and drop the `dist/` folder
4. Your site is live instantly with a free URL

### Option B — GitHub Pages
1. Push your code to a GitHub repository
2. Install: `npm install --save-dev gh-pages`
3. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
4. Add to `vite.config.js`: `base: '/your-repo-name/'`
5. Run: `npm run build && npm run deploy`

### Option C — Vercel (recommended for React)
1. Push to GitHub
2. Go to https://vercel.com → Import your repo
3. Click Deploy — it auto-detects Vite/React
4. Free custom domain available

---

## Project Structure

```
portfolio/
├── index.html                  ← entry HTML
├── vite.config.js
├── package.json
├── public/
│   └── cv.pdf                  ← put your CV here
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← assembles all sections
    ├── index.css               ← global styles & CSS variables
    ├── data/
    │   └── content.js          ← ALL your content lives here
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Research.jsx / .css
        ├── Publications.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```
# portfolio
