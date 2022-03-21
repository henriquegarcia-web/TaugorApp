import React, { useEffect, useState } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import Request from '../../../Request'

import { useView } from '../../../../../Contexts/ViewContext'

import NotFoundRequest from '../../../../../Assets/NotFoundRequest.svg'

const Resquests = () => {

  const { showModal, view, globalRequestList } = useView()

  const [currentRequestList, setCurrentRequestList] = useState([])
  const [currentProgress, setCurrentProgress] = useState({})

  useEffect(() => {
    setCurrentRequestList(globalRequestList.data)
    setCurrentProgress(globalRequestList.progress)
  }, [globalRequestList])
  
  return (
    <>
      <S.ViewHeader>
        <S.ViewHeaderProgress>
          <S.ProgressTitle>
            {view === 'all_requests' ? (
              <>Progresso de: <b>Todas Solicitações</b></>
            ) : (
              <>Progresso de: <b>Minhas Solicitações</b></>
            )}
          </S.ProgressTitle>

          <S.ProgressBar>
            {currentProgress.finished}/{currentProgress.all}
            <S.ProgressBarContainer>
              <S.ProgressBarFill fill={currentProgress.percentage}></S.ProgressBarFill>
            </S.ProgressBarContainer>
          </S.ProgressBar>

          <S.ProgressIndicators>
            <div>
              <p>{currentProgress.all}</p>
              <b>Na fila</b>
            </div>
            <div>
              <p>{currentProgress.finished}</p>
              <b>{currentProgress.finished === '1' ? 'Finalizado' : 'Finalizados'}</b>
            </div>
          </S.ProgressIndicators>
        </S.ViewHeaderProgress>

        <S.ViewHeaderCreate onClick={() => showModal('create', true)}>
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
          {view === 'all_requests' ? (
            <h2>Todas Solicitações</h2>
          ) : (
            <h2>Minhas Solicitações</h2>
          )}
        </S.ViewRequestsHeader>
        <S.ViewRequestsWrapper>
          {currentRequestList.length > 0 ? (
            Array.from(currentRequestList).map((request, index) => (
              <Request key={index} data={request} />
            ))
          ) : (
            <S.ViewRequestNoRequests>
              <img src={NotFoundRequest} alt="" />
              
              {view === 'all_requests' ? (
                <p>Não há solicitações ainda</p>
              ) : (
                <p>Você não possuí solicitações</p>
              )}
            </S.ViewRequestNoRequests>
          )}
        </S.ViewRequestsWrapper>
      </S.ViewRequests>
    </>
  )
}

export default Resquests