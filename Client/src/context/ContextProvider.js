import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer'; // Assuming you have defined your reducer correctly in './reducer'

// Initial state
const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: 'info', message: '' },
  profile: { open: false, file: null, photoURL: '' },
  images:[],
};

// Create context
export const Context = createContext();

// Custom hook to use the context
export const useValue = () => {
  return useContext(Context);
};

// Context provider component
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Use effect to initialize state from localStorage
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      dispatch({ type: 'UPDATE_USER', payload: currentUser });
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
