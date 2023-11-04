import {configureStore} from "@reduxjs/toolkit";

import {apiSlice} from "./ApiSlice"
import {userSlice} from "./UserSlice"
export const store = configureStore({
    reducer: {
        api: apiSlice.reducer,
        userData:userSlice.reducer


    },
})

