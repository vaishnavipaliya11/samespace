import { useState } from "react";
import { calculateWinner } from "../helpers/winner";
import { Header } from "./Header";
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
        <li key={move} >
          <button className="move-btn" onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
    {/* <div>
    <Header/>
    </div> */}
    
    <div className="game-container">
      
      <div>
        <PlayBoard squares={userHistory[stepNumber]} onClick={handleClick} />
      </div>

      <div>
        <h3>Game History</h3>
       <div className= "destination-btn-container">  {renderMoves()}</div>
        <h4>{winner ? "Winner is :" + winner : "Next Player:" + xO}</h4>
        {stepNumber === 9 && !winner ? "game over no one is winner" : ""}
      </div>
    </div>
    </>
  );
};
export { Game };
