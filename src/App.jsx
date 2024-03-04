// import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';

function App() {
//  const [Counter, setCounter] = useState(1);
//  console.log("hello");

//   const onBtnClick=()=>{
//     setCounter((currentCounter) => {
//       return currentCounter + 1;
//     });
  
  return (
    
      <div className="app">
         <Board />
         {/* <div>
          <button onClick={onBtnClick}>CLick me</button>
          <div>{Counter}</div>
         </div> */}
      </div>
     
    
    
  );
}

export default App;
