<div align="center">
	<h1>Personal Website / Portfolio</h1>
	<p>Modern, animated, accessible, responsive developer portfolio built with <strong>React + Vite</strong>.</p>
	<p>
		<img alt="Tech" src="https://img.shields.io/badge/React-18+-61dafb?logo=react&logoColor=222" />
		<img alt="Build" src="https://img.shields.io/badge/Vite-fast-646cff?logo=vite&logoColor=fff" />
		<img alt="License" src="https://img.shields.io/badge/License-MIT-success" />
	</p>
</div>

---

## ✨ Features

- Smooth animated section reveals & subtle motion (staggered lists, hover spring effects).
- Dark / Light theme toggle with system preference detection + local persistence.
- Responsive layout (mobile → large desktop) with fluid `clamp()` typography.
- Glassmorphism + gradient accent design system using CSS custom properties.
- Modern Experience timeline (alternating, collapses cleanly on small screens).
- Skills section with conic gradient circular proficiency rings + level labels.
- Filterable Projects grid (tags, animated entrance, lazy-loaded thumbnails, semantic buttons-as-tabs).
- Accessible focus states, keyboard navigation for project filters, reduced motion respect (easily extensible).
- Performant: Vite dev server, lazy images, lightweight CSS (no UI framework), avoids layout thrash.
- Easy to extend: data-driven arrays for Experience, Skills, Projects.

---

## 🗂 Project Structure

```
personal-website/
├─ index.html                 # Vite entry HTML
├─ package.json               # Scripts & dependencies
├─ package-lock.json          # Lockfile
├─ vite.config.js             # Vite configuration
├─ eslint.config.js           # ESLint setup
├─ README.md                  # Project documentation
├─ public/                    # Static public assets (served at root)
│  └─ ...
└─ src/
	├─ main.jsx                # React root bootstrap
	├─ App.jsx                 # Layout + section mounting
	├─ App.css                 # App-level styles (section shells, utilities)
	├─ index.css               # Global tokens, resets, theming, utilities
	├─ assets/
	│  ├─ logo.svg
	│  ├─ logos/               # Technology badges (css.svg, html.svg, react.svg, etc.)
	│  └─ projects/            # Project thumbnails (swap SVG placeholders for real images)
	│     ├─ placeholder-password-generator.svg
	│     ├─ placeholder-dashboard.svg
	│     ├─ placeholder-tasktracker.svg
	│     ├─ placeholder-portfolio.svg
	│     └─ placeholder-chatapp.svg
	└─ components/
		├─ navbar/
		│  ├─ navbar.jsx
		│  └─ navbar.css
		├─ home/
		│  ├─ home.jsx
		│  └─ home.css
		├─ about/
		│  ├─ about.jsx
		│  └─ about.css
		├─ experience/
		│  ├─ experience.jsx
		│  └─ experience.css
		├─ skills/
		│  ├─ skills.jsx
		│  └─ skills.css
		├─ projects/
		│  ├─ projects.jsx
		│  └─ projects.css
		└─ contact/
			├─ contact.jsx
			└─ contact.css
```

---

## 🧱 Design System (Tokens)

All core colors, radii, easing curves, and shadows live as CSS custom properties inside `index.css` (`:root` + `.light` overrides). Highlights:

- `--accent-color`, `--accent-alt` drive gradient accents (top bars, buttons, highlights).
- `--text`, `--text-dim`, `--bg`, `--surface-glass` unify dark/light modes.
- Shadow presets (`--shadow-sm`, `--shadow-glow`) create consistent elevation.
- Easing tokens like `--ease-spring` provide cohesive motion timing.

To customize the theme, adjust variables once instead of hunting through component styles.

---

## 🌓 Theming

- On load: checks `localStorage.theme`; if absent, uses `prefers-color-scheme`.
- Applies either `html.dark` or `html.light` class; transitions use a scoped `.theme-transition` class removed after ~600ms.
- Toggle button switches state and persists.

Add new light-mode overrides by extending the `.light` block in `index.css`.

---

## 🧭 Navigation

- Sticky glass navbar with brand, links, theme toggle, and mobile menu trigger.
- Mobile: collapsible panel animates with transform + opacity for GPU-friendly transitions.
- Accessible: button `aria-expanded`, link focus styles, and pointer-coarse spacing.

---

## 🧪 Accessibility & UX Notes

- Project filter buttons use `role="tab"` and `aria-selected` for screen reader clarity.
- Status line (empty state) conveys filter results.
- High contrast text via token tuning; gradient decorations kept non-essential.
- Focus outlines preserved (refined, not removed).
- Images with meaning have descriptive `alt`; pure decoration would use empty `alt=""`.

Potential future A11y improvements (see Roadmap): reduced motion respect, skip link, focus trap for mobile menu.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+ (earlier versions may work but not tested).

### Install & Run

