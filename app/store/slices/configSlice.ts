import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IConfigState {
  isAdBlockEnabled: boolean
  showAdvertBlocks: boolean
}

const initialState: IConfigState = {
  isAdBlockEnabled: false,
  showAdvertBlocks: true,
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    toggleAdBlock: (state, action: PayloadAction<boolean>) => {
      state.isAdBlockEnabled = action.payload
    },
    setShowAdvertBlocks: (state, action: PayloadAction<boolean>) => {
      state.showAdvertBlocks = action.payload
    },
  }
})

export const { 
  toggleAdBlock,
  setShowAdvertBlocks,
} = configSlice.actions

export default configSlice.reducer