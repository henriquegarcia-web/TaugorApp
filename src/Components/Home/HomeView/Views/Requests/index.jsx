import React, { useEffect, useLayoutEffect, useState } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import Request from '../../../Request'

import { useView } from '../../../../../Contexts/ViewContext'

const Resquests = () => {

  const { showModal, view, getAllRequestsList, getMyRequestsList } = useView()

  const [progress, setProgress] = useState({})
  const [requestsList, setRequestsList] = useState([]);

  useEffect(() => {
    setHeaderIndicators()
  }, [view])
  
  const setHeaderIndicators = async () => {
    let currentRequestList

    if (view === 'all_requests') {
      currentRequestList = await getAllRequestsList()
    } else {
      currentRequestList = await getMyRequestsList()
    }

    setRequestsList(currentRequestList.allRequests)
    setProgress({
      all: currentRequestList.progress.all.toString(),
      finished: currentRequestList.progress.finished.toString(),
      percentage: currentRequestList.progress.percentage.toString(),
    })
  }
  
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
            {progress.finished}/{progress.all}
            <S.ProgressBarContainer>
              <S.ProgressBarFill fill={progress.percentage}></S.ProgressBarFill>
            </S.ProgressBarContainer>
          </S.ProgressBar>

          <S.ProgressIndicators>
            <div>
              <p>{progress.all}</p>
              <b>Na fila</b>
            </div>
            <div>
              <p>{progress.finished}</p>
              <b>{progress.finished === '1' ? 'Finalizado' : 'Finalizados'}</b>
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
          {view === 'all_requests' ? (
            <h2>Todas Solicitações</h2>
          ) : (
            <h2>Minhas Solicitações</h2>
          )}
        </S.ViewRequestsHeader>
        <S.ViewRequestsWrapper>
          {requestsList && 
            Array.from(requestsList).map((request, index) => (
              <Request key={index} data={request} />
            ))
          }
        </S.ViewRequestsWrapper>
      </S.ViewRequests>
    </>
  )
}

export default Resquests