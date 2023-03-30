import styles from './GraphBlock.module.scss'

import React, { useMemo } from 'react'

import { ICategory } from 'app/lib/types/streamer'

import { colors } from '../colors'

export const GraphBlock: React.FC<{ 
  category: ICategory,
  index: number,
}> = ({ category, index }) => {
  const blockStyle = useMemo(() => ({
    backgroundColor: colors[index],
    width: `calc(${category.percent}% - 2px)`,
  }), [index, category])

  return (
    <div 
      className={styles.container}
      style={blockStyle}
    />
  )
}