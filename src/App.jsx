import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" initialSymbol="X" />
        <Player initialName="Player 2" initialSymbol="O" />
      </ol>
      Game Board
    </div>
  );
}

export default App;
