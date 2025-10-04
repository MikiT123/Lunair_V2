function applyDarkModeFromStorage() {
  const prefersDark = localStorage.getItem('darkMode') === 'enabled';
  if (prefersDark) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// --- Dark mode toggle logic ---
document.addEventListener('DOMContentLoaded', () => {
  // Initial theme setup
  applyDarkModeFromStorage();

  // Dark mode toggle button
  const toggleBtn = document.getElementById('toggleThemeBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }

      // Optional: logo switching logic
      const mainLogo = document.querySelector('.logo');
      const whiteLogo = document.querySelector('.logo-white');
      if (mainLogo && whiteLogo) {
        if (document.body.classList.contains('dark-mode')) {
          mainLogo.src = 'Lunair_White.png';
          whiteLogo.src = 'Lunair.png';
        } else {
          mainLogo.src = 'Lunair.png';
          whiteLogo.src = 'Lunair_White.png';
        }
      }
    });
  }

  // --- Captcha logic ---
  const captchaCanvas = document.getElementById("captcha");
  const ctx = captchaCanvas ? captchaCanvas.getContext("2d") : null;
  let captchaText = "";

  function generateCaptcha() {
    if (!ctx) return;
    ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
    captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(captchaText, 40, 40);
  }

  function checkCaptcha() {
    const input = document.getElementById("captcha-input").value.toUpperCase();
    if (input === captchaText) {
      localStorage.setItem("captchaVerified", Date.now());
      document.getElementById("captcha-container").style.display = "none";
      document.getElementById("main-site").style.display = "block";
      applyDarkModeFromStorage();
    } else {
      document.getElementById("captcha-message").textContent = "Incorrect, try again.";
      generateCaptcha();
      document.getElementById("captcha-input").value = "";
    }
  }

  // Make checkCaptcha visible in global scope if needed by the button onclick in HTML
  window.checkCaptcha = checkCaptcha;

  const lastVerified = localStorage.getItem("captchaVerified");
  if (lastVerified && Date.now() - lastVerified < 10 * 60 * 1000) {
    document.getElementById("captcha-container").style.display = "none";
    document.getElementById("main-site").style.display = "block";
    applyDarkModeFromStorage();
  } else if (captchaCanvas) {
    document.getElementById("captcha-container").style.display = "flex";
    document.getElementById("main-site").style.display = "none";
    generateCaptcha();
  }
});
