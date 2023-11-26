import {useEffect} from "react";
import debounce from "lodash.debounce";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const collection = ({ data ,fetch ,page}) => {
    const dispatch=useDispatch()

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

        if (scrollTop + windowHeight >= documentHeight - 500) {

            // Use the current page value in the dispatch function
            dispatch(fetch());
        }
    }, 1000);

    const handleScroll = () => {
        debouncedHandleScroll();

    };


    return (
        <div>
            <div className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto">
                {data &&
                    data.map((item, index) => (
                        <div className="" key={index}>
                            <Link to={`/collection/${item?.id}`} target={"_blank"}>
                                <div className="w-96 h-64 flex border-2 justify-center items-center m-4">
                                    <div className="w-2/3 h-full border-e">
                                        <img
                                            className="w-full h-full object-cover object-center"
                                            src={item?.preview_photos?.[0]?.urls?.small}
                                            alt="Preview 1"
                                        />
                                    </div>

                                    <div className="w-1/3 h-full">
                                        <div className="h-1/2 border-b">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={item?.preview_photos?.[1]?.urls?.small}
                                                alt="Preview 2"
                                            />
                                        </div>
                                        <div className="h-1/2">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={item?.preview_photos?.[2]?.urls?.small}
                                                alt="Preview 3"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-start">
                                    <div className=" font-bold mx-4">{item?.title}</div>
                                    <div className="text-zinc-500 mx-4">
                                        {item?.total_photos} photos. Curated by {item?.user?.username}
                                    </div>
                                    <div className="flex mx-4 justify-start items-center">
                                        {item?.tags?.map((img, index) => (
                                            <div
                                                key={index}
                                                className="m-1 text-sm text-zinc-700 bg-zinc-200 p-1 rounded whitespace-nowrap"
                                            >
                                                {img?.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))}
            </div>
        </div>
    );
};

export default collection;