import React, {Component} from 'react'

import Tag from '../../../Tag'

import styles from './styles'

class SelectableTag extends Component {
  state = {
    isToogled: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToogled: !prevState.isToogled
    }))
  }

  render () {
    const disabled = !this.state.isToogled
    return (
      <div className={styles.selectableTag} onClick={this.handleClick}>
        <Tag disabled={disabled} {...this.props} />
      </div>
    )
  }
}

export default SelectableTag
