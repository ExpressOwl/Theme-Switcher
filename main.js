// DOM
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const cityButton = document.getElementById('city');
const body = document.body;

// cached theme on reload
const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

// Button Event Handlers
darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
}

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
}

