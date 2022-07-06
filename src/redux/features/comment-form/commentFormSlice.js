import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApiService from '../../../services/callApi/callApiService';

// ------------------------------------- AsyncThunk -------------------------------------

export const addComment = createAsyncThunk("comment/add", async (body) => {
  const payload = {
    path: `/api/v1/post/${body.postId}/comments/add`,
    body: body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApiService(payload);
  return response;
});

// ------------------------------------- Slice -------------------------------------

const initialState = {
  commentForm: {
    name: null,
    message: null,
    email: null,
    website: null
  },
  status: 'idle',
  error: null
}

const commentFormSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(addComment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(addComment.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export default commentFormSlice.reducer;
