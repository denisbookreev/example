import styles from './Header.module.scss'

import React, { useState } from 'react'

import { useAppSelector } from 'app/store/redux'

import { CountSupporters } from './CountSupporters'

export const Header = () => {
  const streamer = useAppSelector(state => state.streamer.streamer)
  const [ avatarStyle ] = useState({ backgroundImage: `url(${streamer.avatar})` })
  
  return (
    <header className={styles.header}>
      <div className={styles.streamer}>
        <div 
          className={styles.streamerAvatar}
          style={avatarStyle}
        />
        <div className={styles.streamerInfo}>
          <div className={styles.streamerName}>
            { streamer.name }
          </div>
          <CountSupporters />
        </div>
      </div>

      {/* <LanguageSwitcher /> */}
    </header>
  )
}