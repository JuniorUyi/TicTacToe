"use strict"

const sectionBoard = document.createElement("section");

const gameTitle = document.createElement("h1");
gameTitle.textContent = "Tic tac Toe"

const boardContainer = document.createElement("div");
boardContainer.classList.add("game--container")

const gameStatus = document.createElement("h2");
gameStatus.textContent = "Gamestatus"
const gameRestart = document.createElement("button");
gameRestart.textContent = "Restart"

// for(let i = 0; i < 9; i++) {
//     const boardCells = document.createElement("div")
//     boardCells.classList.add(`cell`)
//     boardCells.classList.add(`cell${i}`)
//     boardContainer.appendChild(boardCells)
// }


document.body.append(sectionBoard);
sectionBoard.appendChild(gameTitle);
sectionBoard.appendChild(boardContainer);
sectionBoard.appendChild(gameStatus);
sectionBoard.appendChild(gameRestart);




// const gameBoard = (rows, cols) => new Array(rows).fill(new Array(cols).fill("X"));
// console.log(gameState(3, 3));

//Game Array
const createBoard = (rows, columns) => {
    const board =  new Array(rows)
    for(let i = 0; i < board.length; i++) {
        board[i] = new Array(columns)
            for(let j = 0; j < board[i].length; j++) {
            board[i][j] = document.createElement("div");
            board[i][j].classList.add(`cell`);
            board[i][j].dataset.row = `${i}`
            board[i][j].dataset.column = `${j}`
            boardContainer.appendChild(board[i][j]);
            }
        }
        return board
    };
const gameBoard = createBoard(3, 3);

let player = "X";
// const currentPlayer = () => {
//     player = player === "X" ? "O" : "X"
// }
const UpdatePlayer = (p) => {
    if(p === "X") {
        p = "O"
    } else {
       p = "X"
    }
    return p;
}

const UpdateBoard = () => {
   
}
boardContainer.addEventListener("click", (e) => {
    console.log('event',e)
    const target = e.target;
    const row = target.dataset.row
    const column = target.dataset.column
    console.log("cell", gameBoard[row][column]);
    gameBoard[row][column].textContent = UpdatePlayer(player);
    // player = player === 'X' ? 'yolo' : 'ha'
    // if (target.classList.contains("cell")) {
    //     target.textContent = player
    //     UpdatePlayer();
    // }

})

// const winnerMessage = () => {
//     return `Player ${player} has won`;
// }

function haveWinner (board) {
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
// console.log(winningCombination[2])
    for(const combo of winningCombination) {
        const [x, y, z] = combo;  // Destructuring array.
        console.log(combo[1])
        if( x === "" || y === "" || z === "" ) {
            continue;
        }
        if ( x === y && y === z) {
            ()
        }
    }
}





