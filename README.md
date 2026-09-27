# thewebBita — Vite + React

## What was wrong with the original project
- `src/index.js` (the app's entry point) was **completely empty** — this alone meant nothing ever rendered.
- `App.js` imported `@/App.css`, a file that didn't exist in the project.
- The project was set up for Create React App + Craco but pulled in ~40 unused dependencies (Radix UI, react-query, react-hook-form, etc.) that none of the actual components use, which bloats install time and risk of version conflicts.
- The `lenis` smooth-scroll library was used in `App.js` but was never listed in `package.json`.

## What this version is
The same design and components (Hero, Navbar, Services, Portfolio, Process, Stats, Blog, Contact, Footer, custom cursor, canvas globe scene, etc.) rebuilt as a clean **Vite + React** app with only the dependencies actually used by the code:
`react`, `react-dom`, `framer-motion`, `lucide-react`, `lenis`, plus Tailwind CSS for styling.

No visual/design changes were made — all component markup, classNames, and content data were carried over as-is.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to http://localhost:3000).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure
```
index.html          # Vite entry HTML
src/main.jsx         # App entry point (mounts <App />)
src/App.jsx          # Root component
src/index.css        # Tailwind + global styles
src/components/       # All UI components
src/data/content.js   # Site content/copy
```
