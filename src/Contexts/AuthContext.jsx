import React, { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase'

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

  // ----------------------------------------------- FUNCIONALIDADE DO INPUT SENHA 1

  const [passwordStates, setPasswordStates] = React.useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  // ----------------------------------------------- FUNCIONALIDADES DO FIREBASE

  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    })
  }, []);
  
  const handleRegister = async (email, password, name) => {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    await updateProfile(auth.currentUser, { displayName: name })
  };

  const handleLogin = async (email, password) => {
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const getUser = () => {
    return auth.currentUser;
  }

  const setError = (errorMessage) => {
    console.log(errorMessage)
    setErrorMessage(errorMessage)
    setTimeout(() => {
      setErrorMessage('')
    }, 6000);
  }

  // ----------------------------------------------- FUNCIONALIDADE DO INPUT SENHA 2

  const handleChange = (prop) => (event) => {
    setPasswordStates({ ...passwordStates, [prop]: event.target.value });
  };
  
  const resetPasswordStates = () => {
    setPasswordStates({
      showPassword: false,
      showConfirmPassword: false,
    })
  }  

  const showPassword = (e) => {
    e.preventDefault();
    setPasswordStates({
      ...passwordStates,
      showPassword: !passwordStates.showPassword,
    });
  };

  const showConfirmPassword = (e) => {
    e.preventDefault();
    setPasswordStates({
      ...passwordStates,
      showConfirmPassword: !passwordStates.showConfirmPassword,
    });
  };

  // -----------------------------------------------

  return (
    <AuthContext.Provider value={{
      currentUser,
      getUser,
      passwordStates,
      handleChange,
      showPassword,
      showConfirmPassword,
      handleRegister,
      handleLogin,
      resetPasswordStates,
      setError,
      errorMessage,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// ----------------------------------------------- FUNÇÃO DE LOGOUT

export const HandleLogout = async () => {
  await signOut(auth);
};