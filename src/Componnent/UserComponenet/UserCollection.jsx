import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserCollections} from "../../Redux/UserCollectionSlice.jsx";
import {Link, useParams} from "react-router-dom";
import debounce from "lodash.debounce";
import {Popover} from "antd";

const UserCollection = () => {

    const params=useParams();
    const dispatch=useDispatch();
    const {data,isLoading,error,page}=useSelector(state => state.api)

//هاور کردن روی عکس و نشون دادن پروفایل
    const [hoverIndex, setHoverIndex] = useState(null);

    const onHover = (index) => {
        setHoverIndex(index);
    };

    const onHoverOver = () => {
        setHoverIndex(null);
    };
    //هاور روی پروفایل و نشون دادن اطلاعات یوزر
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const content = (profileImage, firstName, lastName, username, thumb) =>
        <div className="  ">
            <div className="  flex items-center justify-between pe-4 ">

                <div className=" text-center flex items-center justify-between pe-8  ">
                    <div className="  flex items-center justify-between  ">
                        <img src={profileImage} alt="Profile"
                             className="inline-block h-12 w-12 rounded-full m-2"/>
                        <div className="text-start ">
                            <span className=" block text-start font-bold">{firstName} {lastName}</span>
                            <span className=" block text-start">{username}</span>
                        </div>
                    </div>

                </div>
                <button
                    className=" text-white inline text-start p-2   bg-blue-500 rounded-md"> Hire!
                </button>

            </div>
            <div className="">
                <img src={thumb}
                     className="  rounded w-20 h-20 p-2 pb-0"/>
            </div>
            <div className="text-center p-3  text-white">

                <Link to={`${username}`} target="_blank" >
                    <button className="px-20 py-2 m-2 text-center  rounded-md bg-blue-500 "> view profile</button>

                </Link>

            </div>

        </div>;


    // console.log(data, 'response data');
    // console.log(page, 'page number');

    useEffect(() => {

        let memo=true;
        dispatch(fetchUserCollections(params.username));

        return()=>{ memo=false}

    }, []); // Include dispatch as a dependency

    const dispatchFunction = () => {
        dispatch(fetchUserCollections(params.username));
    };

    // Debounce the API request to prevent rapid requests
    const debouncedDispatch = useCallback(debounce(dispatchFunction, 1000), []);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    // Debounce the entire handleScroll function
    const debouncedHandleScroll = debounce(() => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.offsetHeight;

        if (scrollTop + windowHeight >= documentHeight - 300) {
            // Use the current page value in the dispatch function
            dispatch(fetchUserCollections(params.username));
        }
    }, 2000);

    const handleScroll = () => {
        debouncedHandleScroll();
    };
    return (
        <div className=" container mx-auto flex  justify-center">

            {isLoading ? 'is loding' : ''}
            <div className="w-fit  my-5 mx-auto xs:columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-1 ">
                {data &&
                    data?.map((arr, index) => (
                        <div key={index}>

                            {arr?.map((obj, index) => (
                                <div key={index}>
                                    {
                                        obj.preview_photos?.map((item,itemIndex)=>(

                                            <div key={itemIndex} className="w-full my-3 px-2 break-inside-avoid  relative "
                                                 onMouseOver={() => onHover(itemIndex)}
                                                 onMouseOut={onHoverOver}>
                                                <div>{console.log(item)}</div>

                                                <Link to={`/${item?.user?.username}` } target="_blank">
                                                    <img className=" rounded-xl" src={item?.urls?.regular}/>
                                                </Link>


                                                {hoverIndex && hoverIndex === itemIndex ? (

                                                    <div>

                                                        <div className="absolute  bottom-0 left-0 right-0 m-6">
                                                            <Popover
                                                                placement="topLeft"
                                                                content={content(item?.user?.profile_image?.medium, item?.user?.first_name,
                                                                    item?.user?.last_name, item?.user?.username, item?.urls?.small
                                                                )}
                                                                trigger="hover"
                                                                open={open}
                                                                onOpenChange={handleOpenChange}>

                                                                <div
                                                                    className="text-white text-center flex items-center justify-start hover:brightness-50 ">
                                                                    <img src={item?.user?.profile_image?.medium}
                                                                         className="inline-block h-12 w-12 rounded-full m-1"/>
                                                                    <div className="text-start">
                                                            <span
                                                                className="text-xl inline-block ">{item?.user?.username}</span>
                                                                        <span className="text-sm block">
                                                      {item?.user?.for_hire && (
                                                          <span className="text-sm block ">
                                                                  Available for hire
                                                                  <img src="/correctwhite.svg"
                                                                       className="inline-block h-6 w-6 ml-1 rounded-full   "/>
                                                                </span>
                                                      )}
                                                </span>
                                                                    </div>

                                                                </div>


                                                            </Popover>


                                                        </div>

                                                    </div>

                                                ) : ''

                                                }


                                            </div>

                                        ))
                                    }


                                </div>



                            ))}


                        </div>
                    ))}
            </div>

        </div>
    );
};

export default UserCollection;
