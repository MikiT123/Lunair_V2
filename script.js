function applyDarkModeFromStorage() {
  const prefersDark = localStorage.getItem('darkMode') === 'enabled';
  if (prefersDark) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyDarkModeFromStorage();

  const toggleBtn = document.getElementById('toggleThemeBtn');
  const mainLogo = document.querySelector('.logo');
  const whiteLogo = document.querySelector('.logo-white');
  const mainLogo = document.querySelector('.logo');
  if (mainLogo) {
    if (document.body.classList.contains('dark-mode')) {
      mainLogo.src = 'Lunair_White.png';
    } else {
      mainLogo.src = 'Lunair.png';
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }

      if (mainLogo) mainLogo.src = document.body.classList.contains('dark-mode') ? 'Lunair_White.png' : 'Lunair.png';
      if (whiteLogo) whiteLogo.src = document.body.classList.contains('dark-mode') ? 'Lunair.png' : 'Lunair_White.png';
    });
  }
});
