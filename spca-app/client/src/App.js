import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthStack from "./auth/components/AuthStack";

import AuthService from "./auth/services/auth.service";
import HomeStack from "./components/HomeStack";
import Login from "./auth/components/LoginPage";

function App() {    
  return (
    <HomeStack/>
  );
};

export default App;