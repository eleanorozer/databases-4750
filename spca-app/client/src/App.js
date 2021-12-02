import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthStack from "./auth/components/AuthStack";

import AuthService from "./auth/services/auth.service";
import HomeStack from "./components/HomeStack";
import Login from "./auth/components/LoginPage";
<<<<<<< HEAD
import Register from "./auth/components/RegisterPage";
import Home from "./auth/components/HomePage";
import Profile from "./auth/components/UserProfile";
import AnimalsPage from "./pages/AnimalsPage";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import Profile1 from "./pages/Profile";
import About from "./pages/About";
import Auth0ProviderWithHistory from "./auth0Provider";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./auth/components/LogoutButton";
import LoginButton from "./auth/components/LoginButton";

const App = () => {

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }
  // }, []);

  // const logOut = () => {
  //   AuthService.logout();
  // };
  const {loginWithRedirect, logout, user, isLoading} = useAuth0();
  return (
  <Auth0ProviderWithHistory>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          SPCA
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
        </div>

        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/animals"} className="nav-link">
              Animals
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/loggedin"} className="nav-link">
              Logged In
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
          <LogoutButton />

      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/animals" element={<AnimalsPage/>} />
          <Route exact path="/loggedin" element={<HomeLoggedIn/>} />
          <Route exact path="/profile1" element={<Profile1 />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  </Auth0ProviderWithHistory>
=======

function App() {
  const token = getToken();
  
  function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify({"token":"test123"}));
    console.log("setting token!!!");
  }
  
  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }
  
  if(false) {
    return (
      <>
        <h1>{token}</h1>
        <AuthStack setToken={setToken}/>
      </>
    )}

  return (
    <HomeStack/>
>>>>>>> e632f81a7c1637cb2ff05b6e3c01c09bdb13b56b
  );
};

export default App;