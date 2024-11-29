import { createSlice } from "@reduxjs/toolkit";

const screen = window.innerWidth
const initialState = {
  sidebarOpen: screen<768?false:true,
};


const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    sidebar(state, action) {
      state.sidebarOpen = action.payload;
    },
  },
});

export default dashboardSlice.reducer;
export const { sidebar } = dashboardSlice.actions;
