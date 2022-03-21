import React, { createContext, useContext, useEffect, useState } from "react";

import { GetRequestsList, GetUser } from "../firebase";

export const ViewContext = createContext();

export function useView() {
  return useContext(ViewContext);
}

const ViewProvider = ({ children }) => {

  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  const [modalEditShow, setModalEditShow] = React.useState(false);

  const [view, setView] = useState('all_requests')
  const [globalRequestList, setGlobalRequestList] = useState({
    data: [],
    progress: {}
  })

  const getAllRequestsList = async () => {
    let allRequestsNum
    let finalizedRequestsNum = 0

    const allRequests = await GetRequestsList()
    allRequestsNum = allRequests.length

    Array.from(allRequests).map(({ status }) => {
      if (status === 'finalizado') {
        finalizedRequestsNum += 1
      }
    })

    setGlobalRequestList({
      data: allRequests,
      progress: {
        all: allRequestsNum,
        finished: finalizedRequestsNum,
        percentage: (finalizedRequestsNum/allRequestsNum * 100).toString()
      }
    })
  }

  const getMyRequestsList = async () => {
    let myRequestsNum = 0
    let finalizedRequestsNum = 0

    const allRequests = await GetRequestsList()
    let myRequests = []

    Array.from(allRequests).map((request) => {
      if (request.created_by.user_uid === GetUser().uid) {
        myRequestsNum += 1
        myRequests.push(request)

        if (request.status === 'finalizado') {
          finalizedRequestsNum += 1
        }
      }
    })

    setGlobalRequestList({
      data: myRequests,
      progress: {
        all: myRequestsNum,
        finished: finalizedRequestsNum,
        percentage: (finalizedRequestsNum/myRequestsNum * 100).toString()
      }
    })
  }

  const getGlobalRequests = async () => {
    if (view === 'all_requests') {
      await getAllRequestsList()
    } else {
      await getMyRequestsList()
    }
  }

  useEffect(() => {
    getGlobalRequests()
  }, [view])

  const updateRequests = () => {
    getGlobalRequests()
  }

  const showModal = (type, value, data) => {
    switch (type) {
      case 'create':
        setModalCreateShow(value)
        break;
      case 'edit':
        setModalEditShow({ value, data })
        break;

      default: break;
    }
  }

  return (
    <ViewContext.Provider
      value={{
        view,
        setView,
        showModal,
        modalCreateShow,
        modalEditShow,
        updateRequests,
        globalRequestList,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export default ViewProvider;
