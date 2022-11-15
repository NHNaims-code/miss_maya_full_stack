import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: {
    openLeftMenu: true,
    openRightMenu: true,
  },
}

export const collapseSlice = createSlice({
  name: 'collapse',
  initialState,
  reducers: {
    openLeftMenu: (state) => {
      state.value = {
        ...state.value,
        openLeftMenu: true
      }
    },
    closeLeftMenu: (state) => {
      state.value = {
        ...state.value,
        openLeftMenu: false
      }
    },
    switchLeftMenu: (state) => {
      state.value = {
        ...state.value,
        openLeftMenu: !state.value.openLeftMenu
      }
    },
    openRightMenu: (state) => {
      state.value = {
        ...state.value,
        openRightMenu: true
      }
    },
    closeRightMenu: (state) => {
      state.value = {
        ...state.value,
        openRightMenu: false
      }
    },  
    switchRightMenu: (state) => {
      state.value = {
        ...state.value,
        openRightMenu: !state.value.openRightMenu
      }
    },
    closeAllMenu: (state) => {
      state.value = {
        ...state.value,
        openLeftMenu: false,
        openRightMenu: false,
      }
    },
    openAllMenu: (state) => {
      state.value = {
        ...state.value,
        openLeftMenu: true,
        openRightMenu: true,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { openLeftMenu, closeLeftMenu, switchLeftMenu, openRightMenu, closeRightMenu, switchRightMenu, closeAllMenu, openAllMenu } = collapseSlice.actions
export default collapseSlice.reducer;