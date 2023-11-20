import React from 'react';

const collection = ({data}) => {
    return (
        <div>
            <div className=" w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto  ">
                {

                    data?.map((item, index) => (
                        <div className="">
                            <div className="w-96 h-64 flex border-2 justify-center items-center m-8" key={index}>
                                <div className="w-2/3 h-full  border-e">
                                    <img className="w-full h-full object-cover object-center "
                                         src={item?.preview_photos[0]?.urls?.regular}/>
                                </div>

                                <div className="w-1/3 h-full ">
                                    <div className="h-1/2 border-b ">
                                        <img className="w-full h-full object-cover "
                                             src={item?.preview_photos[1]?.urls?.regular}/>
                                    </div>
                                    <div className="h-1/2 ">
                                        <img className="w-full h-full object-cover "
                                             src={item?.preview_photos[2]?.urls?.regular}/>
                                    </div>
                                </div>

                            </div>
                            <div >
                                <div className=" font-bold mx-4">{item?.title}</div>
                                <div className="text-zinc-500 mx-4"> {item?.total_photos} photos . Curated by {item?.user?.username} </div>
                                <div className="flex mx-4 justify-start items-center">
                                    {
                                        item?.tags?.map((img,index)=>
                                            <div className="m-1 text-sm text-zinc-700 bg-zinc-200 p-1 rounded whitespace-nowrap">{img?.title}</div>

                                        )
                                    }
                                </div>
                            </div>


                        </div>


                    ))}


            </div>

        </div>
    );
};

export default collection;
