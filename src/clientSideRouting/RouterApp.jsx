import React from "react";

import { Routes ,Route } from 'react-router-dom';

import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Service from "./Service";
const RouterApp=()=>{


    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs />}/>
            <Route path="/contact" element={<ContactUs />}/>
            <Route path="/service/:name" element={<Service />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>

        </>
    )
}
export default RouterApp