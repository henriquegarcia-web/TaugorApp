import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import AuthHeader from '../../Components/Auth/AuthHeader'

import { useAuth } from '../../Contexts/AuthContext'

const Register = () => {

  const navigate = useNavigate();

  const { values, showPassword, showConfirmPassword, handleMouseDownPassword, handleRegister, resetAuth } = useAuth()

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  useEffect(() => {
    resetAuth()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return console.log('ERRO: Senhas não conferem');
    }

    try {
      await handleRegister(emailRef.current.value, passwordRef.current.value);
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <S.RegisterPage>
      
      <S.Register>
        
        <AuthHeader type='register' />

        <S.RegisterForm>
          {/* ---------------------- NOME ---------------------- */}
          <MUI.TextField
            inputRef={nameRef}
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
              id="register-input-password"
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <MUI.InputAdornment position="end">
                  <MUI.IconButton
                    aria-label="toggle password visibility"
                    onClick={showPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <I.FiEyeOff /> : <I.FiEye />}
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
              marginBottom: '30px',
            }}
          >
            <MUI.InputLabel htmlFor="register-input-password-confirm">Confirme sua senha</MUI.InputLabel>
            <MUI.OutlinedInput
              inputRef={passwordConfirmRef}
              id="register-input-password-confirm"
              type={values.showConfirmPassword ? 'text' : 'password'}
              endAdornment={
                <MUI.InputAdornment position="end">
                  <MUI.IconButton
                    aria-label="toggle password visibility"
                    onClick={showConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showConfirmPassword ? <I.FiEyeOff /> : <I.FiEye />}
                  </MUI.IconButton>
                </MUI.InputAdornment>
              }
              label="Password"
            />
          </MUI.FormControl>

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