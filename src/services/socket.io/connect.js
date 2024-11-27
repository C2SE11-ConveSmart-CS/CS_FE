import io from 'socket.io-client'
import { baseURL } from '../../utils/axios'

let session

const createNewIO = ({userId}) => {
  // session = io(baseURL, {
  //   query: {
  //     userId,
  //   },
  // })
  
  // console.log(io('https://4790-2402-800-6371-fcd9-693e-89a4-9ada-d446.ngrok-free.app', {port: 5001}))
}

export { session, createNewIO }
