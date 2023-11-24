import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchPhotos, searchUsers} from "../../Redux/SearchSlice.jsx";
import Card from "../card/Card.jsx";
import SearchTag from "./SearchTag.jsx";

const SearchPhotosUsers = () => {
    const {query} = useParams()
    const {userData, page, isLoading, error} = useSelector((state) => state.searchPhotos);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(searchUsers(query))
        return () => {
        };
    }, [query]);
    // console.log(userData,"users")
    return (

        <div>
            {/*<SearchTag query={query} data={userData} name='users'/>*/}
            <div className=" w-fit  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto  gap-4 ">
                {userData?.results?.map((item)=>(

                    <div className=" border-2 rounded-lg mx-2">
                        <div className="  flex items-center justify-between me-4 ">

                            <div className=" text-center flex items-center justify-between pe-8 my-4 ">
                                <div className="  flex items-center justify-between  ">
                                    <img src={item?.profile_image?.medium} alt="Profile"
                                         className="inline-block h-20 w-20 rounded-full m-2"/>
                                    <div className="text-start ">
                                        <span className=" block text-start font-bold">{item?.name}</span>
                                        <span className=" block text-start">{item?.username}</span>
                                    </div>
                                </div>

                            </div>
                            {item?.for_hire?

                                <button className="  inline text-start p-2   text-zinc-500 border border-zinc-500 rounded-md">
                                    Hire!
                            </button>
                                 :''}


                        </div>
                        <div className="flex justify-center items-center mx-2">
                            {item?.photos?.map((pic)=>(

                                <img src={pic?.urls?.thumb} className="  rounded h-28 w-32 md:w-36  p-1 pb-0  "/>

                            ))}
                        </div>
                        <div className="text-center p-3  text-white flex justify-center items center ">

                            <Link to={`${item?.username}`} target="_blank">
                                <button className="px-16  py-2 m-2 text-center  rounded-md text-zinc-500 border border-zinc-500  whitespace-nowrap"> view profile</button>

                            </Link>

                        </div>

                    </div>

                    ))}

            </div>
        </div>);
};

export default SearchPhotosUsers;
