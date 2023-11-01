import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApiData =  createAsyncThunk('api/fetchData',async (page) => {
    const accesskey = 'qBERv54ET37AgBbC-h8dP01Jo-9PYTU_8__Y9vgnuUQ';
        // console.error(page,"async page ")
    const response = await axios.get('https://api.unsplash.com/collections/', {
        params: {
            client_id: accesskey,
            page: page,
            per_page: 8,
        },
    });
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
