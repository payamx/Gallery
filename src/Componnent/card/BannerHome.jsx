import React, {useEffect} from 'react';
import NavSearch from "../NavbarComponent/NavSearch.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchListCollection} from "../../Redux/ListCollctionSlice.jsx";
import {Link} from "react-router-dom";

const BannerHome = () => {
    const dispatch=useDispatch()
    const {data,error ,isLoading,page}=useSelector(state => state.listCollection)

    useEffect(() => {

        let memo =true
        dispatch(fetchListCollection(page))
        return () => {
            memo=false
        };

    }, []);

    // console.log(data,"list collection page")
    return (
        <div className="xs:flex-col md:flex justify-center items-end p-5 md:mx-20 my-8">
            <div className= " text-start grow   ">
                <div className="text-6xl font-bold pl-6">Unsplash</div>
                <div className=" text-xl md:text-2xl  my-10 pl-6 self-end leading-10 ">The internet’s source for visuals.<br/>
                    Powered by creators everywhere.
                </div>
                <div className=" flex grow  ">
                    <NavSearch />
                </div>

            </div>
            <div className="flex-col p-5 border broder-zinc-500 rounded-xl">
                <div className="flex justify-between items-center p-2">
                    <span className="inline font-bold text-xl ">Collections</span>
                    <Link to="collections">
                        <span className="inline text-xl text-zinc-500">See all</span>
                    </Link>

                </div>
            {data?.slice(0, 4).map((item,index)=>
                    <div className="flex justify-start items-center px-8" key={index}>
                        <div  className="p-4">
                            <img className="w-14 h-14 rounded" src={item?.user?.profile_image?.small}/>
                        </div>
                        <div>
                            <div>{item?.title}</div>
                            <div className="text-zinc-500">{item?.user?.username}</div>
                        </div>
                </div>

            )}
            </div>



        </div>
    );
};

export default BannerHome;
