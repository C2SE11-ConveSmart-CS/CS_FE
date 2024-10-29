import io from 'socket.io-client'
import { baseURL } from '../../utils/axios'

let session

const createNewIO = ({ userId }) => {
  session = io(baseURL, {
    query: {
      userId,
    },
  })
}

export { session, createNewIO }
