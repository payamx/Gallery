import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

const SharedLayer = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default SharedLayer;
