import React from 'react';
import Home from "./Home.jsx";
import Footer from "../Componnent/Footer.jsx";
import Navbar from "../Componnent/Navbar.jsx";
import {Outlet} from "react-router-dom";

const SharedLayer = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default SharedLayer;
