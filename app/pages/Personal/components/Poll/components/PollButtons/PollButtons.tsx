import styles from './PollButtons.module.scss'

import React, { useMemo } from 'react'

export const PollButtons = ({
  name,
  items,
  results,
  value,
  disabled,
  showResults,
  onChange,
} : {
  name: string,
  items: Array<{ id: number, title: string }>,
  results: number[],
  value: null | number,
  disabled: boolean,
  showResults: boolean,
  onChange: (value: number) => void,
}) => {
  const onRadioChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(parseInt(event.currentTarget.value))
  }
  const sum = useMemo(() => {
    return results.reduce((acc, item) => {
      return acc + item
    }, 0)
  }, [results])
  const resultPercents = useMemo(() => {
    const res = []
    for(let i = 0; i < items.length; i++) {
      res[i] = results[i] ? 100/sum * results[i] : 0
    }
    return res
  }, [items.length, results, sum])
  const resultStyles = useMemo(() => {
    return resultPercents.map((_, i) => {
      return { width: `${showResults ? resultPercents[i] : 0}%` }
    })
  }, [resultPercents, showResults])

  return (
    <>
      {
        items.map((item, i) => 
          <div 
            key={item.id}
            className={styles.radio}
          >
            <input
              id={`${name}-${item.id}`}
              className={styles.input}
              disabled={disabled}
              type='radio'
              checked={value === item.id}
              name={name}
              value={item.id}
              onChange={onRadioChange}
            />
            <label
              className={[styles.label, value === item.id && styles.checked, disabled && styles.disabled].join(' ')}
              htmlFor={`${name}-${item.id}`}
            >
              <div
                className={styles.filler}
                style={resultStyles[i]}
              />
              
              <div className={styles.labelContent}>
                <div className={styles.number}>
                  { i + 1 }
                </div>
                { item.title }
                    
                { showResults && (
                  <div className={styles.labelPercent}>
                    { resultPercents[i].toFixed(2) }%
                  </div>
                )}
              </div>
            </label>
          </div>
        ) 
      }
    </>
  )
}
