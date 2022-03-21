import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'
import * as MUI from '@mui/material/'

import Request from '../../../Request'

import { useView } from '../../../../../Contexts/ViewContext'

import NotFoundRequest from '../../../../../Assets/NotFoundRequest.svg'

const Resquests = () => {

  const { showModal, view, globalRequestList } = useView()

  const [currentRequestList, setCurrentRequestList] = useState([])
  const [currentProgress, setCurrentProgress] = useState({})

  const [filtersModalShow, setFiltersModalShow] = useState(false)

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
          <S.FiltersContent onClick={() => setFiltersModalShow(!filtersModalShow)}>
            <I.FiFilter />
            <p>Filtros</p>
          </S.FiltersContent>

          {filtersModalShow && (
            <S.FiltersModal>
              <FiltersModal setFiltersModalShow={setFiltersModalShow} />
            </S.FiltersModal>
          )}
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

// --------------------------------- MODAL DE FILTROS

export const FiltersModal = ({ setFiltersModalShow }) => {

  const { handleSearchBox } = useView()
  
  const [filteredBy, setFilteredBy] = useState('');

  const [operationStatus, setOperationStatus] = useState('');
  const [operationPriority, setOperationPriority] = useState('');

  const handleSubmitFilters = () => {
    switch (filteredBy) {
      case 'status':
        if (!operationStatus) return
        handleSearchBox(operationStatus)
        setFiltersModalShow(false)
        break;
      case 'priority':
        if (!operationPriority) return
        handleSearchBox(operationPriority)
        setFiltersModalShow(false)
        break;
    
      default: break;
    }
  }

  const handleDeleteFilters = () => {
    handleSearchBox('')
    setFiltersModalShow(false)
  }

  return (
    <>
      <MUI.FormControl style={{
        marginBottom: '10px',
      }}>
        <MUI.InputLabel id="operation-status">Filtrar por</MUI.InputLabel>
        <MUI.Select
          labelId="operation-status"
          value={filteredBy}
          label="Status da operação"
          onChange={(e) => setFilteredBy(e.target.value)}
        >
          <MUI.MenuItem value={'status'}>Status</MUI.MenuItem>
          <MUI.MenuItem value={'priority'}>Prioridade</MUI.MenuItem>
        </MUI.Select>
      </MUI.FormControl>

      {filteredBy === 'status' && (
        <MUI.FormControl style={{
          marginBottom: '10px',
        }}>
          <MUI.InputLabel id="operation-status">Status da operação</MUI.InputLabel>
          <MUI.Select
            labelId="operation-status"
            value={operationStatus}
            label="Status da operação"
            onChange={(e) => setOperationStatus(e.target.value)}
          >
            <MUI.MenuItem value={'pendente'}>Pendente</MUI.MenuItem>
            <MUI.MenuItem value={'em_andamento'}>Em andamento</MUI.MenuItem>
            <MUI.MenuItem value={'finalizado'}>Finalizada</MUI.MenuItem>
            <MUI.MenuItem value={'operacao_parada'}>Operação parada</MUI.MenuItem>
          </MUI.Select>
        </MUI.FormControl>
      )}

      {filteredBy === 'priority' && (
        <MUI.FormControl style={{ 
          marginBottom: '10px',
        }}>
          <MUI.InputLabel id="operation-priority">Prioridade</MUI.InputLabel>
          <MUI.Select
            labelId="operation-priority"
            value={operationPriority}
            label="Prioridade"
            onChange={(e) => setOperationPriority(e.target.value)}
          >
            <MUI.MenuItem value={'baixa'}>Baixa</MUI.MenuItem>
            <MUI.MenuItem value={'media'}>Média</MUI.MenuItem>
            <MUI.MenuItem value={'alta'}>Alta</MUI.MenuItem>
          </MUI.Select>
        </MUI.FormControl>
      )}

      <MUI.FormControl style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <MUI.Button
          size='small'
          variant="outlined"
          onClick={handleDeleteFilters}
          style={{
            width: 'calc(50% - 5px)',
            marginRight: '5px',
          }}
        >
          Remover filtros
        </MUI.Button>

        <MUI.Button
          size='small'
          variant="outlined"
          onClick={handleSubmitFilters}
          style={{
            width: 'calc(50% - 5px)',
            marginLeft: '5px',
          }}
        >
          Aplicar filtros
        </MUI.Button>
      </MUI.FormControl>
    </>
  )
}
