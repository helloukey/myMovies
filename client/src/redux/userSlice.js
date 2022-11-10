import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  userStatus: false,
  userInfo: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    checkUser: (state) => {
      state.userStatus = true;
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) state.user = user;
      state.userStatus = false;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    }
  },
})

export const { setUser, removeUser, checkUser, setUserInfo } = userSlice.actions
export default userSlice.reducer