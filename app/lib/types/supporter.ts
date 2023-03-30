import { CONTRIBUTION_SORT_INDEX, DATE_SORT_INDEX } from 'app/dynamo/consts'

import { IdType } from './base-types'
import { TransactionType } from './transaction'

export interface ISupporter {
  id: IdType
  name: string
  [CONTRIBUTION_SORT_INDEX.SORT_KEY]: number
  [DATE_SORT_INDEX.SORT_KEY]: number
  earned: number
  createdAt: number
  // system: IFingerprintSystem
  transactions: {
    [key: IdType]: undefined | TransactionType
  }
  votes: {
    [key: IdType]: undefined | number
  }
  transactionToken?: string
}

export type ITopSupporter = Pick<ISupporter, 'id' | 'name' | 'contribution'>

export type IRecentSupporter = Pick<ISupporter, 'id' | 'name' | 'updatedAt'>