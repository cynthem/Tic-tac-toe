const selectPlayer = (() => {
    const humanPlayer = document.querySelector('.fa-person');
    const computerPlayer = document.querySelector('.fa-display');
    const choiceScreen = document.querySelector('.choose-player');
    const gameScreen = document.querySelector('.main-game');

    humanPlayer.addEventListener('click', () => {
        gameBoard.setPlayerType(1, 'human');
        gameBoard.setPlayerType(2, 'human');
        choiceScreen.classList.remove('enter');
        choiceScreen.classList.add('exit');
        window.setTimeout(() => choiceScreen.style.display = 'none', 1001);
        window.setTimeout(() => gameScreen.style.display = 'grid', 1001);
        window.setTimeout(() => gameScreen.classList.add('show'), 1001);
        window.setTimeout(() => gameScreen.classList.remove('show'), 2002);
    })
    computerPlayer.addEventListener('click', () => {
        gameBoard.setPlayerType(1, 'human');
        gameBoard.setPlayerType(2, 'computer');
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
    const playerOne = Player('X', false, 'human');
    const playerTwo = Player('O', false, 'human');

    const getPlayer = (playerNumber) => {
        return playerNumber === 1 ? playerOne : playerTwo;
    }
    const setPlayerType = (playerNumber, playerType) => {
        return playerNumber === 1 ? playerOne.updatePlayerType(playerType) : playerTwo.updatePlayerType(playerType);
    }
    const getCurrentPlayer = () => {
        return playerOne.getCurrentlyPlaying() === true ? playerOne : playerTwo;
    }
    const setCurrentPlayer = () => {
        if (playerOne.getCurrentlyPlaying() === false && playerTwo.getCurrentlyPlaying() === false) {
            playerOne.updateCurrentlyPlaying(true);
            return playerOne;
        }
        if (playerOne.getCurrentlyPlaying() === true) {
            playerOne.updateCurrentlyPlaying(false);
            playerTwo.updateCurrentlyPlaying(true);
            return playerTwo;
        } else if (playerTwo.getCurrentlyPlaying() === true) {
            playerTwo.updateCurrentlyPlaying(false);
            playerOne.updateCurrentlyPlaying(true);
            return playerOne;
        }
    }
    const isComputerCurrentPlayer = () => {
        if (getCurrentPlayer().getPlayerType() !== 'human' &&
            isItDraw === null &&
            boardArray.some(el => el === null)) {
            game.removeEventListener('click', gameBoard.playGame);
            window.setTimeout(() => playGame(null), 500);
            if (playerTwo.getPlayerType() !== 'human') return;
            window.setTimeout(() => game.addEventListener('click', gameBoard.playGame), 1000);
        }
    }
    const setComputerLetter = (randomMove) => {
        if (randomMove === undefined) return;
        const gameTiles = document.querySelectorAll('.tile');
        gameTiles[randomMove].textContent = getCurrentPlayer().getLetter();
        boardArray[randomMove] = getCurrentPlayer().getLetter();
        oTotal.push(Number(randomMove));
    }
})

const Player = ((letter, currentlyPlaying, playerType) => {
    const getLetter = () => {
        return letter;
    }
    const getCurrentlyPlaying = () => {
        return currentlyPlaying;
    }
    const updateCurrentlyPlaying = (isPlaying) => {
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
        getCurrentlyPlaying,
        updateCurrentlyPlaying,
        getPlayerType,
        updatePlayerType
    };
})

const computerMoves = (() => {
    const availableMoves = () => {
        const moves = [];
        gameBoard.boardArray.filter((el, i) => {
            if (el === null) {
                moves.push(i);
            }
        })
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        return Object.freeze({moves, randomMove});
    }
    const computerMove = () => {
        gameBoard.setComputerLetter(availableMoves().randomMove);
    }
    return {computerMove};
})();
