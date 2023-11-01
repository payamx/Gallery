import {configureStore} from "@reduxjs/toolkit";

import {apiSlice} from "./ApiSlice"
export const store = configureStore({
    reducer: {
        api: apiSlice.reducer,


    },
})