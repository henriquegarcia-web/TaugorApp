import React from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import Request from '../../../Request'

const AllResquests = () => {
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
              <p>10</p>
              <b>Finalizados</b>
            </div>
            <div>
              <p>32</p>
              <b>Na fila</b>
            </div>
          </S.ProgressIndicators>
        </S.ViewHeaderProgress>

        <S.ViewHeaderCreate>
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