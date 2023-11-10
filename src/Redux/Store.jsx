import {configureStore} from "@reduxjs/toolkit";

import {apiSlice} from "./ApiSlice"
import {userSlice} from "./UserSlice"
import {userPhotosSlice} from "./UserPhotosSlice.jsx";
import {userPhotoLikesSlice} from "./UserLikesSlice.jsx";
import {userPhotoCollectionSlice} from "./UserCollectionSlice.jsx";
import {TopicsList} from "./UserTopicsSlice.jsx";
import {searchList} from "./SearchSlice.jsx";
export const store = configureStore({
    reducer: {
        api: apiSlice.reducer,
        userData:userSlice.reducer,
        TopicsList:TopicsList.reducer,
        searchPhotos:searchList.reducer,
        // userPhotos:userPhotosSlice.reducer,
        // userLikes:userPhotoLikesSlice.reducer,
        // userCollection:userPhotoCollectionSlice.reducer,
    },
})

