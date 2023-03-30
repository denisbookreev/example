import styles from './SignUp.module.scss'

import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'
import { useAppSelector } from 'app/store/redux'

export const SignUp = () => {
  const streamer = useAppSelector(state => state.streamer.streamer)
  const { t } = useTranslation('personal')
  const title = useMemo(() => ({ __html: t('signUp.title') }), [t])

  return (
    <WhiteBlock style="green">
      <div className={styles.container}>
        <div 
          className={styles.title}
          dangerouslySetInnerHTML={title}
        />

        <div className={styles.arrow}></div>

        <a
          className={styles.link}
          href={t('signUp.signupLink', { streamerId: streamer.id })}
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </WhiteBlock>
  )
}
