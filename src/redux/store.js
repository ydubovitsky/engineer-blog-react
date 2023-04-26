import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../services/localStorage/localStorageService';
import authReducer from './features/auth/auth.slice';
import postReducer from './features/post/post.slice';
import commentFormSlice from './features/comment-form/comment-form.slice';
import projectsSlice from './features/projects/projects.slice';
import popupSlice from './features/popup/popup.slice';
import feedbackSlice from './features/feedback/feedback.slice';
import PopupMiddleware from './middleware/popup.middleware';

const persistedState = loadState('auth');

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
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
