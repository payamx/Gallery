import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Card from "../card/Card.jsx";
import {fetchUserLikes} from "../../Redux/UserLikesSlice.jsx";

const UserLikes = () => {

    const dispatch=useDispatch()
    const {username}=useParams();
    const {data, page, isLoading, error} = useSelector((state) => state.userLikes);

    const fetch=( )=>{
       return  fetchUserLikes({username:username, page:page})

    }



    // console.log(data," user like log")

    return (

        <div>



                <Card data={data} page={page} isLoading={isLoading} error={error} fetch={fetch} />





        </div>

    );
};

export default UserLikes;
