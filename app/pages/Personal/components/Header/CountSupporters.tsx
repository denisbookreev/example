import styles from './Header.module.scss'

import React from 'react'
import { useTranslation } from 'next-i18next'

import { useAppSelector } from 'app/store/redux'
import { useFetchSupportersCountQuery } from 'app/store/supporter/supporter.api'

export const CountSupporters = () => {
  const { t } = useTranslation('personal')
  const streamer = useAppSelector(state => state.streamer.streamer)
  const { data } = useFetchSupportersCountQuery({ streamerId: streamer.id })

  return (
    <div className={styles.streamerSupporters}>
      {t('header.supporters', { supporters: data?.count || '-' })}
    </div>
  )
}