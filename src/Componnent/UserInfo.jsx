import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../Redux/UserSlice.jsx";
import {useParams} from "react-router-dom";

const UserInfo = () => {
    const profileId = useParams()
    const {data, isLoading, error} = useSelector((state) => state.userData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser('jemsahagun'));

    }, []);
    console.log(data)
    return (

        <div className="    md:flex h-full md:justify-center md:p-10  ">

            <div className="   justify-center items-center md:items-start ">
                <img src={data?.profile_image?.medium} alt={data?.name}
                     className=" h-36 w-36 rounded-full md:mx-8 inline-block  "/>

            </div>

            <div className=" h-full  flex-col ">

                <div className="   ">
                    <div className="inline-flex">
                        <div className=" text-3xl font-bold ">{data?.name}</div>

                    </div>

                    <div className="   inline-flex  items-center  ">

                    <span className=" inline-flex text-l	text-white px-3 py-2 bg-blue-500 rounded mx-1  h-fit">Hire</span>
                        <span className=" inline-flex	text-zinc-500 px-3 py-1   rounded mx-1  h-fit border-2 border-zinc-500	"><img
                            src='/mail.svg'/></span>
                        <span className=" inline-flex text-zinc-500	 px-3 py-1.5   rounded mx-1  h-fit border  border-zinc-500	">. . .</span>
                    </div>

                </div>


                <div className="py-4  flex justify-start  ">

                    <div className="  ">
                        <div className="   mt-2 justify-start text-start p-4">
                            <p className="">{data?.bio}</p>
                            {!data?.for_hire && (
                                <span className="text-sm block text-blue-600">
                            Available for hire
                            <img src="/correctwhite.svg"
                                 className="inline-block h-6 w-6 ml-1 rounded-full   "/>
                        </span>
                            )}
                            <p className="text-zinc-500 inline-block ">
                                <img src="/location.svg" className="inline-block"/> {data?.location}</p>
                            <p className="text-zinc-500">
                                Contact With {data?.first_name}
                            </p>
                            <div>Interest</div>
                            <div className="flex  ">
                                <span className="mx-2  p-2 rounded-sm text-zinc-600 bg-zinc-200"></span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};


export default UserInfo;
