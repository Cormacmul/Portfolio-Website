# Personal Portfolio Website

This is a personal portfolio website built with Astro, Tailwind CSS, and GSAP for animations.

## Features

*   **Navbar:** Responsive navigation bar with hover effects.
*   **Projects Section:** Displays project cards with information and links.
*   **Skills Section:** Showcases technical skills with icons and animations.
*   **Custom Cursor:** (Removed - formerly a feature)
*   **Dark Mode:** (Assumed, based on Tailwind CSS and common practice, but not explicitly worked on in this session)

tion in `Skills.astro` from `gsap.from()` to `gsap.fromTo()`, ensuring the final opacity is set to `1`.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
my-astro-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── icons/
│   │   │   └── skills/
│   │   └── ProjectCard.astro
│   │   └── Skills.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .astro/
├── node_modules/
├── .git/
├── .vscode/
├── .gitignore
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.mjs
└── tsconfig.json
```

## Commands

All commands are run from the root of the project (`my-astro-portfolio`), from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

