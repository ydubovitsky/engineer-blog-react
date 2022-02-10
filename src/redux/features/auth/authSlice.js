import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/callApi';

// ------------------------------------- AsyncThunk -------------------------------------

export const login = createAsyncThunk("auth/login", async (body) => {
  const payload = {
    path: '/login',
    body: body,
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
  authEntity: {
    username: null,
    jwttoken: null
  },
  status: 'idle',
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout() {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authEntity.username = action.payload.username;
        state.authEntity.jwttoken = action.payload.jwttoken;
        if (!state.authEntity.username) state.status = 'failed';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const { logout } = authSlice.actions;

// ------------------------------------- Selector -------------------------------------
export const authSelector = state => state.auth;
export const authEntitySelector = state => state.auth.authEntity;

export default authSlice.reducer;