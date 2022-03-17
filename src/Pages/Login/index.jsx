import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import AuthHeader from '../../Components/Auth/AuthHeader'

import { useAuth } from '../../Contexts/AuthContext'

const Login = () => {

  const navigate = useNavigate();

  const { values, showPassword, handleMouseDownPassword, handleLogin, resetAuth } = useAuth()

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    resetAuth()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleLogin(emailRef.current.value, passwordRef.current.value);
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <S.LoginPage>
      <S.Login>
        
        <AuthHeader type='login' />

        <S.LoginForm>
          <MUI.TextField
            // required
            inputRef={emailRef}
            // onChange={handleChange('email')}
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
              marginBottom: '30px',
            }}
          >
            <MUI.InputLabel htmlFor="login-input-password">Sua senha</MUI.InputLabel>
            <MUI.OutlinedInput
              inputRef={passwordRef}
              id="login-input-password"
              type={values.showPassword ? 'text' : 'password'}
              // onChange={handleChange('password')}
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