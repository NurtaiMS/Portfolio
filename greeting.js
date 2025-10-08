document.addEventListener("DOMContentLoaded", () => {
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

  // Если имя сохранено — показываем приветствие
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    showGreeting(savedName);
  } else {
    // Если имени нет — сразу спрашиваем
    askName();
  }
});
