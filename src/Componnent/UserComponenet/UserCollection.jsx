import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Card from "../card/Card.jsx";
import {fetchUserCollections} from "../../Redux/UserCollectionSlice.jsx";
import Collection from "../card/collection.jsx";

const UserCollection = () => {

    const {username}=useParams();
    const dispatch=useDispatch()
    const {data, page, isLoading, error} = useSelector((state) => state.userCollection);
    const fetch=( )=>{
        return  fetchUserCollections(username ,page)

    }
    useEffect(() => {
        dispatch(fetchUserCollections(username ,page))


    }, []);
    console.log(data,"collection")


    return (
        <div>
            <Collection data={data}/>
        </div>

    );
};

export default UserCollection;
