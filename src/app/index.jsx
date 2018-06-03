import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import io from 'socket.io-client'

import Login from './containers/Login'
import Resources from './containers/Resources'

import './styles'

class App extends Component {
  state = {
    username: ''
  }

  componentDidMount () {
    // this.socket = io({path: '/socket.io'})
  }

  login = username => {
    this.setState({ username })
  }

  render () {
    const content = this.state.username ? <Resources /> : <Login onLogin={this.login} />
    return content
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
