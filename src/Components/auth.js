import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  })

  const login = details => {
    setUser({
      name: details.name,
      email: details.email,
    })
  }

  const logout = () => {
    setUser({
      name: '',
      email: '',
  })
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

