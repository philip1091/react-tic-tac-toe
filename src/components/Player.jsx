import { useState } from "react";

function Player({ initialName, initialSymbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [symbol, setSymbol] = useState(initialSymbol);
  const handleEditing = () => {
    setIsEditing((prevEdit) => !prevEdit);
    if (isEditing) {
      onChangeName(symbol, name);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  let playerName = <span className="player-name">{name}</span>;
  let playerSymbol = <span className="player-symbol">{symbol}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" value={name} required onChange={handleNameChange} />
    );

    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerName}
        {playerSymbol}
      </span>
      <button onClick={handleEditing}>{btnCaption}</button>
    </li>
  );
}

export default Player;
