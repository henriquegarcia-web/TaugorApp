import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import UserImage from '../../../Assets/UserImage.jpeg'

const Header = () => {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleExitApp = () => {
    navigate('/login')
  }

  return (
    <S.HeaderContainer>

      <S.HeaderSearch>
        <S.HeaderSearchInput type="text" placeholder='Procure por palavras-chaves ...' />
        <I.FiSearch />
      </S.HeaderSearch>

      <S.HeaderUserInfo onClick={handleClick}>
        <S.UserInfoImageContainer>
          <S.UserInfoImage src={UserImage} alt="" />
        </S.UserInfoImageContainer>

        <S.UserInfoName>Henrique Garcia</S.UserInfoName>
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
