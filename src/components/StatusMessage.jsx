import React from "react";

const StatusMessage =({winner,gamingBoard}) => {
    const {Squares,isXNext}=gamingBoard;
    
    const noMovesLeft=Squares.every(squareValue => squareValue !== null);

    const nextPlayer = isXNext ? 'X':'O' 
    const renderStatusMessage=()=> {
        if(winner){
            return (
                // decide winner color 
        <>
            winner is {' '}
            <span className={winner === 'X' ? 'text-green':'text-orange'}>
                {winner}
            </span>

        </>
            );
    }
        //ganme ties logic
    if(!winner && noMovesLeft){
        return (
            <>
            <span className="text-orange">O </span> and                                                                                                                                                                                                     {' '}
            <span className="text-green">X </span> Tied
            </>
        );
    }
    //logic for next player turn to play
    if(!winner && !noMovesLeft){
        return (
            <>
            Next Player is {' '}
            <span className={isXNext ? 'text-green' : 'text-orange'}>
                {nextPlayer}
            </span>
            </>
        );
        
    }
        return null;
};
return <h2 className="status-mesage">{renderStatusMessage()}</h2> 
};
export default StatusMessage;


// import React from "react";

// const StatusMessage = ({ winner, gamingBoard }) => {
//   const { Squares, isXNext } = gamingBoard;

//   const noMovesLeft = Squares.every((squareValue) => squareValue !== null);

//   const nextPlayer = isXNext ? "X" : "O";
//   const renderStatusMessage = () => {
//     if (winner) {
//       return (
//         <>
//           Winner is{" "}
//           <span className={winner === "X" ? "text-green" : "text-orange"}>
//             {winner}
//           </span>
//         </>
//       );
//     }

//     if (!winner && noMovesLeft) {
//       return (
//         <>
//           <span className="text-orange">O</span> and{" "}
//           <span className="text-green">X</span> Tied
//         </>
//       );
//     }

//     if (!winner && !noMovesLeft) {
//       return (
//         <>
//           Next Player is{" "}
//           <span className={isXNext ? "text-green" : "text-orange"}>
//             {nextPlayer}
//           </span>
//         </>
//       );
//     }

//     return null;
//   };

//   return <h2 className="status-message">{renderStatusMessage()}</h2>;
// };

// export default StatusMessage;
