import React, { useState, useEffect } from 'react'
import * as S from './style'
import * as B from 'react-bootstrap'
import * as MUI from '@mui/material/'
import * as I from 'react-icons/fi'

import { Markup } from 'interweave';
import { DataConverter, ReturnImpactedUsers, ReturnPriority, ReturnStatus } from '../../../../Services/Requests'
import { collection, deleteDoc, doc, getDocs, query, Timestamp, updateDoc, where } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { useView } from '../../../../Contexts/ViewContext'

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditRequestModal = (props) => {

  const { updateRequests } = useView()

  const [operationStatus, setOperationStatus] = useState('');
  const [activeUpdateStatus, setActiveUpdateStatus] = useState(true);
  const [currentDocId, setCurrentDocId] = useState('');

  const receivedData = props.data

  const createdAt = DataConverter(receivedData?.created_at)
  const updatedAt = DataConverter(receivedData?.update_at)

  const status = ReturnStatus(receivedData?.status)
  const priority = ReturnPriority(receivedData?.priority)
  const impactedUsers = ReturnImpactedUsers(receivedData?.impacted_users)

  useEffect(() => {
    setOperationStatus(receivedData?.status ? receivedData?.status : '')
    getDocumentId()
  }, [receivedData])

  const handleChangeStatus = (e) => {
    setOperationStatus(e.target.value)

    if (e.target.value !== receivedData?.status) {
      setActiveUpdateStatus(false)
      return
    }
    setActiveUpdateStatus(true)
  }

  const getDocumentId = async () => {
    if (!receivedData) return

    const q = query(collection(db, "requests"), where("id", "==", receivedData.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setCurrentDocId(doc.id)
    });
  }

  const handleUpdateRequest = async () => {
    await updateDoc(doc(db, "requests", currentDocId), {
      status: operationStatus,
      update_at: Timestamp.fromDate(new Date())
    })
    .then(() => {
      setAlertOpen({ state: true, type: 'success' })
      updateRequests()
      props.onHide();
    })
    .catch((error) => {
      setAlertOpen({ state: true, type: 'error' })
      console.log('Falha ao realizar requisição, erro:', error)
    });
  }

  const handleDeleteRequest = async () => {
    await deleteDoc(doc(db, "requests", currentDocId))
    .then(() => {
      setAlertOpen({ state: true, type: 'success' })
      updateRequests()
      props.onHide();
    })
    .catch((error) => {
      setAlertOpen({ state: true, type: 'error' })
      console.log('Falha ao realizar requisição, erro:', error)
    });
  }

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

  // ----------------------------------------------- ABRIR DOCUMENTO ARMAZENADO

  const handleGoToIndexedFile = () => {
    window.open(receivedData.file, '_blank')
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
            <I.FiInfo /> Detalhes da solicitação
          </S.ModalHeader>

          <S.ModalHeaderInfos>
            <S.ModaInfo>
              <b>Solicitação criada em:</b> {createdAt}
            </S.ModaInfo>
            {updatedAt !== '' && (
              <S.ModaInfo>
                <b>Última edição:</b> {updatedAt}
              </S.ModaInfo>
            )}
          </S.ModalHeaderInfos>

          <MUI.Button
            size='small'
            variant="outlined"
            onClick={handleDeleteRequest}
            style={{
              marginLeft: '15px',
            }}
          >
            Excluir solicitação
          </MUI.Button>
        </B.Modal.Header>

        <B.Modal.Body>
          <S.ModalBody>

            <S.ModalLeftSide>
              <S.ModalInfo>
                <S.ModalInfoTitle>Título da solicitação</S.ModalInfoTitle>
                <S.ModalInfoContent>{receivedData?.title}</S.ModalInfoContent>
              </S.ModalInfo>
              <S.ModalInfo>
                <S.ModalInfoTitle>Descrição</S.ModalInfoTitle>
                <S.ModalMarkup>
                  <Markup content={receivedData?.description} />
                </S.ModalMarkup>
              </S.ModalInfo>
              <S.ModalInfo>
                <S.ModalInfoTitle>Produto ou serviço afetado</S.ModalInfoTitle>
                <S.ModalInfoContent>{receivedData?.product}</S.ModalInfoContent>
              </S.ModalInfo>
              <S.ModalInfo>
                <S.ModalInfoTitle>Descrição do problema</S.ModalInfoTitle>
                <S.ModalInfoContent>{receivedData?.problem}</S.ModalInfoContent>
              </S.ModalInfo>
            </S.ModalLeftSide>

            <S.ModalRightSide>
              <S.ModalInfo>
                <S.ModalInfoTitle>Status</S.ModalInfoTitle>
                <S.ModalInfoContentStatus>{status}</S.ModalInfoContentStatus>
              </S.ModalInfo>
              <S.ModalInfo>
                <S.ModalInfoTitle>Prioridade</S.ModalInfoTitle>
                <S.ModalInfoContent>{priority}</S.ModalInfoContent>
              </S.ModalInfo>
              <S.ModalInfo>
                <S.ModalInfoTitle>Usuários impactados</S.ModalInfoTitle>
                <S.ModalInfoContent>{impactedUsers}</S.ModalInfoContent>
              </S.ModalInfo>
              <S.ModalInfo>
                <S.ModalInfoTitle>Arquivo anexado</S.ModalInfoTitle>
                <button onClick={handleGoToIndexedFile}>
                  Acessar documento
                </button>
              </S.ModalInfo>
              
              <S.ModalLabelIcons>
                <S.ModalLabelIconsTitle>
                  Legenda de ícones
                </S.ModalLabelIconsTitle>
                <S.LabelIcon><I.FiBox />Produto ou serviço afetado</S.LabelIcon>
                <S.LabelIcon><I.FiActivity />Status</S.LabelIcon>
                <S.LabelIcon><I.FiStar />Prioridade</S.LabelIcon>
                <S.LabelIcon><I.FiUsers />Usuários impactados</S.LabelIcon>
              </S.ModalLabelIcons>
            </S.ModalRightSide>

          </S.ModalBody>
        </B.Modal.Body>
        
        <B.Modal.Footer>
          <MUI.FormControl style={{
            width: '200px',
            margin: '0 15px auto 0',
          }}>
            <MUI.InputLabel id="operation-status">Status da operação</MUI.InputLabel>
            <MUI.Select
              labelId="operation-status"
              value={operationStatus}
              label="Status da operação"
              onChange={handleChangeStatus}
              size='small'
            >
              <MUI.MenuItem value={'pendente'}>Pendente</MUI.MenuItem>
              <MUI.MenuItem value={'em_andamento'}>Em andamento</MUI.MenuItem>
              <MUI.MenuItem value={'finalizado'}>Finalizada</MUI.MenuItem>
              <MUI.MenuItem value={'operacao_parada'}>Operação parada</MUI.MenuItem>
            </MUI.Select>
          </MUI.FormControl>

          <MUI.Button
            disabled={activeUpdateStatus}
            variant="contained"
            onClick={handleUpdateRequest}
            style={{
              marginRight: '5px',
            }}
          >
            Atualizar status
          </MUI.Button>
        </B.Modal.Footer>
      </B.Modal>

      <MUI.Snackbar open={alertOpen.state} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertOpen.type} sx={{ width: '100%' }}>
          {alertOpen.type === 'success' ? (
            'Ação realizada com sucesso!'
          ) : (
            'Erro na solicitação'
          )}
        </Alert>
      </MUI.Snackbar>
    </>
  );
}

export default EditRequestModal