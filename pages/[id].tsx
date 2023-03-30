import React from 'react'
import Cookies from 'cookies'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { TRANSACTION_TOKEN } from 'app/lib/consts/cookies'
import { IPoll } from 'app/lib/types/poll'
import { IStreamer } from 'app/lib/types/streamer'
import { uplifyApi } from 'app/lib/uplify-api'
import { ErrorCatcher } from 'app/lib/utils/ErrorCatcher'
import { fetchInitialData } from 'app/lib/utils/personal-page/fetch-initial-data'
import { setTransactionToken } from 'app/lib/utils/personal-page/set-transaction-token'
import { Personal } from 'app/pages/Personal'
import { useAppDispatch } from 'app/store/redux'
import { setShowAdvertBlocks } from 'app/store/slices/configSlice'
import { setPollResults, setProgress, setStreamer } from 'app/store/slices/streamerSlice'

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = new Cookies(context.req, context.res)
    const transactionToken = cookies.get(TRANSACTION_TOKEN)
    const { id } = context.params || {}

    if (typeof id !== 'string') {
      return {
        notFound: true,
      }
    }

    const streamerData = await uplifyApi.fetchStreamer(id)
    const isDeleted = streamerData.data.deleted || streamerData.data.deleted_request
    const isNotFound = !streamerData.status || isDeleted

    if (isNotFound) {
      return {
        notFound: true,
      }
    }

    const { pollResults, goalProgress } = await fetchInitialData(streamerData.data)
    const { showAdvertBlocks } = setTransactionToken({ 
      cookies, 
      streamerId: id, 
      token: transactionToken,
    })

    return {
      props: {
        streamer: streamerData.data,
        pollResults,
        goalProgress: goalProgress?.progress || 0,
        showAdvertBlocks,
        ...(await serverSideTranslations(context.locale as string, [
          'personal',
          'ui',
        ])),
      }
    }
  }
  catch (error) {
    // connect rollbar
    throw ErrorCatcher.error('Failed load page', error)
  }
}

export default function PersonalPage (props: {
  streamer: IStreamer,
  pollResults: IPoll | null,
  goalProgress: number,
  showAdvertBlocks: boolean,
}) {
  const dispatch = useAppDispatch()
  dispatch(setStreamer(props.streamer))
  dispatch(setProgress(props.goalProgress))
  dispatch(setPollResults(props.pollResults?.results || []))
  dispatch(setShowAdvertBlocks(props.showAdvertBlocks))

  return <Personal />
}
