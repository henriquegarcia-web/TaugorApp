import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import { HandleLogout, useAuth } from '../../../Contexts/AuthContext'

import UserImage from '../../../Assets/UserImage.png'

const Header = () => {

  const navigate = useNavigate()
  const { getUser } = useAuth()

  const user = getUser()
  
  // ---------------------------------------------- FUNÇÃO DE SIGNUP

  const handleExitApp = () => {
    HandleLogout()
    navigate('/login')
  }

  // ---------------------------------------------- POPOVER

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // ----------------------------------------------

  return (
    <S.HeaderContainer>

      <S.HeaderSearch>
        <S.HeaderSearchInput 
          type="text"
          placeholder='Procure por palavras-chaves ...'
          onChange={() => {}}
        />
        <I.FiSearch />
      </S.HeaderSearch>

      <S.HeaderUserInfo onClick={handleClick}>
        <S.UserInfoImageContainer>
          <S.UserInfoImage src={UserImage} alt="" />
        </S.UserInfoImageContainer>

        <S.UserInfoName>{user?.displayName}</S.UserInfoName>
      </S.HeaderUserInfo>

      <MUI.Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{
          marginTop: '10px',
        }}
      >
        <S.HeaderUserInfoModal>
          <MUI.Button
            size='small'
            variant="outlined"
            fullWidth
            onClick={() => handleExitApp()}
          >
            Sair
          </MUI.Button>
        </S.HeaderUserInfoModal>
      </MUI.Popover>

    </S.HeaderContainer>
  )
}


export default Header
