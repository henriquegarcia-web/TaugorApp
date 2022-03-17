import React, { useContext, useEffect } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import AuthHeader from '../../Components/Auth/AuthHeader'

import { AuthContext } from '../../Contexts/AuthContext'

const Register = () => {

  const authContext = useContext(AuthContext)
  const { values, handleChange, showPassword, showConfirmPassword, handleMouseDownPassword, handleRegister, resetAuth } = authContext

  useEffect(() => {
    resetAuth()
  }, [])

  return (
    <S.RegisterPage>
      
      <S.Register>
        
        <AuthHeader type='register' />

        <S.RegisterForm>
          {/* ---------------------- E-MAIL ---------------------- */}
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
              id="register-input-password"
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
            onClick={handleRegister}
          >
            Registrar
          </MUI.Button>
        </S.RegisterForm>
      </S.Register>

    </S.RegisterPage>
  )
}

export default Register