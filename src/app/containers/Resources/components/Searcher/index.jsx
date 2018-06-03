import React, { Component } from 'react'

import { debounce } from '../../../../../base/utils'

import styles from './styles'

class Searcher extends Component {
  state = {
    query: ''
  }

  componentWillMount () {
    this.searchQuery = debounce(this.searchQuery, 500)
  }

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.searchQuery()
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    }, this.searchQuery)
  }

  searchQuery = () => {
    console.log('searching ...', this.state.query)
  }

  placeholder = 'Search ...'
  render () {
    return (
      <div className={styles.searcher}>
        <div className={styles.icon} />
        <input
          type='search'
          className={styles.loginInput}
          value={this.state.query}
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
          placeholder={this.placeholder}
        />
      </div>
    )
  }
}

export default Searcher
