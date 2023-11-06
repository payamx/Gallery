import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {axiosClient} from "../Axios.js";

export const fetchUserPhotos =  createAsyncThunk('api/UserPhotos',async (username) => {
    const response = await axiosClient.get(`users/${username}/photos`);
    console.log(response,"user photos slice ")
    return response.data ;

});

export const userPhotosSlice = createSlice({
    name: 'userPhotos',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPhotos.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserPhotos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default userPhotosSlice.reducer;
