import { useState } from "react";
const initialGameBoad = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoad);

  function handleCellClick(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
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
                    onClick={() => handleCellClick(rowIndex, colIndex)}
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
