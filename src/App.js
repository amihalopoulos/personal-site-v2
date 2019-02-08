import React, { Component, useState, useEffect } from 'react';
import './App.scss';
import { Spring } from 'react-spring'
import Tree from './Tree'
import Game from './Game'
import Menu from './menu'
import Page from './pages/page'
// import { useSpring, animated as anim } from 'react-spring'

const treeStyles = {
  position: 'absolute',
  top: 20,
  left: 20,
  color: 'white',
  fill: 'white',
  width: '100%',
}

const typeStyles = {
  fontSize: '1em',
  verticalAlign: 'middle',
}

function App() {
  const [game, setGame] = useState(false);
  const [section, setSection] = useState(false);

  let sectionComponent;

  function startGame(){
    setGame(true)
  }

  function showSection(e, newSection){
    e.stopPropagation();
    setSection(newSection)

    // text for specific page here? 

  } 

    return (
      <div className="wrapper">
        <Menu open={section == null ? true : false} showSection={showSection} startGame={startGame} />

        { section ? (
          <Page text="la" state={section} />
        ) : (
          null
        )}
      { game &&
        <div>
          <Game text="Welcome" />
        </div>
      }
      </div>
    );
}

export default App;
