import React, { useState, useEffect, useReducer } from 'react';
import { useSpring, animated, useTrail } from 'react-spring/hooks';
import './Game.css'

const Home = () => {
  return (
    <div style={{height: '5rem', width: '5rem', 'borderRadius': '50%', 'backgroundColor': 'white', 'position': 'absolute', bottom: '5rem', 'right': '5rem', 'zIndex': '0'}}>
      <div style={{height: '10px', width: '10px', backgroundColor: 'black', position: 'absolute', 'top': '50%', left: '50%', 'zIndex': '1'}}></div>
    </div>
  )
}

export default Home