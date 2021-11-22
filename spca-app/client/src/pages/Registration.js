import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";

import logo from '../spca-logo.jpg'

export default function Registration() {
  const [phoneReg, setPhoneReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:5000/register", {
      phone: phoneReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <img src={logo} width={200} margin="35px"/>
        <label>Phone number...</label>
        <input
          type="text"
          onChange={(e) => {
            setPhoneReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <label>Re-Type Password</label>
        <input
          type="text"
        />
        <button onClick={register}> Register </button>
      </div>

    </div>
  );
}