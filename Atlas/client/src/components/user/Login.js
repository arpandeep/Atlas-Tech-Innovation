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
<<<<<<< HEAD:Client/src/components/user/Login.js
import { login, register } from '../../actions/user';
=======
>>>>>>> origin/development:Atlas/client/src/components/user/Login.js

const Login = () => {
  const {
    state: { openLogin },
    dispatch,
  } = useValue();
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState('');

  const handleClose = () => {
    dispatch({ type: 'CLOSE_LOGIN' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD:Client/src/components/user/Login.js

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!isRegister) return login({ email, password }, dispatch);

    const name = nameRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
=======
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!isRegister) return login({ email, password }, dispatch);
    const name = nameRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword)
>>>>>>> origin/development:Atlas/client/src/components/user/Login.js
      return dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          open: true,
          severity: 'error',
<<<<<<< HEAD:Client/src/components/user/Login.js
          message: "Passwords don't match",
        },
      });
    }

    register({ name, email, password }, dispatch);
  };

  const validatePassword = (password, setError, setHelperText) => {
    const rules = [
      { regex: /.{8,}/, message: 'Password must be at least 8 characters long' },
      { regex: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
      { regex: /[0-9]/, message: 'Password must contain at least one number' },
      { regex: /[^A-Za-z0-9]/, message: 'Password must contain at least one special character' },
    ];

    for (const rule of rules) {
      if (!rule.regex.test(password)) {
        setError(true);
        setHelperText(rule.message);
        return;
      }
    }

    setError(false);
    setHelperText('');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    validatePassword(value, setPasswordError, setPasswordHelperText);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    const password = passwordRef.current.value;
    if (value !== password) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("Passwords don't match");
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordHelperText('');
    }
=======
          message: 'Passwords do not match',
        },
      });
    register({ name, email, password }, dispatch);
>>>>>>> origin/development:Atlas/client/src/components/user/Login.js
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
            error={passwordError}
            helperText={passwordHelperText}
            onChange={handlePasswordChange}
          />
          {isRegister && (
            <PasswordField
              passwordRef={confirmPasswordRef}
              id="confirmPassword"
              label="Confirm Password"
              error={confirmPasswordError}
              helperText={confirmPasswordHelperText}
              onChange={handleConfirmPasswordChange}
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
