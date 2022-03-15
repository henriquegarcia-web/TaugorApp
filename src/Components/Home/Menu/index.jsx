import React, { useContext } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import { ViewContext } from '../../../Contexts/ViewContext'

const Menu = () => {

  const viewContext = useContext(ViewContext)
  const { setView } = viewContext

  return (
    <S.MenuContainer>

      <S.MenuLogo>
        <I.FiClipboard />
      </S.MenuLogo>

      <S.MenuNavBar>
        <S.MenuNavBarItem onClick={() => setView('all_requests')}>
          <I.FiHardDrive />
          <S.MenuNavBarItemText><b>Todas</b> Solicitações</S.MenuNavBarItemText>
        </S.MenuNavBarItem>

        <S.MenuNavBarItem onClick={() => setView('my_requests')}>
          <I.FiInbox />
          <S.MenuNavBarItemText><b>Minhas</b> Solicitações</S.MenuNavBarItemText>
        </S.MenuNavBarItem>

        <S.MenuNavBarItem>
          <I.FiPlusCircle />
          <S.MenuNavBarItemText><b>Criar</b> Solicitação</S.MenuNavBarItemText>
        </S.MenuNavBarItem>
      </S.MenuNavBar>

    </S.MenuContainer>
  )
}

export default Menu