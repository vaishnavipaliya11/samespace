import { useState } from "react";
import { calculateWinner } from "../helpers/winner";
import { PlayBoard } from "./PlayBoard";

const Game = () => {
  const [userHistory, setUserHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [XUser, setXUser] = useState(true);
  const winner = calculateWinner(userHistory[stepNumber]);
  const xO = XUser ? "X" : "O";
  const handleClick = (i) => {
    const historyTillNow = userHistory.slice(0, stepNumber + 1);
    const current = historyTillNow[stepNumber];

    const squares = [...current];

    if (winner || squares[i]) return;
    squares[i] = xO;
    setUserHistory([...historyTillNow, squares]);
    setStepNumber(historyTillNow.length);
    setXUser(!XUser);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXUser(step % 2 === 0);
  };

  const renderMoves = () =>
    userHistory.map((_step, move) => {
      console.log(move);

      const destination = move ? `Go to ${move}` : "Play Again";
      return (
        <li key={move}>
          <button className="move-btn" onClick={() => jumpTo(move)}>
            {destination}
          </button>
        </li>
      );
    });

  return (
    <div className="game-container">
      <div>
        <PlayBoard squares={userHistory[stepNumber]} onClick={handleClick} />
      </div>

      <div>
        <h2>Game History</h2>
        <div className="destination-btn-container"> {renderMoves()}</div>
        <h3>{winner ? "Yeahh Winner is : " + winner : "Next Player: " + xO}</h3>
       <h4>{stepNumber === 9 && !winner ? "Game Over no one is winner" : ""}</h4> 
      </div>
    </div>
  );
};
export { Game };
