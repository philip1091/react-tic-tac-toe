import React from "react";

function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected row {turn.square.row + 1} and column{" "}
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}

export default Log;
