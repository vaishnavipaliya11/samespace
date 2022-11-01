import "../components/index.css";
import "../styles.css";

const SquareBox = ({ value, onClick }) => {
  return (
    <button className="play-btn" onClick={onClick}>
      {value ? value : ""}
    </button>
  );
};
export { SquareBox };
