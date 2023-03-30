import { createSlice } from '@reduxjs/toolkit'

import { IFingerprint } from 'app/lib/types/fingerprint'
import { ISupporter } from 'app/lib/types/supporter'

interface ISupporterState {
  supporter: ISupporter | null,
  fingerprint: IFingerprint | null,
}

const initialState: ISupporterState = {
  supporter: null,
  fingerprint: null,
}

export const supporterSlice = createSlice({
  name: 'supporter',
  initialState,
  reducers: {
    setSupporter: (state, payload) => {
      state.supporter = payload.payload
    },
    setFingerprint: (state, payload) => {
      state.fingerprint = payload.payload
    },
  }
})

export const { 
  setSupporter,
  setFingerprint,
} = supporterSlice.actions

export default supporterSlice.reducer