import React, { Component, useState, useEffect, useContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Spring, animated } from 'react-spring'
import { useTransition } from 'react-spring/hooks';

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
          {/* <Tree width={{width: '100%'}} open={props.open} content="😁" style={treeStyles} onClick={(e) => showSection(e, null)}> */}
            <Tree width={{width: '100%'}} open={false} content="alexei mihalopoulos">
                <Tree width={{width: '33%'}} open={false} content="work">
                  <Tree content="hire" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "hire")} />
                  <Tree content="projects" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "projects")} />
                  <Tree content="resume" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "resume")} />
                </Tree>
                <Tree width={{width: '33%'}} open={false} content="play">
                  <Tree width={{width: '33%'}} content="golf" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I like golf')} />
                  <Tree width={{width: '33%'}} content="interests" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I have interests')} />
                  <Tree width={{width: '33%'}} open={false} content="hobbies">
                    <Tree width={{width: '33%'}} content="cooking" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I like to cook pizza & pasta. Ask me to cook for you one day')} />
                    <Tree width={{width: '33%'}} content="drinking" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('Sometimes I drink. I\'m usually fun when I do.')} />
                    <Tree width={{width: '33%'}} content="Barry" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I have a dog')} />
                  </Tree>
                </Tree>
                <Tree width={{width: '33%'}} open={false} content="more">
                  { /*<Tree content="what's the point" canHide /> */ }
                  <Tree width={{width: '50%'}} content="let's play a game" style={{ color: '#63b1de' }} onClick={props.startGame} />
                  <Tree width={{width: '50%'}} content="who am i" />
                </Tree>
            </Tree>
          {/* </Tree> */}
        </div>
      </div>
    );
}

export default Menu;