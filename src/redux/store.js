import { configureStore } from '@reduxjs/toolkit';
import { loadStateByNameFromLocalStorage, saveStateToLocalStorage } from '../shared/services/local-storage.service';
import authReducer from './features/auth/auth.slice';
import postReducer from './features/post/post.slice';
import commentFormSlice from './features/comment-form/comment-form.slice';
import projectSlice from './features/project/project.slice';
import popupSlice from './features/popup/popup.slice';
import feedbackSlice from './features/feedback/feedback.slice';
import imageSlice from './features/image/image.slice';
import PopupMiddleware from './middleware/popup.middleware';

const persistedState = loadStateByNameFromLocalStorage('auth');

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    commentForm: commentFormSlice,
    project: projectSlice,
    popup: popupSlice,
    feedback: feedbackSlice,
    image: imageSlice
  },
  preloadedState: {
    auth: persistedState
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PopupMiddleware)
});

//TODO Доработать, чтобы можно было передавать объект с множеством полей!
//! Save auth state
store.subscribe(() => {
  saveStateToLocalStorage('auth', store.getState().auth);
});

export default store;
