import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {axiosClient} from "../Axios.js";

export const fetchUserCollections =  createAsyncThunk('api/UserCollection',async ({username, page}) => {
    const response = await axiosClient.get(`users/${username}/collections`,{

        params:{
            page:page,
            username:username,
            per_page:20,
        }
    })
    console.log(response,"user collection slice")
    return response.data ;
});

export const userPhotoCollectionSlice = createSlice({
    name: 'userPhotosCollection',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        page:1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserCollections.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserCollections.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = [...state.data ,...action.payload];
                state.page+=1;
            })
            .addCase(fetchUserCollections.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default userPhotoCollectionSlice.reducer;
