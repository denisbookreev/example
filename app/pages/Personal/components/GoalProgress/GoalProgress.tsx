import styles from './GoalProgress.module.scss'

import React from 'react'
import { useTranslation } from 'next-i18next'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'
import { useAppSelector } from 'app/store/redux'

import { Coins } from './Coins'
import { useProgress } from './use-progress'

export const GoalProgress = () => {
  const { t } = useTranslation('personal')
  const streamer = useAppSelector(state => state.streamer.streamer)
  const {
    totalProgressText,
    styleTotalProgressPercent,
    styleSavedProgressPercent,
  } = useProgress()

  return (
    <WhiteBlock
      title={streamer.goal?.title || t('goalProgress.title')}
      description={streamer.goal?.description}
      none={!streamer.goal ? t('goalProgress.none') : ''}
    >
      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressNowVisual}
            style={styleTotalProgressPercent}
          />
          <div 
            className={styles.progressSavedVisual} 
            style={styleSavedProgressPercent}
          />
        </div>

        <div className={styles.progressValue}>
          { totalProgressText }
          <Coins />
        </div>
      </div>
    </WhiteBlock>
  )
}