import Cookies from 'cookies'

import { TRANSACTION_TOKEN } from 'app/lib/consts/cookies'

import { createTransactionToken, decryptTransactionToken } from '../create-transaction-token'

const setNewTransactionToken = (cookies: Cookies, streamerId: number | string) => {
  return () => cookies.set(
    TRANSACTION_TOKEN,
    createTransactionToken({ 
      streamerId: Number(streamerId),
    }),
  )
}

export const setTransactionToken = ({
  cookies, 
  streamerId,
  token,
}: {
  cookies: Cookies
  streamerId: string
  token: string | string[] | undefined
}): { 
  showAdvertBlocks: boolean
} => {
  const setNew = setNewTransactionToken(cookies, streamerId)
  let showAdvertBlocks = false

  if (typeof token !== 'string') {
    showAdvertBlocks = true
    setNew()
    return { showAdvertBlocks }
  }

  const decryptedData = decryptTransactionToken(token)
  if (!decryptedData) {
    showAdvertBlocks = true
    setNew()
    return { showAdvertBlocks }
  }

  const isExpired = Date.now() - decryptedData.createdAt > 30 * 1000
  if (isExpired) {
    showAdvertBlocks = true
    setNew()
    return { showAdvertBlocks }
  }

  const isAnotherStreamer = decryptedData.streamerId !== Number(streamerId)
  if (isAnotherStreamer) {
    showAdvertBlocks = true
    setNew()
    return { showAdvertBlocks }
  }

  return { showAdvertBlocks }
}