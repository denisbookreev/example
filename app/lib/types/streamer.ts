import { IdType, UrlType } from 'app/lib/types/base-types'
import { CurrencyCodeType, CurrencyIdType } from 'app/lib/types/currency'

interface IPlatform {
  avatar: UrlType,
  displayname: string,
  nickname: string,
  provider_id: number,
}

interface IGoal {
  id: IdType,
  title: string,
  description: string,
  currency: CurrencyIdType,
  value: number,
  total: number,
  publicTotal: boolean,
  status: boolean,
  position: string
}

interface IPoll {
  id: IdType,
  question: string,
  duration: number,
  votes_total: number,
  answers: string[],
  position: string
}

interface IDictionary {
  en_title: string,
  ru_title: string,
  pt_title: string,
}

export interface ICategory {
  name: string,
  image: string,
  percent: number
}

export interface IStreamer {
  id: IdType
  name: string,
  real_name: string,
  avatar: UrlType,
  birthday: number,
  language: IDictionary,
  locale: string,
  country: IDictionary,
  gender: IDictionary,
  platforms: {
    twitch: IPlatform | null,
    youtube: IPlatform | null,
    trovo: IPlatform | null,
  },
  categories: ICategory[],
  income: {
    month: 0,
    total: 0,
  }
  community_impact: {
    min: number,
    max: number,
    currency: CurrencyCodeType
  },
  gears: Array<{
    title: string,
    properties: string,
  }>
  goal: IGoal | null,
  poll: IPoll | null,
  defaultGoal: {
    id: number,
  },
  deleted_request: boolean,
  deleted_left_days: number | null,
  deleted: boolean,
}
