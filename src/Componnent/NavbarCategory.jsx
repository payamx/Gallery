import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchListTopics} from "../Redux/ApiSlice.jsx";


const NavbarCategory = () => {


    const dispatch = useDispatch();
    const {topics} = useSelector((state) => state.api)
    useEffect(() => {
        let memo = true
        dispatch(fetchListTopics())
        return () => {
            memo = false;
        };
    }, []);


    console.log(topics, "topics get")

    return (


        <div className="flex justify-start items-center m-3  text-zinc-500
        md:text-2xl font-bold divide-x-2 divide-black overflow-x-auto grow	">

            <div className="flex justify-start items-center   space-x-2  ">
                <Link to={''} className="p-2">Editoral</Link>
                <Link to={''} className="p-2">Following</Link>
            </div>

            <div className="flex justify-start items-center ms-2 flex-nowrap gradient-fade">

                {topics?.map((item, index) => (

                    <Link to={`/t/${item?.title}`} key={index}
                          className="mx-4 py-4 flex  whitespace-nowrap">{item?.title}</Link>

                ))}


            </div>


        </div>
    );
};

export default NavbarCategory;
