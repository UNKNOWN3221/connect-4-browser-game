const rows = 6;
const cols = 7;
let board = [];
let currentPlayer = 'red';
let gameOver = false;

const game = document.getElementById('game');
const statusEl = document.getElementById('status');
const resetBtn = document.getElementById('reset');

function createboard() {
  board = Array.from({ length: rows }, () => Array(cols).fill(null));
  game.innerHTML = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.addEventListener('click', handleclick);
      game.appendChild(cell);
    }
  }
}

function handleclick(evt) {
  if (gameOver) return;
  const col = +evt.target.dataset.col;
  for (let row = rows - 1; row >= 0; row--) {
    if (!board[row][col]) {
      board[row][col] = currentPlayer;
      updateboard();
      if (checkWin(row, col)) {
        statusEl.textContent = `${currentPlayer.toUpperCase()} wins!`;
        gameOver = true;
      } else if (board.flat().every(cell => cell)) {
        statusEl.textContent = "It's a draw!";
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
        statusEl.textContent = `${currentPlayer.toUpperCase()}'s turn`;
      }
      break;
    }
  }
}

function updateboard() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      const cell = game.children[idx];
      cell.className = 'cell';
      if (board[r][c]) cell.classList.add(board[r][c]);
    }
  }
}

function checkWin(row, col) {
  const color = board[row][col];
  function count(dx, dy) {
    let r = row + dx, c = col + dy, cnt = 0;
    while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === color) {
      cnt++;
      r += dx;
      c += dy;
    }
    return cnt;
  }
  return (
    count(-1, 0) + count(1, 0) >= 3 || 
    count(0, -1) + count(0, 1) >= 3 || 
    count(-1, -1) + count(1, 1) >= 3 || 
    count(-1, 1) + count(1, -1) >= 3    
  );
}

resetBtn.addEventListener('click', () => {
  gameOver = false;
  currentPlayer = 'red';
  statusEl.textContent = "RED's turn";
  createboard();
});


document.addEventListener('DOMContentLoaded', () => {
  createboard();
  statusEl.textContent = "RED's turn";
});
