import {useState} from "react";

export const CardGrid = ({images}) => {
    const maxGridItems = 3;
    const renderGridItems = () => {

        const [hoverIndex, setHoverIndex] = useState(null);
        const onHover = (index) => {
            setHoverIndex(index);
        };

        const onHoverOver = () => {
            setHoverIndex(null);
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
                                 className=" w-full rounded-2xl hover:brightness-75"/>

                            {isHoverd &&


                                <div className="absolute top-0  bottom-0 right-0 left-0 text-white     ">
                                    <div className=" p-3   ">
                                        <div className="flex justify-end">
                                            <img src="/add.svg" className="p-2 m-2 bg-white rounded-sm "/>
                                            <img src="/like.svg" className="p-2 m-2 bg-white rounded-sm"/>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-between items-center m-3   absolute bottom-0  right-0 left-0  ">

                                        <div className="text-white text-center flex items-center justify-between ">
                                            <img src={profileImage} alt="Profile"
                                                 className="inline-block h-12 w-12 rounded-full m-1"/>
                                            <div className="text-start">
                                                <span className="text-sm inline-block text-start">{userName}</span>
                                                <span className="text-sm block">
                                                      {forHire && (
                                                          <span className="text-sm block ">
                                                                  Available for hire
                                                                  <img
                                                                      src="/correctwhite.svg"
                                                                      className="inline-block h-6 w-6 ml-1 rounded-full   "
                                                                  />
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

