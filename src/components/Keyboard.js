import React, { useContext, useEffect, useCallback } from 'react'
import Key from './Key'
import { AppContext } from '../App'


function Keyboard() {
  const {onSelectLetter, onEnter, onDelete} = useContext(AppContext)
  const line1 = ['q','w','e','r','t','y','u','i','o','p']
  const line2 = ['a','s','d','f','g','h','j','k','l']
  const line3 = ['z','x','c','v','b','n','m',]
  
  const handleKeyboard = useCallback((event) => {
    if(event.key === "Enter"){
      onEnter()
    } else if(event.key === "Backspace") {
      onDelete()
    } else {
      line1.forEach((key) => {
        if(event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })

      line2.forEach((key) => {
        if(event.key.toLower() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })

      line3.forEach((key) => {
        if(event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })
    }
  })

  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)

    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard])

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {
          line1.map((key) => (
            <Key keyVal={key}/>
          ))
        }
      </div>

      <div className="line2">
        {
          line2.map((key) => (
            <Key keyVal={key}/>
          ))
        }
      </div>

      <div className="line3">
        <Key keyVal="ENTER" bigKey={true}/>
        {
          line3.map((key) => (
            <Key keyVal={key}/>
          ))
        }
        <Key keyVal="DELETE" bigKey={true} />
      </div>
    </div>
  )
}

export default Keyboard