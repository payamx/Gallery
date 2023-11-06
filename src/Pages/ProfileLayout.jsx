import React from 'react';
import UserInfo from "../Componnent/UserComponenet/UserInfo.jsx";
import {Outlet} from "react-router-dom";

const ProfileLayout = () => {
    return (
        <div>
            <UserInfo/>
            <Outlet/>
        </div>
    );
};

export default ProfileLayout;
