import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { debounce } from '../../../base/utils'
import styles from './styles.css'
import Neko from './components/Neko'

export class Login extends Component {
  state = {
    username: ''
  }

  componentWillMount () {
    this.updateURL = debounce(this.updateURL, 500)
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
    this.updateURL()
  }

  updateURL = () => {
    // TODO call an action
  }

  login = () => {
    this.props.onLogin(this.state.username)
  }

  onKeyPress = e => {
    if (e.keyCode === 13) {
      this.login()
    }
  }

  render () {
    return (
      <div className={styles.loginContainer}>
        <Neko />
        <div>
          <input
            className={styles.loginInput}
            value={this.state.username}
            onChange={this.handleChange}
            onKeyUp={this.onKeyPress}
          />
          <button
            className={styles.loginButton}
            onClick={this.login}>
            Ir
          </button>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  onLogin: PropTypes.func
}

export default Login
