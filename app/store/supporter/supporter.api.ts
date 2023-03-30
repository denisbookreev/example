import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IFingerprint } from 'app/lib/types/fingerprint'
import { IRecentSupporter, ITopSupporter } from 'app/lib/types/supporter'
import { TransactionType } from 'app/lib/types/transaction'

type SupportersParams = { streamerId: number, limit?: number }
type SupportersResponse<T> = { supporters: T[] }
type CountSupportersResponse = { count: number }

interface ITransactionParams {
  url: string,
  transaction: TransactionType,
  goalId: number,
  streamerId: number,
}
interface ICreateSupporterParams {
  fingerprint: IFingerprint,
  streamerId: number,
}

export const supporterApi = createApi({
  reducerPath: 'api/supporter',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: build => ({
    fetchSupportersCount: build.query<CountSupportersResponse, { streamerId: number | string }>({
      query: ({
        streamerId,
      }) => ({
        url: 'supporters/count',
        params: {
          streamerId,
        },
      })
    }),
    fetchTopSupporters: build.query<SupportersResponse<ITopSupporter>, SupportersParams>({ 
      query: ({
        streamerId,
        limit = 10
      }) => ({
        url: 'supporters/top',
        params: {
          streamerId,
          limit,
        }
      })
    }),
    fetchRecentSupporters: build.query<SupportersResponse<IRecentSupporter>, SupportersParams>({ 
      query: ({
        streamerId,
        limit = 10
      }) => ({
        url: 'supporters/recent',
        params: {
          streamerId,
          limit,
        }
      })
    }),
    transaction: build.mutation<{message: string}, ITransactionParams>({
      query: (params) => ({
        url: `/${params.url}`,
        method: 'POST',
        body: params
      })
    }),
    create: build.mutation<{message: string}, ICreateSupporterParams>({
      query: (params) => ({
        url: '/supporter',
        method: 'POST',
        body: params
      })
    })
  })
})

export const {
  useFetchSupportersCountQuery,
  useFetchTopSupportersQuery, 
  useFetchRecentSupportersQuery,
  useTransactionMutation,
  useCreateMutation,
} = supporterApi