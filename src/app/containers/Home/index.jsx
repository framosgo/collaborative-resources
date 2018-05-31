import React, { Component } from 'react'

import { connectContext } from '../../../base/context'

import styles from './styles.css'

export class Home extends Component {
  constructor (props) {
    super(props)
    this.URL = 'https://www.peppercarrot.com/extras/html/2016_cat-generator/avatar.php?seed='
    this.updateURL = this.debounce(this.updateURL, 500)

    this.state = {
      username: this.props.Home.username,
      avatar: this.URL + this.props.Home.username
    }
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
    this.updateURL()
  }

  updateURL = () => {
    this.setState(prevState => ({
      avatar: this.URL + prevState.username
    }))
  }

  debounce = (func, wait, immediate) => {
    let timeout
    return (...argmnts) => {
      const context = this
      const args = argmnts
      const later = () => {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  render () {
    return (
      <div className={styles.login}>
        <div>
          <img src={this.state.avatar} />
        </div>
        <div>
          <input
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button onClick={() => this.props.actions.login(this.state.username)}>
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default connectContext(Home)
