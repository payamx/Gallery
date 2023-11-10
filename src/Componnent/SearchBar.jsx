import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchPhotos} from "../Redux/SearchSlice.jsx";

const SearchBar = () => {
    const dispath=useDispatch()
   const{data}= useSelector((state)=>state.searchPhotos)
    const [Search, setSearch] = useState("");
    const handleSearch=(e)=>{
        if (e)
        e.preventDefault()
        setTimeout(()=>
        setSearch(e.target.value)
            ,1000)
    }
    useEffect(() => {
        setTimeout(()=>
        dispath(searchPhotos(Search)),1000
        )

    }, [Search]);


if (Search!==null && Search!==""){
    handleSearch()
}
    console.log(data,"searching")

    return (
        <div className="relative ">
            <div className="flex grow justify-start items-center ">
                <input  onChange={handleSearch} placeholder="Search-high resolution images "
                className="py-4 bg-blue-100 grow px-32"
                />
                <div className="absolute w-full mt-28    top-0  flex   ">
                    {Search}
                </div>
            </div>

        </div>
    );
};

export default SearchBar;
