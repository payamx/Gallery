import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {searchCollections, searchPhotos} from "../../Redux/SearchSlice.jsx";
import Card from "../card/Card.jsx";
import debounce from "lodash.debounce";
import {Popover} from "antd";
import SearchTag from "./SearchTag.jsx";

const SearchPhotosCard = () => {

    const {query}=useParams()
    const {data, page, isLoading, error} = useSelector((state) => state.searchPhotos);
    const dispatch=useDispatch();
    // console.log(typeof data)

    const fetch=()=>{
     return    searchPhotos({query: query, page: page})
    }

    useEffect(() => {
        let memo = true
        dispatch(searchPhotos({query: query, page: page}))

        return () => {
            memo = false
        };
    }, [query]);

    return (
        <div className="container mx-auto">
            <SearchTag query={query} data={data} name='photos'/>
            <Card data={data?.results} page={page} fetch={fetch} isLoading={isLoading} error={error}/>


        </div>
    );
};

export default SearchPhotosCard;
