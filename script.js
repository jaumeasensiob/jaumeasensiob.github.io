const ticTacToe = document.getElementById('tic-tac-toe');
const cells = ticTacToe.getElementsByTagName('td');
let currentPlayer = 'X';

ticTacToe.addEventListener('click', handleClick);
document.getElementById('play-again').addEventListener('click', resetGame);

function handleClick(event) {
  if (event.target.tagName === 'TD' && event.target.textContent === '') {
    event.target.textContent = currentPlayer;

    // Check for a win
    if (checkForWin()) {
      alert(currentPlayer + ' wins!');
      ticTacToe.removeEventListener('click', handleClick);
    } else {
      // Switch players
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }
}

function checkForWin() {
  // Check rows
  for (let i = 0; i < cells.length; i += 3) {
    if (cells[i].textContent === currentPlayer && cells[i + 1].textContent === currentPlayer && cells[i + 2].textContent === currentPlayer) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (cells[i].textContent === currentPlayer && cells[i + 3].textContent === currentPlayer && cells[i + 6].textContent === currentPlayer) {
      return true;
    }
  }

  // Check diagonals
  if (cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
    return true;
  }
  if (cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
    return true;
  }

  // No win
  return false;
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
  ticTacToe.addEventListener('click', handleClick);
  currentPlayer = 'X';
}