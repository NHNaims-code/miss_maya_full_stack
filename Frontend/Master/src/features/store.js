import { configureStore } from '@reduxjs/toolkit'
import collapseSlice from './collapse.slice'
import themeSlice from './theme.slice'
import settingsSlice from './settings.slice'
import profileSlice from './profile.slice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    collapse: collapseSlice,
    settings: settingsSlice,
    profile: profileSlice,
  },
})
