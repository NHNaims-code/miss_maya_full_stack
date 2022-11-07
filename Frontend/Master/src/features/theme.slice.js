import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: {
    activeTheme: 'dark'
  },
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchDarkTheme: (state) => {
      state.value = {
        activeTheme: 'dark'
      }
    },
    switchLightTheme: (state) => {
      state.value = {
        activeTheme: 'light'
      }
    },    
  },
})

// Action creators are generated for each case reducer function
export const { switchDarkTheme, switchLightTheme } = themeSlice.actions
export default themeSlice.reducer;