import React from "react";

const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_ALERT':
        return {
          ...state,
          alert: action.payload,
        };
      case 'OPEN_LOGIN':
        return {
          ...state,
          openLogin: true,
        };
      case 'CLOSE_LOGIN':
        return {
          ...state,
          openLogin: false,
        };
      case 'START_LOADING':
        return {
          ...state,
          loading: true,
        };
      case 'END_LOADING':
        return {
          ...state,
          loading: false,
        };
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  