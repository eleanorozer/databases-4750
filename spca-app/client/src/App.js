import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthStack from "./auth/components/AuthStack";

import AuthService from "./auth/services/auth.service";
import HomeStack from "./components/HomeStack";
import Login from "./auth/components/LoginPage";

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
  );
};

export default App;