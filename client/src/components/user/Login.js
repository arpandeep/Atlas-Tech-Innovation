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
// import { login, register } from '../../actions/user';
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
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     if (!isRegister) return login({ email, password }, dispatch);
//     const name = nameRef.current.value;
//     const confirmPassword = confirmPasswordRef.current.value;
//     if (password !== confirmPassword)
//       return dispatch({
//         type: 'UPDATE_ALERT',
//         payload: {
//           open: true,
//           severity: 'error',
//           message: 'Passwords do not match',
//         },
//       });
//     register({ name, email, password }, dispatch);
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
//               fullWidth
//               inputRef={nameRef}
//               inputProps={{ minLength: 2 }}
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


// 

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
import { login, register } from '../../actions/user';
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
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: 'CLOSE_LOGIN' });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
    return regex.test(password);
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Reset errors
    setEmailError(false);
    setPasswordError(false);
    setNameError(false);
    setConfirmPasswordError(false);

    // Validate email
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError(true);
      return;
    }

    if (!isRegister) return login({ email, password }, dispatch);

    const name = nameRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Validate name
    if (!validateName(name)) {
      setNameError(true);
      return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          open: true,
          severity: 'error',
          message: 'Passwords do not match',
        },
      });
    }

    register({ name, email, password }, dispatch);
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
              inputProps={{ minLength: 2 }}
              required
              error={nameError}
              helperText={nameError ? "Name must contain only alphabets" : ""}
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
            error={emailError}
            helperText={emailError ? "Invalid email format" : ""}
          />
          <PasswordField
            passwordRef={passwordRef}
            error={passwordError}
            helperText={
              passwordError
                ? "Password must have one uppercase, one lowercase, one symbol, and at least 6 characters"
                : ""
            }
          />
          {isRegister && (
            <PasswordField
              passwordRef={confirmPasswordRef}
              id="confirmPassword"
              label="Confirm Password"
              error={confirmPasswordError}
              helperText={confirmPasswordError ? "Passwords do not match" : ""}
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