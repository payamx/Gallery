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
        fetchUserLikes(username)

    }

    useEffect(() => {
        let memo =true
        dispatch(fetchUserLikes(username))
        return()=>{memo=false}
    }, []);

    console.log(data.map(item=>item.urls)," user like log")

    return (

        <div>
            {/*{data&&*/}
            {/*    data?.flat().map((item,index)=>*/}
            {/*    <div>*/}
            {/*        <img key={index} src={item?.urls?.small} />*/}
            {/*    </div>*/}
            {/*)}*/}

            <Card data={data} page={page} isLoading={isLoading} error={error} fetch={fetch} />
        </div>

    );
};

export default UserLikes;
