import socketIO from 'socket.io'
import http from 'http'
import { PORT } from './config'

import { connectionEvents } from './events'

export const setupSocketIO = conectionDB => {
  console.info('Setting up Socket.io ...')
  const io = socketIO(http.createServer(), {
    path: '/socket.io'
  })

  io.listen(PORT)

  connectionEvents(conectionDB)(io)
}
