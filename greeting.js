 document.addEventListener("DOMContentLoaded", () => {
  // === Приветствие ===
  const greeting = document.getElementById('greeting');
  const askNameButton = document.getElementById('askName');

  function showGreeting(name) {
    greeting.textContent = name ? `Привет, ${name}!` : 'Добро пожаловать!';
  }

  function askName() {
    const name = prompt('Как тебя зовут?');
    if (name) {
      localStorage.setItem('userName', name);
    } else {
      localStorage.removeItem('userName');
    }
    showGreeting(localStorage.getItem('userName'));
  }

  askNameButton.addEventListener('click', askName);

  const savedName = localStorage.getItem('userName');
  if (savedName) {
    showGreeting(savedName);
  } else {
    askName();
  }

  // === Переключатель темы ===
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add('light');
  }

  function updateIcons() {
    const sun = themeToggle.querySelector('.sun');
    const moon = themeToggle.querySelector('.moon');
    if (body.classList.contains('dark')) {
      sun.style.display = 'none';
      moon.style.display = 'inline';
    } else {
      sun.style.display = 'inline';
      moon.style.display = 'none';
    }
  }

  updateIcons();

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    }
    updateIcons();
  });

  // === Гамбургер ===
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');   
    hamburger.classList.toggle('active'); 
  });

  // === Кнопка "Наверх" ===
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
