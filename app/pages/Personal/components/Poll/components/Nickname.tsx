import styles from '../Poll.module.scss'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'next-i18next'

import { Button } from 'app/components/ui/Button'
import { ErrorCatcher } from 'app/lib/utils/ErrorCatcher'
import { useAppSelector } from 'app/store/redux'

const forbiddenSymbols = /'|"|{|}|\||\(|\)|;|\\|\/|,|\[|\]|\s/ig

export const Nickname = () => {
  const { t } = useTranslation('personal')

  const supporter = useAppSelector(state => state.supporter.supporter)
  const streamer = useAppSelector(state => state.streamer.streamer)
  const [nickname, setNickname] = useState<string>(supporter?.name || '')
  const [isSubmitting, setSubmitting] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const isDisabled = useMemo(() => {
    return !supporter || nickname === supporter.name || !nickname || isSubmitting || isSuccess
  }, [isSubmitting, isSuccess, supporter, nickname])

  const onNicknameChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim().replace(forbiddenSymbols, '').slice(0, 20)
    setNickname(value)
    setSuccess(false)
  }, [])

  async function onSubmit () {
    if (isDisabled) return

    try {
      setSubmitting(true)
      await axios.post('/api/nickname', {
        nickname,
        streamerId: streamer.id,
      })
      setSuccess(true)
    }
    catch (err) {
      throw ErrorCatcher.error(t('poll.nickname.error'), err)
    }
    finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if (supporter?.name) {
      setNickname(supporter.name)
    }
  }, [supporter?.name])

  return (
    <div className={styles.nickname}>
      <input 
        type="text"
        className={styles.nicknameField}
        placeholder={t('poll.nickname.placeholder')}
        value={nickname}
        onInput={onNicknameChange}
      />

      <div className={styles.nicknameSubmit}>
        <Button
          onClick={onSubmit}
          disabled={isDisabled}
          success={isSuccess}
        >
          { 
            isSuccess ? (
              t('poll.nickname.changed')
            ) : isSubmitting ? (
              t('poll.nickname.submitting')
            ) : (
              t('poll.nickname.submit')
            )
          }
        </Button>
      </div>
    </div>
  )
}
