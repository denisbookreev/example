import React, { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'next-i18next'

import { Button } from 'app/components/ui/Button'
import { ErrorCatcher } from 'app/lib/utils/ErrorCatcher'

export const Submit = ({
  streamerId,
  imprint,
  pollId,
  answer,
  isVoted,
  disabled,
  setSuccess,
}: {
  streamerId: number,
  imprint: number | undefined,
  pollId: number,
  answer: number | null,
  isVoted: boolean,
  disabled: boolean,
  setSuccess: (value: boolean) => void,
}) => {
  const { t } = useTranslation('personal')

  const [isSubmitting, setSubmitting] = useState(false)
  async function onSubmit () {
    if (isSubmitting || isVoted) return

    try {
      setSubmitting(true)
      await axios.post('/api/vote', {
        imprint: imprint,
        streamerId,
        pollId,
        answer,
      })
      setSuccess(true)
    }
    catch (err) {
      throw ErrorCatcher.error(t('poll.submit.error'), err)
    }
    finally {
      setSubmitting(false)
    }
  }

  return (
    <Button
      onClick={onSubmit}
      disabled={disabled || !answer || isSubmitting || isVoted || !imprint}
      success={isVoted}
    >
      { 
        isVoted ? (
          t('poll.submit.changed')
        ) : isSubmitting ? (
          t('poll.submit.submitting')
        ) : (
          t('poll.submit.submit')
        )
      }
    </Button>
  )
}