import { useState } from "react"
import { SquareBox } from "./SquareBox"

const PlayBoard = ({squares, userClick}) =>{
    const initalStateArray = ["","","","","","","","",""]
    const [userGameState, setUserGameState]= useState(initalStateArray)
    return(
        <div className="play-board-container">
            {squares.map((sq,i)=>{
                return(
                    <SquareBox value={sq} onClick={()=> userClick(i)}/>
                )
            })}
            <button>Play Again</button>
        </div>
    )
}
export {PlayBoard}