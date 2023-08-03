import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { defaultBoard, generateWordSet } from './words';
import { useState, createContext, useEffect } from 'react';

export const AppContext = createContext()


function App() {
  const [board, setBoard] = useState(defaultBoard)
  const [curRow, setCurRow] = useState(0)
  const [curColumn, setCurColumn] = useState(0)
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const correctWord = "right\r"

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
    })
  }, [])

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

    let curWord = ""
    for(let i = 0; i < 5; i++){
      curWord += board[curRow][i]
    }
    curWord += "\r"

    if(wordSet.has(curWord.toLowerCase())){
      setCurRow(curRow + 1)
      setCurColumn(0)
    } else {
      alert("word not found")
    }

    
    if(curWord === correctWord){
      alert("Game Over")
    }

    
  }
  
  return (
    <div className="App">
      <nav className="nav"><h1>Wordle</h1></nav>
      <AppContext.Provider 
      value={{board, setBoard, correctWord, curRow, 
      setCurRow, curColumn, setCurColumn, onSelectLetter, onDelete, 
      onEnter, disabledLetters, setDisabledLetters}}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;





// useContext
// useEffect