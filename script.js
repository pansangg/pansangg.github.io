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

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    "🚽💨💨💨💥",
    "Напиши там типо я скмбиди томилет",
    "робот сочинит симфонию?",
    "ай лев ай тигр",
    "СЛАВА БОГУ APPLE 🙏🏼🍎",
    "с новой годой",
    "ГОЙДАААА",
    "V ORDINATORSKUYU?!!",
    "щто",
    "сайт нагружен полезной информацией",
    "го буквить",
    "ну вот это вот",
    "Вова 5ш: го в майн",
    "го в майнкрафт",
    "+ в папку локальных мемов",
    "заходите на кругер",
    "open ze dor",
    "телефон покофон💥",
    "tomate paste",
    "bombordiro crocodilo",
    "tralalero tralala",
    "🍐бом бом",
    "айфон 5 ASS",
    "черрипiк черепоik💀☠️",
    "reacted to your message 🦄",
    "🛐💨💨💨💨💨💥"
];

document.addEventListener('DOMContentLoaded', function() {
    function pageBoom() {
        gif = document.querySelector(".boomgif");

        gif.src = "";
        gif.src = "img/boom.gif";

        gif.classList.remove("hiddengif");

        setTimeout(() => {
          location.reload();
          gif.src = ""
        }, 1800);

        let boomSound = new Audio('audio/boom.mp3');
        boomSound.play();
    }


    const dash = document.querySelector('.dash');
    const navbar = document.querySelector('.navbar');
    dash.addEventListener('mouseover', () => {
        navbar.style.boxShadow = '0px 0px 20px #ffffff';
    });

    dash.addEventListener('mouseout', () => {
        navbar.style.boxShadow = '0px 0px 5px #ffffff';
    });

    let meowaudio = new Audio('audio/meowmeow.mp3');
    const meowmeow = document.getElementById("meowmeow")
    meowmeow.addEventListener('click', () => {
      if (!meowaudio.paused) {
        meowaudio.pause();
        meowaudio.currentTime = 0;
      }
      meowaudio.play();
    });

    const avatar = document.querySelector(".avatar")
    avatar.addEventListener('click', () => {
      let avataraudio = new Audio();
      avataraudio.src = "audio/hit"+randInt(2,7)+".mp3";
      avataraudio.volume = 0.5;
      avataraudio.play();
    });

    const rareSplash = Math.random() < 0.01
    const splash = document.querySelector(".splash");

    if (rareSplash) {
      splash.classList.add("rainbow-splash");
      splash.textContent = "самый редкий сплеш";
    } else {
      splash.textContent = splashes[Math.floor(Math.random() * splashes.length)];
    }

    let avatarClickCount = 0;

    // снизу частицы для аватара
    const emojis = ['💥', '🔥', '💨', '🚽', '☠️', '♥️', '👽', '🧠', '🪑', '🪙', '🍗', '🏀', '🎱', '🍋', '🥥', '🍕'];
    const clickable = document.querySelector(".avatar")
    clickable.addEventListener('click', (event) => {
      if (avatarClickCount > 90) {
        avatar.src = "img/angry_avatar.png";
      }
      if (avatarClickCount > 100) {
        pageBoom();
      }
      const particlesCount = randInt(2, 7); // сколько частиц создаём
      avatarClickCount++

      for (let i = 0; i < particlesCount; i++) {
        createParticle(event.clientX, event.clientY);
      }
    });

    function createParticle(x, y) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      // начальная позиция частицы
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';

      document.body.appendChild(particle);

      const angle = Math.random() * 2 * Math.PI; // угол направления по горизонтали
      const speed = Math.random() * 150 + 150;  // начальная скорость по горизонтали (px/s)
      const duration = 2000 + Math.random() * 1000; // длительность анимации (мс)

      // Начальные скорости по осям X и Y
      let velocityX = Math.cos(angle) * speed;
      // Задаём отрицательную начальную скорость по Y, чтобы частицы подлетали вверх
      let velocityY = -(Math.random() * 200 + 250); // от -250 до -450 px/s (вверх)

      const gravity = 800; // ускорение гравитации (px/s²)

      // Начальный угол вращения и скорость вращения (градусы в секунду)
      let rotation = 0;
      const rotationSpeed = (Math.random() * 360 + 90) * (Math.random() < 0.5 ? 1 : -1);

      const startTime = performance.now();

      function animate(time) {
        const elapsed = (time - startTime) / 1000; // время в секундах

        if (elapsed * 1000 > duration) {
          particle.remove();
          return;
        }

        // Обновляем скорость по Y с учётом гравитации
        velocityY += gravity * (1 / 60); // гравитация прибавляется каждый кадр

        // Смещаем частицы с учётом скорости и времени
        const dx = velocityX * elapsed;
        const dy = velocityY * elapsed;

        // Обновляем угол вращения
        rotation += rotationSpeed * (1 / 60);

        // Плавное уменьшение прозрачности
        const opacity = 1 - elapsed / (duration / 1000);

        particle.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotation}deg)`;
        particle.style.opacity = opacity;

        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }
});