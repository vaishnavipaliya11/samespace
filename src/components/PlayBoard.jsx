import { SquareBox } from "./SquareBox";

const PlayBoard = ({ squares, onClick }) => {
  console.log(squares, "sq");
  return (
    <div className="play-board-container">
       {squares.map((square, i) => (
      <SquareBox key={i} value={square} onClick={() => onClick(i)} />
    ))}
      
    </div>
  );
};
export { PlayBoard };
