import { IdType } from './base-types'
import { CurrencyIdType } from './currency'

export interface IFreemiumGoal {
  id: IdType,
  title: string,
  description: string,
  currency: CurrencyIdType,
  value: number,
  total: number,
  status: boolean,
}