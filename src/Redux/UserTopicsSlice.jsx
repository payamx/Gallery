import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "../Axios.js";


export const fetchTopicsPhoto =  createAsyncThunk('topic/topicsPhoto',async ({slug, page}) => {
    const response = await axiosClient.get(`topics/${slug}/photos`,{
        params:{
            page:page,
            per_page:20
        }
    });
    // console.log(response,"Topic slug slice")
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
                state.data =[...state.data,action.payload];
                state.page +=1;

            })
            .addCase(fetchTopicsPhoto.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


    },
});

export default TopicsList.reducer;
