import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase'

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

  const [values, setValues] = React.useState({
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

  const handleRegister = async (email, password) => {
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(user)
  };

  const handleLogin = async (email, password) => {
    const user = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(user)
  };

  const resetAuth = () => {
    setValues({
      showPassword: false,
      showConfirmPassword: false,
    })
  }  
  
  // ------------------------------------------ FUNCIONAMENTO DO INPUT SENHA

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
        user,
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