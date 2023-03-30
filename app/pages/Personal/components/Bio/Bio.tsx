import styles from './Bio.module.scss'

import React from 'react'
import { useTranslation } from 'next-i18next'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'
import { useAppSelector } from 'app/store/redux'

import { useBio } from './useBio'

export const Bio = ({
  className,
}: {
  className?: string,
}) => {
  const streamer = useAppSelector(state => state.streamer.streamer)
  const { t } = useTranslation('personal')
  const { rows } = useBio(streamer)

  return (
    <WhiteBlock
      title={t('bio.title')}
      className={className}
    >
      <>
        {
          rows.map(item => (
            <div 
              key={item.label}
              className={styles.row}
            >
              <div className={styles.label}>
                {item.label}:
              </div>
              <div className={styles.value}>
                {item.value || '—'}
              </div>
            </div>
          ))
        }

        <div className={styles.label}>
          {t('bio.fields.platform')}
        </div>

        <div className={styles.platforms}>
          {
            streamer.platforms.twitch && 
            <a 
              href={`https://www.twitch.tv/${streamer.platforms.twitch.nickname}`}
              target='_blank'
              rel='noreferrer'
            >
              <img src="/static/img/twitch-logo.svg" />
            </a>
          }
          {
            streamer.platforms.trovo && 
            <a 
              href={`https://trovo.live/s/${streamer.platforms.trovo.nickname}`}
              target='_blank'
              rel='noreferrer'
            >
              <img src="/static/img/trovo-logo.svg" />
            </a>
          }
          {
            streamer.platforms.youtube && 
            <a 
              href={`https://www.youtube.com/@${streamer.platforms.youtube.nickname}`}
              target='_blank'
              rel='noreferrer'
            >
              <img src="/static/img/youtube-logo.svg" />
            </a>
          }
        </div>
      </>
    </WhiteBlock>
  )
}