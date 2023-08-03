import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendRequestToRemoteServer } from '../../../services/api.service';
import { BASE_URL } from '../../../constants/constants';

// ------------------------------------- AsyncThunk -------------------------------------

/**
 * Add project to remote server
 */
export const addProject = createAsyncThunk("project/add", async (args, { getState }) => {
  const { auth } = getState();
  const { project } = args;

  const payload = {
    url: `${BASE_URL}/api/v1/project`,
    body: project,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': auth.authEntity.jwttoken
    }
  }
  return await sendRequestToRemoteServer(payload);
});

/**
 * Update project on a remote server
 */
export const updateProject = createAsyncThunk("project/update", async (args, { getState }) => {
  const { auth } = getState();
  const { project } = args;

  const payload = {
    url: `${BASE_URL}/api/v1/project`,
    body: project,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': auth.authEntity.jwttoken
    }
  }
  return await sendRequestToRemoteServer(payload);
});

/**
 * Get all Projects from a remote server
 */
export const getAllProjects = createAsyncThunk("project/getAll", async () => {
  const payload = {
    url: `${BASE_URL}/api/v1/project`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  return await sendRequestToRemoteServer(payload);
});

export const deleteProjectById = createAsyncThunk("project/deleteById", async (args, { getState }) => {
  const { auth } = getState();

  const payload = {
    url: `${BASE_URL}/api/v1/project/${args}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': auth.authEntity.jwttoken
    }
  }
  return await sendRequestToRemoteServer(payload);
})

// ------------------------------------- Slice -------------------------------------

const initialState = {
  projectEntities: [],
  status: 'idle',
  error: null
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(addProject.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.status = 'succeeded' //!TODO Все статусы вынести в КОНСТАНТЫ (loaded, updated, received and etc)
      })
      .addCase(addProject.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getAllProjects.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.projectEntities = [...action.payload];
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export default projectSlice.reducer;

// ------------------------------------- Selector -------------------------------------

export const projectEntitiesSelector = state => state.project.projectEntities;
