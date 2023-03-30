import { AdFormatType } from './ad-format'

export type TransactionType = {
  [key in AdFormatType]: number
}
