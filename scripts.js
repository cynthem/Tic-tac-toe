const selectPlayer = (() => {
    const humanPlayer = document.querySelector('.fa-person');
    const computerPlayer = document.querySelector('.fa-display');
    const choiceScreen = document.querySelector('.choose-player');
    const gameScreen = document.querySelector('.main-game');

    humanPlayer.addEventListener('click', () => {
        choiceScreen.classList.remove('enter');
        choiceScreen.classList.add('exit');
        window.setTimeout(() => choiceScreen.style.display = 'none', 1001);
        window.setTimeout(() => gameScreen.style.display = 'grid', 1001);
        window.setTimeout(() => gameScreen.classList.add('show'), 1001);
        window.setTimeout(() => gameScreen.classList.remove('show'), 2002);
    })
    computerPlayer.addEventListener('click', () => {
        choiceScreen.classList.remove('enter');
        choiceScreen.classList.add('exit');
        window.setTimeout(() => choiceScreen.style.display = 'none', 1001);
        window.setTimeout(() => gameScreen.style.display = 'grid', 1001);
        window.setTimeout(() => gameScreen.classList.add('show'), 1001);
        window.setTimeout(() => gameScreen.classList.remove('show'), 2002);
    })
})();
