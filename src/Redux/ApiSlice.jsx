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


export const fetchUserPhotos =  createAsyncThunk('api/UserPhotos',async (username,page) => {
    const response = await axiosClient.get(`users/${username}/photos`,{
        params: {
            page: page,
                per_page: 20,
        },
    });
    console.log(response,"user photos slice ")
    return response.data ;

});
export const fetchUserLikes =  createAsyncThunk('api/UserLikes',async (username,page) => {
    const response = await axiosClient.get(`users/${username}/likes`,{
        params: {
            page: page,
            per_page: 20,
        },
    });
    console.log(response,"user Like slice")
    return response.data ;

});
export const fetchUserCollections =  createAsyncThunk('api/UserCollection',async (username) => {
    const response = await axiosClient.get(`users/${username}/collections`);
    console.log(response,"user collection slice")
    return response.data ;

})
export const fetchListTopics =  createAsyncThunk('api/topics',async () => {
    const response = await axiosClient.get(`topics`);
    // console.log(response,"user Topic list slice")
    return response.data ;

})


export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        page:1,
        topics:[],
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
                state.data = [...state.data,action.payload];
                state.page =state.page+1;
            })

            .addCase(fetchApiData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(fetchUserPhotos.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserPhotos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = [...state.data,action.payload];
                state.page =state.page+1;

            })
            .addCase(fetchUserPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(fetchUserLikes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserLikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = [...state.data,action.payload];
                state.page =state.page+1;

            })
            .addCase(fetchUserLikes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(fetchUserCollections.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserCollections.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data =[...state.data,action.payload];
                state.page =state.page+1;

            })
            .addCase(fetchUserCollections.rejected, (state, action) => {
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
