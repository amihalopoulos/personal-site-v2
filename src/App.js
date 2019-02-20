import React, { Component, useState, useEffect, useReducer } from 'react';
import './App.scss';
import { Spring } from 'react-spring'
import Tree from './Tree'
import Game from './Game'
import Menu from './menu'
import Page from './pages/page'
import JumboTron from './jumbotron'
import { Context, initialState, reducer } from "./store";
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
  const [store, dispatch] = useReducer(reducer, initialState)

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
      <Context.Provider value={{store, dispatch}}>
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
        <JumboTron className="main-jumbo" text={store.jumbotronText} />
        </div>
      </Context.Provider>
    );
}

export default App;
