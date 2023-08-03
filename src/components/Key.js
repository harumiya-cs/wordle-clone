import React, { useContext } from 'react'
import { AppContext } from '../App'

function Key({ keyVal, disabled, bigKey=false }) {
  const {onSelectLetter, onDelete, onEnter} = useContext(AppContext)

  const onKeyClick = () => {
    if(keyVal === "ENTER"){
      onEnter()
    } else if(keyVal === "DELETE"){
      onDelete()
    } else {
      onSelectLetter(keyVal)
    }
  }
  return (
    <div
      className="key"
      id={bigKey ? "big" : (disabled && "disabled")}
      onClick={onKeyClick}
    >
      {keyVal}
    </div>  )
}

export default Key