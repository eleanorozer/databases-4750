import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Profile from "../auth/components/UserProfile";
import AnimalsPage from "../pages/AnimalsPage";
import HomeLoggedIn from "../pages/HomeLoggedIn";
import Profile1 from "../pages/Profile";
import About from "../pages/About";

export default function HomeStack() {
    return (
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            SPCA
          </Link>
          <div className="navbar-nav ml-auto">
             <li className="nav-item">
              <Link to={"/animals"} className="nav-link">
                Animals
              </Link>
            </li> 
            <li className="nav-item">
              <Link to={"/profile1"} className="nav-link">
                Profile
              </Link>
            </li>
  
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About Us
              </Link>
            </li>
          </div>
        </nav>
  
        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<HomeLoggedIn/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/animals" element={<AnimalsPage/>} />
            <Route exact path="/profile1" element={<Profile1 />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    );
};