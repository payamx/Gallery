import React, {useState} from 'react';

const SearchBar = () => {
    const [Search, setSearch] = useState(null);
    const handleSearch=(e)=>{
        e.preventDefault()
        setTimeout(()=>
        setSearch(e.target.value)
            ,1500)
    }

if (Search!==null && Search!==""){
    handleSearch()
}
    console.log(Search)

    return (
        <div className="relative ">
            <div className="flex flex-1 justify-start items-center ">
                <input  onChange={e=>handleSearch(e)} placeholder="Search-high resolution images "
                className="py-4 bg-blue-100 flex-grow px-32"
                />
                <div className="absolute  w-40 h-60 bg-blue-500 top-0 bottom-0 flex  items-end">
                    {Search}
                </div>
            </div>

        </div>
    );
};

export default SearchBar;
