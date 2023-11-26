import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchListCollection} from "../Redux/ListCollctionSlice.jsx";
import Collection from "./card/collection.jsx";

const CollectionPage = () => {
    const dispatch=useDispatch()
    const {data,error ,isLoading,page}=useSelector(state => state.listCollection)

    useEffect(() => {

        let memo =true
        dispatch(fetchListCollection(page))
        return () => {
            memo=false
        };

    }, []);

    // console.log(data,"list collection page")

    return (
        <div>
            <div className="  my-24 md:ms-64  ">
                <div className="font-bold text-5xl m-4">Collections</div>
                <div className="text-xl m-4">
                    Beautiful, free pictures of the week. <br/>
                    Explore the world through collections of beautiful HD pictures free to use under
                </div>
            </div>
            <Collection data={data}/>
        </div>
    );
};

export default CollectionPage;
