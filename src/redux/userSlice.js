import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      isAdmin: false,
    },
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      console.log("action", action.payload);
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginFailure, loginSuccess } = userSlice.actions;
export default userSlice.reducer;

// bug fix : when i delete "persist:root" key from the localstorage in browser , then the app crashes : isAdmin is not defined
//so i had to change the initialstate object and insert
//  currentUser: {
//       isAdmin: false,
//     },
