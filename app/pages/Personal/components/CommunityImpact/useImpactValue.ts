import { useMemo } from 'react'

import { makeCurrency } from 'app/lib/utils/make-currency'
import { useAppSelector } from 'app/store/redux'

export const useImpactValue = () => {
  const streamer = useAppSelector(state => state.streamer.streamer)

  const min = useMemo(() => {
    let value = Math.ceil(streamer.community_impact.min) * 10
    if (value < 1) {
      value = 1
    }
    return makeCurrency(value, streamer.community_impact.currency)
  }, [streamer.community_impact])

  const max = useMemo(() => {
    let value = Math.ceil(streamer.community_impact.max) * 10
    if (value < 10) {
      value = 10
    }
    return makeCurrency(value, streamer.community_impact.currency)
  }, [streamer.community_impact])

  return {
    min,
    max,
  }
}