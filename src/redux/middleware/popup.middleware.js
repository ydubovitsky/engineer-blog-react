import { showPopup } from "../features/popup/popup.slice";

const POPUP_PROPERTIES = {
  loginRejected: {
    message: "LOGIN ERROR",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  invalidateLoggedInUser: {
    message: "You are logged out from your account",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  postFormAddFulfilled: {
    message: "Article successfully created",
    styles: {
      color: "white",
      backgroundColor: "#01C9F7"
    }
  },
  postDeletePostByIdFulfilled: {
    message: "Article successfully deleted",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  updateUserDataUpdated: {
    message: "User data successfully updated",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  authRegistrationFulfilled: {
    message: "Congratulation! You have registered successfully yet. Now, you can come in!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  updateUserDataRejected: {
    message: "User data updating error",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  setFavoriteFulfilled: {
    message: "Favorite!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  postFormUpdatedFulfilled: {
    message: "Article updated!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  commentAddFulfilled: {
    message: "Your comment added!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  }
}

const PopupMiddleware = ({ dispatch, getState }) => next => action => {
  const { type } = action;

  switch (type) {
    case 'auth/auth/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.loginRejected));
      break;
    }
    case 'auth/invalidateLoggedInUser': {
      dispatch(showPopup(POPUP_PROPERTIES.invalidateLoggedInUser));
      break;
    }
    case 'postForm/add/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.postFormAddFulfilled));
      break;
    }
    case 'post/deletePostById/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.postDeletePostByIdFulfilled));
      break;
    }
    case 'card/setFavorite/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.setFavoriteFulfilled));
      break;
    }
    case 'postForm/update/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.postFormUpdatedFulfilled));
      break;
    }
    case 'auth/updateUserData/updated': {
      dispatch(showPopup(POPUP_PROPERTIES.updateUserDataUpdated));
      break;
    }
    case 'auth/updateUserData/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.updateUserDataRejected));
      break;
    }
    case 'auth/registration/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.authRegistrationFulfilled));
      break;
    }
    case 'comment/add/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.commentAddFulfilled));
      break;
    }
    default: break;
  }
  next(action);
}

export default PopupMiddleware;