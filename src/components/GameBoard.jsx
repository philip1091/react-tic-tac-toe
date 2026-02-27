const initialGameBoad = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onPlayerChange, turns }) {
  let gameBoard = initialGameBoad;

  for (let turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex} className="board-row">
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <button
                    onClick={() => onPlayerChange(rowIndex, colIndex)}
                    key={colIndex}
                    className="board-cell"
                  >
                    {playerSymbol}
                  </button>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}

export default GameBoard;
