import styles from './GearsSetup.module.scss'

import React from 'react'
import { useTranslation } from 'next-i18next'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'
import { useAppSelector } from 'app/store/redux'

export const GearSetup = () => {
  const { t } = useTranslation('personal')
  
  const streamer = useAppSelector(state => state.streamer.streamer)

  return (
    <WhiteBlock 
      title={t('gearSetup.title')}
      none={!streamer.gears.length ? t('gearSetup.none') : ''}
    >
      <div className={styles.container}>
        <div className={styles.column}>
          { streamer.gears.slice(0, Math.ceil(streamer.gears.length / 2)).map(item => (
            <div 
              className={styles.item}
              key={item.title}
            >
              <span className={styles.label}>
                {item.title}:
              </span>
              <span className={styles.value}>
                {item.properties}
              </span>
            </div>
          )) }
        </div>
        <div className={styles.column}>
          { streamer.gears.slice(Math.ceil(streamer.gears.length / 2)).map(item => (
            <div 
              className={styles.item}
              key={item.title}
            >
              <span className={styles.label}>
                {item.title}:
              </span>
              <span className={styles.value}>
                {item.properties}
              </span>
            </div>
          )) }
        </div>
      </div>
    </WhiteBlock>
  )
}
