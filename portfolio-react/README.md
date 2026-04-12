# Personal Portfolio React App

A fully responsive, placement-ready personal portfolio website built with React (Vite).

## Features
- **Routing**: React Router (`react-router-dom`) for navigation across Home, About, Projects, DSA, and Contact pages.
- **Dynamic Content**: Data is rendered via `src/data/portfolioData.json`.
- **Light & Dark Mode**: A sleek theme toggle with persistance.
- **Reusable Components**: `Navbar`, `Footer`, `ProjectCard`, and `DSACard`.
- **DSA Stats**: A dedicated section for showcasing coding profiles (LeetCode, GFG, CodeChef).
- **Responsive**: Clean UI built with Vanilla CSS variables and flexbox/grid.

## Folder Structure

```text
portfolio-react/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and local styles
│   ├── components/         # Reusable UI components
│   │   ├── DSACard.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── ProjectCard.jsx
│   │   └── ThemeToggle.jsx # Light/Dark mode switcher
│   ├── data/
│   │   └── portfolioData.json  # Mock database
│   ├── pages/              # Individual route pages
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── DSA.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx             # Main Router layout
│   ├── index.css           # Global theme variables & styles
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup Steps
1. **Clone the repository** (or download the code).
2. **Open your terminal** into the project folder (`portfolio-react`).
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open** `http://localhost:5173` in your browser.

## Deployment Guide (Vercel)
Vercel is the easiest way to deploy a Vite React app.
1. Create a free account at [Vercel](https://vercel.com/).
2. Push this project to a GitHub repository.
3. In Vercel, click **Add New** -> **Project**.
4. Import your GitHub repository.
5. Vercel will auto-detect Vite. The **Build Command** should be `npm run build` and the **Output Directory** should be `dist`.
6. Click **Deploy**. Your portfolio will be live in minutes!

*You can also deploy to Netlify or GitHub Pages following similar steps by pointing to the `dist` folder.*
