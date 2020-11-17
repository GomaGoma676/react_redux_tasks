import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "../features/login/loginSlice";
import taskReducer from "../features/task/taskSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    task: taskReducer,
  },
});
