import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";

import logo from "../images/spca-logo.jpg"

export default function Registration() {
  const [phoneReg, setPhoneReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [message, setMessage] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:5000/register", {
      phone: phoneReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setMessage(response.data.message);
      }
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

        <h1>{message}</h1>
        <button onClick={register}> Register </button>
      </div>

    </div>
  );
}