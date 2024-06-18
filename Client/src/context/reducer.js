

<<<<<<< HEAD

const reducer=(state, action)=>{

    switch(action.type){
        case 'OPEN_LOGIN':
            return{...state,openLogin:true};
        case 'CLOSE_LOGIN':
                return{...state,openLogin:false};

        case 'UPDATE_USER':
            return{...state,currentUser:action.payload}

        default:
            throw new Error("NO MATCCHED ACTION!")
=======
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
>>>>>>> 635ce463f79ed69dd81355ee42209cb0a4aa3120
    }
  };
  
  export default reducer;
  