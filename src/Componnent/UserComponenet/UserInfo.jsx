import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../Redux/UserSlice.jsx";
import {Link, useParams} from "react-router-dom";
import {fetchUserPhotos} from "../../Redux/UserPhotosSlice.jsx";

const UserInfo = () => {
    const profileId = useParams()
    const {data, isLoading, error} = useSelector((state) => state.api)
    const {userinfo,infoLoading,infoError} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    // console.log(data,"user info")
    // console.log(profileId,"profile id")
    useEffect(() => {
        let memo=true;
        dispatch(fetchUser(profileId.username));
        return()=>{memo=false}


    }, [profileId.username]);
    // console.log(data)
    return (
        <div>
            <div className="md:flex h-full md:justify-center md:p-20 px-2 text-lg">

                <div className=" flex   items-center md:items-start ">
                    <img src={userinfo?.profile_image?.medium} alt={userinfo?.name}
                         className=" h-36 w-36 rounded-full md:mx-8 inline-block  "/>

                </div>

                <div className=" h-full  flex-col p-1 ">

                    <div className="   ">
                        <div className="inline-flex">
                            <div className=" text-3xl font-bold ">{userinfo?.name}</div>

                        </div>

                        <div className="   inline-flex  items-center px-2 ">

                        <span
                            className=" inline-flex text-l	text-white px-3 py-2 bg-blue-500 rounded mx-1   h-fit">Hire</span>
                            <span className=" inline-flex	text-zinc-500 px-3 py-2   rounded mx-1
                         hover:border-black hover:text-black
                         h-fit border border-zinc-400	">
                            <img src='/mail.svg'/></span>
                            <span className=" inline-flex text-zinc-500	 px-3 py-1.5   rounded mx-1 hover:border-black hover:text-black
                         h-fit border  border-zinc-400 self-center	"> . . . </span>
                        </div>

                    </div>


                    <div className="  flex justify-start text-start  ">

                        <div className="flex  ">
                            <div className="  flex-col mt-2 justify-start text-start p-1   space-y-2 ">
                                <p className="md:max-w-2xl	">{userinfo?.bio}</p>
                                {!userinfo?.for_hire && (
                                    <span className="text-sm block text-blue-600 text-base">
                            Available for hire
                            <img src="/correctwhite.svg"
                                 className="inline-block h-6 w-6 ml-1 rounded-full   "/>
                        </span>
                                )}
                                <p className="text-zinc-500 inline-block ">
                                    <img src="/location.svg" className="inline-block"/> {userinfo?.location}</p>
                                <p className="text-zinc-500">
                                    <img src="/link.svg" className="inline"/>
                                    Contact With {userinfo?.first_name}
                                </p>

                                <div>Interest</div>
                                <div className="flex flex-wrap  space-x-1 ">
                                    {userinfo?.tags?.custom?.map((item,index)=>
                                        <span key={index} className="  px-2 py-1 rounded-md text-zinc-600 bg-zinc-200 my-1  ">{item?.title}</span>

                                    )}

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div className=" flex divide-y divide-zinc-500  ">
                <nav >
                    <ul className="flex space-x-4 p-4 ">
                        <li className="">
                            <Link to=""  >
                                <img src="/userPhotos.svg" className="inline p-2"/>
                                <span className="px-1 font-bold hover:text-white">{userinfo?.total_photos}</span>
                                Photos</Link>
                        </li>
                        <li>

                            <Link to="likes">
                                <img src="/like.svg" className="inline p-2"/>
                                <span className="px-1 font-bold">{userinfo?.total_likes}</span>

                                Likes</Link>
                        </li>
                        <li>


                            <Link to="collection">
                                <img src="/collection.svg" className="inline p-2"/>
                                <span className="px-1 font-bold">{userinfo?.total_collections}</span>
                                Collection</Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className=""></div>
            <hr/>
        </div>

    );
};


export default UserInfo;
