import styles from '../Poll.module.scss'

import React, { useCallback } from 'react'

import { IdType } from 'app/lib/types/base-types'
import { useAppSelector } from 'app/store/redux'

import { usePoll } from '../use-poll'

import { PollButtons } from './PollButtons'
import { Submit } from './Submit'

export const PollForm = ({
  results,
}: {
  results: number[],
}) => {
  const fingerprint = useAppSelector(state => state.supporter.fingerprint)
  const supporter = useAppSelector(state => state.supporter.supporter)
  const streamer = useAppSelector(state => state.streamer.streamer)

  const poll = streamer.poll as {
    id: IdType,
    question: string,
    answers: string[],
  }

  const {
    value,
    answers,
    answer,
    isVoted,
    isSuccess,
    exactResults,
    setAnswer,
    setSuccess,
  } = usePoll({ 
    supporter,
    poll,
    results,
  })

  const onAnswerChange = useCallback((value: number) => {
    setAnswer(value)
  }, [])

  return (
    <>
      <div className={styles.pollButtons}>
        <PollButtons 
          name="answer"
          value={value}
          items={answers.map((item, i) => ({ id: i, title: item }))}
          results={exactResults}
          disabled={isVoted}
          onChange={onAnswerChange}
          showResults={isVoted || isSuccess}
        />
      </div>
      <div className={styles.pollSubmit}>
        <Submit
          streamerId={streamer.id}
          imprint={fingerprint?.imprint}
          pollId={poll.id}
          answer={answer}
          isVoted={isVoted}
          setSuccess={setSuccess}
          disabled={!supporter}
        />
      </div>
    </>
  )
}
