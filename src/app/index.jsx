import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import io from 'socket.io-client'

import { Provider } from '../base/context'
import { store, createStore } from '../base/store'
import Home from './containers/Home'
import Resources from './containers/Resources'

import './styles'

class App extends Component {
  state = store

  isLogged = () => (
    this.state.Home.username.length > 0
  )

  componentDidMount () {
    // this.socket = io({path: '/socket.io'})
  }

  render () {
    const content = this.isLogged() ? <Resources /> : <Home />
    return (
      <Provider value={createStore(this)}>
        { content }
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
