const statusMessage =({winner,isXNext,squares}) => {
    const noMovesLeft=squares.every(squareValue => squareValue !==null);

    const nextPlayer = isXNext ? 'X':'O' 
    const renderStatusMessage=()=> {
        if(winner){
        return <div>winner is {winner}</div>;
    }
    if(!winner && noMovesLeft){
        return <div> <span className=" text-orange">O</span> and <span className="text-green">X Tied</span></div>;
    }
    if(!winner && !noMovesLeft){
        return <div>Next player is <span className={isXNext ? 'text-green':'text-orange'}>{nextPlayer}</span></div>;
    }
    return null;
};
return <h2 className="status-mesage">{renderStatusMessage()}</h2> 
};
export default statusMessage;