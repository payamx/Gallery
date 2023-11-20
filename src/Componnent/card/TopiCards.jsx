import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchTopicsPhoto} from "../../Redux/UserTopicsSlice.jsx";
import Card from "./Card.jsx";
import BannerTopic from "./BannerTopic.jsx";

const TopiCards = () => {
    const dispatch=useDispatch()
    const {slug}=useParams();
    const {data, page, isLoading, error} = useSelector((state) => state.TopicsList);
    console.log(data, "topic list fetch")
    const fetch=( )=>{
        return  fetchTopicsPhoto(page,slug)
    }

    useEffect(() => {
        let memo=true;
        dispatch(fetchTopicsPhoto(slug,page));
        return()=>{ memo=false}
    }, [slug]); // Include dispatch as a dependency

    return (
        <div>

            <BannerTopic/>
            <Card data={data} page={page} isLoading={isLoading} error={error} fetch={fetch}/>

        </div>

    );
};

export default TopiCards;
