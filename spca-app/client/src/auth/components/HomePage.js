import React, { useState, useEffect } from "react";
import { StyleSheet, Button } from "react-native";
import { withNavigation } from 'react-navigation';

import UserService from "../services/user.service";

import logo from '../../images/spca-logo.jpg'

function Home(props) {
  const {navigation} = props;
  return (
      <div className="card card-container">
        <div className="home">

        <img src={logo} width={275}/>
        <h1>Best Friend Finder</h1>

        <div>
          <button className="btn btn-primary btn-block"
            style={{width: "300px"}}
            onClick={() => { console.log(navigation); navigation.push("Login")}}>
            <span>Log In</span>
          </button>
        </div>
        <div>
        <button className="btn btn-primary btn-block"
            style={{width: "300px"}}
            onClick={() => { console.log(navigation); navigation.push("Register")}}>
            <span>Create an Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;