import React from "react";

const bioText = 'Full stack javascript engineer with a degree in Business/Entrepreneurship. I am a technologist who is product/customer focused. My passion is continuous improvement on my self #learnAndEarn'

export const initialState = { 
  jumbotronText: bioText
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setJumbotron":
    console.log(action)
      return { ...state, jumbotronText: action.jumbotronText }
    default:
      return { ...state, jumbotronText: bioText };
  }
};

export const Context = React.createContext();