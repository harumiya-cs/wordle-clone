import React, { useContext } from 'react'
import { AppContext } from '../App'

function Key({ keyVal, bigKey=false }) {
  const {board, setBoard, curRow, setCurRow, curColumn, setCurColumn} = useContext(AppContext)

  const onKeyClick = () => {
    const newBoard = [...board]
    if(keyVal === "ENTER"){
      if(curColumn === 5 && curRow <= 5){
        setCurColumn(0)
        setCurRow(curRow + 1)

      } 
      return
    } else if(keyVal === "DELETE"){
      if(curColumn >= 0) {
        setCurColumn(Math.max(curColumn - 1, 0))
        newBoard[curRow][curColumn - 1] = ""
      }
      return
    } else {
      if(curColumn < 5){
        newBoard[curRow][curColumn] = keyVal
        setCurColumn(curColumn + 1)
      } else return
    }
    setBoard(newBoard)
  }
  return (
    <div className="key" id={bigKey && "big"} onClick={onKeyClick}>{ keyVal }</div>
  )
}

export default Key