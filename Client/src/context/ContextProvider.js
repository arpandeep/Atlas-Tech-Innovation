

import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import Loading from "../components/Loading";

const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false, 
  alert: {
    open: false,
    severity: "info",
    message: " "
  }
};

<<<<<<< HEAD
const initialState={
    currentUser:null,
    openLogin:false,
}
=======
const Context = createContext(initialState);
>>>>>>> 635ce463f79ed69dd81355ee42209cb0a4aa3120

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
      {state.isLoading && <Loading />} 
    </Context.Provider>
  );
};

export default ContextProvider;
