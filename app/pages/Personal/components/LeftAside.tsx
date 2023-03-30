import styles from '../Personal.module.scss'

import React from 'react'

import { Advert300x250 } from './Advert300x250'
import { Bio } from './Bio'
import { CommunityImpact } from './CommunityImpact'

export const LeftAside = () => {

  return (
    <aside className={[styles.leftAside, styles.displayLg].join(' ')}>
      <Bio />
      <Advert300x250 blockId='R-A-2104438-2' />
      <CommunityImpact />
      <Advert300x250 blockId='R-A-2104438-5' />
    </aside>
  )
}