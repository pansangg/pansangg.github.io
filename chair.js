const chair = document.querySelector(".chair");
const clickCount = document.querySelector('.click-count');
let clicks = 0;

chair.addEventListener('click', () => {
    clicks++;

    if (clicks == 3) {
        const completed = localStorage.getItem('chairclicker');
        console.log(completed)
        if (!completed) {
            localStorage.setItem("chairclicker", 1);
            alert("поздравляю ты прошёл кликер")
        } else {
            localStorage.setItem("chairclicker", Number(completed)+1);
            if (completed == 2) {
                alert("поздравляю ты прошёл кликер")
            } else if (completed == 3) {
                alert("уже третий раз прошёл кликер молодец")
            } else if (completed == 4) {
                alert("да всё всё молодец давай иди занимайся делами")
            } else if (completed == 5) {
                alert("ладно раз такой упёртый кликай дальше")
            } else if (completed >= 6 && completed <= 9) {
                alert("поздравляю ты прошёл кликер")
            } else if (Number(completed) > 9) {
                alert("ты ебанулся конкретно всё я тебе кэш очищаю давай заново кликай лозззззз")
                localStorage.removeItem("chairclicker");
            }
        }
        location.reload();
    }

    chair.classList.add('shake');

    chair.style.fontSize = (100 + clicks * 2) + 'px';

    clickCount.textContent = `кликнул ${clicks} раз`;

    for (let i = 0; i < Math.floor(Math.random()*3)+1; i++) {
        const flyingChair = document.createElement('div');
        const speed = Math.random() * 1.5 + 0.5;

        if (Math.random() < 0.9) {
            flyingChair.innerHTML = '🪑'
        } else {
            if (Math.random() < 0.99) {
                flyingChair.innerHTML = '💺'
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
            flyingChair.style.opacity = '0.5';
            flyingChair.style.top = '0px';
            flyingChair.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 25);

        // Удаляем после анимации
        setTimeout(() => {
            flyingChair.style.opacity = "0";
        }, 750);
    }

    // // Убираем класс анимации
    // setTimeout(() => {
    //     chair.classList.remove('shake');
    // }, 500);
});