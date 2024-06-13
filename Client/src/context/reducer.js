import React from "react";


const reducer=(state, action)=>{
    switch(action.type){
        case 'UPDATE_USER':
            return{...state,currentUser:action.payload}

        default:
            throw new Error("NO MATCCHED ACTION!")
    }
}
export default reducer;