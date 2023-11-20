import React from 'react';
import {useNavigate} from "react-router-dom";

const SearchTag = ({query,data,name}) => {


const navigate=useNavigate()
    const slideLeft = () => {
        let slider = document.getElementById('sliders');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('sliders');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
            <div className="md:mx-32 my-8">

                <div className=" text-3xl md:text-5xl font-bold  p-4 ">{query}</div>
            <div className="relative flex items-center m-5">
                <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} > <img src="/previous.svg"/></div>
                <div id='sliders' className='relative flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {data?.results?.map((item, index) => {
                        const uniqueTags = new Set(); // Create a Set to store unique titles

                        item.tags?.forEach((tag) => {
                            uniqueTags.add(tag?.title); // Add each title to the Set
                        });

                        return Array.from(uniqueTags).map((tagTitle, tagIndex) => (
                            <button
                                className="mx-2 py-2 px-2 md:px-12 flex whitespace-nowrap border text-zinc-500
                                  hover:text-black hover:border-black rounded"
                                key={tagIndex}
                                onClick={() => navigate(`/s/${name}/${tagTitle}`)}
                            >
                                {tagTitle}
                            </button>
                        ));
                    })}
                </div>
                <div className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} ><img src="/next.svg"/></div>
            </div>

        </div>
    );
};

export default SearchTag;
