import React, {useEffect, useState} from 'react';
import { Button, Popover } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {fetchListTopics} from "../../Redux/ApiSlice.jsx";
const App = () => {
    const [open, setOpen] = useState(false);



    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const content=
        <div className="  flex flex-col md:flex-row justify-start md:justify-center items-start m-3 text-xl gap-4 ">

            <div className="px-2 m-1 flex-col space-y-3 space-x-2">
                <div className="font-bold text-xl">
                    <img src="/company.svg" className="inline pr-2"/>
                    Company</div>
                <div>About</div>
                <div>History</div>
                <div>join the team</div>
                <div> press</div>
                <div> contact</div>
                <div> help center</div>
                <div> socials</div>

            </div>

            <div className="px-2 m-1 flex-col space-y-3 space-x-2">

                <div className="font-bold text-xl">
                    <img src="/product-carousel-svgrepo-com.svg" className="inline pr-2"/>

                    Product</div>
                <div>Developers/Api</div>
                <div>Gallery Dataset</div>
                <div>Gallery for ios</div>
                <div> Apps & Plugin</div>


            </div>
            <div className="px-2 m-1 flex-col space-y-3 space-x-2">

                <div className="font-bold text-xl">
                    <img src="/community.svg" className="inline pr-2"/>

                    Community</div>
                <div>Become Contributor</div>
                <div>Topics</div>
                <div>Collections</div>
                <div> Trends</div>
                <div> Gallery Awards</div>
                <div> status</div>

            </div>

        </div>
    return (


        <Popover
            color={""}
            placement="bottomRight"
            content={content}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <img src="/menu.svg" className="px-2"/>
        </Popover>
    );
};
export default App;