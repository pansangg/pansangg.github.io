const chair = document.querySelector(".chair");
const clickCount = document.querySelector('.click-count');
let clicks = 0;

chair.addEventListener('click', () => {
    clicks++;

    if (clicks == 151) {
        alert("поздравляю ты прошёл кликер")
        location.reload();
    }

    chair.classList.add('shake');

    chair.style.fontSize = (100 + clicks * 2) + 'px';

    clickCount.textContent = `Нажатий: ${clicks}`;

    for (let i = 0; i < 3; i++) {
        const flyingChair = document.createElement('div');
        const speed = Math.random() * 1.5 + 0.5;

        if (Math.random() < 0.8) {
            flyingChair.innerHTML = '🪑'
        } else {
            if (Math.random() < 0.9) {
                flyingChair.innerHTML = '🛋️'
            } else {
                flyingChair.innerHTML = '🪙'
            }
        }

        flyingChair.style.position = 'fixed';
        flyingChair.style.left = Math.random() * window.innerWidth + 'px';
        flyingChair.style.top = window.innerHeight+10 + 'px';
        flyingChair.style.fontSize = '30px';
        flyingChair.style.transition = 'all '+speed+'s ease-out';
        document.body.appendChild(flyingChair);

        // Анимация полёта
        setTimeout(() => {
            flyingChair.style.top = '-10px';
            flyingChair.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 50);

        // Удаляем после анимации
        setTimeout(() => {
            flyingChair.remove();
        }, 1000);
    }

    // // Убираем класс анимации
    // setTimeout(() => {
    //     chair.classList.remove('shake');
    // }, 500);
});