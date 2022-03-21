import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import { HandleLogout, useAuth } from '../../../Contexts/AuthContext'

import UserImage from '../../../Assets/UserImage.png'
import { useView } from '../../../Contexts/ViewContext'

const Header = () => {

  const navigate = useNavigate()
  const { getUser } = useAuth()
  const { handleSearchBox } = useView()

  const user = getUser()

  const searchBoxRef = useRef()
  
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

  const handleSearch = (key, e) => {
    switch (key) {
      case 'enter':
        if(e.key === 'Enter'){
          handleSearchBox(searchBoxRef.current.value)
        }
        break;
      case 'click':
        handleSearchBox(searchBoxRef.current.value)
        break;
    
      default: break;
    }
  }

  return (
    <S.HeaderContainer>

      <S.HeaderSearch>
        <S.HeaderSearchInput 
          ref={searchBoxRef}
          type="text"
          placeholder='Procure por palavras-chaves ...'
          onKeyPress={(e) => {handleSearch('enter', e)}}
        />
        <I.FiSearch onClick={(e) => {handleSearch('click', e)}} />
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
