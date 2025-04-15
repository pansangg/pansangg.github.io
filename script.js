(async () => {
    if (typeof jQuery === 'undefined') {
      await import('https://cdn.jsdelivr.net/jquery/latest/jquery.min.js');
    }

    $(document).ready(function() {
      $('#buttons').load('buttons.html');
      $('#webring').load('webring.html');
      $('#musles').load('musles.html');
    });
  })();

const splashes = [
    "also try meex.lol",
    "post this мяу-мяу every week",
    "виво х200 про в соло",
    "Я ХЛЕБ РОВНО ОТРЕЗАЛ",
    "welcome to my site",
    "на айфон денег не хватило",
    "пук пук я прёнулл☠️☠️",
    "не ну эта патпiсон",
    "завтра в 3",
    "пахан когда разбан на кубере",
    "удалите компьютер",
    "also try amirtini.github.io",
    "also try camp3rcraft.github.io",
    "инт мейн говнюк",
    "дайте мне денег",
    "что тут писать?",
    "best viewed on PC",
    "паралеллограм☠️",
    "пошли в рандом раш",
    "это сплеш",
    "i am steve 🗣️🗣️",
    "але оп смотри",
    "да ну не верю",
    "кемпер не даёт идеи для сплешей",
    "чел у тебя очепатка в спелше 🤓",
    "pansan was here",
    "🚽💨💨💨💥"
];

document.addEventListener('DOMContentLoaded', function() {
    const dash = document.querySelector('.dash');
    const navbar = document.querySelector('.navbar');
    dash.addEventListener('mouseover', () => {
        navbar.style.boxShadow = '0px 0px 20px #ffffff';
    });

    dash.addEventListener('mouseout', () => {
        navbar.style.boxShadow = '0px 0px 5px #ffffff';
    });

    let audio = new Audio('meowmeow.mp3');
    const meowmeow = document.getElementById("meowmeow")
    meowmeow.addEventListener('click', () => {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
      audio.play();
    });

    const rareSplash = Math.random() < 0.01
    const splash = document.querySelector(".splash");

    if (rareSplash) {
      splash.classList.add("rainbow-splash");
      splash.textContent = "самый редкий сплеш";
    } else {
      splash.textContent = splashes[Math.floor(Math.random() * splashes.length)];
    }
});