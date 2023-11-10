import React from 'react';
import Navbar from "../Componnent/Navbar.jsx";
import NavbarTopics from "../Componnent/NavbarTopics.jsx";

const Header = () => {
    return (
        <div >
            <Navbar/>
            <NavbarTopics/>
            <hr/>
        </div>
    );
};

export default Header;
