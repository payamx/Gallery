import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchUserCollections} from "../../Redux/UserCollectionSlice.jsx";
import Collection from "../card/collection.jsx";
import debounce from "lodash.debounce";

const UserCollection = () => {

    const {username}=useParams();
    const dispatch=useDispatch()
    const {data, page, isLoading, error} = useSelector((state) => state.userCollection);
    const fetch=( )=>{
        return  fetchUserCollections({username:username, page:page})

    }
    useEffect(() => {

        dispatch(fetchUserCollections({username:username,page:page}))


    }, []);


    // console.log(data,"collection")

    return (
        <div className="container  mx-auto mt-24">
            <Collection data={data} fetch={fetch} page={page}/>
        </div>

    );
};

export default UserCollection;
