import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase-config'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const navigate = useNavigate()

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [user, setUser] = useState({});
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigate('/home');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigate('/home');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetAuth = () => {
    setValues({
      email: '',
      password: '',
      showPassword: false,
      showConfirmPassword: false,
    })
  }  
  
  // ------------------------------------------ SENHA

  const showPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const showConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <AuthContext.Provider
      value={{
        values,
        handleChange,
        showPassword,
        showConfirmPassword,
        handleMouseDownPassword,
        handleRegister,
        handleLogin,
        resetAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const HandleLogout = async () => {
  await signOut(auth);
};