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

            <hr/>




        </div>
    );
};

export default NavTopics;