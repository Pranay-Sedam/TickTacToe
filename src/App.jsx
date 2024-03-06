import { useState } from "react";
import './styles.scss';
import Board from './components/Board';
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./winner";
import History from "./components/History";

function App() {
  const[history,setHistory]=useState(([{Squares:Array(9).fill(null),isXNext:false}]))
  
  const [currentMove, setCurrentMove]=useState(0);
  
  const gamingBoard=history[currentMove];

  const winner= calculateWinner(gamingBoard.Squares);

  console.log({history,currentMove});
 

   
   const handleSquareClick= clickposition => {
    // this if condtion in handleSquareClick checks if the square is allready been clicked 
    // if it does it will stop the function to invoke again for that square
    if(gamingBoard.Squares[clickposition] || winner){
        return;
    }
    setHistory(currentHistory => {
        const isTraversing=currentHistory + 1 !==currentHistory.length;
        const lastGamingState = isTraversing ? currentHistory[currentMove]:currentHistory.length-1;
         const nextSquareState = lastGamingState.Squares.map(
            (SquareValue,position)=> {
                if(clickposition === position){
                    return lastGamingState.isXNext ? 'X':'O';
                }
                return SquareValue;
            }
         );
         const base=isTraversing ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1):currentHistory;
         return base.concat({Squares:nextSquareState,isXNext:
            !lastGamingState.isXNext
         });
            
        });
    setCurrentMove(move => move + 1);
};
const moveTo =move=> {
    setCurrentMove(move);
};

  return (
    
      <div className="app">
        
        <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
         <Board 
         Squares={gamingBoard.Squares} 
         handleSquareClick={handleSquareClick} 
         />
         <h2>Current Game History</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
     
    
    
  );
}

export default App;
