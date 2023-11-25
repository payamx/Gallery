import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {axiosClient} from "../Axios.js";

export const fetchUserPhotos =  createAsyncThunk('api/UserPhotos',async ({username,page}) => {
    const response = await axiosClient.get(`users/${username}/photos`,{

        params:{
            page:page,
            username:username,
        }
    })
    // console.log(response,"user photos slice ")
    // console.log(page,"user photos slice page ")
    return response.data ;

});

export const userPhotosSlice = createSlice({
    name: 'userPhotos',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        page:1,
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
                state.data = [...state.data,...action.payload];
                state.page += 1;
            })

            .addCase(fetchUserPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default userPhotosSlice.reducer;
