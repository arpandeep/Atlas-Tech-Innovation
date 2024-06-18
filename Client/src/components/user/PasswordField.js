
// import React, { useState } from 'react';
// import { TextField, IconButton, InputAdornment } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const PasswordField = ({passwordRef, id='password', label='password'}) => {

//   const [showPassword, setShowPassword] = useState(false)

//   const handleClick = ()=>{
//     setShowPassword(!showPassword)
//   }

//   const handleMouseDown = (e)=>{
//     e.preventDefault()
//   }
//   return (
//     <TextField
//           margin='normmal'
//           variant='standard'
//           id='id'
//           label={label}
//           type={showPassword?'text':'Password'}
//           fullWidth
//           inputRef={passwordRef}
//           inputProps={{minLength:6}}
//           required
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position='end'>
//                 <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             )
//           }}
//           />
//   )
// }


// export default PasswordField;


import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordField = ({ passwordRef, id = 'password', label = 'Password', error, helperText, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <TextField
      margin='normal'
      variant='standard'
      id={id}
      label={label}
      type={showPassword ? 'text' : 'password'}
      fullWidth
      inputRef={passwordRef}
      inputProps={{ minLength: 8 }}
      required
      onChange={onChange}
      error={error}
      helperText={helperText}
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
  );
};

export default PasswordField;
