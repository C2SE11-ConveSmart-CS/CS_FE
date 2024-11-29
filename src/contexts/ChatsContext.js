import { AuthContext } from './AuthContext'
import {
  createNewIO,
  session as wsSession,
} from '../services/socket.io/connect'
import { createContext, useState, useContext, useEffect } from 'react'
import {
  getMessagesFromInsta,
  getMessagesFromMessenger,
} from '../services/api/conversation'
import { baseURL } from '../utils/axios'

export const ChatContext = createContext()

export const ChatContextProvider = ({ children }) => {
  const [session, setSession] = useState(null)
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
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
      const { messages } =
        selectedConversation.type === 'instagram'
          ? await getMessagesFromInsta(selectedConversation._id)
          : await getMessagesFromMessenger(selectedConversation._id)

      console.log('Fetch>>>', messages)
      setMessages([...messages.reverse()])
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [selectedConversation])

  const sendMessage = async message => {
    if (!message.text.trim()) return

    try {
      const response = await fetch(
        `${baseURL}/api/chats/send_message/${message.senderId}`,
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
        selectedCustomer,
        setSelectedCustomer,
        sendMessage,
        fetchMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
