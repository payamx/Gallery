import React from 'react';
import Home from "./Home.jsx";
import Footer from "../Componnent/Footer.jsx";
import Navbar from "../Componnent/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

const SharedLayer = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default SharedLayer;
