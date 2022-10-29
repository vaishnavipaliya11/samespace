import { SquareBox } from "./SquareBox"

const PlayBoard = () =>{
    return(
        <div className="play-board-container">
            <div className="common-row">
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
            </div>
            <div className="common-row">
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
            </div>
            <div className="common-row">
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
            </div>
            <button>Play Again</button>
        </div>
    )
}
export {PlayBoard}