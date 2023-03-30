import styles from '../Personal.module.scss'

import React, { useCallback, useState } from 'react'

import { Advert300x250 } from './Advert300x250'
import { Advert320X50 } from './Advert320X50'
import { Advert728X90 } from './Advert728X90'
import { AdvertVideo } from './AdvertVideo'
import { GearSetup } from './GearSetup'
import { GoalProgress } from './GoalProgress'
import { Poll } from './Poll'
import { PopularCategories } from './PopularCategories'
import { RecentSupporters } from './RecentSupporters'
import { SignUp } from './SignUp'
import { TopSupporters } from './TopSupporters'

export const Center = () => {
  const [isVideoFinished, setIsVideoFinished] = useState(false)
  const onVideoFinished = useCallback(() => {
    setIsVideoFinished(true)
  }, [])

  return (
    <div className={styles.center}>
      <GoalProgress />
      {
        isVideoFinished ? (
          <Poll />
        ) : (
          <AdvertVideo onFinished={onVideoFinished} />
        )
      }
      <Advert320X50 className={styles.displaySm} />
      <TopSupporters /> 
      <Advert300x250 
        className={styles.displaySm} 
        blockId='R-A-2104438-8'
      />
      <RecentSupporters className={styles.displaySm} />
      <Advert300x250 
        className={styles.displaySm}
        blockId='R-A-2104438-9'
      />
      <Advert728X90 className={[styles.displayMd, styles.displayLg].join(' ')} />
      <PopularCategories />
      <GearSetup />
      <SignUp />
    </div>
  )
}