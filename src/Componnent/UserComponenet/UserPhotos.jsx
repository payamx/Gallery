import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserPhotos} from "../../Redux/UserPhotosSlice.jsx";
import {useParams} from "react-router-dom";

const UserPhotos = () => {
    const username=useParams();
    const dispatch=useDispatch();
    const {data,isLoading,error}=useSelector(state => state.userPhotos)

    useEffect(() => {

                dispatch(fetchUserPhotos('jemsahagun'))

    }, []);
    // console.log(data,"user photos in page")
    return (
        <div>
            photos
        </div>
    );
};

export default UserPhotos;
