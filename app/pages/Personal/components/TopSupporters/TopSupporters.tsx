import styles from './TopSupporters.module.scss'

import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'
import { useAppSelector } from 'app/store/redux'
import { useFetchTopSupportersQuery } from 'app/store/supporter/supporter.api'

export const TopSupporters = () => {
  const { t } = useTranslation('personal')
  const streamer = useAppSelector(state => state.streamer.streamer)
  const { data, isLoading, error } = useFetchTopSupportersQuery({ streamerId: streamer.id })
  const none = useMemo(() => {
    if (isLoading) {
      return t('topSupporters.none.loading')
    }
    if (error || !data) {
      return t('topSupporters.none.errorRequest')
    }
    if (data?.supporters.length === 0) {
      return t('topSupporters.none.errorData')
    }
    return ''
  }, [isLoading, error, data, t])

  return (
    <WhiteBlock 
      title={t('topSupporters.title')}
      description={t('topSupporters.description')}
      none={none}
    >
      <div className={styles.container}>
        {
          <>
            <div className={styles.column}>
              {
                data?.supporters.map((item, i) => i < 5 &&
                  <div 
                    className={styles.supporter}
                    key={item.id}
                  >
                    <div className={styles.supporterPlace}>
                      {i + 1}
                    </div>
                    <div className={styles.supporterName}>
                      {item.name || t('topSupporters.someone')}
                    </div>
                  </div>
                )
              }
            </div>
            <div className={styles.column}>
              {
                data?.supporters.map((item, i) => i >= 5 &&
                  <div 
                    className={styles.supporter}
                    key={item.id}
                  >
                    <div className={styles.supporterPlace}>
                      {i + 1}
                    </div>
                    <div className={styles.supporterName}>
                      {item.name || t('topSupporters.someone')}
                    </div>
                  </div>
                )
              }
            </div>
          </>
        }
      </div>
    </WhiteBlock>
  )
}