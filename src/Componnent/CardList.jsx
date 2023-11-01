import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import debounce from 'lodash.debounce';
import {fetchApiData} from "../Redux/ApiSlice.jsx";
import {CardGrid} from "./CardGrid.jsx";


const CardList = () => {
    const dispatch = useDispatch();
    const {data, page, isLoading, error} = useSelector((state) => state.api);

    console.log(data, 'response data');
    console.log(page, 'page number');

    useEffect(() => {
        dispatch(fetchApiData(page));
    }, [dispatch]); // Include dispatch as a dependency

    const dispatchFunction = (page) => {
        dispatch(fetchApiData(page));
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
            // dispatch(fetchApiData(page));
        }
    }, 2000);

    const handleScroll = () => {
        debouncedHandleScroll();
    };

    return (
        <div className=" container mx-auto">

            {isLoading ? 'is loding' : ''}
            <div className="w-full  my-5 mx-auto xs:columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-1">
                {data &&
                    data.map((arr, index) => (
                        <div key={index}>

                            {arr.map((item, itemIndex) => (


                                <div key={itemIndex} className="">

                                            <CardGrid images={item}/>
                                        {/*{item.preview_photos.map((image, imageIndex) => (*/}

                                        {/*    <div key={imageIndex} className="w-full my-3 px-2 break-inside-avoid " >*/}
                                        {/*            <img className=" rounded-xl" src={image.urls.small}/>*/}

                                        {/*    </div>*/}

                                        {/*))}*/}


                                </div>
                            ))}


                        </div>
                    ))}
            </div>

        </div>
    );
};

export default CardList;
