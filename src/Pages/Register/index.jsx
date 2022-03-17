import React, { useLayoutEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'
import { AuthErrorMessage } from '../../Utils/globalstyles'

import AuthHeader from '../../Components/Auth/AuthHeader'
import { useAuth } from '../../Contexts/AuthContext'
import VerifyErroCode from '../../Services/Auth'

const Register = () => {

  const navigate = useNavigate();

  const { 
    handleRegister, 
    passwordStates, 
    showPassword, 
    showConfirmPassword, 
    resetPasswordStates,
    setError,
    errorMessage,
  } = useAuth()

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // ----------------------------------------------- SUBMIT
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('As senhas não conferem');
    }

    if (
      nameRef.current.value === '' || 
      emailRef.current.value === '' ||
      passwordRef.current.value === '' || 
      passwordConfirmRef.current.value === ''
    ) {
      return setError('Todos os campos devem ser preenchidos');
    }

    try {
      await handleRegister(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
      navigate('/', { replace: true });
    } catch (error) {
      const errorText = VerifyErroCode(error.message)
      setError(errorText)
    }
  }
  
  const handleEnterSubmit = (e) => {
    if(e.key === 'Enter'){
      handleSubmit(e)
    }
  }
  
  // ----------------------------------------------- FUNCIONALIDADE DO INPUT SENHA

  useLayoutEffect(() => {
    resetPasswordStates()
  }, [])

  // -----------------------------------------------

  return (
    <S.RegisterPage>
      
      <S.Register>
        
        <AuthHeader type='register' />

        <S.RegisterForm>
          {/* ---------------------- NOME ---------------------- */}
          <MUI.TextField
            inputRef={nameRef}
            onKeyPress={handleEnterSubmit}
            label="Seu nome completo" 
            variant="outlined" 
            size="small"
            fullWidth
            style={{
              marginBottom: '15px',
            }}
          />

          {/* ---------------------- E-MAIL ---------------------- */}
          <MUI.TextField
            inputRef={emailRef}
            onKeyPress={handleEnterSubmit}
            label="Seu e-mail" 
            variant="outlined" 
            size="small"
            fullWidth
            style={{
              marginBottom: '15px',
            }}
          />

          {/* ---------------------- SENHA ---------------------- */}
          <MUI.FormControl
            variant="outlined"
            size="small"
            style={{
              width: 'calc(100% - 50px)',
              marginBottom: '15px',
            }}
          >
            <MUI.InputLabel htmlFor="register-input-password">Sua senha</MUI.InputLabel>
            <MUI.OutlinedInput
              inputRef={passwordRef}
              onKeyPress={handleEnterSubmit}
              id="register-input-password"
              type={passwordStates.showPassword ? 'text' : 'password'}
              endAdornment={
                <MUI.InputAdornment position="end">
                  <MUI.IconButton
                    aria-label="toggle password visibility"
                    onClick={(e) => showPassword(e)}
                    edge="end"
                  >
                    {passwordStates.showPassword ? <I.FiEyeOff /> : <I.FiEye />}
                  </MUI.IconButton>
                </MUI.InputAdornment>
              }
              label="Password"
            />
          </MUI.FormControl>

          {/* ---------------------- CONFIRMAR SENHA ---------------------- */}
          <MUI.FormControl
            variant="outlined"
            size="small"
            style={{
              width: 'calc(100% - 50px)',
              marginBottom: '10px',
            }}
          >
            <MUI.InputLabel htmlFor="register-input-password-confirm">Confirme sua senha</MUI.InputLabel>
            <MUI.OutlinedInput
              inputRef={passwordConfirmRef}
              id="register-input-password-confirm"
              type={passwordStates.showConfirmPassword ? 'text' : 'password'}
              endAdornment={
                <MUI.InputAdornment position="end">
                  <MUI.IconButton
                    aria-label="toggle password visibility"
                    onClick={(e) => showConfirmPassword(e)}
                    edge="end"
                  >
                    {passwordStates.showConfirmPassword ? <I.FiEyeOff /> : <I.FiEye />}
                  </MUI.IconButton>
                </MUI.InputAdornment>
              }
              label="Password"
            />
          </MUI.FormControl>

          <AuthErrorMessage>{errorMessage}</AuthErrorMessage>

          <MUI.Button 
            variant="outlined"
            onClick={handleSubmit}
          >
            Registrar
          </MUI.Button>
        </S.RegisterForm>
      </S.Register>

    </S.RegisterPage>
  )
}

export default Register