import { configureStore } from '@reduxjs/toolkit'

import configReducer from './slices/configSlice'
import streamerSlice from './slices/streamerSlice'
import supporterSlice from './slices/supporterSlice'
import { supporterApi } from './supporter/supporter.api'

export const store = configureStore({
  reducer: {
    config: configReducer,
    streamer: streamerSlice,
    supporter: supporterSlice,
    [supporterApi.reducerPath]: supporterApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(supporterApi.middleware)
})

export type TypeAppStore = typeof store
export type TypeAppDispatch = typeof store.dispatch
export type TypeRootState = ReturnType<typeof store.getState>
