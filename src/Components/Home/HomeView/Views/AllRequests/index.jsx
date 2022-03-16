import React, { useContext } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import Request from '../../../Request'

import { ViewContext } from '../../../../../Contexts/ViewContext'

const AllResquests = () => {

  const viewContext = useContext(ViewContext)
  const { showModal } = viewContext

  return (
    <>
      <S.ViewHeader>
        <S.ViewHeaderProgress>
          <S.ProgressTitle>
            Progresso de: <b>Todas Solicitações</b>
          </S.ProgressTitle>

          <S.ProgressBar>
            10/32
            <S.ProgressBarContainer>
              <S.ProgressBarFill></S.ProgressBarFill>
            </S.ProgressBarContainer>
          </S.ProgressBar>

          <S.ProgressIndicators>
            <div>
              <p>32</p>
              <b>Na fila</b>
            </div>
            <div>
              <p>10</p>
              <b>Finalizados</b>
            </div>
          </S.ProgressIndicators>
        </S.ViewHeaderProgress>

        <S.ViewHeaderCreate onClick={() => showModal(true)}>
          <I.FiPlusCircle />
          <p>Criar Solicitação</p>
        </S.ViewHeaderCreate>

        <S.ViewHeaderFilters>
          <I.FiFilter />
          <p>Filtros</p>
        </S.ViewHeaderFilters>
      </S.ViewHeader>

      <S.ViewRequests>
        <S.ViewRequestsHeader>
          <h2>Todas Solicitações</h2>
        </S.ViewRequestsHeader>
        <S.ViewRequestsWrapper>
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
        </S.ViewRequestsWrapper>
      </S.ViewRequests>
    </>
  )
}

export default AllResquests