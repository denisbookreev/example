import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { TypeAppDispatch, TypeRootState  } from './store'

export const useAppDispatch = () => useDispatch<TypeAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector
