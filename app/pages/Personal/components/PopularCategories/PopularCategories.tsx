import styles from './PopularCategories.module.scss'

import React from 'react'
import { useTranslation } from 'next-i18next'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'
import { useAppSelector } from 'app/store/redux'

import { Category } from './components/Category'
import { GraphBlock } from './components/GraphBlock'


export const PopularCategories = () => {
  const { t } = useTranslation('personal')

  const streamer = useAppSelector(state => state.streamer.streamer)
  const { categories } = streamer

  return (
    <WhiteBlock
      title={t('popularCategories.title')}
      none={!categories.length ? t('popularCategories.none') : ''}
    >
      <div className={styles.container}>
        <div className={styles.graph}>
          { categories.map((item, i) => (
            <GraphBlock
              key={item.name}
              category={item}
              index={i}
            />
          )) }
        </div>
        <div className={styles.categories}>
          { categories.map((item, i) => (
            <Category
              key={item.name}
              category={item}
              index={i}
            />
          )) }
        </div>
      </div>
    </WhiteBlock>
  )
}
