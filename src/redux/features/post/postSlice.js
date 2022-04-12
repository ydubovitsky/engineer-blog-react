import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/callApi';

// ------------------------------------- AsyncThunk -------------------------------------

/**
 * Get list of posts from remote server by page
 */
//TODO Исправить семантику метода
export const getPostPaging = createAsyncThunk("post/getPaging", async ({ getState }) => {
  const { post, pagination } = getState();

  //FIXME checking if data already loaded 
  const found = post.postEntities.find(post => 
    post.id === (pagination.currentPage * pagination.postPerPage) + 1);
  if (found) {
    console.log('Data already loaded!');
    return null;
  }

  const payload = {
    path: `/api/post?page=${pagination.currentPage}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApi(payload);
  return response;
});

/**
 * Get one post by id from remote server
 */
export const getPostById = createAsyncThunk("post/getPostById", async (postId, { getState }) => {
  const { post } = getState();

  //FIXME checking if data already loaded 
  const found = post.postEntities.find(post => post.id === postId);
  if (found) {
    console.log('Data already loaded!');
    return found;
  }

  const payload = {
    path: `/api/post?id=${postId}`,
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
  postEntities: [], //! Это массив объектов
  status: 'idle',
  error: null
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //! Fetch paging posts
      .addCase(getPostPaging.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPostPaging.fulfilled, (state, action) => { //TODO Обрати внимание, что этот метод не отрабатывает!
        state.status = 'succeeded';
        const { pagingPosts } = action.payload;

        state.postEntities.push(...pagingPosts);
      })
      .addCase(getPostPaging.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      //! Fetch post by id
      //TODO Доработать бекэнд чтобы под именным объектом возвращал все
      .addCase(getPostById.fulfilled, (state, action) => { 
        state.postEntities.push(action.payload);
        state.status = 'succeeded';
      })
  }
});

// ------------------------------------- Selector -------------------------------------

export const postEntitiesSelector = state => state.post.postEntities;
export const postEntityByIdSelector = (state, id) => {
  const postById = state.post.postEntities.filter(post => post.id == id)[0]; //FIXME НЕ строгое равенство

  return postById;
};

export default postSlice.reducer;