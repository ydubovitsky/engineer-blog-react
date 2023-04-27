import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApiService from '../../../services/callApi/callApiService';
import { GITHUB_URL } from '../../../constants/constants';

// ------------------------------------- AsyncThunk -------------------------------------

export const getGitProfileInfo = createAsyncThunk("projects/getGitProfileInfo", async () => {
  const payload = {
    url: `${GITHUB_URL}/users/ydubovitsky/repos`,
    method: 'GET',
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
  projectEntities: [],
  status: 'idle',
  error: null
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getGitProfileInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getGitProfileInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.projectEntities = [...action.payload];
      })
      .addCase(getGitProfileInfo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export default projectsSlice.reducer;

// ------------------------------------- Selector -------------------------------------

export const projectsSelector = state => {
  return state.projects.projectEntities.map(repo => {
    return {
      id: repo.id,
      name: repo.name,
      url: repo.url,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      description: repo.description,
      topics: repo.topics
    }
  })
};
