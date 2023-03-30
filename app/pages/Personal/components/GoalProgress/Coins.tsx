import styles from './GoalProgress.module.scss'

import React from 'react'

import { useCoins } from './use-coins'

export const Coins = () => {
  const { coins } = useCoins()

  return (
    <>
      {
        coins.map(coin => (
          <span
            key={coin.id}
            className={styles.coin}>
            +${coin.value}
          </span>
        ))
      }
    </>
  )
}