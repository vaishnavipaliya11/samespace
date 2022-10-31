import { useState } from "react";
import { calculateWinner } from "../helpers/winner";
import { PlayBoard } from "./PlayBoard";

const Game = () => {
  const initalStateArray = ["", "", "", "", "", "", "", "", ""];
  const [userHistory, setUserHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [XUser, setXUser] = useState(true);
  const winner = calculateWinner(userHistory[stepNumber]);
  const xO = XUser ? "X" : "O";
  const handleClick = (i) => {
    const historyTillNow = userHistory.slice(0, stepNumber + 1);
    const current = historyTillNow[stepNumber];
    
    const squares = [...current];
 
    if (winner || squares[i]) return
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
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <div>
      <PlayBoard squares={userHistory[stepNumber]} onClick={handleClick} />
      <div>
        <h3>Game History</h3>
        {renderMoves()}
        <h2>{winner ? "Winner is :" + winner : "Next Player:" + xO}</h2>
      </div>
    </div>
  );
};
export { Game };
