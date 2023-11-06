import React, { useEffect } from 'react';
import Home from "./Pages/Home.jsx";
import SharedLayer from "./Pages/SharedLayer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserPhotos from "./Componnent/UserComponenet/UserPhotos.jsx";
import UserLikes from "./Componnent/UserComponenet/UserLikes.jsx";
import UserCollection from "./Componnent/UserComponenet/UserCollection.jsx";
import ProfileLayout from "./Pages/ProfileLayout.jsx";

const App = () => {



    return (
        <div>

            <BrowserRouter >
                <Routes>
                    <Route  element={ <SharedLayer/>} >
                        <Route path="/" index  element={<Home/>}/>
                        <Route path=":userName" element={<ProfileLayout/>}>
                            <Route path="photos" element={<UserPhotos/>}/>
                            <Route path="likes" element={<UserLikes/>}/>
                            <Route path="collection" element={<UserCollection/>}/>
                         </Route>
                        <Route  path="*" element={<h1>error page</h1>}/>
                    </Route>
                </Routes>

            </BrowserRouter>


        </div>
    );
};

export default App;