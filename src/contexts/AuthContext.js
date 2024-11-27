import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(localStorage.getItem('userId'))

  const reloadUser = () => {
    setAuthUser(localStorage.getItem('userId'))
  }

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, reloadUser }}>
      {children}
    </AuthContext.Provider>
  )
}
