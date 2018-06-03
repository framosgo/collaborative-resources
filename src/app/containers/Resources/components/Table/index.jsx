import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Row from './components/Row'

import styles from './styles'

class Table extends Component {
  render () {
    const resourcesRows = this.props.resources.map(resource => (
      <Row key={resource.id} resource={resource} />
    ))

    return (
      <div className={styles.table}>
        <div className={styles.header}>
          <div>MSISDN</div>
          <div>DNI</div>
          <div>Tags</div>
        </div>
        <div className={styles.content}>
          {resourcesRows}
        </div>
      </div>
    )
  }
}

Table.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  }))
}

export default Table
