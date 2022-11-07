import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: {
    openLeftMenu: false,
    openRightMenu: false,
  },
}

export const collapseSlice = createSlice({
  name: 'collapse',
  initialState,
  reducers: {
    openLeftMenu: (state) => {
      state.value = {
        ...state,
        openLeftMenu: true
      }
    },
    closeLeftMenu: (state) => {
      state.value = {
        ...state,
        openLeftMenu: false
      }
    },
    switchLeftMenu: (state) => {
      state.value = {
        ...state,
        openLeftMenu: !state.value.openLeftMenu
      }
    },
    openRightMenu: (state) => {
      state.value = {
        ...state,
        openRightMenu: true
      }
    },
    closeRightMenu: (state) => {
      state.value = {
        ...state,
        openRightMenu: false
      }
    },  
    switchRightMenu: (state) => {
      state.value = {
        ...state,
        openRightMenu: !state.value.openRightMenu
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { openLeftMenu, closeLeftMenu, switchLeftMenu, openRightMenu, closeRightMenu, switchRightMenu } = collapseSlice.actions
export default collapseSlice.reducer;