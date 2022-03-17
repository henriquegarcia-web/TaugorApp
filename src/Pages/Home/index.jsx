import React, { useContext } from 'react'
import * as S from './style'

import HomeView from '../../Components/Home/HomeView'
import Menu from '../../Components/Home/Menu'
import RequestModal from '../../Components/Auth/RequestModal'

import { ViewContext } from '../../Contexts/ViewContext'

const Home = () => {
  
  const viewContext = useContext(ViewContext)
  const { showModal, modalShow } = viewContext

  return (
    <>
      <S.HomeContainer>
        <Menu />
        <HomeView />
      </S.HomeContainer>

      <RequestModal
        show={modalShow}
        onHide={() => showModal(false)}
      />
    </>
  )
}

export default Home