import React, {useEffect, useState} from 'react';
import {AutoComplete} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { searchPhotos} from '../../Redux/SearchSlice.jsx';
import {Link, useNavigate} from "react-router-dom";

const {Option} = AutoComplete;

const NavSearch = () => {
    const navigate=useNavigate()
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const {data, isLoading, page, error} = useSelector((state) => state.searchPhotos);


    useEffect(() => {
            const debounceTimer = setTimeout(() => {
                dispatch(searchPhotos({query:query}));
            }, 500);


        return () => {
            clearTimeout(debounceTimer);
        };
    }, [query]);



    const handleInputChange = (value) => {
        setQuery(value);

    };

    const handleSelect = (value) => {
        setQuery(value);

        navigate(`/s/photos/${query}`)
    };

    const renderOption = (data) => {
        return data?.results?.map((item, index) => (
            {
            key: index,
            value: item?.alt_description
        }));
    };


    // console.log(data,"nav search ")

    return (<>
            <AutoComplete
                style={{
                    flexGrow: 1, height: 40, margin: 30, color: '#71717a',
                }}
                value={query}
                onChange={handleInputChange}
                onSelect={handleSelect}
                placeholder="Search high-resolution images"
                options={renderOption(data)}
            />

        </>

    );
};

export default NavSearch;