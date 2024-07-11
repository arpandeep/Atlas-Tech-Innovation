

import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import reducer from './reducer'; // Assuming you have defined your reducer correctly in './reducer'

// Initial state
const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: 'info', message: '' },
  profile: { open: false, file: null, photoURL: '' },
  images: [],
  details: { title: '', description: '', price: 0 },
  location: { lng: 0, lat: 0 },
  rooms: [],
  priceFilter: 50,
  addressFilter: null,
  filteredRooms: [],
  room: null,
};

// Create context
export const Context = createContext();

// Custom hook to use the context
export const useValue = () => useContext(Context);

// Context provider component
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const mapRef = useRef();
  const containerRef = useRef();

  // Use effect to initialize state from localStorage
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      dispatch({ type: 'UPDATE_USER', payload: currentUser });
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, mapRef, containerRef }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
