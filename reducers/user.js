import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null, name: null, image: null },
};

export const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.name = action.payload.name;
      state.value.image = action.payload.image;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.name = null;
      state.value.image = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
