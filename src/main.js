const bar = document.getElementById("bar");
const xmark = document.getElementById("xmark");
const menu = document.getElementById("menu");
const opacity = document.getElementById("blur-bg");
bar.onclick = function(){
    menu.style.display = "block";
    opacity.style.display = "block";
}
xmark.onclick = function(){
    menu.style.display = "none";
    opacity.style.display = "none";
}
opacity.onclick = function(){
    menu.style.display = "none";
    opacity.style.display = "none";
}
let loader = document.getElementById("loader");
    window.addEventListener("load", function(){
        loader.style.display = "none";
    })

// -------- Countdown --------------
const targetDate = new Date("2025-12-31 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "EXPIRED";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();