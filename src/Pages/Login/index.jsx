import React, { useContext, useEffect } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import AuthHeader from '../../Components/Auth/AuthHeader'

import { AuthContext } from '../../Contexts/AuthContext'

const Login = () => {

  const authContext = useContext(AuthContext)
  const { values, handleChange, showPassword, handleMouseDownPassword, handleLogin, resetAuth } = authContext

  useEffect(() => {
    resetAuth()
  }, [])

  return (
    <S.LoginPage>
      
      <S.Login>
        
        <AuthHeader type='login' />

        <S.LoginForm>
          <MUI.TextField
            value={values.email}
            onChange={handleChange('email')}
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
              id="login-input-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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
            onClick={handleLogin}
          >
            Entrar
          </MUI.Button>
        </S.LoginForm>
      </S.Login>
      
    </S.LoginPage>
  )
}

export default Login