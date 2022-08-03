const selectPlayer = (() => {
    const humanPlayer = document.querySelector('.fa-person');
    const computerPlayer = document.querySelector('.fa-display');
    const choiceScreen = document.querySelector('.choose-player');
    const gameScreen = document.querySelector('.main-game');

    humanPlayer.addEventListener('click', () => {
        gameBoard.setPlayer(1, 'player1');
        gameBoard.setPlayer(2, 'player2');
        choiceScreen.classList.remove('enter');
        choiceScreen.classList.add('exit');
        window.setTimeout(() => choiceScreen.style.display = 'none', 1001);
        window.setTimeout(() => gameScreen.style.display = 'grid', 1001);
        window.setTimeout(() => gameScreen.classList.add('show'), 1001);
        window.setTimeout(() => gameScreen.classList.remove('show'), 2002);
    })
    computerPlayer.addEventListener('click', () => {
        gameBoard.setPlayer(1, 'player1');
        gameBoard.setPlayer(2, 'computer');
        choiceScreen.classList.remove('enter');
        choiceScreen.classList.add('exit');
        window.setTimeout(() => choiceScreen.style.display = 'none', 1001);
        window.setTimeout(() => gameScreen.style.display = 'grid', 1001);
        window.setTimeout(() => gameScreen.classList.add('show'), 1001);
        window.setTimeout(() => gameScreen.classList.remove('show'), 2002);
    })
})();

const gameBoard = (() => {
    const board = document.querySelector('.gameboard');
    const boardArray = Array(9).fill(null);
    const xTotal = [];
    const oTotal = [];
    let isItDraw = null;
    const playerOne = Player('X', false, 'player1');
    const playerTwo = Player('O', false, 'player2');

    const getPlayer = (playerNumber) => {
        return playerNumber === 1 ? playerOne : playerTwo;
    }
    const setPlayerType = (playerNumber, playerType) => {
        return playerNumber === 1 ? playerOne.updatePlayerType(playerType) : playerTwo.updatePlayerType(playerType);
    }
    const getCurrentPlayer = () => {
        return playerOne.getCurrentPlayer() === true ? playerOne : playerTwo;
    }
    const setCurrentPlayer = () => {
        if (playerOne.getCurrentPlayer() === false && playerTwo.getCurrentPlayer() === false) {
            playerOne.updateCurrentPlayer(true);
            return playerOne;
        }
        if (playerOne.getCurrentPlayer() === true) {
            playerOne.updateCurrentPlayer(false);
            playerTwo.updateCurrentPlayer(true);
            return playerTwo;
        } else if (playerTwo.getCurrentPlayer() === true) {
            playerTwo.updateCurrentPlayer(false);
            playerOne.updateCurrentPlayer(true);
            return playerOne;
        }
    }

})

const Player = ((letter, currentlyPlaying, playerType) => {
    const getLetter = () => {
        return letter;
    }
    const getCurrentPlayer = () => {
        return currentlyPlaying;
    }
    const updateCurrentPlayer = (isPlaying) => {
        return currentlyPlaying = isPlaying;
    }
    const getPlayerType = () => {
        return playerType;
    }
    const updatePlayerType = (type) => {
        return playerType = type;
    }
    return {
        getLetter,
        getCurrentPlayer,
        updateCurrentPlayer,
        getPlayerType,
        updatePlayerType
    };
})

const computerPlay = (() => {
    
})
