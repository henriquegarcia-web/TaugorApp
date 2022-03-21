import React, { useContext } from 'react'
import * as S from './style'

import HomeView from '../../Components/Home/HomeView'
import Menu from '../../Components/Home/Menu'
import CreateRequestModal from '../../Components/Home/Modals/CreateRequest'
import EditRequestModal from '../../Components/Home/Modals/EditRequest'

import { useView } from '../../Contexts/ViewContext'

const Home = () => {
  
  const { showModal, modalCreateShow, modalEditShow } = useView()

  return (
    <>
      <S.HomeContainer>
        <Menu />
        <HomeView />
      </S.HomeContainer>

      <CreateRequestModal
        show={modalCreateShow}
        onHide={() => showModal('create', false)}
      />

      <EditRequestModal
        show={modalEditShow.value}
        data={modalEditShow.data}
        onHide={() => showModal('edit', false)}
      />
    </>
  )
}

export default Home