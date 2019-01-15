import React, { useState, useEffect, useReducer } from 'react';
import { useSpring, animated, useTrail } from 'react-spring/hooks';
import './Game.css'

const size = 10


const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {...state}
    case 'KEY_PRESS': {
      if (action.payload === "ArrowLeft") return {...state, x: state.x - size >= 0 ? state.x - size : window.innerWidth - size}
      if (action.payload === 'ArrowUp') return {...state, y: state.y - size >= 0 ? state.y - size : window.innerHeight - size}
      if (action.payload === 'ArrowRight') return {...state, x: state.x + size > window.innerWidth - size ? 0 : state.x + size}
      if (action.payload === 'ArrowDown') return {...state, y:state.y + size > window.innerHeight - size ? 0 : state.y + size}    
    }
    default:
      return state
  }
}

const useKeyPress = () => {
  const [state, dispatch] = useReducer(reducer, {x: 50, y: 50})

  useEffect( () => {
    const handleKeyPress = ({key}) => dispatch({type: 'KEY_PRESS', payload: key})
    dispatch({type: 'CREATE'}) // include payload: (metada about map that was created)    
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

  return state
}


const GamePiece = () => {
  const state = useKeyPress()

  return (
    <div style={{position: 'absolute', top: state.y, left: state.x, 'height': size+'px', width: size+'px', 'backgroundColor': '#fff'}}> </div>
  )
}

export default GamePiece