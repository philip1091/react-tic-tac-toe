import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Gameover from "./components/Gameover";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations.js";

const initialGameBoad = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoad.map((row) => [...row]);

  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const draw = gameTurns.length === 9 && !winner;

  function handlePlayerChange(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestartGame() {
    setGameTurns([]);
    console.log("restart");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            initialSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            initialSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || draw) && (
          <Gameover winner={winner} onRestart={handleRestartGame} />
        )}
        <GameBoard board={gameBoard} onPlayerChange={handlePlayerChange} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
