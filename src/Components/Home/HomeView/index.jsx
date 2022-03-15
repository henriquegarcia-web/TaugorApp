import React, { useContext } from 'react'
import * as S from './style'

import Header from '../Header'

import { ViewContext } from '../../../Contexts/ViewContext'

const HomeView = () => {

  const viewContext = useContext(ViewContext)
  const { viewComponent, setView } = viewContext

  return (
    <S.HomeViewContainer>
      
      <Header />

      <S.HomeView>
        <S.HomeViewWrapper>
          {viewComponent}
        </S.HomeViewWrapper>
      </S.HomeView>

    </S.HomeViewContainer>
  )
}

export default HomeView
