import "../styles.css" 

const SquareBox = ({ value, onClick }) => {
  // const style = value ? `squares ${value}` : `squares`;

  return (
    <button className="play-btn" onClick={onClick}>
      {value ? value : ""}
    </button>
  );
};
export { SquareBox };
