import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" initialSymbol="X" />
        <Player initialName="Player 2" initialSymbol="O" />
      </ol>
      <GameBoard />
    </div>
  );
}

export default App;
