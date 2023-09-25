let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(cellIndex) {
    if (board[cellIndex] === "" && gameActive) {
        board[cellIndex] = currentPlayer;
        document.getElementById("board").children[cellIndex].innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById("message").innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every((cell) => cell !== "")) {
            document.getElementById("message").innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("message").innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winCombos.some((combo) =>
        combo.every((index) => board[index] === currentPlayer)
    );
}

function resetBoard() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    document.getElementById("message").innerText = "Player X's turn";
    Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
        cell.innerText = "";
    });
}

resetBoard(); // Initialize the game board

