import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {axiosClient} from "../Axios.js";

export const fetchListCollection =  createAsyncThunk('api/listCollection',async (page) => {
    const response = await axiosClient.get(`/collections`,{
        params:{
            page:10,
            per_page:10
        }
    });
    // console.log(response,"list collection slice")
    return response.data ;

});

export const listCollectionSlice = createSlice({
    name: 'listCollection',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListCollection.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchListCollection.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchListCollection.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default listCollectionSlice.reducer;
