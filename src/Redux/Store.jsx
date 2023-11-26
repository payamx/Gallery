import {configureStore} from "@reduxjs/toolkit";

import {apiSlice} from "./ApiSlice"
import {userSlice} from "./UserSlice"
import {userPhotosSlice} from "./UserPhotosSlice.jsx";
import {userPhotoLikesSlice} from "./UserLikesSlice.jsx";
import {userPhotoCollectionSlice} from "./UserCollectionSlice.jsx";
import {TopicsList} from "./UserTopicsSlice.jsx";
import {searchList} from "./SearchSlice.jsx";
import {TopicBanner} from "./TopicBannerSlice.jsx";
import { listCollectionSlice} from "./ListCollctionSlice.jsx";
import {SingleCollectionSlice} from "./SingleCollection.jsx";
export const store = configureStore({
    reducer: {
        api: apiSlice.reducer,
        userInfo:userSlice.reducer,
        TopicsList:TopicsList.reducer,
        searchPhotos:searchList.reducer,
        TopicBanner:TopicBanner.reducer,
        userPhotos:userPhotosSlice.reducer,
        userLikes:userPhotoLikesSlice.reducer,
        userCollection:userPhotoCollectionSlice.reducer,
        listCollection:listCollectionSlice.reducer,
        singleCollection:SingleCollectionSlice.reducer,
    },
})

