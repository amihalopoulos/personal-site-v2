import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
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

function Menu(props) {

    return (
      <div className="wrapper">
        <div className="treeview-main">
          <Tree open={props.open} content="😁" style={treeStyles} onClick={(e) => props.showSection(e, null)}>
            <Tree open={false} content="alexei mihalopoulos">
                <Tree open={false} content="work">
                  <Tree content="hire" style={{ color: '#63b1de' }} onClick={(e) => props.showSection(e, "hire")} />
                  <Tree content="projects" style={{ color: '#63b1de' }} onClick={(e) => props.showSection(e, "projects")} />
                  <Tree content="resume" style={{ color: '#63b1de' }} onClick={(e) => props.showSection(e, "resume")} />
                </Tree>
                <Tree open={false} content="play">
                  <Tree content="golf" style={{ color: '#63b1de' }} />
                  <Tree content="interests" style={{ color: '#63b1de' }} />
                  <Tree open={false} content="hobbies">
                    <Tree content="cooking" style={{ color: '#63b1de' }} />
                    <Tree content="drinking" style={{ color: '#63b1de' }} />
                    <Tree content="Barry" style={{ color: '#63b1de' }} />
                  </Tree>
                </Tree>
                <Tree content="who am i" />
            </Tree>
            <Tree open={false} content="more">
              <Tree content="what's the point" canHide />
              <Tree content="let's play a game" canHide style={{ color: '#63b1de' }} onClick={props.startGame} />
            </Tree>
          </Tree>
        </div>
      </div>
    );
}

export default Menu;