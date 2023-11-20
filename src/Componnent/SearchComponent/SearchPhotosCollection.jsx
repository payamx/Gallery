import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchCollections, searchPhotos} from "../../Redux/SearchSlice.jsx";
import Card from "../card/Card.jsx";
import SearchTag from "./SearchTag.jsx";
import Collection from "../card/collection.jsx";
import {data} from "autoprefixer";

const SearchPhotosCollection = () => {
    const {query} = useParams()
    const {colData, page, isLoading, error} = useSelector((state) => state.searchPhotos);
    const dispatch = useDispatch();


    useEffect(() => {
        let memo = true
        dispatch(searchCollections(query))

        return () => {
            memo = false
        };
    }, [query]);


    console.log(colData,"collection")
    return (
        <div className="container mx-auto">
            <SearchTag query={query} data={colData} name='collections'/>
            <Collection data={colData?.results}/>

        </div>

    );
};

export default SearchPhotosCollection;
