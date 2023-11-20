import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListTopics } from '../../Redux/ApiSlice.jsx';
import BannerTopic from "../card/BannerTopic.jsx";

const NavTopics = () => {
    const dispatch = useDispatch();
    const { topics } = useSelector((state) => state.api);
    useEffect(() => {
        let memo = true;
        dispatch(fetchListTopics());
        return () => {
            memo = false;
        };
    }, []);

    const navigate = useNavigate();
    // console.log(topics,"topics gadsa")
    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div>
            <div className='relative flex items-center'>
                <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} > <img src="/previous.svg"/></div>

                <div id='slider' className=' flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

                    {topics?.map((item, index) => (
                        <button
                            className="mx-4 py-4 flex  whitespace-nowrap"
                            key={index}
                            onClick={() => navigate(`/t/${item.slug}`)}>
                            {item?.title}
                        </button>
                    ))}
                </div>
                <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} ><img src="/next.svg"/></div>
            </div>


            {/*<div onClick={slideLeft}> bacj</div>*/}

            {/*<div id='slider' className="flex justify-start items-center m-3  text-zinc-500 md:text-xl font-bold*/}
            {/* divide-x-2 divide-black overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide	">*/}

            {/*    <div className="flex justify-start items-center   space-x-2  ">*/}
            {/*        <button className="p-2" onClick={() => navigate('/')}>*/}
            {/*            Editoral*/}
            {/*        </button>*/}
            {/*        <button className="p-2" onClick={() => navigate('')}>*/}
            {/*            Following*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*    <div className="flex justify-start items-center ms-2 flex-nowrap gradient-fade">*/}
            {/*        {topics?.map((item, index) => (*/}
            {/*            <button*/}
            {/*                className="mx-4 py-4 flex  whitespace-nowrap"*/}
            {/*                key={index}*/}
            {/*                onClick={() => navigate(`/t/${item.slug}`)}>*/}
            {/*                {item?.title}*/}
            {/*            </button>*/}
            {/*        ))}*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<div onClick={slideRight}> bacj</div>*/}

            <hr/>




        </div>
    );
};

export default NavTopics;