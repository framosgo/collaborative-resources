import { setupDatabase } from './db'
import { setupSocketIO } from './sockets'

const start = () => {
  setupDatabase()
    .then(connection => {
      setupSocketIO(connection)
    })
    .catch(e => {
      console.error(`Server Error ${e}...`)
    })
}

start()
