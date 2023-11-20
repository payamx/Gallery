import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "../Axios.js";
import axios from "axios";

export const searchPhotos = createAsyncThunk('search/photos', async (query) => {
    const response = await axiosClient.get(`/search/photos`, {
            params: {
                query: query,
                page: 1,
                per_page: 10,
            },

        }
    );
    console.log(response, "search slice photos")
    return response.data;

})
export const searchAuto = createAsyncThunk('search/Auto', async (query) => {
    const responseAuto = await axios.get(`https://unsplash.com/nautocomplete/${query}`);
    console.log(responseAuto, "Auto")
    return responseAuto.data;

})
export const searchCollections = createAsyncThunk('search/collections', async (query) => {
    const response = await axiosClient.get(`/search/collections`, {
            params: {
                query: query,
                page: 1,
                per_page: 10,
            },

        }
    );
    console.log(response, "search slice collections")
    return response.data;

})
export const searchUsers = createAsyncThunk('search/users', async (query) => {
    const response = await axiosClient.get(`/search/users`, {
            params: {
                query: query,
                page: 1,
                per_page: 10,
            },

        }
    );
    console.log(response, "search slice users")
    return response.data;

})


export const searchList = createSlice({
    name: 'search',
    initialState: {
        autoData:[],
        data: [],
        colData:[],
        userData:[],
        isLoading: false,
        error: null,
        page: 1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchPhotos.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchPhotos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.page += 1;

            })
            .addCase(searchPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


            .addCase(searchAuto.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchAuto.fulfilled, (state, action) => {
                state.isLoading = false;
                state.autoData = action.payload;

            })
            .addCase(searchAuto.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


            .addCase(searchCollections.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchCollections.fulfilled, (state, action) => {
                state.isLoading = false;
                state.colData = action.payload;
                state.page += 1;

            })
            .addCase(searchCollections.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


            .addCase(searchUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
                state.page += 1;

            })
            .addCase(searchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


    },
});

export default searchList.reducer;
