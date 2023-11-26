import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import singleCollection, {fetchSingleCollection} from "../Redux/SingleCollection.jsx";
import Card from "./card/Card.jsx";
import {Blurhash} from "react-blurhash";
import {Image, Popover} from "antd";
import debounce from "lodash.debounce";

const SingleCollection = () => {
const {id}=useParams()
const dispatch=useDispatch()
    const{single,page,isLoading,error}=useSelector((state)=>state.singleCollection)

    const fetch=()=>{
    return fetchSingleCollection({id: id, page: page})
    }

    useEffect(() => {
        let memo =true
        dispatch(fetchSingleCollection({id:id,page:page}))
        return () => {
            memo=false
        };
    }, []);

            // console.log(single,"single collection")
    return (
        <>
            <div className="container mx-auto mt-40">

                <Card data={single} page={page} isLoading={isLoading} error={error} fetch={fetch}/>

            </div>



        </>
    );
};

export default SingleCollection;
