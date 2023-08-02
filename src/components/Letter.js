import React, { useContext } from 'react'
import { AppContext } from '../App'


function Letter({row, column}) {
  const { board } = useContext(AppContext)
  return (
    <div className="letter">{ board[row][column] }</div>
  )
}

export default Letter