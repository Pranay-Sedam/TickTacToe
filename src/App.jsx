import { useState } from "react";
import './styles.scss';
import Board from './components/Board';
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./winner";

function App() {
  const[Squares, setSquares]=useState(Array(9).fill(null));
  const [isXNext,setIsNext]=useState(false);
  const winner= calculateWinner(Squares);
 
  // console.log(Squares);  
  console.log(winner);
   const handleSquareClick= clickposition => {
    //null,x,o

    // this if condtion in handleSquareClick checks if the square is allready been clicked 
    // if it does it will stop the function to invoke again for that square
    if(Squares[clickposition] || winner){
        return;
    }
    setSquares((currentSquares)=> {
        return currentSquares.map((SquareValue,position)=>{
            if(clickposition === position){
                // console.log([position]);
                return isXNext ? 'X':'O';
            }
            return SquareValue;
        });
    });
     setIsNext((currentIsXNext)=> !currentIsXNext)
};

  return (
    
      <div className="app">
        {/* <h2>{statusMessage}</h2> */}
        <StatusMessage winner={winner} isXNext={isXNext} squares={Squares} />
         <Board Squares={Squares} handleSquareClick={handleSquareClick} />
        
      </div>
     
    
    
  );
}

export default App;
