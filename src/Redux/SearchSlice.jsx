import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "../Axios.js";

export const searchPhotos =  createAsyncThunk('search/photos',async (query) => {
    const response = await axiosClient.get(`/search/photos`,{
        params:{
            query:query,
            page:1,
            per_page:10,
        },

        }
    );
    // console.log(response,"search slice")
    return response.data ;

})

export const searchList = createSlice({
    name: 'search',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        page:1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchPhotos.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchPhotos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data =action.payload;
                state.page =state.page+1;

            })
            .addCase(searchPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })


    },
});

export default searchList.reducer;
