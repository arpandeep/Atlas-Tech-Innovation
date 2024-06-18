import { Dialog, DialogTitle, IconButton } from "@mui/material";
import React, { useState } from "react";
import{ useValue} from '../../context/ContextProvider'


const Login =()=> {
    const {state:{openLogin},dispatch}=useValue()
    const [title,setTitle]=useState('Login')
    const [isRegister,setIsRegister]=useState(false)


    const handleClose=()=>{
        dispatch({type:'CLOSE_LOGIN'})
    }
    return(
        <Dialog
            open={openLogin}
            onClose={handleClose}
            >
                <DialogTitle>
                    {title}
                    <IconButton
                    sx={{
                        position:'absolute'
                        top:8,
                        right:8,
                        color:(theme)
                    }}
                    >
                        
                    </IconButton>
                </DialogTitle>
        </Dialog>

    )
}

export default Login;