import { PARTITION_KEY, SORT_KEY } from 'app/dynamo/consts'

export interface IGoal {
  [PARTITION_KEY]: string
  [SORT_KEY]: string
  streamerId: number
  progress: number
  updatedAt: number
  createdAt: number
}