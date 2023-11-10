import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "../Axios.js";

export const fetchTopicsPhoto =  createAsyncThunk('topic/topicsPhoto',async (slug) => {
    const response = await axiosClient.get(`topics/${slug}/photos`);
    console.log(response,"Topic slug slice")
    return response.data ;

})

export const TopicsList = createSlice({
    name: 'topic',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        page:1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopicsPhoto.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTopicsPhoto.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data =[action.payload];
                state.page =state.page+1;

            })
            .addCase(fetchTopicsPhoto.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


    },
});

export default TopicsList.reducer;
