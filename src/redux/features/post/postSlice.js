import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApiService from '../../../services/callApi/callApiService';
import { BASE_URL } from '../../url-const/url-const.const';

// ------------------------------------- AsyncThunk -------------------------------------

/**
 * Get list of posts from remote server by page
 */
//TODO Исправить семантику метода
export const getPostPaging = createAsyncThunk("post/getPaging", async (page, { getState }) => {
  const { post } = getState();

  // Checking
  if (isArrayContainElementWithIndex(post.postEntities, page * post.size - 1)) {
    console.log(`Post state already contains data for page - ${page}`);
    return null;
  };

  const payload = {
    url: `${BASE_URL}/api/v1/post?page=${page}&size=${post.size}`,
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
  const { post } = getState();

  // Checking
  if (isArrayContainObjectWithId(post.postEntities, postId)) return; //TODO Можно ли просто null?

  const payload = {
    url: `${BASE_URL}/api/v1/post?id=${postId}`,
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
export const deletePostById = createAsyncThunk("post/deletePostById", async (id, { getState }) => {
  const { auth } = getState();

  const payload = {
    url: `${BASE_URL}/api/v1/post/delete/${id}`,
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
 * Get post list by Title
 */
export const getPostsByTitle = createAsyncThunk("post/getPostsByTextContains", async (title, { getState }) => {
  const { auth } = getState();

  const payload = {
    url: `${BASE_URL}/api/v1/post/search?title=${title}`,
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
    url: `${BASE_URL}/api/v1/post/view/${id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApiService(payload);
  return response;
});

/**
 * Get post list with Text Contains
 */
export const getPostsCount = createAsyncThunk("post/getPostsCount", async () => {

  const payload = {
    url: `${BASE_URL}/api/v1/post/count`,
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
//TODO Переработать state
const initialState = {
  postEntities: [], //! Это массив объектов
  postsCount: {
    count: null,
    status: 'idle',
    error: null
  },
  isPostDeleted: 'idle',
  size: 4, // 0 is also considered... [0, 1, 2, 3, 4]
  sizeOfStatField: 4, //MOST POPULAR, CATEGORIES
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
        state.postEntities = [...state.postEntities, ...action.payload.posts];
        state.postsCount = {
          count: action.payload.totalPostsCount,
          status: 'succeeded',
          error: null
        }
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
  return Array.from(new Map(Object.entries(categoriesWithCount))).slice(0, state.post.sizeOfStatField);
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
    .slice(0, state.post.sizeOfStatField);
}

export const commentListForPostByPostIdSelector = (state, postId) => {
  //TODO Разобраться с ParseInt
  return state.post.postEntities.filter(post => post.id === parseInt(postId))?.map(post => post.comments)[0];
}

export const postsCountSelector = (state) => {
  return state.post.postsCount.count;
}

export const maxPageCountSelector = (state) => {
  return Math.ceil(state.post.postsCount.count / state.post.size);
}

export const pageSizeSelector = state => {
  return state.post.size;
}

// ------------------------------------- Util Functions -------------------------------------

//FIXME Переделать тело метода
const isArrayContainElementWithIndex = (array, index) => {
  if (array === undefined) {
    return false;
  }
  if (array[index] === undefined) {
    return false;
  }
  return true;
}

const isArrayContainObjectWithId = (array, id) => {
  if (array !== undefined) {
    return array.some(element => element.id === id);
  }
  return false;
}

const mapPayloadToObject = (payload) => {
  return payload.reduce((prev, cur) => {
    return {
      ...prev,
      [cur.id]: cur
    }
  }, {});
}

// ------------------------------------- Reducer Export Default -------------------------------------
export default postSlice.reducer;
