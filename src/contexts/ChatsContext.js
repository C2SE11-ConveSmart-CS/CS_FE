import { AuthContext } from './AuthContext'
import {
  createNewIO,
  session as wsSession,
} from '../services/socket.io/connect'
import { createContext, useState, useContext, useEffect } from 'react'
import { getMessagesHistory } from '../services/api/conversation'

export const ChatContext = createContext()

export const ChatContextProvider = ({ children }) => {
  const [session, setSession] = useState(null)
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const { authUser } = useContext(AuthContext)

  useEffect(() => {
    if (authUser) {
      createNewIO({ userId: authUser })
      setSession(wsSession)
      return () => wsSession?.close()
    } else {
      if (session) {
        session.close()
        setSession(null)
      }
    }
  }, [authUser])

  const fetchMessages = async () => {
    console.log(selectedConversation)
    const data = await getMessagesHistory(selectedConversation._id)
    setMessages([...data.messages])
  }

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages()
    }
  }, [selectedConversation])

  return (
    <ChatContext.Provider
      value={{
        session,
        selectedConversation,
        setSelectedConversation,
        messages,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
