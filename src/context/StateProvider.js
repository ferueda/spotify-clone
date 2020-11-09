import React from 'react';

const StateContext = React.createContext();

function StateProvider({ initialState, reducer, children }) {
  return (
    <StateContext.Provider value={React.useReducer(reducer, initialState)} children={children} />
  );
}

export const useStateContext = () => React.useContext(StateContext);

export default StateProvider;
