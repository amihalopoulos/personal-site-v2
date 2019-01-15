import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Spring } from 'react-spring'
import Tree from './Tree'
import Game from './Game'
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

  function startGame(){
    setGame(true)
  }

    return (
      <div className="wrapper">
      { !game &&
        <div className="treeview-main">
          <Tree content="😁" style={treeStyles}>
            <Tree content="alexei mihalopoulos">
              <Tree content="about" canHide>
                <Tree content="work">
                  <Tree content="hire" style={{ color: '#63b1de' }} />
                  <Tree content="projects" style={{ color: '#63b1de' }} />
                  <Tree content="resume" style={{ color: '#63b1de' }} />
                </Tree>
                <Tree content="play">
                  <Tree content="golf" style={{ color: '#63b1de' }} />
                  <Tree content="interests" style={{ color: '#63b1de' }} />
                  <Tree content="hobbies">
                    <Tree content="cooking" style={{ color: '#63b1de' }} />
                    <Tree content="drinking" style={{ color: '#63b1de' }} />
                    <Tree content="Barry" style={{ color: '#63b1de' }} />
                  </Tree>
                </Tree>
                <Tree content="who am i" />
              </Tree>
            </Tree>
            <Tree content="more">
              <Tree content="what's the point" canHide />
              <Tree content="let's play a game" canHide style={{ color: '#63b1de' }} onClick={startGame} />
            </Tree>
          </Tree>
        </div>
      }
      { game &&
        <div>
          <Game text="want to play a game?" />
        </div>
      }
      </div>
    );
}

export default App;
