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
  zIndex: 501,
  top: 20,
  left: 20,
  color: 'white',
  fill: 'white',
}

function Menu(props) {
  const { store, dispatch } = useContext(Context)
  const [limb1, setLimb1] = useState(false);
  const [limb2, setLimb2] = useState(false);
  const [limb3, setLimb3] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function setJumboText(text){
    dispatch({type: 'setJumbotron', jumbotronText: text})
    closeAllMenuItems()
  }

  function showSection(e, page){
    if (page != null) {
      dispatch({type: 'setJumbotron', jumbotronText: ''})
    }
    closeAllMenuItems()
    props.showSection(e, page)
  }

  function closeAllMenuItems(e){

    setMenuIsOpen(false)
    setLimb1(false)
    setLimb2(false)
    setLimb3(false)
  }

  function handleOpenClose(e, treeId){
    e.stopPropagation()

    if (treeId == 0){
      showSection(e, null)
      setMenuIsOpen(!menuIsOpen)
      dispatch({type: 'setJumbotron', jumbotronText: ''})
    }

    if (treeId == 1) {
      if (limb1) {
        setLimb1(false)
      } else {
        setLimb1(true)
        setLimb2(false)
        setLimb3(false)
      }
    }
    if (treeId == 2) {
      if (limb2) {
        setLimb2(false)
      } else {
        setLimb2(true)
        setLimb1(false)
        setLimb3(false)
      }
    }
    if (treeId == 3) {
      if (limb3) {
        setLimb3(false)
      } else {
        setLimb3(true)
        setLimb2(false)
        setLimb1(false)
      }
    }
  }

    return (
      <React.Fragment>
        <div className="treeview-main">
            {/* <Tree width={{width: '100%'}} isOpen={props.open} content="😁" style={treeStyles} onClick={(e) => showSection(e, null)}></Tree> */}
          <Tree onClick={(e) => handleOpenClose(e, 0)} width={{width: '100%'}} isOpen={menuIsOpen} content="alexei mihalopoulos">
            <Tree onClick={(e) => handleOpenClose(e, 1)} width={{width: '33%'}} isOpen={limb1} content="work">
              <Tree content="hire" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "hire")} />
              <Tree content="projects" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "projects")} />
              <Tree content="resume" style={{ color: '#63b1de' }} onClick={(e) => showSection(e, "resume")} />
            </Tree>
            <Tree onClick={(e) => handleOpenClose(e, 2)} width={{width: '33%'}} isOpen={limb2} content="play">
              <Tree width={{width: '33%'}} content="golf" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I like golf')} />
              <Tree width={{width: '33%'}} content="interests" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I have interests')} />
              <Tree onClick={(e) => handleOpenClose(e, 4)} width={{width: '33%'}} isOpen={false} content="hobbies">
                <Tree width={{width: '33%'}} content="cooking" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I like to cook pizza & pasta. People generally enjoy eating what I cook. Ask me to cook for you one day')} />
                <Tree width={{width: '33%'}} content="drinking" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('Always on the lookout for fun places around the world.')} />
                <Tree width={{width: '33%'}} content="Barry" style={{ color: '#63b1de' }} onClick={(e) => setJumboText('I have a dog')} />
              </Tree>
            </Tree>
            <Tree onClick={(e) => handleOpenClose(e, 3)} width={{width: '33%'}} isOpen={limb3} content="more">
              { /*<Tree content="what's the point" canHide /> 
              <Tree onClick={(e) => closeAllMenuItems(e) } width={{width: '50%'}} content="let's play a game" style={{ color: '#63b1de' }} onClick={props.startGame} />
              <Tree onClick={(e) => closeAllMenuItems(e) } width={{width: '50%'}} content="who am i" /> */ }
            </Tree>
          </Tree>
        </div>
      </React.Fragment>
    );
}

export default Menu;