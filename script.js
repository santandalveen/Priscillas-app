const app = document.getElementById("app");
const lockScreen = document.getElementById("lockScreen");
const music = document.getElementById("bgMusic");

// UNLOCK
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass.toLowerCase() === "priscilla") {
    lockScreen.style.display = "none";
    app.style.display = "block";
    fadeInMusic();
    typeText();
    vibrate();
  } else {
    document.getElementById("error").textContent = "Wrong password 💔";
  }
}

// TYPING
const text = "❤️ I love you, Priscilla ❤️";
let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 90);
  }
}

// MUSIC FADE
function fadeInMusic() {
  music.volume = 0;
  music.play();
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.8) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  }, 200);
}

// BUTTON ACTIONS
function showHer() {
  hidePhotos();
  document.getElementById("herPhoto").style.display = "block";
  hearts(20);
  vibrate();
}

function kissUs() {
  hidePhotos();
  document.getElementById("usPhoto").style.display = "block";
  hearts(40);
  vibrate();
}

function hidePhotos() {
  document.getElementById("herPhoto").style.display = "none";
  document.getElementById("usPhoto").style.display = "none";
}

// HEARTS
function hearts(count) {
  for (let h = 0; h < count; h++) {
    const heart = document.createElement("div");
    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💙";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-10%";
    heart.style.fontSize = "26px";
    heart.style.animation = "floatUp 4s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

// SPARKLE TRAIL
document.addEventListener("click", e => {
  for (let s = 0; s < 5; s++) {
    const spark = document.createElement("div");
    spark.innerHTML = "✨";
    spark.style.position = "absolute";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    spark.style.animation = "spark 1s ease-out";
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
  }
});

// VIBRATION
function vibrate() {
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
}

// ANIMATIONS
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  to { transform: translateY(-120vh); opacity: 0; }
}
@keyframes spark {
  from { opacity: 1; }
  to { opacity: 0; transform: translateY(-40px) scale(0.4); }
}`;
document.head.appendChild(style);



// COUNTDOWN – change the date you’ll see her
const seeHerDate = new Date("2026-01-26T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = seeHerDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      `<span class="pink">NOW 💖</span>`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerHTML =
    `<span class="pink">${days} days</span>
     <span class="blue">${hours} hrs</span>
     <span class="pink">${mins} mins</span>
     <span class="blue">until I see you 💙</span>`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

startCountdown();


