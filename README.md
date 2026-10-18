# Shubham Ukkoji Portfolio

## Run locally

1. Install Node.js (current LTS).
2. Open this folder in VS Code.
3. Open **Terminal → New Terminal** and run:

```bash
npm install
npm run dev
```

4. Open the local URL Vite prints, usually `http://localhost:5173`.

## Edit the portfolio

- `src/lib/data.ts` — portfolio copy, skills, projects, contact links and experience.
- `src/components/` — page sections and interactive components.
- `src/index.css` — colors, typography, layout utilities and light/dark theme.
- `public/images/portrait.jpg` — hero portrait.

## Build for production

```bash
npm run build
```

The deployable production site is generated in `dist/`.

## Deploy with Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Use the Vite defaults, or set build command to `npm run build` and output directory to `dist`.
4. Choose **Deploy**. Vercel will build and publish the portfolio, and rebuild it on future GitHub pushes.

You can also deploy from the project folder with the Vercel CLI using `npx vercel`, then publish a production deployment with `npx vercel --prod`.

## Deploy with Netlify

Connect the GitHub repository in Netlify and set the build command to `npm run build` and publish directory to `dist`. Alternatively, run the production build and drag the generated `dist/` folder into Netlify's manual deploy area.