import customFetch from '../../utils/axios'

export const getAllConversations = async () => {
  try {
    const resp = await customFetch.get('/chats/conversations')
    return resp.data
  } catch (err) {
    throw err.response.data.msg
  }
}

export const getMessagesHistory = async conversationId => {
  try {
    const resp = await customFetch.get(`/chats/conversations/${conversationId}`)
    return resp.data
  } catch (err) {
    throw err.response.data.msg
  }
}
