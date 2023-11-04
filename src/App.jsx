import React, { useEffect } from 'react';
import Home from "./Pages/Home.jsx";
import SharedLayer from "./Pages/SharedLayer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {axiosClient} from "./Axios.js";
import axios from "axios";

const App = () => {



    return (
        <div>

            <BrowserRouter >
                <Routes>
                    <Route  element={ <SharedLayer/>} >
                        <Route path="/" index  element={<Home/>}/>
                        <Route  path="*" element={<h1>error page</h1>}/>
                    </Route>
                </Routes>

            </BrowserRouter>


        </div>
    );
};

export default App;