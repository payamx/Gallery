import React, { useEffect } from 'react';
import Home from "./Pages/Home.jsx";
import SharedLayer from "./Pages/SharedLayer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserPhotos from "./Componnent/UserComponenet/UserPhotos.jsx";
import UserLikes from "./Componnent/UserComponenet/UserLikes.jsx";
import UserCollection from "./Componnent/UserComponenet/UserCollection.jsx";
import ProfileLayout from "./Pages/ProfileLayout.jsx";
import TopiCards from "./Componnent/card/TopiCards.jsx";
import NavSearch from "./Componnent/NavbarComponent/NavSearch.jsx";
import SearchTopInfo from "./Componnent/SearchComponent/SearchTopInfo.jsx";
import SearchPhotosCollection from "./Componnent/SearchComponent/SearchPhotosCollection.jsx";
import SearchPhotosUsers from "./Componnent/SearchComponent/SearchphotosUsers.jsx";
import SearchLayout from "./Pages/SearchLayout.jsx";
import SearchPhotosCard from "./Componnent/SearchComponent/SearchPhotosCard.jsx";
import CollectionPage from "./Componnent/CollectionPage.jsx";

const App = () => {


    return (
        <div>

            <BrowserRouter >
                <Routes>
                    <Route  element={ <SharedLayer/>} >
                        <Route path="/" index  element={<Home/>}/>
                        <Route path="/t/:slug"   element={<TopiCards/>}/>

                        <Route path=":username" element={<ProfileLayout/>}>
                            <Route path="photos" element={<UserPhotos/>}/>
                            <Route path="likes" element={<UserLikes/>}/>
                            <Route path="collection" element={<UserCollection/>}/>
                         </Route>

                        <Route path="collections" element={<CollectionPage/>}/>

                        <Route  element={<SearchLayout/>}  >
                            <Route  path="s/photos/:query"  element={<SearchPhotosCard/>}/>
                            <Route path="s/collections/:query" element={<SearchPhotosCollection/>}/>
                            <Route path="s/users/:query" element={<SearchPhotosUsers/>}/>
                        </Route>

                        <Route  path="*" element={<h1>error page</h1>}/>
                    </Route>
                </Routes>

            </BrowserRouter>

        </div>
    );
};

export default App;