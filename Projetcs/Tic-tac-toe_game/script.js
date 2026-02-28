const statusElement = document.getElementById('status');
const resetBtn = document.getElementById('reset');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let boardState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function handleCellClick(e) {
    const clickedCell = e.target;
    const cellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (boardState[cellIndex] !== "" || !gameActive) return;

    updateCell(clickedCell, cellIndex);
    checkResult();
}

function updateCell(cell, index) {
    boardState[index] = currentPlayer;
    cell.innerText = currentPlayer;
    // Add 'x' or 'o' class for coloring
    cell.classList.add(currentPlayer.toLowerCase()); 
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusElement.innerText = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!boardState.includes("")) {
        statusElement.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusElement.innerText = `Player ${currentPlayer}'s Turn`;
}

function resetGame() {
    currentPlayer = "X";
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusElement.innerText = "Player X's Turn";
    cells.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove('x', 'o'); // Clear the colors
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);