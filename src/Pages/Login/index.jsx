import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'
import { AuthErrorMessage } from '../../Utils/globalstyles'

import AuthHeader from '../../Components/Auth/AuthHeader'

import { useAuth } from '../../Contexts/AuthContext'
import VerifyErroCode from '../../Services/Auth'

const Login = () => {

  const navigate = useNavigate();

  const { 
    handleLogin, 
    passwordStates, 
    showPassword,
    resetPasswordStates,
    setError,
    errorMessage,
  } = useAuth()

  const emailRef = useRef();
  const passwordRef = useRef();

  // ----------------------------------------------- SUBMIT
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailRef.current.value === '' || passwordRef.current.value === '') {
      return setError('Todos os campos devem ser preenchidos');
    }
    
    try {
      await handleLogin(emailRef.current.value, passwordRef.current.value);
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

  useEffect(() => {
    resetPasswordStates()
  }, [])

  // -----------------------------------------------

  return (
    <S.LoginPage>
      <S.Login>
        
        <AuthHeader type='login' />

        <S.LoginForm>
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

          <MUI.FormControl
            variant="outlined"
            size="small"
            style={{
              width: 'calc(100% - 50px)',
              marginBottom: '10px',
            }}
          >
            <MUI.InputLabel htmlFor="login-input-password">Sua senha</MUI.InputLabel>
            <MUI.OutlinedInput
              inputRef={passwordRef}
              onKeyPress={handleEnterSubmit}
              id="login-input-password"
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

          <AuthErrorMessage>{errorMessage}</AuthErrorMessage>

          <MUI.Button 
            variant="outlined"
            onClick={handleSubmit}
          >
            Entrar
          </MUI.Button>
        </S.LoginForm>
      </S.Login>
      
    </S.LoginPage>
  )
}

export default Login