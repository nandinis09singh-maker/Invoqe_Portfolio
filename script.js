// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Theme toggle (persists for the session)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(theme) {
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀';
  } else {
    root.removeAttribute('data-theme');
    themeToggle.textContent = '☾';
  }
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) { /* storage unavailable */ }
setTheme(savedTheme || 'dark');

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section[id]');
const navItems = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

// Contact form (front-end only demo)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Message sent — thanks for reaching out!';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
