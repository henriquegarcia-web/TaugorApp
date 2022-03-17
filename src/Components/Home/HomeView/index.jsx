import React from 'react'
import * as S from './style'

import Resquests from './Views/Requests'
import Header from '../Header'

const HomeView = () => {
  return (
    <S.HomeViewContainer>
      
      <Header />

      <S.HomeView>
        <S.HomeViewWrapper>
          <Resquests />
        </S.HomeViewWrapper>
      </S.HomeView>

    </S.HomeViewContainer>
  )
}

export default HomeView
