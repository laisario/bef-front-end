import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles'

import AuthProvider from './context/Auth'
import Login from './pages/Login'
import Register from './pages/Register'
import InstrumentDetails from './pages/Instrument';
import theme from './theme'
import Instruments from './pages/Instruments';
import Propostas from './pages/Propostas';
import Proposta from './pages/Proposta';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route Component={Instruments} path='/' />
            <Route Component={Login} path='/login' />
            <Route Component={Register} path='/register' />
            <Route Component={InstrumentDetails} path='/instrumento/:id' />
            <Route Component={Propostas} path='/propostas' />
            <Route Component={Proposta} path='/proposta/:id' />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)
