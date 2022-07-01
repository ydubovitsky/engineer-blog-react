import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApiService from '../../../services/callApi/callApiService';

const MAX_COUNT_OF_STATISTIC_FIELDS = 5;

// ------------------------------------- AsyncThunk -------------------------------------

/**
 * Get list of posts from remote server by page
 */
//TODO Исправить семантику метода
export const getPostPaging = createAsyncThunk("post/getPaging", async (_, { getState }) => {
  const { pagination } = getState();

  // Checking
  if (checkIfPostsByPageAlreadyLoadedSelector(getState())) return;

  const payload = {
    path: `/api/v1/post?page=${pagination.currentPage}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApiService(payload);
  return response;
});

/**
 * Get one post by id from remote server
 */
export const getPostById = createAsyncThunk("post/getPostById", async (postId, { getState }) => {

  // Checking
  if (checkIfPostWithIdAlreadyInStateSelector(getState(), postId)) return; //TODO Можно ли просто null?

  const payload = {
    path: `/api/v1/post?id=${postId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApiService(payload);
  return response;
});

/**
 * Get one post by id from remote server
 */
export const deletePostById = createAsyncThunk("post/getPostById", async (id, { getState }) => {
  const { auth } = getState();

  const payload = {
    path: `/api/v1/post/delete/${id}`,
    method: 'DELETE',
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
 * Get post list with Text Contains
 */
export const getPostsByTitle = createAsyncThunk("post/getPostsByTextContains", async (title, { getState }) => {
  const { auth } = getState();

  const payload = {
    path: `/api/v1/post/search?title=${title}`,
    method: 'GET',
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
 * Get post list with Text Contains
 */
export const increasePostViewById = createAsyncThunk("post/increasePostViewById", async (id) => {

  const payload = {
    path: `/api/v1/post/view/${id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApiService(payload);
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
        state.postEntities = action.payload;
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
  return Array.from(new Map(Object.entries(categoriesWithCount))).slice(0, MAX_COUNT_OF_STATISTIC_FIELDS);
}

/**
 * !Метод возвращает массив объектов вида {id: ..., title: ..., views: ...}
 */
export const mostPopularPostsSelector = state => {
  return state.post.postEntities
    .slice()
    .sort((a, b) => a.views - b.views)
    .reverse()
    .map(post => {
      return {
        id: post.id,
        title: post.title,
        views: post.views
      }
    })
    .slice(0, MAX_COUNT_OF_STATISTIC_FIELDS);
}

export const commentListForPostByPostId = (state, postId) => {
  //TODO Разобраться с ParseInt
  return state.post.postEntities.filter(post => post.id === parseInt(postId))?.map(post => post.comments)[0];
}

/**
 * If current state already includes posts for this page - true or false against.
 * @param {*} state 
 * @returns true / false
 */
export const checkIfPostsByPageAlreadyLoadedSelector = state => {
  const { post, pagination } = state;
  return post.postEntities.includes(post => post.id === (pagination.currentPage * pagination.postPerPage) + 1);
}

export const checkIfPostWithIdAlreadyInStateSelector = (state, postId) => {
  const { post } = state;
  return post.postEntities.includes(post => post.id === postId);
}

export default postSlice.reducer;
