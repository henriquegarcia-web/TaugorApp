import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import AuthHeader from '../../Components/Auth/AuthHeader'

const Register = () => {

  const navigate = useNavigate()

  const [values, setValues] = React.useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegisterUser = () => {
    navigate('/home')
  }

  return (
    <S.RegisterPage>
      
      <S.Register>
        
        <AuthHeader type='register' />

        <S.RegisterForm>
          {/* ---------------------- E-MAIL ---------------------- */}
          <MUI.TextField
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
                    onClick={handleClickShowPassword}
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
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              endAdornment={
                <MUI.InputAdornment position="end">
                  <MUI.IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
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
            onClick={() => handleRegisterUser()}
          >
            Registrar
          </MUI.Button>
        </S.RegisterForm>
      </S.Register>

    </S.RegisterPage>
  )
}

export default Register