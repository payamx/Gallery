import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {axiosClient} from "../Axios.js";
import axios from "axios";
import {useEffect} from "react";

export const fetchUser =  createAsyncThunk('api/userData',async (username) => {
    const response = await axiosClient.get(`users/${username}`);
    console.log(response,"userslice data")
    return response.data ;

});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
