import React from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import UserImage from '../../../Assets/UserImage.jpeg'

const Header = () => {
  return (
    <S.HeaderContainer>

      <S.HeaderSearch>
        <S.HeaderSearchInput type="text" placeholder='Procure por palavras-chaves ...' />
        <I.FiSearch />
      </S.HeaderSearch>

      <S.HeaderUserInfo>
        <S.UserInfoImageContainer>
          <S.UserInfoImage src={UserImage} alt="" />
        </S.UserInfoImageContainer>

        <S.UserInfoName>Henrique Garcia</S.UserInfoName>
      </S.HeaderUserInfo>

    </S.HeaderContainer>
  )
}


export default Header
