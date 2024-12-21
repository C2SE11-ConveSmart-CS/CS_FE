import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(localStorage.getItem('userId'))
  const [roleUser, setRoleUser] = useState(localStorage.getItem('role'))

  const reloadUser = () => {
    setAuthUser(localStorage.getItem('userId'))
    setRoleUser(localStorage.getItem('role'))
  }

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, reloadUser, roleUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
