import styles from './Category.module.scss'

import React, { useMemo } from 'react'

import { ICategory } from 'app/lib/types/streamer'

import { colors } from '../colors'

export const Category: React.FC<{ 
  category: ICategory,
  index: number,
}> = ({ category, index }) => {
  const backgroundColorStyle = useMemo(() => ({backgroundColor: colors[index]}), [index])

  return (
    <div 
      className={styles.category}
      key={category.name}
    >
      <div className={styles.categoryPercent}>
        <span className={styles.categoryColor} style={backgroundColorStyle}></span>
        { category.percent.toFixed() }%
      </div>
      <div className={styles.categoryName}>
        { category.name }
      </div>
    </div>
  )
}