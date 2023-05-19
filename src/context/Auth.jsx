import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode";

import axios from '../axios'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = window.localStorage.getItem('token')
  const [user, setUser] = useState(token ? { token, nome: jwt_decode(token)?.nome } : null);

  useEffect(() => {
    if (token) setUser({ token, nome: jwt_decode(token)?.nome })
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const login = async (email, password) => {
    try {
      const response = await axios.post("/login/", {
        username: email,
        password,
      });
      window.localStorage.setItem('token', response?.data?.access)
      setUser({ token: response?.data?.access, nome: jwt_decode(response?.data?.access)?.nome })
      return { error: false }
    } catch (err) {
      console.log(err)
      if (!err?.response) {
        return { error: "Sem resposta do server" };
      } else if (err.response?.status === 400) {
        return { error: "Faltando email ou senha" };
      } else if (err.response?.status === 401) {
        return { error: "Não autorizado" };
      } else {
        return { error: "Falha no login" };
      }
    }
  };

  const logout = () => {
    window.localStorage.removeItem('token')
    setUser(null)
  };

  const authenticatedRoutes = [
    '/',
    '/instrumento/'
  ]

  useEffect(() => {
    if (!user && authenticatedRoutes.some(route => window.location.pathname.startsWith(route))) navigate('/login')
  }, [user])

  return { user, login, logout }
}

export default AuthProvider