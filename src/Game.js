import React from 'react';
import { useTrail, animated } from 'react-spring/hooks';
import './Game.css'
import GameIntro from './GameIntro.js'
import GamePiece from './GamePiece.js'

function Game(text) {

  const items = text.text.split('').map( s => {
    return s === ' ' ? '&nbsp;' : s
  })

  const props = useTrail(items.length, { opacity: 1, from: { opacity: 0 } })

  return (
    <div className="game" style={{ color: 'white', height: window.innerHeight, width: window.outerWidth, position: 'relative' }}>
      <GameIntro text={text.text}/>
      <GamePiece />
    </div>
  )
}

export default Game