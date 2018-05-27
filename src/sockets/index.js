import io from 'socket.io'

import { connectionEvents } from './events'
import { PORT } from './config'

export const setupSocketIO = conectionDB => {
  console.info('Setting up Socket.io ...')
  const server = io.listen(PORT)

  connectionEvents(conectionDB)(server)
}
