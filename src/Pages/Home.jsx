import React, {useEffect} from 'react';
import Card from "../Componnent/card/Card.jsx";
import {useDispatch, useSelector} from "react-redux";
import {ApiData} from "../Redux/ApiSlice.jsx";
import SinglePhoto from "../Componnent/SinglePhoto.jsx";
import BannerHome from "../Componnent/card/BannerHome.jsx";


const Home = () => {
    const {data, page, isLoading, error} = useSelector((state) => state.api);
    const dispatch=useDispatch()
    const fetch=()=>{
       return  ApiData(page)

    }

    return (

        <div className="container mx-auto">
            <BannerHome/>
            <Card data={data} page={page} isLoading={isLoading} error={error} fetch={fetch}/>
        </div>

    );

};

export default Home;
