import { getAllConversations } from '../services/api/conversation'
import { session } from '../services/socket.io/connect'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const useConversation = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])
  const { authUser } = useContext(AuthContext)

  const getData = async () => {
    setLoading(true)
    try {
      const data = await getAllConversations()
      setConversations(data.chats)
    } catch (err) {}
    setLoading(false)
  }

  useEffect(() => {
    getData()
    setInterval(async () => {
      getData()
    }, 15000)
  }, [])

  // useEffect(() => {
  //   if (authUser) {
  //     if (conversations.length === 0) {
  //       const loadConversations = async () => {
  //         try {
  //           setLoading(true)
  //           const data = await getAllConversations()
  //           setConversations(data.chats)
  //         } catch (err) {
  //         } finally {
  //           setLoading(false)
  //         }
  //       }
  //       loadConversations()
  //     }
  //     session?.on('newConversation', conversation => {
  //       setConversations([...conversations, conversation])
  //     })
  //   }
  // }, [authUser, conversations.length])

  return { loading, conversations }
}

export default useConversation
