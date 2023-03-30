export enum CurrencyId {
  EUR = 'eur',
  USD = 'usd',
  RUB = 'rub',
  INR = 'inr',
  BRL = 'brl',
}
export enum CurrencyCode {
  EUR = 'EUR',
  USD = 'USD',
  RUB = 'RUB',
  INR = 'INR',
  BRL = 'BRL',
}
export enum CurrencyIcon {
  EUR = '€',
  USD = '$',
  RUB = '₽',
  INR = '₹',
  BRL = 'R$',
}

export type CurrencyIdType = CurrencyId.EUR | CurrencyId.USD | CurrencyId.RUB | CurrencyId.INR | CurrencyId.BRL
export type CurrencyCodeType = CurrencyCode.EUR | CurrencyCode.USD | CurrencyCode.RUB | CurrencyCode.INR | CurrencyCode.BRL
export type CurrencyIconType = CurrencyIcon.EUR | CurrencyIcon.USD | CurrencyIcon.RUB | CurrencyIcon.INR | CurrencyIcon.BRL

export interface ICurrency {
  id: CurrencyIdType
  title: string
  icon: CurrencyIconType
}
