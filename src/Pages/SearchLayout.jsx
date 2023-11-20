import React from 'react';
import {Outlet} from "react-router-dom";
import SearchTopInfo from "../Componnent/SearchComponent/SearchTopInfo.jsx";

const SearchLayout = () => {
    return (
        <div>
        <SearchTopInfo/>
            <Outlet/>

        </div>
    );
};

export default SearchLayout;
