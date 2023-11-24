import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendRequestToRemoteServer } from '../../../shared/services/api.service';
import { BASE_URL } from '../../../shared/constants/constants';

// ------------------------------------- AsyncThunk -------------------------------------

export const feedbackMessageAdd = createAsyncThunk("feedback/message/add", async (body) => {
  const payload = {
    url: `${BASE_URL}/api/v1/feedback/message/add`,
    body: body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  return await sendRequestToRemoteServer(payload);
});

// ------------------------------------- Slice -------------------------------------

const initialState = {
  feedbackForm: {
    name: null,
    message: null,
    email: null,
  },
  status: 'idle',
  error: null
}

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(feedbackMessageAdd.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(feedbackMessageAdd.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(feedbackMessageAdd.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export default feedbackSlice.reducer;
