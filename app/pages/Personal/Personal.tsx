import styles from './Personal.module.scss'

import React from 'react'
import { useTranslation } from 'next-i18next'

import { Footer } from 'app/components/Footer'
import { Meta } from 'app/components/Meta'
import { useAppSelector } from 'app/store/redux'

import { Center } from './components/Center'
import { Header } from './components/Header'
import { LeftAside } from './components/LeftAside'
import { RightAside } from './components/RightAside'

export const Personal = () => {
  const { t } = useTranslation('personal')
  const streamer = useAppSelector(state => state.streamer.streamer)
  const metaTitle = t('meta.title', {streamer: streamer.name})
  const metaDescription = t('meta.description', {
    streamer: streamer.name,
    pronoun1: streamer.gender.en_title === 'Female' ? 'her' : 'him',
    pronoun2: streamer.gender.en_title === 'Female' ? 'her' : 'his'
  })

  return (
    <div className={styles.container}>
      <Meta
        title={metaTitle} 
        description={metaDescription} 
        image={`${process.env.NEXT_PUBLIC_DOMAIN}static/img/streamer-ogg-image.png`}
      />
      <Header />

      <main className={styles.content}>
        <LeftAside />
        <Center />
        <RightAside />
      </main>

      <Footer />
    </div>
  )
}
