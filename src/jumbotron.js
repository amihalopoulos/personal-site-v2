import React, { useState, useContext } from 'react';
import { useTrail, animated } from 'react-spring/hooks';
import { config } from 'react-spring'
import { Context } from "./store";

function Jumbotron() {
  const { store, dispatch } = useContext(Context)
  const [ animate, setAnimate ] = useState(false)

  const items = store.jumbotronText.split('').map( s => {
    return s === ' ' ? '&nbsp;' : s
  })

  const jumboStyle = {
    display: store.jumbotronText.length ? 'flex' : 'none'
  }

  const props = useTrail(items.length, { config: {tension: 500, friction: 28}, opacity: 1, from: { opacity: .2 } })

  return !store.jumbotronText.length ? null : <div style={jumboStyle} className="jumbotron"> { items.map((item, index) => (
    <animated.div key={item.key} style={props[index]} dangerouslySetInnerHTML={{ __html: item}}></animated.div>
  ))  } </div>
}

export default Jumbotron