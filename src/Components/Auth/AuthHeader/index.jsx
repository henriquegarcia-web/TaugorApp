import React, { useContext, useEffect, useState } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import { Link } from 'react-router-dom'

const AuthHeader = ({ type }) => {

  const [authHeaderData, setAuthHeaderData] = useState({
    authName: '',
    authChangeText: '',
    authChangeRoute: ''
  })

  useEffect(() => {
    if (type === 'login') {
      setAuthHeaderData({
        authName: 'Login',
        authChangeText: 'Não tem uma conta?',
        authChangeRoute: '/registro'
      })
    } else {
      setAuthHeaderData({
        authName: 'Registro',
        authChangeText: 'Já tem uma conta?',
        authChangeRoute: '/login'
      })
    }
  }, [type])
  

  return (
    <>
      <S.AuthHeader>
        <S.AuthHeaderLogo>
          <I.FiClipboard /> Taugor
        </S.AuthHeaderLogo>
        <S.AuthHeaderTitle>
          Portal de Relacionamento
        </S.AuthHeaderTitle>
        <S.AuthHeaderContents>
          <S.AuthHeaderIdentifier>
            {authHeaderData.authName}
          </S.AuthHeaderIdentifier>
          <S.AuthHeaderGoTo>
            <Link to={authHeaderData.authChangeRoute}>
              {authHeaderData.authChangeText}
            </Link>
          </S.AuthHeaderGoTo>
        </S.AuthHeaderContents>
      </S.AuthHeader>
    </>
  )
}

export default AuthHeader