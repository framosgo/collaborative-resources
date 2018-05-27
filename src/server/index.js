import http from 'http'
import { setuptDatabase } from '../db'

const server = http.createServer()

const port = process.env.port || 3000
const hostname = '0.0.0.0'

const start = () => {
  setuptDatabase()
    .then(() => {
      console.info('Setting up Socket.io ...')
    })
    .then(() => {
      console.info('Starting server ...')
      server.listen(port, hostname, () => {
        console.log('Magic things are happening on port ' + port)
      })
    })
    .catch(e => {
      console.error(`Server Error ${e}...`)
    })
}

start()
