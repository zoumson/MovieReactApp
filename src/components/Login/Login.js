import React, { useState, useEffect } from 'react';
import Fire from '../Firebase/Fire';
import Hero from './Hero';
import LoginForm from './LoginForm';

const Login = (props) => {
  /* Component attributes */
  const { setLog } = props;
  /* Current component state initialization */
  const [client, setClient] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  /* Make email and password input field empty */
  const clearInputs = () => {
    setEmail('');
    setPasswordError('');
  };
  /* Clear email and password errors */
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  /* Login procedure */
  const handleLogin = () => {
    clearErrors();
    Fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
          default:
            setPasswordError('Unknown error');
            break;
        }
      });
  };
  /* Sign up procedure */
  const handleSignup = () => {
    clearErrors();
    Fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
          default:
            setEmailError('Unknown error');
            break;
        }
      });
  };

  const authListener = () => {
    Fire.auth().onAuthStateChanged((client) => {
      if (client) {
        clearInputs();
        setClient(client);
        setLog(true);
      } else {
        setClient('');
        setLog(false);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  /* What you see when Login*/
  const alreadyLog = () => <Hero />;
  /* Login form */
  const requestLog = () => (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
  /* Actual page rendering */
  return <div>{client ? alreadyLog() : requestLog()}</div>;
};

export default Login;
