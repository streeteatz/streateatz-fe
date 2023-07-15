import { io } from 'socket.io-client'

export const socket = io("http://localhost:3001", {
  withCredentials: true,
  extraHeaders: {
    "street-eat": "street-eat"
  }
})

// https://street-eatz-express.onrender.com