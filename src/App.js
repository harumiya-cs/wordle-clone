import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { defaultBoard } from './words';
import { useState, createContext } from 'react';

export const AppContext = createContext()


function App() {
  const [board, setBoard] = useState(defaultBoard)
  const [curRow, setCurRow] = useState(0)
  const [curColumn, setCurColumn] = useState(0)
  const correctWord = "right"
  
  return (
    <div className="App">
      <nav className="nav"><h1>Wordle</h1></nav>
      <AppContext.Provider 
      value={{board, setBoard, correctWord, curRow, setCurRow, curColumn, setCurColumn}}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;


// APP
//     navbar
//     board
//     keyboard



// useContext