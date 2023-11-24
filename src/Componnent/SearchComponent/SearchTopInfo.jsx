import React, {useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
const SearchTopInfo = () => {
    const {query} = useParams()
    const navigate = useNavigate()
    return (
        <div className="m-2">
            <div className="md:flex justify-between items-center ">
                <div className=" flex divide-y divide-zinc-500  text-zinc-500 hover:text-dark">
                    <nav>
                        <ul className="flex space-x-4 p-4 ">
                            <li className="">

                                <Link to={`s/photos/${query}`}>
                                    <img src="/userPhotos.svg" className="inline p-2"/>
                                    <span className="px-1 font-bold ">photos</span>
                                    </Link>
                            </li>
                            <li>

                                <Link to={`s/collections/${query}`}>
                                    <img src="/collection.svg" className="inline p-2"/>
                                    <span className="px-1 font-bold">collection</span>

                                    </Link>
                            </li>
                            <li>


                                <Link to={`s/users/${query}`}>
                                    <img src="/users.svg" className="inline p-2"/>
                                    <span className="px-1 font-bold">users</span>
                                    </Link>

                            </li>
                        </ul>
                    </nav>

                </div>

            </div>




        </div>
    );
};

export default SearchTopInfo;
