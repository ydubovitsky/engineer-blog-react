import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApiService from '../../../services/callApi/callApiService';
import { BASE_URL } from '../../url-const/url-const.const';

// ------------------------------------- AsyncThunk -------------------------------------

export const login = createAsyncThunk("auth/login", async (body) => {
  const payload = {
    url: `${BASE_URL}/login`,
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

export const registration = createAsyncThunk("auth/registration", async (body) => {
  const payload = {
    url: `${BASE_URL}/api/v1/user/registration`,
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
  authEntity: {
    username: null,
    jwttoken: null,
    roles: null,
    firstName: null,
    lastName: null,
    createdDate: null,
    about: null,
    contacts: null
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
      //! Login
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authEntity = { ...action.payload };
        if (!state.authEntity.username) state.status = 'failed'; //TODO Что это?
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      //! Registration
      .addCase(registration.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(registration.fulfilled, (state, action) => {
        //TODO Вынести статусы в константы?
        state.status = 'created'
      })
      .addCase(registration.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const { logout } = authSlice.actions;

// ------------------------------------- Selector -------------------------------------
export const authSelector = state => state.auth;
export const authStatusSelector = state => state.auth.status;
export const authEntitySelector = state => state.auth.authEntity;
//TODO SUPER_ADMIN Only? MB ADMIN?
export const isAuthEntitySuperAdminSelector = state => state.auth.authEntity.roles?.includes('SUPER_ADMIN');

export default authSlice.reducer;
