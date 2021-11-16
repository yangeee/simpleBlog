import { configureStore } from '@reduxjs/toolkit'
import scrollReducer from './features/scrollSlice'

export default configureStore({
  reducer: {
    scroll: scrollReducer
  }
})
