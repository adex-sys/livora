# LIVORA

LIVORA is a premium furniture e-commerce frontend built with React, TypeScript, Vite and Tailwind CSS. It demonstrates a polished landing experience, catalog and product pages, and a shopping flow with animations provided by Framer Motion.

## Features

- Responsive, modern UI and layout
- Product listing, product details, cart and checkout pages
- Wishlist and authentication pages (UI only)
- Smooth animations with Framer Motion
- Light/dark theme context and a simple global store

## Tech Stack

- React 18 + TypeScript
- Vite for dev server and build
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for client-side routing

## Quick Start

Requirements: Node.js 18+ and npm (or yarn/pnpm)

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure (top-level)

- `src/` — application source code
	- `pages/` — route pages (Home, Shop, ProductDetails, Cart, etc.)
	- `components/` — UI components and layout (Navbar, Footer, ProductCard)
	- `context/` — React contexts (StoreContext, ThemeContext)
	- `data/` — sample product data
- `index.html`, `vite.config.*`, `tailwind.config.js`, `tsconfig.json`

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build the app for production
- `npm run preview` — locally preview the production build

These scripts are defined in `package.json`.

## Notes & Next Steps

- This repository is a frontend demo; backend integration (API, payments) is not included.
- Add a `LICENSE` if you plan to publish.
- Run a linter/formatter or add tests if you want CI coverage.

## Contributing

Feel free to open issues or submit pull requests. For substantial changes, open an issue first to discuss the design.

---

Built with care — enjoy exploring LIVORA.
