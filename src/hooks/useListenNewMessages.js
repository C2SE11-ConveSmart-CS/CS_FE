import { useContext, useEffect } from 'react'
import { ChatContext } from '../contexts/ChatsContext'
import notificationSound from '../assets/sounds/notification.mp3'

const useListenMessages = () => {
  const { session, selectedConversation, messages, setMessages } =
    useContext(ChatContext)

  useEffect(() => {
    session?.on('newMessage', newMessage => {
      const sound = new Audio(notificationSound)
      sound.play()
      console.log(newMessage)
      if (newMessage.senderId === selectedConversation?.senderId) {
        setMessages([...messages, newMessage])
      }
    })

    return () => session?.off('newMessage')
  }, [session, setMessages, messages, selectedConversation?.senderId])
}

export default useListenMessages
