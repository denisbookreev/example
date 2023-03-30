export type GenderIdType = 'male' | 'female' | 'other'
export type GenderSelectIdType = GenderIdType | 'all'
export interface IGender {
  id: GenderIdType
  title: string
}
