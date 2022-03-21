import React, { createContext, useContext, useEffect, useState } from "react";

import { GetRequestsList, GetUser } from "../firebase";
import { DataFilter } from "../Services/Requests";

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

  const [searchText, setSearchText] = useState('')

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

    const filteredRequests = DataFilter(allRequests, searchText)

    setGlobalRequestList({
      data: filteredRequests,
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

    const filteredRequests = DataFilter(allRequests, searchText)

    setGlobalRequestList({
      data: filteredRequests,
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
  }, [view, searchText])

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

  const handleSearchBox = (text) => {
    setSearchText(text)
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
        handleSearchBox,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export default ViewProvider;
