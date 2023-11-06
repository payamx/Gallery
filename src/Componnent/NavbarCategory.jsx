import React from 'react';
import {Link} from "react-router-dom";

const NavbarCategory = () => {
    return (

        <div className="flex justify-start items-center m-3  text-zinc-500 md:text-xl divide-x-2 divide-black overflow-x-auto 	">
            <div className="flex justify-start items-center   space-x-2  ">
                    <Link to={'/'} className="p-2" >Editoral</Link>
                    <Link to={'/'} className="p-2">Following</Link>
            </div>
            <div className="flex justify-start items-center ms-2 flex-nowrap ">
                <Link to={'/'} className="p-2" >Editoral</Link>
                <Link to={'/'} className="p-2" >Editoral</Link>
                <Link to={'/'} className="p-2" >Editoral</Link>
                <Link to={'/'} className="p-2" >Editoral</Link>
                <Link to={'/'} className="p-2" >Editoral</Link>
                <Link to={'/'} className="p-2" >Editoral</Link>
                <Link to={'/'} className="p-2" >Editoral</Link>



            </div>
        </div>
    );
};

export default NavbarCategory;
