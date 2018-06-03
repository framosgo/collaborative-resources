import React, { Component } from 'react'

import TagFilter from './components/TagFilter'
import Searcher from './components/Searcher'
import Table from './components/Table'

import resources from './resources.json'
import tags from './tags.json'

import styles from './styles'

class Resources extends Component {
  render () {
    return (
      <div className={styles.resourcesContainer}>
        <div className={styles.filters}>
          <TagFilter tags={tags} />
          <Searcher />
        </div>
        <Table resources={resources} />
      </div>
    )
  }
}

export default Resources
