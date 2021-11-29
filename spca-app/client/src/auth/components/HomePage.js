import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

import UserService from "../services/user.service";

import logo from '../../spca-logo.jpg'

const Home = () => {
  return (
    <div className="home">
      <img src={logo} width={300} padding="50px auto 50px"/>
      <h1>Best Friend Finder</h1>

      <div>
        <button className="btn btn-primary btn-block"
          style={{width: "300px"}}>
          <span>Log In</span>
        </button>      
      </div>
      <Button>Create an Account</Button>
    </div>
  );
};

export default Home;