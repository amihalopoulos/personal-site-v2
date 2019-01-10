import React from 'react';
import { useTrail, animated } from 'react-spring/hooks';

function Game() {

  const items = ['w', 'e', 'l', 'c', 'o', 'm', 'e']
  const props = useTrail(items.length, { opacity: 1, from: { opacity: 0 } })

  return items.map((item, index) => (
    <animated.div key={item.key} style={props[index]}>{item}</animated.div>
  ))
}

export default Game