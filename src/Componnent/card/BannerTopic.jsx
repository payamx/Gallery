import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchTopicBanner} from "../../Redux/TopicBannerSlice.jsx";

const BannerTopic = () => {
            const {slug}=useParams()
            const dispatch=useDispatch();
            const{data,isLoading,error}=useSelector((state)=>state.TopicBanner)
    useEffect(() => {
        let memo =true;
        dispatch( fetchTopicBanner(slug))

        return () => {
            memo=false;
        };
    }, [slug]);
  useEffect(() => {
        let memo =true;
        dispatch( fetchTopicBanner(slug))

        return () => {
            memo=false;
        };
    }, []);

    // console.log(data,"banner topic")


    return (
        <div>
            {data &&
                <div className="flex w-full h-full justify-center items-center ">
                    <div
                        className="w-full h-screen  bg-cover bg-center backdrop-brightness-90"

                        style={{ backgroundImage: `url(${data?.preview_photos?.[0]?.urls?.regular})` }}
                    >

                        <div className="  flex-col  justify-center items-center  space-y-8 md:mx-10 m-2 mt-60 backdrop-brightness-75 p-8 ">
                            <div className="text-white text-4xl font-bold   ">{data.title}</div>
                            <div className="text-white text-2xl  text-start">{data?.description}</div>
                            <button className="text-dark bg-white px-3 py-2 rounded-lg text-center">submit to
                                <span className="text-dark font-bold text-xl p-1">{data.title}</span></button>
                        </div>
                    </div>

                </div>


            }



        </div>
    );
};

export default BannerTopic;
