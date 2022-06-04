import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link
} from "react-router-dom";

import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Navbar from './Navbar';

const AppRouter = () => {
  return (
    <Router>
        <Fragment>
            <Navbar/>
            <div className="container-fluid">
                <Routes>
                    <Route path='/' element={<HomeScreen />}/>
                    <Route path='/about' element={<AboutScreen />}/>
                    <Route path='/login' element={<LoginScreen />}/>
                    <Route path='*' element={<HomeScreen />}/>
                </Routes>
            </div>
        </Fragment>
    </Router>
  )
}

export default AppRouter