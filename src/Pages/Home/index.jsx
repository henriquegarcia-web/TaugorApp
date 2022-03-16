import React, { useContext } from 'react'
import * as S from './style'
import * as B from 'react-bootstrap'
import * as MUI from '@mui/material/'
import * as I from 'react-icons/fi'

import ReactQuill from 'react-quill';

import HomeView from '../../Components/Home/HomeView'
import Menu from '../../Components/Home/Menu'

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

// ----------------------------------------- MODAL

const RequestModal = (props) => {

  const [operationStatus, setOperationStatus] = React.useState('');
  const [operationPriority, setOperationPriority] = React.useState('');
  const [impactedUsers, setImpactedUsers] = React.useState('');
  
  return (
    <B.Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <B.Modal.Header closeButton>
        <S.ModalHeader>
          <I.FiPlusCircle /> Criar solicitações
        </S.ModalHeader>
      </B.Modal.Header>

      <B.Modal.Body>
        <MUI.TextField
          label="Título da tarefa" 
          variant="outlined" 
          size="small"
          fullWidth
          style={{
            marginTop: '10px',
            marginBottom: '20px',
          }}
        />

        <ReactQuill className='quill-rich-text' />

        <MUI.TextField
          label="Produto ou serviço afetado" 
          variant="outlined" 
          size="small"
          fullWidth
          style={{
            marginTop: '20px',
            marginBottom: '15px',
          }}
        />

        <MUI.FormControl style={{
          width: 'calc(50% - 7px)',
          marginRight: '7px',
          marginBottom: '15px',
        }}>
          <MUI.InputLabel id="operation-status">Status da operação</MUI.InputLabel>
          <MUI.Select
            labelId="operation-status"
            value={operationStatus}
            label="Status da operação"
            onChange={(e) => setOperationStatus(e.target.value)}
          >
            <MUI.MenuItem value={10}>Pendente</MUI.MenuItem>
            <MUI.MenuItem value={20}>Em andamento</MUI.MenuItem>
            <MUI.MenuItem value={30}>Finalizada</MUI.MenuItem>
            <MUI.MenuItem value={40}>Operação parada</MUI.MenuItem>
          </MUI.Select>
        </MUI.FormControl>

        <MUI.FormControl style={{ 
          width: 'calc(50% - 7px)', 
          marginLeft: '7px',
          marginBottom: '15px',
        }}>
          <MUI.InputLabel id="operation-priority">Prioridade</MUI.InputLabel>
          <MUI.Select
            labelId="operation-priority"
            value={operationPriority}
            label="Prioridade"
            onChange={(e) => setOperationPriority(e.target.value)}
          >
            <MUI.MenuItem value={10}>Baixa</MUI.MenuItem>
            <MUI.MenuItem value={20}>Média</MUI.MenuItem>
            <MUI.MenuItem value={30}>Alta</MUI.MenuItem>
          </MUI.Select>
        </MUI.FormControl>

        <MUI.TextField
          label="Faça uma descrição do problema" 
          variant="outlined" 
          size="small"
          fullWidth
          style={{
            marginBottom: '15px',
          }}
        />

        <MUI.FormControl style={{ 
          width: 'calc(50% - 7px)',
          marginRight: '7px',
          marginBottom: '15px',
        }}>
          <MUI.InputLabel id="impacted-users">Usuários impactados</MUI.InputLabel>
          <MUI.Select
            labelId="impacted-users"
            value={impactedUsers}
            label="Usuários impactados"
            onChange={(e) => setImpactedUsers(e.target.value)}
          >
            <MUI.MenuItem value={10}>Apenas 1</MUI.MenuItem>
            <MUI.MenuItem value={20}>1 a 10 usuários</MUI.MenuItem>
            <MUI.MenuItem value={30}>11 a 30 usuários</MUI.MenuItem>
            <MUI.MenuItem value={40}>31 a 50 usuários</MUI.MenuItem>
            <MUI.MenuItem value={50}>Mais de 50 usuários</MUI.MenuItem>
          </MUI.Select>
        </MUI.FormControl>

        <input
          accept="image/*"
          style={{ 
            display: 'none',
          }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label 
          htmlFor="raised-button-file"
          style={{
            width: 'calc(50% - 7px)',
            borderRadius: '5px',
            marginLeft: '7px',
            padding: '7px',
            border: '1px solid rgba(0, 0, 0, 0.25)',
          }}
          >
          <MUI.Button 
            variant="raised" 
            component="span"
            helperText="Please select your currency"
            style={{
              width: '100px',
              border: '1px solid rgba(0, 0, 0, 0.25)',
            }}
          >
            Upload
          </MUI.Button>

          <MUI.TextField
            label="Captura de tela de 2022-03-15 14-29-48.png" 
            variant="outlined" 
            size="small"
            style={{
              width: 'calc(100% - 107px)',
              marginLeft: '7px',
            }}
            disabled
          />
        </label>
      </B.Modal.Body>
      
      <B.Modal.Footer>
        <MUI.Button 
          variant="outlined"
          onClick={props.onHide}
        >
          Cancelar
        </MUI.Button>
        <MUI.Button 
          variant="contained"
          onClick={props.onHide}
          style={{
            marginLeft: '10px',
          }}
        >
          Criar
        </MUI.Button>
      </B.Modal.Footer>
    </B.Modal>
  );
}