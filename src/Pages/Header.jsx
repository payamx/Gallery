import React from 'react';
import Navbar from "../Componnent/Navbar.jsx";
import NavbarCategory from "../Componnent/NavbarCategory.jsx";

const Header = () => {
    return (
        <div >
            <Navbar/>
            <NavbarCategory/>
            <hr/>
        </div>
    );
};

export default Header;
