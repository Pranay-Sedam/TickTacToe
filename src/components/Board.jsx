import { useState } from "react";
import Square from "./square";

const Board =()=> {
    const[Squares, setSquares]=useState(Array(9).fill(null));
   const [isXNext,setIsNext]=useState(false);
    console.log(Squares);
    const handleSquareClick= clickposition => {
        //null,x,o

        // this if condtion in handleSquareClick checks if the square is allready been clicked 
        // if it does it will stop the function to invoke again for that square
        if(Squares[clickposition]){
            return;
        }
        setSquares((currentSquares)=> {
            return currentSquares.map((SquareValue,position)=>{
                if(clickposition === position){
                    // console.log([position]);
                    return isXNext ? 'x':'0';
                }
                return SquareValue;
            });
        });
         setIsNext((currentIsXNext)=> !currentIsXNext)
    };
    const renderSquare= position => {
        return (
            < Square
             value={Squares[position]}
            onClick={()=>handleSquareClick(position)}
            />
        );
    };
    return ( 
    <div className="board">
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
);
};
export default Board;