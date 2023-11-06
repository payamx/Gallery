import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserLikes} from "../../Redux/UserLikesSlice.jsx";
import {fetchUserCollections} from "../../Redux/UserCollectionSlice.jsx";
import {useParams} from "react-router-dom";

const UserCollection = () => {

    const username=useParams();
    const dispatch=useDispatch();
    const {data,isLoading,error}=useSelector(state => state.userCollection)

    useEffect(() => {

        dispatch(fetchUserCollections('writingandstyle'))

    }, []);
    console.log(data,"user collection in page")




    return (
        <div>
collection
        </div>
    );
};

export default UserCollection;
