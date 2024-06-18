// import { Close, Send } from '@mui/icons-material';
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   IconButton,
//   TextField,
// } from '@mui/material';
// import { useEffect, useRef, useState } from 'react';
// import { useValue } from '../../context/ContextProvider';
// import GoogleOneTapLogin from './GoogleOneTapLogin';
// import PasswordField from './PasswordField';

// const Login = () => {
//   const {
//     state: { openLogin },
//     dispatch,
//   } = useValue();
//   const [title, setTitle] = useState('Login');
//   const [isRegister, setIsRegister] = useState(false);
//   const nameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   const handleClose = () => {
//     dispatch({ type: 'CLOSE_LOGIN' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // testing Loading
//     dispatch({ type: 'START_LOADING' });

//     setTimeout(() => {
//       dispatch({ type: 'END_LOADING' });
//     }, 6000);

//     //testing Notification
//     const password = passwordRef.current.value;
//     const confirmPassword = confirmPasswordRef.current.value;
//     if (password !== confirmPassword) {
//       dispatch({
//         type: 'UPDATE_ALERT',
//         payload: {
//           open: true,
//           severity: 'error',
//           message: 'Passwords do not match',
//         },
//       });
//     }
//   };

//   useEffect(() => {
//     isRegister ? setTitle('Register') : setTitle('Login');
//   }, [isRegister]);
//   return (
//     <Dialog open={openLogin} onClose={handleClose}>
//       <DialogTitle>
//         {title}
//         <IconButton
//           sx={{
//             position: 'absolute',
//             top: 8,
//             right: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//           onClick={handleClose}
//         >
//           <Close />
//         </IconButton>
//       </DialogTitle>
//       <form onSubmit={handleSubmit}>
//         <DialogContent dividers>
//           <DialogContentText>
//             Please fill your information in the fields below:
//           </DialogContentText>
//           {isRegister && (
//             <TextField
//               autoFocus
//               margin="normal"
//               variant="standard"
//               id="name"
//               label="Name"
//               type="text"
//               pattern="[A-Za-z\s]"
//               fullWidth
//               inputRef={nameRef}
//               inputProps={{ minLength: 5 }}
//               required
//             />
//           )}
//           <TextField
//             autoFocus={!isRegister}
//             margin="normal"
//             variant="standard"
//             id="email"
//             label="Email"
//             type="email"
//             fullWidth
//             inputRef={emailRef}
//             required
//           />
//           <PasswordField {...{ passwordRef }} />
//           {isRegister && (
//             <PasswordField
//               passwordRef={confirmPasswordRef}
//               id="confirmPassword"
//               label="Confirm Password"
//             />
//           )}
//         </DialogContent>
//         <DialogActions sx={{ px: '19px' }}>
//           <Button type="submit" variant="contained" endIcon={<Send />}>
//             Submit
//           </Button>
//         </DialogActions>
//       </form>
//       <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
//         {isRegister
//           ? 'Do you have an account? Sign in now '
//           : "Don't you have an account? Create one now "}
//         <Button onClick={() => setIsRegister(!isRegister)}>
//           {isRegister ? 'Login' : 'Register'}
//         </Button>
//       </DialogActions>
//       <DialogActions sx={{ justifyContent: 'center', py: '24px' }}>
//         <GoogleOneTapLogin />
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default Login;

import { Close, Send } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useValue } from '../../context/ContextProvider';
import GoogleOneTapLogin from './GoogleOneTapLogin';
import PasswordField from './PasswordField';

const Login = () => {
  const {
    state: { openLogin },
    dispatch,
  } = useValue();
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: 'CLOSE_LOGIN' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Testing Loading
    dispatch({ type: 'START_LOADING' });

    setTimeout(() => {
      dispatch({ type: 'END_LOADING' });
    }, 6000);

    // Testing Notification
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!validatePassword(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          open: true,
          severity: 'error',
          message: 'Passwords do not match',
        },
      });
      return;
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    const pattern = /^[A-Za-z\s]*$/;
    if (!pattern.test(value)) {
      setNameError('Name should only contain letters and spaces.');
    } else {
      setNameError('');
    }
  };

  const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (!validatePassword(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    isRegister ? setTitle('Register') : setTitle('Login');
  }, [isRegister]);

  return (
    <Dialog open={openLogin} onClose={handleClose}>
      <DialogTitle>
        {title}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <DialogContentText>
            Please fill your information in the fields below:
          </DialogContentText>
          {isRegister && (
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="name"
              label="Name"
              type="text"
              fullWidth
              inputRef={nameRef}
              inputProps={{ minLength: 5 }}
              required
              onChange={handleNameChange}
              error={Boolean(nameError)}
              helperText={nameError}
            />
          )}
          <TextField
            autoFocus={!isRegister}
            margin="normal"
            variant="standard"
            id="email"
            label="Email"
            type="email"
            fullWidth
            inputRef={emailRef}
            required
          />
          <PasswordField
            passwordRef={passwordRef}
            error={Boolean(passwordError)}
            helperText={passwordError}
            onChange={handlePasswordChange}
          />
          {isRegister && (
            <PasswordField
              passwordRef={confirmPasswordRef}
              id="confirmPassword"
              label="Confirm Password"
              error={Boolean(passwordError)}
              helperText={passwordError}
            />
          )}
        </DialogContent>
        <DialogActions sx={{ px: '19px' }}>
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Submit
          </Button>
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
        {isRegister
          ? 'Do you have an account? Sign in now '
          : "Don't you have an account? Create one now "}
        <Button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Login' : 'Register'}
        </Button>
      </DialogActions>
      <DialogActions sx={{ justifyContent: 'center', py: '24px' }}>
        <GoogleOneTapLogin />
      </DialogActions>
    </Dialog>
  );
};

export default Login;
