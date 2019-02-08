import React, { Component, useState, useEffect } from 'react';
import HirePage from './hire'
import ProjectPage from './projects'

function Page({ text, state }) {
  switch(state) {
    case 'hire':
      return <HirePage text={text} />;
    case 'projects':
      return <ProjectPage text={text} />;
    default:
      return null;
  }
}

export default Page;