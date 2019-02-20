import React from "react";

export const initialState = { 
  jumbotronText: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setJumbotron":
    console.log(action)
      return { ...state, jumbotronText: action.jumbotronText }
    default:
      return state;
  }
};

export const Context = React.createContext();