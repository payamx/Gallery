import {configureStore} from "@reduxjs/toolkit";

import {apiSlice} from "./ApiSlice"
import {userSlice} from "./UserSlice"
import {userPhotosSlice} from "./UserPhotosSlice.jsx";
import {userPhotoLikesSlice} from "./UserLikesSlice.jsx";
import {userPhotoCollectionSlice} from "./UserCollectionSlice.jsx";
export const store = configureStore({
    reducer: {
        api: apiSlice.reducer,
        userData:userSlice.reducer,
        userPhotos:userPhotosSlice.reducer,
        userLikes:userPhotoLikesSlice.reducer,
        userCollection:userPhotoCollectionSlice.reducer,
    },
})

