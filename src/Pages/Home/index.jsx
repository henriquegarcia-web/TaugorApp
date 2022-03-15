import React from 'react'
import * as S from './style'

import HomeView from '../../Components/Home/HomeView'
import Menu from '../../Components/Home/Menu'

import ViewProvider from '../../Contexts/ViewContext'

const Home = () => {
  return (
    <ViewProvider>
      <S.HomeContainer>
        <Menu />
        <HomeView />
      </S.HomeContainer>
    </ViewProvider>
  )
}

export default Home