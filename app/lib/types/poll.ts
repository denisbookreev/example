import { PARTITION_KEY, SORT_KEY } from 'app/dynamo/consts'

export type PollResultsType = number[]

export interface IPoll {
  [PARTITION_KEY]: string
  [SORT_KEY]: string
  streamerId: number
  results: PollResultsType
}