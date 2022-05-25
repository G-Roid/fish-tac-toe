// Class


class GameGrid {
    constructor() {
        this.grid = [
            [], [], [],
            [], [], [],
            [], [], []
        ]
    }

    addSymbol(player, index) {
        if (this.grid[index] == '') {
            this.grid[index] = player;
        }        
    }
}

class WinChecker {
    constructor() {
        this.winner = false;

    }

    checkThree(arr) {
        if (arr[0] == '' || arr[1] == ''|| arr[2] == '') {
            this.winner = false;
            return false;
        } else if (arr[0] == arr[1] && arr[0] == arr[2]) {
            this.winner = true
            return true;
        } else {
            this.winner = false
            return false
        }            
    }
    greet() {
        console.log('hello')
    }
}

class Game {
    constructor(gameGrid, winChecker) {
        this.gameGrid = gameGrid
        this.winChecker = winChecker
        this.currentPlayer = 1
    }

    takeTurn(player, index) {
        if (!game.winChecker.winner) {
            this.gameGrid.addSymbol(player, index)
            this.changePlayer()
            this.checkForWinner()

        }

    }

    changePlayer() {
        this.currentPlayer++
        if (this.currentPlayer > 2) {
            this.currentPlayer = 1 
        }
    }
    checkForWinner() {
        if (
            this.winChecker.checkThree([this.gameGrid.grid[0], this.gameGrid.grid[1], this.gameGrid.grid[2]]) === true || 
            this.winChecker.checkThree([this.gameGrid.grid[3], this.gameGrid.grid[4], this.gameGrid.grid[5]]) === true ||
            this.winChecker.checkThree([this.gameGrid.grid[6], this.gameGrid.grid[7], this.gameGrid.grid[8]]) === true ||

            this.winChecker.checkThree([this.gameGrid.grid[0], this.gameGrid.grid[3], this.gameGrid.grid[6]]) === true || 
            this.winChecker.checkThree([this.gameGrid.grid[1], this.gameGrid.grid[4], this.gameGrid.grid[7]]) === true ||
            this.winChecker.checkThree([this.gameGrid.grid[2], this.gameGrid.grid[5], this.gameGrid.grid[8]]) === true ||

            this.winChecker.checkThree([this.gameGrid.grid[0], this.gameGrid.grid[4], this.gameGrid.grid[8]]) === true || 
            this.winChecker.checkThree([this.gameGrid.grid[2], this.gameGrid.grid[4], this.gameGrid.grid[6]]) === true

        ) {
            displayWinner.textContent = `Player ${game.currentPlayer} wins!`
            this.winChecker.winner = true
        }
    }

}




// Global variables
let gameGrid = new GameGrid();
let winChecker = new WinChecker();
let game = new Game(gameGrid, winChecker)

const displayWinner = document.querySelector('.displayWinner')

const playAgainButton = document.querySelector('#playAgain')








squares = document.querySelectorAll('div').forEach(element => {
    element.addEventListener('click', selectSquare)
})


function selectSquare(e) {
    
    if (!game.winChecker.winner) {

        let tile = document.querySelector(`#${e.target.id}`)
    
        let selection = tile.firstChild.textContent
        
        console.log(`Selection: ${selection}`)

        game.takeTurn(game.currentPlayer, selection)
        changeImage(tile)
        
    }

} 

function changeImage(tile) {

    if (game.currentPlayer == 1) {
        // tile.textContent = 'X';

        let img1 = new Image()
        img1.src = 'fish1.jpg'

        tile.appendChild(img1)


    } else {
        // tile.textContent = 'O'

        let img1 = new Image()
        img1.src = 'fish2.jpg'

        tile.appendChild(img1)

    }

}


playAgainButton.addEventListener('click', reset)

function reset() {
    gameGrid = new GameGrid();
    winChecker = new WinChecker();
    game = new Game(gameGrid, winChecker)

    displayWinner.textContent = ''
    clearBoard()
}

function clearBoard() {
    location.reload()
}


