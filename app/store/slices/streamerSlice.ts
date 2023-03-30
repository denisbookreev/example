import { createSlice,PayloadAction } from '@reduxjs/toolkit'

import { PollResultsType } from 'app/lib/types/poll'
import { IStreamer } from 'app/lib/types/streamer'

interface IStreamerState {
  streamer: IStreamer,
  progress: number,
  pollResults: PollResultsType
}

const initialState: IStreamerState = {
  streamer: {} as IStreamer,
  progress: 0,
  pollResults: [],
}

export const streamerSlice = createSlice({
  name: 'streamer',
  initialState,
  reducers: {
    setStreamer: (state, action: PayloadAction<IStreamer>) => {
      state.streamer = action.payload
    },
    setPollResults: (state, action: PayloadAction<PollResultsType>) => {
      state.pollResults = action.payload
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload
    },
    increaseProgress: (state, action: PayloadAction<number>) => {
      state.progress += action.payload
    },
  }
})

export const { 
  setStreamer,
  setPollResults,
  setProgress,
  increaseProgress,
} = streamerSlice.actions

export default streamerSlice.reducer