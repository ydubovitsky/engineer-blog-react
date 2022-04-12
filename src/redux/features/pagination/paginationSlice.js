import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callApi from '../../requests/callApi';

// ------------------------------------- AsyncThunk -------------------------------------

/**
 * Get all page count
 */
export const getPostsCount = createAsyncThunk("pagination/getPostsCount", async () => {

  const payload = {
    path: '/api/post/count',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApi(payload);
  return response;
});

// ------------------------------------- Slice -------------------------------------
//TODO Переработать state
const initialState = {
  postPerPage: 5,
  currentPage: 0,
  maxPageCount: null,
  status: 'idle',
  error: null
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changeCurrentPage(state, { payload }) {
      switch (payload) {
        case 'next': {
          if (state.currentPage >= state.maxPageCount) break;
          state.currentPage += 1;
          break;
        }
        case 'previous': {
          if (state.currentPage === 0) break;
          state.currentPage -= 1;
          break;
        }
        case 'init': {
          state.currentPage = 0;
          break;
        }
        default: return state.currentPage;
      }
    },
    setCurrentPageNumber(state, { payload }) {
      state.currentPage = payload;
    }
  },
  extraReducers(builder) {
    builder
      //TODO Семантически неверная запись, имя не отображает функционал!
      .addCase(getPostsCount.fulfilled, (state, action) => {
        state.maxPageCount = Math.ceil(action.payload / state.postPerPage);
        state.status = 'succeeded';
      })
  }
});

export const { changeCurrentPage, setCurrentPageNumber } = paginationSlice.actions;

// ------------------------------------- Selectors -------------------------------------
export const currentPageSelector = state => state.pagination.currentPage;
export const maxPageCountSelector = state => state.pagination.maxPageCount;

export default paginationSlice.reducer;