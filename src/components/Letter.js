import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'


function Letter({row, column}) {
  const { board, correctWord, curRow, disabledLetters, setDisabledLetters } = useContext(AppContext)
  const letter = board[row][column]


  const correct = correctWord[column] === letter
  const present = !correct && letter !== "" && correctWord.includes(letter)

  const letterState = curRow > row && (correct ? "correct" : present ? "almost" : "error")
  
  useEffect(() => {
    if (letter !== "" && !correct && !present) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [curRow]);
  return (
    <div className="letter" id={letterState}>{ letter }</div>
  )
}

export default Letter