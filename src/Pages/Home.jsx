import React, {useEffect} from 'react';
import CardList from "../Componnent/CardList.jsx";
import UserInfo from "../Componnent/UserInfo.jsx";


const Home = () => {


    return (
        <div >
            <UserInfo/>

            <CardList/>
        </div>
    );
};

export default Home;
