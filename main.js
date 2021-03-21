"use strict";

const sectionBoard = document.createElement("section");

const gameTitle = document.createElement("h1");
gameTitle.textContent = "Tic tac Toe";

const boardContainer = document.createElement("div");
boardContainer.classList.add("game--container");

const gameStatus = document.createElement("h2");
gameStatus.textContent = "Gamestatus";
gameStatus.classList.add("game--status");
const gameRestart = document.createElement("button");
gameRestart.textContent = "Restart";
gameRestart.classList.add("game--restart")

document.body.append(sectionBoard);
sectionBoard.appendChild(gameTitle);
sectionBoard.appendChild(boardContainer);
sectionBoard.appendChild(gameStatus);
sectionBoard.appendChild(gameRestart);

//Game Array
const createBoard = (rows, columns) => {
  const board = new Array(rows);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(columns);
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = document.createElement("div");
      board[i][j].classList.add(`cell`);
      board[i][j].dataset.row = `${i}`;
      board[i][j].dataset.column = `${j}`;
      board[i][j].textContent = "";
      boardContainer.appendChild(board[i][j]);
    }
  }

  return board;
};
const gameBoard = createBoard(3, 3);

const updateBoard = (board, row, col, player) => {
  board[row][col] = player;
  return board;
};

let player = "X";
const updatePlayer = () => {
  player = player === "X" ? "O" : "X";
};

const move = (target, player) => {
  const row = target.dataset.row;
  const column = target.dataset.column;

  if (!target.textContent) {
    target.textContent = player;
    updateBoard(gameBoard, row, column, player);
    updatePlayer();
    updateStatus(sectionBoard, ".game--status");

    if (haveWinner(gameBoard)) {
      console.log("win");
    }
  }
};

boardContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("cell")) {
    move(target, player);
  }
});

// const winnerMessage = () => {
//     return `Player ${player} has won`;
// }

function haveWinner(board) {
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

  console.log("haveWinner ", board);
  for (const combo of winningCombination) {
    const [x, y, z] = combo; // Destructuring array.
    console.log(gameBoard[x] === gameBoard[y] && gameBoard[x] === gameBoard[z]);
    if (gameBoard[x] === gameBoard[y] && gameBoard[x] === gameBoard[z]) {
      return true;
    } else {
      return false;
    }
  }
}

function updateStatus (board, selector) {
  let status = board.querySelector(selector);
  status.textContent = `${player}'s turn`;
}

gameRestart.addEventListener("click", () => {
  
});