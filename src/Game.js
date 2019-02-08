import React, { useState, useEffect, useReducer } from 'react';
import { useTrail, animated } from 'react-spring/hooks';
import './Game.css'
import GameIntro from './GameIntro.js'
import GamePiece from './GamePiece.js'
import EndGame from './EndGame.js'
import Launcher from './Launcher.js'

function Game(text) {
  const dimensions = useWindowDimensions();

  const gameReducer = (state, action) => {
    switch (action.type) {
      case 'CREATE':
        const launchers = [];
        // const startX = 15;
        // const spaceToFill = ( dimensions.width / 15 ) - 2*startX;
        // const numLaunchers = spaceToFill / 3
        // for (var i = 0; i < numLaunchers; i++) {
        //   launchers.push(<Launcher key={i} location={{right: `${( startX + i*3 )}em`}} />)
        // }
        return {launchers}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(gameReducer, {launchers: []})

  const items = text.text.split('').map( s => {
    return s === ' ' ? '&nbsp;' : s
  })

  useEffect( () => {
    document.addEventListener("keydown", function startGame(e){
      dispatch({type: 'CREATE'})
      document.removeEventListener("keydown", startGame)
    })
  }, [])

  // const props = useTrail(items.length, { opacity: 1, from: { opacity: 0 } })
  // {state.launchers}

  return (
    <div className="game" style={{ color: 'white', height: dimensions.height, width: dimensions.width, position: 'relative', overflow: 'hidden' }}>
      <GameIntro text={text.text}/>
      <GamePiece />
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