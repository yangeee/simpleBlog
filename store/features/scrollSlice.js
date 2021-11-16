import { createSlice } from '@reduxjs/toolkit'

export const scrollSlice = createSlice({
  name: 'time',
  initialState: {
    distance: 0
  },
  reducers: {
    change (state, { payload }) {
      state.distance = payload.distance
    }
  }
})

export const { change } = scrollSlice.actions

export default scrollSlice.reducer