```bash
npm install
npm run dev
```

Dev server defaults (Vite) typically to `http://localhost:5173` (terminal will confirm).

### Production Build

```bash
npm run build
npm run preview   # optional: serve the dist output locally
```

Output emitted to `dist/` ready for static hosting (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

---

## 🚀 Deployment Tips

| Platform      | Notes |
|---------------|-------|
| Netlify       | Drag+drop `dist/` or connect repo; add build command `npm run build`. |
| Vercel        | Framework preset: Vite; output automatically detected. |
| GitHub Pages  | Use an action to run build then publish `dist` to `gh-pages` branch. |
| Cloudflare    | Set build command & output folder `dist`. |

Custom domain: configure DNS (CNAME / A) → platform dashboard.

---

## 🧩 Extending Content

### Add a Project
Edit `projects.jsx`:
```js
projects.push({
	title: 'New Thing',
	blurb: 'Short summary.',
	stack: ['React','API'],
	tags: ['frontend','experiment'],
	repo: 'https://github.com/your/repo',
	demo: 'https://demo.example',
	year: 2025,
	image: SomeImport,
	alt: 'Accessible description'
})
```
Add image under `src/assets/projects/` and import at top.

### Add a Skill
Modify the skills component (circular ring items). Provide label, percentage, and level label; ring uses `conic-gradient` so only one style update required.

### Add Experience Entry
Update the experience data array; alternating layout automatically adjusts; maintain chronological order.

---

## 🏎 Performance Considerations

- SVG placeholder thumbnails (cheap to inline or compress); swap to optimized WebP/AVIF for real screenshots.
- Use appropriately sized images (avoid > 200–300KB each for grid cards).
- `loading="lazy"` + `decoding="async"` for non-critical images.
- Minimized third-party libraries (vanilla CSS + React only) reduces bundle size.
- Potential future enhancements: prefetch next-section content, responsive `srcset`, `IntersectionObserver` for reveal logic without scroll listeners.

---

## 🔒 Security Notes

Static site: minimal attack surface. If adding forms / APIs:
- Sanitize user input server-side.
- Use HTTPS endpoints.
- Consider rate limiting & CAPTCHA for public submission forms.

---

## 🧼 Code Quality

Commands (see `package.json` if added later):
- `npm run dev` – development
- `npm run build` – production build
- `npm run preview` – locally serve build

ESLint config present (`eslint.config.js`); adjust rules to your preference; add Prettier if desired.

---

## 🗺 Roadmap Ideas

- [ ] Real screenshot images with blur-up or dominant color placeholders.
- [ ] Add contact form with serverless handler (Netlify / Vercel function) + validation.
- [ ] Add blog / writing section (Markdown + MDX + content index).
- [ ] Implement reduced motion preference (`@media (prefers-reduced-motion)`).
- [ ] Add global search / command palette (quick section jump).
- [ ] Lighthouse & a11y automated check in CI.
- [ ] Add localization (i18n) scaffolding.
- [ ] Add unit tests for utility logic (if introduced) and accessibility snapshots.

---

## 🛠 Tech Stack Rationale

| Tech    | Reason |
|---------|--------|
| React   | Component abstraction, stateful interactive sections. |
| Vite    | Instant dev server, fast HMR, minimal config. |
| CSS     | Full control; custom properties enable dynamic theming without a preprocessor. |
| SVG     | Crisp, theme-friendly, scalable graphics. |

No heavy UI library keeps bundle lean and styling intentional.

---

## 🤝 Contributing

While this is a personal site, external improvements (accessibility, performance micro-optimizations) are welcome:
1. Fork & branch (`feat/thing`).
2. Install dependencies & run dev.
3. Keep PR scope focused & describe reasoning.

---

## 📄 License

MIT License – free to use, adapt, and attribute. See `LICENSE` (add one if not yet present).

---

## 🙋 FAQ

**Why not Next.js?** Static content + light interactivity; Vite + React is simpler & faster to iterate.

**How big is the bundle?** Very small (React + your code) – add tooling like `rollup-plugin-visualizer` if you want to profile.

**Can I swap styling to Tailwind?** Yes — replace global token file with Tailwind config mapping existing variables; migrate classes incrementally.

---

## 🧭 Guidance For Customization

| Area | How to Customize |
|------|------------------|
| Accent Colors | Update `--accent-color` & `--accent-alt` in `:root` and light overrides. |
| Section Order | Reorder components inside `App.jsx`. |
| Typography | Adjust font stacks / weights in `index.css`. |
| Motion | Change global easing tokens; reduce overshoot in hover transforms. |
| Images | Replace SVG placeholders with real compressed assets (WebP). |

---

## 🧑‍💻 Author

Built by Tiago Ramada. Feel free to reach out or open suggestions.

---

If this project helps you, consider starring or sharing. Enjoy building!

