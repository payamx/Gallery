import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {axiosClient} from "../Axios.js";
import axios from "axios";
import {useEffect} from "react";

export const fetchUser =  createAsyncThunk('api/userData',async (username,page) => {
    const response = await axiosClient.get(`users/${username}`,{
        params: {
            page: page,
            per_page: 20,
        },
    });
    // console.log(response,"userslice data")
    return response.data ;

});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userinfo: [],
        infoLoading: false,
        infoError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.infoLoading = true;
                state.infoError = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.infoLoading = false;
                state.userinfo = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.infoLoading = false;
                state.infoError = action.error.message;
            });
    },
});

export default userSlice.reducer;
