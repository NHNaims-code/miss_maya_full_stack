import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: {
    isLocked: false
  },
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    lockScreen: (state) => {
      state.value = {
        isLocked: true
      }
    },
    unlockScreen: (state) => {
      state.value = {
        isLocked: false
      }
    },    
  },
})

// Action creators are generated for each case reducer function
export const { lockScreen, unlockScreen } = settingsSlice.actions
export default settingsSlice.reducer;