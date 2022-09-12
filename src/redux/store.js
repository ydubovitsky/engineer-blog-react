import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../services/localStorage/localStorageService';
import authReducer from './features/auth/authSlice';
import postReducer from './features/post/postSlice';
import postFormSlice from './features/post-form/postFormSlice';
import commentFormSlice from './features/comment-form/commentFormSlice';
import projectsSlice from './features/projects/projectsSlice';
import popupSlice from './features/popup/popup.slice';
import feedbackSlice from './features/feedback/feedback.slice';
import PopupMiddleware from './middleware/popup.middleware';

const persistedState = loadState('auth');

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    postForm: postFormSlice,
    commentForm: commentFormSlice,
    projects: projectsSlice,
    popup: popupSlice,
    feedback: feedbackSlice
  },
  preloadedState: {
    auth: persistedState
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PopupMiddleware)
});

//TODO Доработать, чтобы можно было передавать объект с множеством полей!
//! Save auth state
store.subscribe(() => {
  saveState('auth', store.getState().auth);
});

export default store;
