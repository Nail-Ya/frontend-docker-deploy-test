import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadTestData, login } from "./ActionCreators";
import { removeRefreshToken, removeToken } from "utils/localStorage";

interface UserState {
  isLoggedIn: boolean;
  isLoginLoading: boolean;
  testData: any;
}

const initialState: UserState = {
  isLoggedIn: true,
  isLoginLoading: false,
  testData: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload
    },

    signOut(state) {
      state.isLoggedIn = false;
      removeToken();
      removeRefreshToken();
    },
  },
  extraReducers: {
    [login.fulfilled.type]: (state) => {
      state.isLoginLoading = false;
      state.isLoggedIn = true;
    },
    [login.pending.type]: (state) => {
      state.isLoginLoading = true;
    },
    [login.rejected.type]: (state) => {
      state.isLoginLoading = false;
      state.isLoggedIn = false;
    },

    [loadTestData.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.testData = action.payload;
    },
    [loadTestData.pending.type]: (state) => {
      // state.isLoginLoading = true;
    },
    [loadTestData.rejected.type]: (state) => {
      // state.isLoginLoading = false;
      // state.isLoggedIn = false;
    },
  }
})

export const {
  setLoggedIn,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
