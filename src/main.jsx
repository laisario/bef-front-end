import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route, 
  Routes,
} from "react-router-dom";

import AuthProvider from './context/Auth'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import InstrumentDetails from './pages/IntrumentDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route Component={Dashboard} path='/' />
          <Route Component={Login} path='/login' />
          <Route Component={Register} path='/register' />
          <Route Component={InstrumentDetails} path='/instrumento/:id' />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
