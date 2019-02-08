import React, { useState, useEffect, useReducer } from 'react';
import { useSpring, animated, useTrail } from 'react-spring/hooks';
import './Game.css'

const Home = () => {
  return (
    <div style={{height: '5em', width: '5em', 'borderRadius': '50%', 'backgroundColor': 'white', 'position': 'absolute', bottom: '5em', 'right': '5em', 'zIndex': '0'}}>
      <div style={{height: '10px', width: '10px', backgroundColor: 'black', position: 'absolute', 'top': '0', left: 0, right: 0, 'margin-left': 'auto', 'margin-right': 'auto', 'zIndex': '1'}}></div>
    </div>
  )
}

export default Home