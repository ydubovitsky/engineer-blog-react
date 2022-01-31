import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/callApi';

// ------------------------------------- AsyncThunk -------------------------------------

export const addPost = createAsyncThunk("post/add", async (args, { getState }) => {
  const { post } = getState();

  const payload = {
    path: '/api/post/add',
    requestBody: post.newPostEntity,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApi(payload);
  return response;
});

// ------------------------------------- Slice -------------------------------------

const initialState = {
  newPostEntity: {
    id: null,
    imageSource: null,
    category: null,
    title: null,
    date: null,
    author: null,
    disclosure: null,
    description: null,
    subPosts: [], //! Это массив объектов
    status: 'idle',
    error: null
  },
  postEntities: [], //! Это массив объектов
  status: 'idle',
  error: null
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fillPostMainContent(state, { payload }) {
      state.newPostEntity = {
        ...state.newPostEntity,
        ...payload
      }
    },
    fillPostSubPostContent(state, { payload}) {
      const { index, subPost } = payload;
      state.newPostEntity.subPosts[index] = subPost;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { fillPostMainContent, fillPostSubPostContent } = postSlice.actions;

// ------------------------------------- Selector -------------------------------------

export default postSlice.reducer;