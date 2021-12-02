import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AnimalsPage from "../pages/AnimalsPage";
import HomeLoggedIn from "../pages/HomeLoggedIn";
import Profile from "../pages/Profile";
import AnimalProfile from "../pages/AnimalProfile";
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
              <Link to={"/profile:id"} className="nav-link">
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
            <Route path="/animal:id" element={<AnimalProfile/>}/>
            <Route exact path="/profile:id" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    );
};