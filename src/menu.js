import React, { Component, useState, useEffect, useContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Spring } from 'react-spring'
import Tree from './Tree'
import Game from './Game'
// import { useSpring, animated as anim } from 'react-spring'
import { Context } from "./store";

const treeStyles = {
  position: 'absolute',
  "zIndex": 501,
  top: 20,
  left: 20,
  color: 'white',
  fill: 'white',
  width: '30%',
}

function Menu(props) {
  const { store, dispatch } = useContext(Context)

  function setJumboText(text){
    dispatch({type: 'setJumbotron', jumbotronText: text})
  }

  function showSection(e, page){
    if (page != null) {
      dispatch({type: 'setJumbotron', jumbotronText: ''})
    }
      props.showSection(e, page)
    
  }

    return (
      <div className="wrapper">
        <div className="treeview-main">
          <Tree open={props.open} content="😁" style={treeStyles} onClick={(e) => showSection(e, null)}>
            <Tree open={false} content="alexei mihalopoulos">
                <Tree open={false} content="work">
                  <Tree content="hire" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "hire")} />
                  <Tree content="projects" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "projects")} />
                  <Tree content="resume" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "resume")} />
                </Tree>
                <Tree open={false} content="play">
                  <Tree content="golf" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I like golf')} />
                  <Tree content="interests" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I have interests')} />
                  <Tree open={false} content="hobbies">
                    <Tree content="cooking" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I like to cook pizza & pasta. Ask me to cook for you one day')} />
                    <Tree content="drinking" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('Sometimes I drink. I\'m usually fun when I do.')} />
                    <Tree content="Barry" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I have a dog')} />
                  </Tree>
                </Tree>
                <Tree content="who am i" />
            </Tree>
            <Tree open={false} content="more">
              { /*<Tree content="what's the point" canHide /> */ }
              <Tree content="let's play a game" canHide style={{ color: '#63b1de' }} onClick={props.startGame} />
            </Tree>
          </Tree>
        </div>
      </div>
    );
}

export default Menu;