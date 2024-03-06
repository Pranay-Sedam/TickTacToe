const Square = ({ value, onClick,isWinningSquare }) => {
    const colcorClassName = value === 'X' ? 'text-green': 'text-orange';
    const winningClassName = isWinningSquare ? 'winning': '';  
    return (
    <button type="button" 
    className={`square ${colcorClassName} ${winningClassName}`} 
    onClick={onClick}>
       
       {value}
    
    </button>
    
    );
};

export default Square;