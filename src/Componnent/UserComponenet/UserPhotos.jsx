import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Card from "../card/Card.jsx";
import {fetchUserPhotos} from "../../Redux/UserPhotosSlice.jsx";

const UserPhotos = () => {
    const {username}=useParams();
    const dispatch =useDispatch()
    const {data, page, isLoading, error} = useSelector((state) => state.userPhotos);
    const fetch=( )=>{
        return  fetchUserPhotos({username:username,page: page})

    }


    return (
        <div>
            <Card data={data} page={page} isLoading={isLoading} error={error} fetch={fetch}/>
        </div>

    );
};

export default UserPhotos;
