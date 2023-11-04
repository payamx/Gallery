import { useState} from "react";

export const CardGrid = ({images}) => {

    const maxGridItems = 3;
    const renderGridItems = () => {

        const [hoverIndex, setHoverIndex] = useState(null);
        const [showModal, setShowModal] = useState(false);

        const onHover = (index) => {
            setHoverIndex(index);
        };

        const onHoverOver = () => {
            setHoverIndex(null);
        };

        const openModal = () => {
            setTimeout(() => setShowModal(true), 600)
        };
        const closeModal = () => {
            setTimeout(() => setShowModal(false), 500)

        };
        const grids = [];
        let currentGrid = [];


        images?.preview_photos.forEach((image, index) => {
                const userName = images?.user.username;
                const firstName = images?.user.first_name
                const lastName = images?.user.last_name;
                const profileImage = images?.user.profile_image.medium;
                const forHire = images?.user.for_hire;

                const isHoverd = hoverIndex === index
                currentGrid.push(
                    <div key={index} className="  w-full my-2 p-2 break-inside-avoid"
                         onMouseOver={() => onHover(index)}
                         onMouseOut={onHoverOver}>
                        <div className="relative ">
                            <img src={image.urls.small}
                                 alt={image.slug}
                                 className=" w-full rounded-2xl hover:brightness-50"/>
                            {isHoverd &&

                                <div className="absolute top-0  bottom-0 right-0 left-0 text-white     ">

                                    {/*Add &like button*/}

                                    <div className=" p-3   ">
                                        <div className="flex justify-end">
                                            <img src="/add.svg" className="p-2 m-2 bg-white rounded-sm "/>
                                            <img src="/like.svg" className="p-2 m-2 bg-white rounded-sm"/>
                                        </div>
                                    </div>


                                    <div
                                        className="flex justify-between items-center m-3 absolute bottom-0  right-0 left-0  ">


                                        {/*profile image and username*/}

                                        <div className="text-white text-center flex items-center justify-between ">
                                            <img src={profileImage} alt="Profile" onMouseEnter={openModal}
                                                 onMouseOut={closeModal}
                                                 className="inline-block h-12 w-12 rounded-full m-1"/>
                                            <div className="text-start">
                                                <span className="text-sm inline-block text-start">{userName}</span>
                                                <span className="text-sm block">
                                                      {forHire && (
                                                          <span className="text-sm block ">
                                                                  Available for hire
                                                                  <img src="/correctwhite.svg"
                                                                       className="inline-block h-6 w-6 ml-1 rounded-full   "/>
                                                                </span>
                                                      )}
                                                </span>
                                            </div>

                                        </div>

                                        <div className=" border p-2 rounded-sm bg-white">
                                            <img src="/arrow.svg"/>

                                        </div>

                                    </div>

                                </div>
                            }
                            {isHoverd && showModal && (

                                <div className=" absolute   left-14 bottom-0  bottom-20       bg-white text-dark rounded-xl ">
                                    <div className="  flex items-center justify-between pe-4 ">

                                        <div className=" text-center flex items-center justify-between pe-8  ">
                                            <div className="  flex items-center justify-between  ">
                                                <img src={profileImage} alt="Profile"
                                                     className="inline-block h-12 w-12 rounded-full m-2"/>
                                                    <div className="text-start ">
                                                        <span
                                                            className=" block text-start font-bold">{firstName} {lastName}</span>
                                                        <span className=" block text-start">{userName}</span>
                                                    </div>
                                            </div>

                                        </div>
                                        <button
                                            className=" text-white inline text-start p-2   bg-sky-600 rounded-md"> Hire!
                                        </button>

                                    </div>
                                    <div className="">
                                        <img src={image.urls.thumb}
                                             alt={image.slug}
                                             className="  rounded w-20 h-20 p-2 pb-0"/>
                                    </div>
                                    <div className="text-center p-3  text-white">
                                        <a href={userName} target="_blank">
                                            <button  className="px-20 py-2 m-2 text-center  rounded-md bg-sky-600 "> view profile</button>

                                        </a>
                                    </div>

                                </div>

                            )}


                        </div>

                    </div>
                );
                if (currentGrid.length === maxGridItems || index === images.length - 1) {
                    grids.push(
                        <div key={grids.length} className=" ">
                            {currentGrid}

                        </div>
                    );
                    currentGrid = [];
                }
            }
        );


        return grids;
    };

    return (
        <div>
            {renderGridItems()}
        </div>
    );
}

