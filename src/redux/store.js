import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboardSlice";


const rootReducer = combineReducers({
   dashboard: dashboardReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
