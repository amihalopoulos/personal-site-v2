import React, { Component, useState, useEffect, useReducer } from 'react';
import './App.scss';
import { Spring } from 'react-spring'
import Tree from './Tree'
import Game from './Game'
import Menu from './menu'
import Page from './pages/page'
import JumboTron from './jumbotron'
import { Context, initialState, reducer } from "./store";

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
