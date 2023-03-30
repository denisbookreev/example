import styles from './Poll.module.scss'

import React from 'react'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'
import { useAppSelector } from 'app/store/redux'

import { Nickname } from './components/Nickname'
import { PollForm } from './components/PollForm'

export const Poll = () => {
  const streamer = useAppSelector(state => state.streamer.streamer)
  const results = useAppSelector(state => state.streamer.pollResults)
  const hasPoll = !!streamer.poll
  const description = `${hasPoll ? 'Your vote counts. ' : ''}Enter your name to be ranked.`

  return (
    <WhiteBlock
      title='Thank you for support!'
      description={description}
    >
      <Nickname />

      {
        hasPoll && (
          <div className={styles.poll}>
            <div className={styles.pollTitle}>
              { streamer.poll?.question }
            </div>

            <PollForm results={results} />
          </div>
        )
      }
    </WhiteBlock>
  )
}