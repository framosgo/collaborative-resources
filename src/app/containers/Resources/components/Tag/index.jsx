import React from 'react'

import styles from './styles'

const Tag = ({ tag, readOnly, disabled }) => {
  const backgroundColor = disabled ? '#99AAB3' : tag.color
  const close = !readOnly && (
    <div className={styles.close} style={{ backgroundColor }}>x</div>
  )

  return (
    <div className={styles.tag}>
      <div className={styles.arrowLeft}>
        <div className={styles.box} style={{ backgroundColor }} />
      </div>
      <div className={styles.tagName} style={{ backgroundColor }}>
        <span>{tag.name}</span>
        {close}
      </div>
    </div>
  )
}

export default Tag
