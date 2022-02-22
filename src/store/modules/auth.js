import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Api
import { getProfile } from "api/profile";
import { getToken } from "helpers/auth";

// Async thunk
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { getState }) => {   
    if (getToken()) {    
    
      const { auth } = getState();     
      
      if (auth.user && auth.user.email) {      
       
        return auth.user;
      }    

      return await getProfile();
    }

    return Promise.reject();
  }
);

export const auth = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, { payload }) => {     
      
      state.user = payload;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser} = auth.actions

export default auth.reducer;
