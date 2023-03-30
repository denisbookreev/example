import styles from './RecentSupporters.module.scss'

import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'
import { useAppSelector } from 'app/store/redux'
import { useFetchRecentSupportersQuery } from 'app/store/supporter/supporter.api'

export const RecentSupporters = ({
  className,
}: {
  className?: string,
}) => {
  const { t } = useTranslation('personal')
  const streamer = useAppSelector(state => state.streamer.streamer)

  const { data, isLoading, error } = useFetchRecentSupportersQuery({ streamerId: streamer.id })
  const none = useMemo(() => {
    if (isLoading) {
      return t('recentSupporters.none.loading')
    }
    if (error || !data) {
      return t('recentSupporters.none.errorRequest')
    }
    if (data?.supporters.length === 0) {
      return t('recentSupporters.none.errorData')
    }
    return ''
  }, [isLoading, error, data, t])

  return (
    <WhiteBlock 
      title={t('recentSupporters.title')}
      none={none}
      className={className}
    >
      <div className={styles.container}>
        {
          data?.supporters.map((item) => 
            <div 
              className={styles.supporter}
              key={item.id}
            >
              <div className={styles.supporterName}>
                <b>{item.name}</b> {t('recentSupporters.added')}
              </div>
            </div>
          )
        }
      </div>
    </WhiteBlock>
  )
}
