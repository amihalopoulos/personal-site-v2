import React, { useState, useEffect, useReducer } from 'react';
import { useSpring, animated } from 'react-spring/hooks';
import './Game.css'
import useKeyPress from './keyPressHook'

const size = 10

const gamePieceReducer = (state, action) => {
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

const GamePiece = () => {
  const state = useKeyPress(gamePieceReducer, {x: 50, y: 50})

  return (
    <div style={{position: 'absolute', top: state.y, left: state.x, 'height': size+'px', width: size+'px', 'backgroundColor': '#fff', 'zIndex': '100'}}> </div>
  )
}

export default GamePiece