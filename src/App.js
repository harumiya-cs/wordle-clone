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

  const onSelectLetter = (keyVal) => {
    if(curColumn > 4) return
    const newBoard = [...board]
    newBoard[curRow][curColumn] = keyVal
    setBoard(newBoard)
    setCurColumn(curColumn + 1)
  }

  const onDelete = () => {
    if(curColumn === 0) return
    const newBoard = [...board]
    newBoard[curRow][curColumn - 1] = ""
    setBoard(newBoard)
    setCurColumn(curColumn - 1)
  }

  const onEnter = () => {
    if(curColumn !== 5) return
    setCurRow(curRow + 1)
    setCurColumn(0)
  }
  
  return (
    <div className="App">
      <nav className="nav"><h1>Wordle</h1></nav>
      <AppContext.Provider 
      value={{board, setBoard, correctWord, curRow, 
      setCurRow, curColumn, setCurColumn, onSelectLetter, onDelete, onEnter}}>
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