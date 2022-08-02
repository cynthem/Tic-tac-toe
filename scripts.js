const selectPlayer = (() => {
    const humanPlayer = document.querySelector('.fa-person');
    const computerPlayer = document.querySelector('.fa-display');
    const choiceCard = document.querySelector('.choose-player');

    humanPlayer.addEventListener('click', () => {
        choiceCard.classList.remove('enter');
        choiceCard.classList.add('exit');
        window.setTimeout(() => choiceCard.classList.add('hide'), 1001);
        //otherPlayer();
    })
})

selectPlayer();