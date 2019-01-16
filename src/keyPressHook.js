import React, { useEffect, useReducer } from 'react';

const useKeyPress = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect( () => {
    const handleKeyPress = ({key}) => dispatch({type: 'KEY_PRESS', payload: key})
    dispatch({type: 'CREATE'}) // include payload: (metada about map that was created)    
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

  return state
}

export default useKeyPress