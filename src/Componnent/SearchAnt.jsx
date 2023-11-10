import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotos } from '../Redux/SearchSlice.jsx';
import debounce from "lodash.debounce";
import SearchCards from "./SearchCards.jsx";

const { Option } = AutoComplete;

const SearchAnt = () => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { data, isLoading, page, error } = useSelector((state) => state.searchPhotos);




    useEffect(() => {


        const debounceTimer = setTimeout(() => {
            dispatch(searchPhotos(query));
        }, 1500);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [query]);

    const handleInputChange = (value) => {
        setQuery(value)

    };

    const handleSelect = (value) => {
        setQuery(value);
    };

    const options = [
        {
            value: 'Burns Bay Road',
        },
        {
            value: 'Downing Street',
        },
        {
            value: 'Wall Street',
        },
    ];
    const renderOption = (data) => {
        return (

            data?.results?.flat().map((item) => (
                <Option key={item.id} value={item.slug}>
                     { item?.alt_description }

                </Option>
            ))
        );
    };

    console.log(data?.results)
    return (
        <>
            <AutoComplete
                style={{
                    flexGrow: 1,
                    height: 40,
                    margin: 30,
                    color: '#71717a',
                }}
                value={query}
                onChange={handleInputChange}
                onSelect={handleSelect}
                placeholder="Search high-resolution images"
                options={options}
            />




        </>

    );
};

export default SearchAnt;