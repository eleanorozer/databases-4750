import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import logo from '../../spca-logo.jpg'

const Home = () => {
  return (
    <div className="registration" >
      <header className="jumbotron">
        <img src={logo} width={300} padding="50px auto 50px"/>
      </header>
    </div>
  );
};

export default Home;