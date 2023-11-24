import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import axios from 'axios';
import {axiosClient} from "../Axios.js";

export const ApiData = createAsyncThunk('api/fetchData', async (page) => {
    // console.error(page,"async page ")
    const response = await axiosClient.get('/photos', {
        params: {
            page: page,
            per_page: 10,
        },
    });

    // console.log(response.data,"api")
    // console.log(page,"my page")
    return response.data;

});


export const fetchListTopics = createAsyncThunk('api/topics', async () => {
    const response = await axiosClient.get(`topics`);
    // console.log(response,"user Topic list slice")
    return response.data;

})

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        page: 1,
        topics: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(ApiData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(ApiData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = [...state.data, action.payload];
                state.page += 1;
            })

            .addCase(ApiData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


            .addCase(fetchListTopics.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchListTopics.fulfilled, (state, action) => {
                state.isLoading = false;
                state.topics = action.payload;

            })
            .addCase(fetchListTopics.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


    },
});

export default apiSlice.reducer;
