import React from 'react';
import { useTrail, animated } from 'react-spring/hooks';
import './Game.css'

function GameIntro(text) {

  const items = text.text.split('').map( s => {
    return s === ' ' ? '&nbsp;' : s
  })

  const props = useTrail(items.length, { opacity: 1, from: { opacity: 0 } })

  return items.map((item, index) => (
    <animated.div key={item.key} style={props[index]} dangerouslySetInnerHTML={{ __html: item}}></animated.div>
  ))
}

export default GameIntro