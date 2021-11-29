import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import logo from '../../spca-logo.jpg'

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="registration" >
      <header className="jumbotron">
        <img src={logo} width={300} padding="50px auto 50px"/>
      </header>
    </div>
  );
};

export default Home;