import React, { useContext } from 'react'
import { AppContext } from '../App'


function Letter({row, column}) {
  const { board, correctWord, curRow } = useContext(AppContext)
  const letter = board[row][column]


  const correct = correctWord[column] === letter
  const present = !correct && letter !== "" && correctWord.includes(letter)

  const letterState = curRow > row && (correct ? "correct" : present ? "almost" : "error")
  
  return (
    <div className="letter" id={letterState}>{ letter }</div>
  )
}

export default Letter