import React, { useState, useEffect, useReducer } from 'react';
import { useTrail, animated } from 'react-spring/hooks';
import './Game.css'
import GameIntro from './GameIntro.js'
import GamePiece from './GamePiece.js'
import EndGame from './EndGame.js'
import Launcher from './Launcher.js'

function Game(text) {
  const dimensions = useWindowDimensions();

  const items = text.text.split('').map( s => {
    return s === ' ' ? '&nbsp;' : s
  })

  // const props = useTrail(items.length, { opacity: 1, from: { opacity: 0 } })

  return (
    <div className="game" style={{ color: 'white', height: dimensions.height, width: dimensions.width, position: 'relative', overflow: 'hidden' }}>
      <GameIntro text={text.text}/>
      <GamePiece />
      <Launcher />
      <EndGame />
    </div>
  )
}

function useWindowDimensions() {
  const [ dimensions, setDimensions ] = useState({width: window.outerWidth, height: window.innerHeight});

  useEffect( () => {
    const handleResize = setDimensions({width: window.outerWidth, height: window.innerHeight});
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return dimensions
}

export default Game