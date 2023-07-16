import { io } from 'socket.io-client'

export const socket = io("https://street-eatz-express.onrender.com", {
  withCredentials: true,
  extraHeaders: {
    "street-eat": "street-eat"
  }
})

////For cypress testing, uncomment below and comment out code above////

// export const socket = io("http://localhost:3001", {
//   withCredentials: true,
//   extraHeaders: {
//     "street-eat": "street-eat"
//   }
// })

