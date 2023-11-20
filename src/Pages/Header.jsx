import React from 'react';
import Navbar from "../Componnent/NavbarComponent/Navbar.jsx";
import NavTopics from "../Componnent/NavbarComponent/NavTopics.jsx";
import BannerTopic from "../Componnent/card/BannerTopic.jsx";

const Header = () => {
    return (
        <div  className=" ">
            <Navbar/>
            <NavTopics/>
            <hr/>
        </div>
    );
};

export default Header;


