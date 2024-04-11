import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name:'user',
    initialState:{
        loading:false,
        user:{},
        error:null
    },
    reducers:{
        createUserStart: (state) => {
            state.loading = true;
          },
          createUserSuccess: (state, action) => {
            state.loading = false;
          },
          createUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },

          
          loadUserStart: (state) => {
            state.loading = true;
          },
          loadUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
          },
          loadUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },


          loginUserStart: (state) => {
            state.loading = true;
          },
          loginUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
          },
          loginUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },


          logoutUserStart: (state) => {
            state.loading = true;
          },
          logoutUserSuccess: (state, action) => {
            state.loading = false;
            state.user = null;
          },
          logoutUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          
    }
})

export const { createUserStart, createUserSuccess, createUserFailure,
  loginUserFailure, loginUserSuccess, loginUserStart,
  logoutUserStart,logoutUserSuccess,logoutUserFailure,
  loadUserStart,loadUserSuccess,loadUserFailure} = userSlice.actions;

export default userSlice.reducer;