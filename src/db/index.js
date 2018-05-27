import { connect } from 'rethinkdb'

import { host, port } from './config'
import { checkDatabase } from './setup'

let connection = null

export const setuptDatabase = () => (
  connect({ host, port })
    .then(conn => {
      console.info('Connecting to database ...!')
      connection = conn
    })
    .then(() => {
      console.info('Setting up database ...')
      return checkDatabase(connection)
    })
    .then(result => {
      console.log('Setting up sockets ...')
      // TODO
    })
    .catch(error => {
      console.error('RethinkDB', new Error(error))
    })
)
