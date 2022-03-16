import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PageNotFound from './Pages/PageNotFound';

import ViewProvider from './Contexts/ViewContext';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' exact element={<ViewProvider><Home /></ViewProvider>} />
          <Route path='/home' element={<ViewProvider><Home /></ViewProvider>} />

          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Register />} />

          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App
