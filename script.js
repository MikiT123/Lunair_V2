const captchaCanvas = document.getElementById("captcha");
const ctx = captchaCanvas.getContext("2d");
let captchaText = "";

function generateCaptcha() {
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
  } else {
    document.getElementById("captcha-message").textContent = "Incorrect, try again.";
    generateCaptcha();
    document.getElementById("captcha-input").value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const lastVerified = localStorage.getItem("captchaVerified");
  if (lastVerified && Date.now() - lastVerified < 10 * 60 * 1000) {
    document.getElementById("captcha-container").style.display = "none";
    document.getElementById("main-site").style.display = "block";
  } else {
    document.getElementById("captcha-container").style.display = "flex";
    document.getElementById("main-site").style.display = "none";
    generateCaptcha();
  }
});
