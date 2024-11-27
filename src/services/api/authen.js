import customFetch from '../../utils/axios'

export const signUp = async ({ username, email, password, contactNumber }) => {
  try {
    const response = await customFetch.post('/auth/signup', {
      username,
      email,
      password,
      contactNumber,
    })
    return response.data
  } catch (err) {
    throw err.response.data.msg
  }
}

export const signIn = async ({ email, password }) => {
  try {
    const resp = await customFetch.post('/auth/signin', {
      email,
      password,
    })
    if (resp.status === 200) {
      const { token, userId, username } = resp.data
      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)
      localStorage.setItem('username', username)
      return true
    }
  } catch (err) {
    throw err.response.data.msg
  }
}
