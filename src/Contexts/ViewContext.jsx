import React, { createContext, useEffect, useState } from "react";

import AllResquests from "../Components/Home/HomeView/Views/AllRequests";
import MyRequests from "../Components/Home/HomeView/Views/MyRequests";

export const ViewContext = createContext();

const ViewProvider = ({ children }) => {

  const [modalShow, setModalShow] = React.useState(false);

  const [view, setView] = useState('')
  const [viewComponent, setViewComponent] = useState(<AllResquests />)

  const mountViewComponent = () => {
    switch (view) {
      case 'all_requests':
        setViewComponent(<AllResquests />)
        break;
      case 'my_requests':
        setViewComponent(<MyRequests />)
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    mountViewComponent()
  }, [view])

  const showModal = (value) => {setModalShow(value)}

  return (
    <ViewContext.Provider
      value={{
        viewComponent,
        setView,
        showModal,
        modalShow,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export default ViewProvider;
