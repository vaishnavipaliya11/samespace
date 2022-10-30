import "../styles.css" 

const SquareBox = ({value, userClick}) => {
    
  return (
    <button className="box" onClick={userClick}>{value? {value} :""}</button>
  );
};
export { SquareBox };
