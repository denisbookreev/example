import styles from '../Personal.module.scss'

import React from 'react'

import { Advert300x250 } from './Advert300x250'
import { Advert300x600 } from './Advert300x600'
import { Bio } from './Bio'
import { RecentSupporters } from './RecentSupporters'

export const RightAside = () => {
  return (
    <aside className={[styles.leftAside, styles.displayMd, styles.displayLg].join(' ')}>
      <Bio className={styles.displayMd} />
      <Advert300x600 />
      <Advert300x250 
        className={styles.displayMd} 
        blockId='R-A-2104438-11' 
      />
      <RecentSupporters />
      <Advert300x250 
        className={styles.displayMd} 
        blockId='R-A-2104438-10' 
      />
    </aside>
  )
}