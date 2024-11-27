import customFetch from '../../utils/axios'

export const getAllConversations = async () => {
  try {
    const instaRes = await customFetch.get('/insta/conversations')
    const messengerRes = await customFetch.get('/chats/conversations')
    
    return { chats: [...instaRes.data?.chats, ...messengerRes.data?.chats]}
  } catch (err) {
    throw err.response.data.msg
  }
}

export const getMessagesFromMessenger = async conversationId => {
  try {
    const resp = await customFetch.get(`/chats/messages/${conversationId}`)
    return resp?.data
  } catch (err) {
    throw err.response.data.msg
  }
}

export const getMessagesFromInsta = async conversationId => {
  try {
    const resp = await customFetch.get(`/insta/messages/${conversationId}`)
    return resp?.data
  } catch (err) {
    throw err.response.data.msg
  }
}

