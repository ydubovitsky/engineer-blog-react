import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendRequestToRemoteServer } from '../../../services/api.service';
import { BASE_URL } from '../../../constants/constants';

// ------------------------------------- AsyncThunk -------------------------------------

export const saveImageToRemoteServer = createAsyncThunk("image/saveImageToRemoteServer", async (args, { getState }) => {

  const formData = new FormData();
  formData.append('file', args)

  const payload = {
    url: `${BASE_URL}/api/v1/file`,
    body: formData,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  return await sendRequestToRemoteServer(payload);
});

// ----------------------------------- State -----------------------------------

const initialState = {
  imageSrc: null,
  status: 'idle',
  error: null
}

// ----------------------------------- Slice -----------------------------------

const imageSlice = createSlice({
  name: 'image',
  initialState,
  extraReducers(builder) {
    builder
      //! upload image
      .addCase(saveImageToRemoteServer.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(saveImageToRemoteServer.fulfilled, (state, action) => {
        state.imageSrc = action.payload
        state.status = 'succeeded'
      })
      .addCase(saveImageToRemoteServer.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
});

export default imageSlice.reducer;