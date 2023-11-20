import NavSearch from "./NavSearch.jsx";
import {Link} from "react-router-dom";
import NavNotification from "./NavNotification.jsx";
import NavProfile from "./NavProfile.jsx";
import NavMenu from "./NavMenu.jsx";

const Navbar = () => {
    return (

        <div>
            <div className="flex justify-start items-center  mx-2  " >

                <div className="  w-18 h-18 md:m-2">
                    <Link to="/" >
                        <img src="/unsplash.svg"/>

                    </Link>
                </div>

                <NavSearch/>
                <button className="p-2 border border-zinc-500 text-zinc-500 hidden md:inline mx-1 rounded-xl"> submit a photo</button>
                    <NavNotification/>
                <NavProfile/>
                <NavMenu/>

            </div>
        </div>
    );
};

export default Navbar;
