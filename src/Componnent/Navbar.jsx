import SearchBar from "./SearchBar.jsx";
import SearchAnt from "./SearchAnt.jsx";
import Notification from "./NavbarNotification.jsx";
import NavbarProfile from "./NavbarProfile.jsx";
import NavbarNotification from "./NavbarNotification.jsx";
import NavbarMenu from "./NavbarMenu.jsx";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-start items-center  mx-2  " >

                <div className="  w-18 h-18 md:m-2">
                    <Link to="/" >
                        <img src="/photos.svg"/>

                    </Link>
                </div>


                <SearchBar/>
                <button className="p-2 border border-zinc-500 text-zinc-500 hidden md:inline mx-1 rounded-xl"> submit a photo</button>
                    <NavbarNotification/>

                <NavbarProfile/>
                <NavbarMenu/>

            </div>
        </div>
    );
};

export default Navbar;
