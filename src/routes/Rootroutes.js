import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forgot from '../pages/forget/Forgot';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Setting from '../pages/setting/Setting';
import Signup from '../pages/signup/Signup';

const Rootroutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/*' element={<Login/>}/>
                    <Route path='/signup/*' element={<Signup/>}/>
                    <Route path='/forget/*' element={<Forgot/>}/>
                    <Route path='/home/*' element={<Home/>}/> 
                    <Route path='/setting/*' element={<Setting/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Rootroutes;