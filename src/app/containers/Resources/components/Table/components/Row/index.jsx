import React from 'react'

import Tag from '../../../Tag'

import styles from './styles'

const Row = ({resource}) => {
  const resourcesTags = resource.tags.map(tag => (
    <Tag key={tag.id} tag={tag} />
  ))

  return (
    <div className={styles.row}>
      <div>
        { resource.msisdn }
      </div>
      <div>
        { resource.dni }
      </div>
      <div className={styles.tags}>
        { resourcesTags }
        <div>+</div>
      </div>
    </div>
  )
}

export default Row
