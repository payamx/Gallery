import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import axios from 'axios';
import {axiosClient} from "../Axios.js";

export const fetchApiData =  createAsyncThunk('api/fetchData',async (page) => {
        // console.error(page,"async page ")
    const response = await axiosClient.get('/photos', {
        params: {
            page: page,
            per_page: 20,
        },
    });
    // console.log(response)
    return response.data ;

});


export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        page:1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchApiData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(fetchApiData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = [action.payload];
                state.page =state.page+1;
            })

            .addCase(fetchApiData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default apiSlice.reducer;
