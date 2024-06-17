
import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordField = ({passwordRef, id='password', label='password'}) => {

  const [showPassword, setShowPassword] = useState(false)

  const handleClick = ()=>{
    setShowPassword(!showPassword)
  }

  const handleMouseDown = (e)=>{
    e.preventDefault()
  }
  return (
    <TextField
          autoFocus
          margin='normmal'
          variant='standard'
          id='id'
          label={label}
          type={showPassword?'text':'Password'}
          fullWidth
          inputRef={passwordRef}
          inputProps={{minLength:6}}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          />
  )
}


export default PasswordField;
