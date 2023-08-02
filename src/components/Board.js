import Letter from "./Letter"
import React from 'react'

function Board() {
  return (
    <div className="board">
        <div className="row">
          <Letter row={0} column={0}/>
          <Letter row={0} column={1}/>
          <Letter row={0} column={2}/>
          <Letter row={0} column={3}/>
          <Letter row={0} column={4}/>
        </div>

        <div className="row">
          <Letter row={1} column={0}/>
          <Letter row={1} column={1}/>
          <Letter row={1} column={2}/>
          <Letter row={1} column={3}/>
          <Letter row={1} column={4}/>
        </div>

        <div className="row">
          <Letter row={2} column={0}/>
          <Letter row={2} column={1}/>
          <Letter row={2} column={2}/>
          <Letter row={2} column={3}/>
          <Letter row={2} column={4}/>
        </div>

        <div className="row">
          <Letter row={3} column={0}/>
          <Letter row={3} column={1}/>
          <Letter row={3} column={2}/>
          <Letter row={3} column={3}/>
          <Letter row={3} column={4}/>
        </div>

        <div className="row">
          <Letter row={4} column={0}/>
          <Letter row={4} column={1}/>
          <Letter row={4} column={2}/>
          <Letter row={4} column={3}/>
          <Letter row={4} column={4}/>
        </div>

        <div className="row">
          <Letter row={5} column={0}/>
          <Letter row={5} column={1}/>
          <Letter row={5} column={2}/>
          <Letter row={5} column={3}/>
          <Letter row={5} column={4}/>
        </div>
      </div>
  )
}

export default Board