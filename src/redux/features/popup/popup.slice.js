import { createSlice } from "@reduxjs/toolkit";

// -------------------------------------- Slice --------------------------------------

const initialState = {
  popupEntity: {
    message: null,
    color: null,
  },
  isVisible: false
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup: {
      reducer(state, action) {
        state.popupEntity = action.payload;
        state.isVisible = true;
      }
    },
    hidePopup: {
      reducer(state) {
        state.isVisible = false;
      }
    }
  },
})

export const { showPopup, hidePopup } = popupSlice.actions;

export default popupSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const popupStateSelector = state => state.popup;
export const isVisibleSelector = state => state.popup.isVisible;
