import React from 'react'
import GlobalStyle from './Utils/globalstyles';

import Routes from './Routes';

import ViewProvider from './Contexts/ViewContext';

function App() {
  return (
    <ViewProvider>
      <GlobalStyle />
      <Routes />
    </ViewProvider>
  );
}

export default App
