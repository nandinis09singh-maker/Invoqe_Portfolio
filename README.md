# Personal Portfolio Website

A responsive personal portfolio built with plain HTML, CSS, and JavaScript — no build step required.

## Features
- Hero, About, Skills, Projects, Experience, Resume, and Contact sections
- Responsive layout (mobile, tablet, desktop) with a collapsible mobile nav
- Smooth scrolling with active-section highlighting in the nav
- Dark / light mode toggle (persisted for the session via localStorage)
- Project cards with placeholder GitHub/demo links
- Front-end contact form with basic validation

## Setup
1. Clone the repo:
   ```
   git clone https://github.com/<your-username>/Invoqe_Portfolio.git
   cd Invoqe_Portfolio
   ```
2. Open `index.html` directly in a browser, or serve it locally:
   ```
   npx serve .
   ```

## Customize
- Replace the placeholder name, bio, skills, and project links in `index.html`.
- Add your resume as `resume.pdf` in the project root (linked from the Resume section).
- Update the `href="#"` links in the Projects and Contact sections with your real GitHub/LinkedIn/demo URLs.

## Deploy
Deploy for free on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) by connecting this repository — no configuration needed since it's a static site.

## Tech
HTML5, CSS3 (custom properties, Grid/Flexbox), vanilla JavaScript.
