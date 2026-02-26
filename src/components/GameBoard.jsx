const initialGameBoad = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoad.map((row, rowIndex) => {
        return (
          <li key={rowIndex} className="board-row">
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <button key={colIndex} className="board-cell">
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
