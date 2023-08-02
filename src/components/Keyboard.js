import React from 'react'
import Key from './Key'


const line1 = ['q','w','e','r','t','y','u','i','o','p']
const line2 = ['a','s','d','f','g','h','j','k','l']
const line3 = ['z','x','c','v','b','n','m',]

function Keyboard() {
  return (
    <div className="keyboard">
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