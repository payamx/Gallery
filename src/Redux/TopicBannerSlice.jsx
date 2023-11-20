import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "../Axios.js";


export const fetchTopicBanner =  createAsyncThunk('topic/topicBanner',async (slug) => {
    const response = await axiosClient.get(`topics/${slug}`,{
        params:{
            per_page:20,
        }

    });
    console.log(response,"banner topic slice")
    return response.data ;

})

export const TopicBanner = createSlice({
    name: 'topicBanner',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopicBanner.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTopicBanner.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data =action.payload;

            })
            .addCase(fetchTopicBanner.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


    },
});

export default TopicBanner.reducer;
