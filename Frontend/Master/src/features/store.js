import { configureStore } from '@reduxjs/toolkit'
import collapseSlice from './collapse.slice'
import themeSlice from './theme.slice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    collapse: collapseSlice
  },
})
