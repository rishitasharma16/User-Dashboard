import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboardSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
