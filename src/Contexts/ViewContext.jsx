import React, { createContext, useContext, useEffect, useState } from "react";

import { GetRequestsList, GetUser } from "../firebase";

export const ViewContext = createContext();

export function useView() {
  return useContext(ViewContext);
}

const ViewProvider = ({ children }) => {

  const [modalShow, setModalShow] = React.useState(false);

  const [view, setView] = useState('all_requests')

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

    const progress = ({
      all: allRequestsNum,
      finished: finalizedRequestsNum,
      percentage: 100/finalizedRequestsNum
    })

    return ({ progress, allRequests })
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

    const progress = ({
      all: myRequestsNum,
      finished: finalizedRequestsNum,
      percentage: 100/finalizedRequestsNum
    })

    return ({ progress, allRequests: myRequests })
  }

  const showModal = (value) => {setModalShow(value)}

  return (
    <ViewContext.Provider
      value={{
        view,
        setView,
        showModal,
        modalShow,
        getAllRequestsList,
        getMyRequestsList,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export default ViewProvider;
