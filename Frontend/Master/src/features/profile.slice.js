import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: {
    userID: null
  },
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.value = {
        ...action.payload
      }
    },
    clearUser: (state) => {
      state.value = {
        userID: null
      }
    },    
  },
})

// Action creators are generated for each case reducer function
export const { setProfile, clearUser } = profileSlice.actions
export default profileSlice.reducer;