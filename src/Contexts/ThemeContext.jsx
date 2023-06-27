import React, { createContext, useReducer } from 'react';

const initialState = {
  color: 'light',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CAMBIAR_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const cambiarColor = (color) => {
    dispatch({ type: 'CAMBIAR_COLOR', payload: color });
  };

  return (
    <ThemeContext.Provider value={{ theme: state, cambiarColor }}>
      {children}
    </ThemeContext.Provider>
  );
};