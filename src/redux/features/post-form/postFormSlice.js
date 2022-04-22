import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApiService from '../../../services/callApi/callApiService';
import { getAllNamedFilesFromForm } from '../../../utils/formData-utils';

// ------------------------------------- AsyncThunk -------------------------------------

/**
 * Add post to remote server
 */
export const addPost = createAsyncThunk("postForm/add", async (args, { getState }) => {
  const { auth } = getState();
  const { refForm, newPost } = args;

  //FIXME Вынести в отдельный метод
  const files = getAllNamedFilesFromForm(refForm);
  const body = new FormData();
  files.forEach(file => body.append('files', file));
  body.append('newPost', JSON.stringify(newPost));

  const payload = {
    path: '/api/post/add',
    body: body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': auth.authEntity.jwttoken
    }
  }
  const response = await callApiService(payload);
  return response;
});

/**
 * Add post to remote server
 */
export const updatePost = createAsyncThunk("postForm/update", async (args, { getState }) => {
  const { auth } = getState();
  const { refForm, newPost } = args;

  //FIXME Вынести в отдельный метод
  const files = getAllNamedFilesFromForm(refForm);
  const body = new FormData();
  files.forEach(file => body.append('files', file));
  body.append('newPost', JSON.stringify(newPost));

  const payload = {
    path: '/api/post/update',
    body: body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': auth.authEntity.jwttoken
    }
  }
  const response = await callApiService(payload);
  return response;
});

// ------------------------------------- Slice -------------------------------------
//TODO Переработать state
const initialState = {
  postFormEntity: {
    id: null,
    postImage: null,
    category: null,
    title: null,
    date: null,
    author: null,
    disclosure: null,
    description: null,
    subPosts: [], //! Это массив объектов
  },
  status: 'idle',
  error: null
}

const postFormSlice = createSlice({
  name: 'postForm',
  initialState,
  reducers: {
    fillPostMainContent(state, { payload }) {
      state.postFormEntity = {
        ...state.postFormEntity,
        ...payload
      }
    },
    fillPostSubPostContent(state, { payload }) {
      const { index, subPost } = payload;
      state.postFormEntity.subPosts[index] = subPost;
    },
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

export const { fillPostMainContent, fillPostSubPostContent } = postFormSlice.actions;

// ------------------------------------- Selector -------------------------------------

export const postFormEntitySelector = state => state.postForm.postFormEntity;

export default postFormSlice.reducer;
