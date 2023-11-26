import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {axiosClient} from "../Axios.js";

export const fetchSingleCollection =  createAsyncThunk('api/SingleCollection',async ({id, page}) => {
    const response = await axiosClient.get(`/collections/${id}/photos`,{

        params:{
            page:page,

        }
    });
    // console.log(response," slice")
    return response.data ;

});

export const SingleCollectionSlice = createSlice({
    name: 'SingleCollection',
    initialState: {
        single: [],
        isLoading: false,
        error: null,
        page:1
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleCollection.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSingleCollection.fulfilled, (state, action) => {
                state.isLoading = false;
                state.single = [...state.single,...action.payload];
                state.page+=1;
            })
            .addCase(fetchSingleCollection.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default SingleCollectionSlice.reducer;
