const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
const noResults = document.getElementById('noResults');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle('active', item === button));
    let visible = 0;
    cards.forEach((card) => {
      const show = selected === 'all' || card.dataset.category === selected;
      card.hidden = !show;
      if (show) visible += 1;
    });
    noResults.hidden = visible > 0;
  });
});

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('copyEmail').addEventListener('click', async () => {
  const email = 'narimetisaigopi@gmail.com';
  const button = document.getElementById('copyEmail');
  try {
    await navigator.clipboard.writeText(email);
    button.lastChild.textContent = ' Email copied';
  } catch {
    button.lastChild.textContent = ' Couldn’t copy';
  }
});
