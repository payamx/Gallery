import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserLikes} from "../../Redux/UserLikesSlice.jsx";
import {useParams} from "react-router-dom";

const UserLikes = () => {
    const username=useParams();
    const dispatch=useDispatch();
    const {data,isLoading,error}=useSelector(state => state.userLikes)

    useEffect(() => {

        dispatch(fetchUserLikes('writingandstyle'))

    }, []);
    console.log(data,"user likes in page")


    return (
        <div>
likes
        </div>
    );
};

export default UserLikes;
