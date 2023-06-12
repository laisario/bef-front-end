import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

import axios from '../axios'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = window.localStorage.getItem('token')
  const [user, setUser] = useState(token ? { token } : null);

  useEffect(() => {
    if (token) setUser({ token })
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
      setUser({ token: response?.data?.access })
      return { error: false }
    } catch (err) {
      console.log(err)
      if (!err?.response) {
        return { error: "Sem resposta do server" };
      } else if (err.response?.status === 400) {
        return { error: "Solicitação inválida. O email e/ou senha não foram fornecidos corretamente. Verifique os dados e tente novamente" };
      } else if (err.response?.status === 401) {
        return { error: "Email ou senha incorretos. Por favor, verifique suas credenciais e tente novamente." };
      } else if (err.response?.status === 500) {
        return { error: "Ocorreu um erro inesperado no servidor." };
      } else {
        return { error: "Falha no login" };
      }
    }
  };

  const logout = () => {
    window.localStorage.removeItem('token')
    setUser(null)
  };
  
  useEffect(() => {
    const authenticatedRoutes = [
      '/',
      '/instrumento/'
    ]
    if (!user && authenticatedRoutes.some(route => window.location.pathname.startsWith(route))) navigate('/login')
  }, [user])

  return { user, login, logout }
}

export default AuthProvider