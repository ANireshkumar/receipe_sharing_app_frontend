import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import createPostReducer from "../features/post/createPostSlice";
import confirmationReducer from "../features/dialog/confirmationSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    createPost: createPostReducer,
    confirmation: confirmationReducer,
  },
  // No need to add thunk manually
});

export default store;
