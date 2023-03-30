import { useEffect, useState } from 'react'

import { useAppSelector } from 'app/store/redux'

type CoinType = {
  id: number,
  value: string,
}

export const useCoins = () => {
  const progress = useAppSelector(state => state.streamer.progress)
  const [coins, setCoins] = useState<CoinType[]>([])
  const [oldProgress, setOldProgress] = useState(progress)

  useEffect(() => {
    const different = progress - oldProgress
    if (different <= 0) return

    setCoins(prev => [...prev, {
      id: Date.now(),
      value: different.toFixed(3),
    }])
    setOldProgress(progress)
  }, [oldProgress, progress])

  return {
    coins,
  }
}
