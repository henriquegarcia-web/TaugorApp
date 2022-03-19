import React, { useState, useRef } from 'react'
import * as S from './style'
import * as B from 'react-bootstrap'
import * as MUI from '@mui/material/'
import * as I from 'react-icons/fi'

import MuiAlert from '@mui/material/Alert';
import ReactQuill from 'react-quill';

import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../../firebase'
import { useAuth } from '../../../Contexts/AuthContext'
import { AuthErrorMessage } from '../../../Utils/globalstyles'
import { useView } from '../../../Contexts/ViewContext'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RequestModal = (props) => {

  const { getUser, setError, errorMessage } = useAuth()
  const { updateRequests, globalRequestList } = useView()

  const [description, setDescription] = useState('');
  const [operationStatus, setOperationStatus] = useState('');
  const [operationPriority, setOperationPriority] = useState('');
  const [impactedUsers, setImpactedUsers] = useState('');
  const requestTitleRef = useRef()
  const requestProductRef = useRef()
  const requestProblemRef = useRef()
  const [indexedFileInput, setIndexedFileInput] = useState('');
  const [fileName, setFileName] = useState('Selecione um arquivo .txt ou .pdf');

  // ----------------------------------------------- ALERTA

  const [alertOpen, setAlertOpen] = useState({
    state: false,
    type: 'success'
  });

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen({ state: false, type: 'success' });
  };

  // ----------------------------------------------- FUNCIONAMENTO DO INPUT FILE

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      setError('Nenhum arquivo adicionado')
    } else {
      setFileName(file.name)
      const filesStorageRef = ref(storage, `files/${file.name}`);

      await uploadBytes(filesStorageRef, file);
      setIndexedFileInput(await getDownloadURL(filesStorageRef));
    }
  }

  // ----------------------------------------------- VALIDAÇÃO DOS CAMPOS DO FORMULÁRIO

  const validationForm = () => {
    if (
      requestTitleRef.current.value === '' ||
      description === '' ||
      requestProductRef.current.value === '' ||
      operationStatus === '' ||
      operationPriority === '' ||
      requestProblemRef.current.value === '' ||
      impactedUsers === ''
    ) {
      setError('Preencha todos os campos')
      return false
    }
    return true
  }

  // ----------------------------------------------- SUBMIT e CRIAÇÃO DE DOC NO FIREBASE
  
  const clearInputs = () => {
    setDescription('')
    setOperationStatus('')
    setOperationPriority('')
    setImpactedUsers('')
    setIndexedFileInput('')
    setFileName('Selecione um arquivo .txt ou .pdf')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!indexedFileInput) setError('Upload de arquivo obrigatório')

    if (validationForm() && indexedFileInput) {

      const currentUser = getUser()
      const requestsLength = globalRequestList.data.length

      await addDoc(collection(db, "requests"), {
        id: requestsLength + 1,
        created_by: {
          user_uid: currentUser.uid,
          user_name: currentUser.displayName
        },
        title: requestTitleRef.current.value,
        description: description,
        product: requestProductRef.current.value,
        status: operationStatus,
        priority: operationPriority,
        problem: requestProblemRef.current.value,
        impacted_users: impactedUsers,
        file: indexedFileInput,
        edit_history: {
          created_at: new Date(),
          update_at: ''
        }
      })
      .then(() => {
        setAlertOpen({ state: true, type: 'success' })
        updateRequests()
        clearInputs()
        props.onHide();
      })
      .catch((error) => {
        setAlertOpen({ state: true, type: 'error' })
        console.log('Falha ao realizar requisição, erro:', error)
      });
    }    
  }

  return (
    <>
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
            inputRef={requestTitleRef}
            error={false}
            label="Título da solicitação" 
            variant="outlined" 
            size="small"
            fullWidth
            style={{
              marginTop: '10px',
              marginBottom: '20px',
            }}
          />

          <ReactQuill
            value={description}
            onChange={setDescription}
            className='quill-rich-text' 
          />

          <MUI.TextField
            inputRef={requestProductRef}
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
              <MUI.MenuItem value={'pendente'}>Pendente</MUI.MenuItem>
              <MUI.MenuItem value={'em_andamento'}>Em andamento</MUI.MenuItem>
              <MUI.MenuItem value={'finalizado'}>Finalizada</MUI.MenuItem>
              <MUI.MenuItem value={'operacao_parada'}>Operação parada</MUI.MenuItem>
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
              <MUI.MenuItem value={'baixa'}>Baixa</MUI.MenuItem>
              <MUI.MenuItem value={'media'}>Média</MUI.MenuItem>
              <MUI.MenuItem value={'alta'}>Alta</MUI.MenuItem>
            </MUI.Select>
          </MUI.FormControl>

          <MUI.TextField
            inputRef={requestProblemRef}
            label="Descreva o problema em uma frase" 
            variant="outlined" 
            size="small"
            fullWidth
            style={{
              marginBottom: '15px',
            }}
          />

          <MUI.FormControl style={{ 
            width: 'calc(40% - 7px)',
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
              <MUI.MenuItem value={1}>Apenas 1</MUI.MenuItem>
              <MUI.MenuItem value={2}>1 a 10 usuários</MUI.MenuItem>
              <MUI.MenuItem value={3}>11 a 30 usuários</MUI.MenuItem>
              <MUI.MenuItem value={4}>31 a 50 usuários</MUI.MenuItem>
              <MUI.MenuItem value={5}>Mais de 50 usuários</MUI.MenuItem>
            </MUI.Select>
          </MUI.FormControl>

          <input
            accept=".txt, .pdf"
            style={{ 
              display: 'none',
            }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={handleFileInputChange}
          />
          <label 
            htmlFor="raised-button-file"
            style={{
              width: 'calc(60% - 7px)',
              borderRadius: '5px',
              marginLeft: '7px',
              padding: '7px',
              border: '1px solid rgba(0, 0, 0, 0.25)',
            }}
            >
            <MUI.Button 
              variant="raised" 
              component="span"
              style={{
                width: '100px',
                border: '1px solid rgba(0, 0, 0, 0.25)',
              }}
            >
              Upload
            </MUI.Button>

            <MUI.TextField
              label={fileName}
              variant="outlined" 
              size="small"
              style={{
                width: 'calc(100% - 107px)',
                marginLeft: '7px',
              }}
              disabled
            />
          </label>

          <AuthErrorMessage margin='0'>{errorMessage}</AuthErrorMessage>
        </B.Modal.Body>
        
        <B.Modal.Footer>
          <MUI.Button 
            variant="outlined"
            onClick={() => {
              clearInputs()
              props.onHide()
            }}
          >
            Cancelar
          </MUI.Button>
          <MUI.Button 
            variant="contained"
            onClick={handleSubmit}
            style={{
              marginLeft: '10px',
            }}
          >
            Criar
          </MUI.Button>
        </B.Modal.Footer>
      </B.Modal>

      <MUI.Snackbar open={alertOpen.state} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertOpen.type} sx={{ width: '100%' }}>
          Solicitação realizada com sucesso!
        </Alert>
      </MUI.Snackbar>
    </>
  );
}

export default RequestModal