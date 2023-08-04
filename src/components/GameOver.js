import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
  const {gameOver, correctWord, curRow} = useContext(AppContext)
  return (
    <div className="game-over">
      <h3>{
          gameOver.guessedWord ? "you correctly guessed" : "you failed"
        }</h3>
        <h1>Correct: { correctWord } </h1>
        { gameOver.guessedWord && ( <h3> You guessed in { curRow } attepmts</h3>)}
    </div>
  )
}

export default GameOver