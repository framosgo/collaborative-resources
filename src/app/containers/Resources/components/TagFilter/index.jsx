import React, { Component } from 'react'

import { debounce } from '../../../../../base/utils'
import SelectableTag from './components/SelectableTag'

import styles from './styles'

class TagFilter extends Component {
  state = {
    query: '',
    areVisible: false,
    tagList: []
  }

  componentWillMount () {
    this.filterQuery = debounce(this.filterQuery, 500)
  }

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.filterQuery()
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    }, this.filterQuery)
  }

  setVisibility = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }))
  }

  filterQuery = () => {
    console.log('filtering by tags ...', this.state.query)
  }

  placeholder = 'Filter by tags ...'

  render () {
    let visibilityTitle = 'Show all'
    let tags
    if (this.state.isVisible) {
      visibilityTitle = 'Hide all'
      tags = (
        <div className={styles.tags}>
          {this.props.tags.map(tag => (
            <SelectableTag key={tag.id} tag={tag} readOnly />
          ))}
        </div>
      )
    }

    return (
      <div className={styles.tagFilter}>
        <div className={styles.filter}>
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
        <div className={styles.actions}>
          <span onClick={this.setVisibility}>{visibilityTitle}</span>
          <span>|</span>
          <span>Clear</span>
        </div>
        {tags}
      </div>
    )
  }
}

export default TagFilter
