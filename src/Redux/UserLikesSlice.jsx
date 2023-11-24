import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {axiosClient} from "../Axios.js";

export const fetchUserLikes =  createAsyncThunk('api/UserLikes',async ({username, page}) => {
    const response = await axiosClient.get(`users/${username}/likes`,{
        params:{
            page:page,
            username:username,
            per_page:20,
        }
    });
    console.log(response,"user Like slice")
    return response.data ;

});

export const userPhotoLikesSlice = createSlice({
    name: 'userPhotosLikes',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        page:1
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserLikes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserLikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = [ ...state.data, action.payload];
                state.page+=1;
            })
            .addCase(fetchUserLikes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default userPhotoLikesSlice.reducer;
