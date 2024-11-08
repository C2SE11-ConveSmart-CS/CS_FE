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
    if (selectedConversation) {
      console.log(selectedConversation)
      const data = await getMessagesHistory(selectedConversation._id)
      setMessages([...data.messages])
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [selectedConversation])

  const sendMessage = async message => {
    if (!message.text.trim()) return

    try {
      const response = await fetch(
        `http://localhost:5001/api/chats/send_message/${message.senderId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: message.text }),
        }
      )

      if (response.ok) {
        console.log('Tin nhắn đã được gửi thành công')
        const newMessage = {
          senderId: message.senderId,
          content: message.text,
          id: new Date().getTime(),
        }
        setMessages(prevMessages => [...prevMessages, newMessage])
      } else {
        console.error('Lỗi khi gửi tin nhắn')
      }
    } catch (error) {
      console.error('Lỗi:', error)
    }
  }

  return (
    <ChatContext.Provider
      value={{
        session,
        selectedConversation,
        setSelectedConversation,
        messages,
        setMessages,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
