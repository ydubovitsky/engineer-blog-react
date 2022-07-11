import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../services/localStorage/localStorageService';
import authReducer from './features/auth/authSlice';
import postReducer from './features/post/postSlice';
import postFormSlice from './features/post-form/postFormSlice';
import commentFormSlice from './features/comment-form/commentFormSlice';
import projectsSlice from './features/projects/projectsSlice';

const persistedState = loadState('auth');

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    postForm: postFormSlice,
    commentForm: commentFormSlice,
    projects: projectsSlice
  },
  preloadedState: {
    auth: persistedState
  }
});

//TODO Доработать, чтобы можно было передавать объект с множеством полей!
//! Save auth state
store.subscribe(() => {
  saveState('auth', store.getState().auth);
});

export default store;
