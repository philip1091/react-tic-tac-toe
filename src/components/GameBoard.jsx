function GameBoard({ onPlayerChange, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex} className="board-row">
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <button
                    onClick={() => onPlayerChange(rowIndex, colIndex)}
                    key={colIndex}
                    className="board-cell"
                    disabled={playerSymbol !== null}
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
