import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { convertByCurrency } from 'app/lib/utils/convert-by-currency'
import { makeCurrency } from 'app/lib/utils/make-currency'
import { useAppSelector } from 'app/store/redux'

type ProgressDataType = {
  totalProgressText: string,
  styleTotalProgressPercent: { width: string },
  styleSavedProgressPercent: { width: string },
}

const defaultData: ProgressDataType = {
  totalProgressText: '',
  styleTotalProgressPercent: { width: 'auto' },
  styleSavedProgressPercent: { width: 'auto' },
}

export const useProgress = (): ProgressDataType => {
  const { t } = useTranslation('personal')
  const { streamer, progress: currentProgress } = useAppSelector(state => state.streamer)

  return useMemo(() => {
    if (!streamer.goal) {
      return defaultData
    }
  
    const { 
      total: goal, 
      value: savedProgress, 
      currency,
    } = streamer.goal
    
    let totalProgressText
    const goalCurrencied = makeCurrency(goal, currency)
    const currentProgressConverted = convertByCurrency(currentProgress, currency)
    const totalProgress = parseFloat((savedProgress + currentProgressConverted).toFixed(2))
    const totalProgressCurrencied = makeCurrency(totalProgress, currency)
    const totalProgressPercent = (100 / goal * totalProgress).toFixed(2)
    const savedProgressPercent = (100 / goal * savedProgress).toFixed(2)
    const styleTotalProgressPercent = { width: `${totalProgressPercent}%` }
    const styleSavedProgressPercent = { width: `${savedProgressPercent}%` }

    if (streamer.goal?.publicTotal) {
      totalProgressText = `${totalProgressCurrencied} ${t('goalProgress.of')} ${goalCurrencied}`
    }
    else {
      totalProgressText = `${totalProgressPercent}%`
    }
  
    return {
      totalProgressText,
      styleTotalProgressPercent,
      styleSavedProgressPercent,
    }
  }, [currentProgress, streamer.goal, t])
}
