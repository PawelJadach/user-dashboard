import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    users: userReducer
  },
});
