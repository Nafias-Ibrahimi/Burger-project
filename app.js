const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');
const burger = document.createElement('div');
burger.className = 'burger';

const links = ['Home', 'About', 'Services', 'Contact'];

links.forEach((text) => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = text;
  a.href = '#';

  li.appendChild(a); 
  navLinks.appendChild(li);
});

for (let i = 0; i < 3; i += 1) {
  const line = document.createElement('div');
  line.className = 'line';
  burger.appendChild(line);
}

navbar.appendChild(burger);

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});