import React, { Component, useState, useEffect } from 'react';
import '../App.scss';
import { Spring } from 'react-spring'
// import { useSpring, animated as anim } from 'react-spring'


function HirePage(props) {
    return (
      <div className="page hire-me">
        <div>hire me for: </div>
        <div><span className="hire-contract"> Full-time </span> front-end && || back-end development</div>
        <div><span className="hire-contract"> Contract </span> app development</div>
        <div><span className="hire-contract"> Contract </span> Smart Contracts</div>
        <div><span className="hire-contract"> Contract </span> shopify storefront/theme development</div>
        <div><span className="hire-contract"> mischevious </span></div>
      </div>
    );
}

export default HirePage;