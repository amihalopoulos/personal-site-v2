import React, { useState, useEffect, useReducer } from 'react';
import { useSpring, animated } from 'react-spring/hooks';
import './Game.css'

const Missile = () => {
  const [location, setLocation] = useState(0)

  useEffect( () => {
    if (location != null && location < window.innerHeight) {
      setLocation(location+1)
    } else if (location != null) {
      setLocation(null)
    }
  }, [location])

  if (location != null) {
    return (
      <div style={{position: 'absolute', bottom: location, right: '50%', height: '1px', width: '1px', backgroundColor: 'white'}}></div>
    )
  }
}

const Launcher = (config) => {
  const [missiles, setMissiles] = useState([])
  const [props, set] = useSpring( () => ({ bottom: '-10rem' }) )
  const [gunnerProps, setGunner] = useSpring( () => ({
      '-webkit-transform': 'rotate(90deg)',
      '-moz-transform': 'rotate(90deg)',
      '-o-transform': 'rotate(90deg)',
      '-ms-transform': 'rotate(90deg)',
      'transform': 'rotate(90deg)'
    }))

  const styles = {
    wrapper: {position: 'absolute', right: config.location.right},
    gunner: {height: '3rem', width: '.5rem', 'backgroundColor': 'white', position: 'absolute', bottom: '2rem'},
    base: {height: '2rem', width: '2rem', 'backgroundColor': 'white', position: 'absolute', bottom: 0}
  }

  useEffect( () => {
    set({bottom: '0'})
    setGunner({
      '-webkit-transform': 'rotate(-180deg)',
      '-moz-transform': 'rotate(-180deg)',
      '-o-transform': 'rotate(-180deg)',
      '-ms-transform': 'rotate(-180deg)',
      'transform': 'rotate(-180deg)'
    })
  }, [])

  useEffect( () => {

    const timer = setInterval( () => {
      setMissiles([...missiles, []])
    }, 1000) 

    return () => clearInterval(timer)
  }, [missiles])

  let missileList = missiles.map(m => Missile())

  return (
    <animated.div className="launcher-wrapper" style={{...props, ...styles.wrapper}}>
      <animated.div className="launcher-gunner" style={{...gunnerProps, ...styles.gunner}}></animated.div>
      <div className="launcher-base" style={{...styles.base}}></div>
      {missileList}
    </animated.div>
  )
}

export default Launcher