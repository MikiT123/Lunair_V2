document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleThemeBtn');
  const mainLogo = document.querySelector('.logo');
  const whiteLogo = document.querySelector('.logo-white');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      if (mainLogo) mainLogo.src = 'Lunair_White.png';
      if (whiteLogo) whiteLogo.src = 'Lunair.png';
    } else {
      if (mainLogo) mainLogo.src = 'Lunair.png';
      if (whiteLogo) whiteLogo.src = 'Lunair_White.png';
    }
  });
});
