import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/callApi';

// ------------------------------------- AsyncThunk -------------------------------------

/**
 * Get list of posts from remote server by page
 */
//TODO Исправить семантику метода
export const getPostPaging = createAsyncThunk("post/getPaging", async (_, { getState }) => {
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

/**
 * Get one post by id from remote server
 */
export const deletePostById = createAsyncThunk("post/getPostById", async (id, { getState }) => {
  const { auth } = getState();

  const payload = {
    path: `/api/post/delete/${id}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': auth.authEntity.jwttoken
    }
  }
  const response = await callApi(payload);
  return response;
});

/**
 * Get post list with Text Contains
 */
export const getPostsByTitle = createAsyncThunk("post/getPostsByTextContains", async (title, { getState }) => {
  const { auth } = getState();

  const payload = {
    path: `/api/post/search?title=${title}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': auth.authEntity.jwttoken
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
      .addCase(getPostPaging.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.postEntities.push(...action.payload);
      })
      .addCase(getPostPaging.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      //! Fetch post by id
      .addCase(getPostById.fulfilled, (state, action) => {
        state.postEntities.push(action.payload);
        state.status = 'succeeded';
      })
      //! Fetch Posts By TextContains
      .addCase(getPostsByTitle.fulfilled, (state, action) => {
        console.log(action.payload)
        state.postEntities = action.payload;
        state.status = 'succeeded';
      })
  }
});

// ------------------------------------- Selector -------------------------------------

export const postEntitiesSelector = state => state.post.postEntities;
export const postEntityByIdSelector = (state, id) => {
  return state.post.postEntities.filter(post => post.id == id)[0]; //FIXME НЕ строгое равенство
};

/**
 * !Метод возвращает массив вида [[имя категории: количество постов с данной категорией], [...], ...]
 */
export const arrayOfKeysAndValuesOfCategoriesAndTheirCountSelector = state => {
  const arr = state.post.postEntities.map(post => post.category);
  const categoriesWithCount = {};
  for (var i = 0; i < arr.length; i++) {
    categoriesWithCount[arr[i]] = 1 + (categoriesWithCount[arr[i]] || 0);
  }
  return Array.from(new Map(Object.entries(categoriesWithCount)));
}

export default postSlice.reducer;