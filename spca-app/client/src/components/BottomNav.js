import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Home from "../auth/components/HomePage";
import Login from "../auth/components/LoginPage";
import Register from "../auth/components/RegisterPage";
import AnimalsPage from "../pages/AnimalsPage";
import MainPage from "../pages/MainPage";

function BottomNav({ navigation }) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/animals" element={<AnimalsPage/>} />
      </Routes>
      <BottomNavigation>
          <BottomNavigationAction 
            component={Link} to={"/"}
            label="home" icon={<FavoriteIcon/>}/>
          <BottomNavigationAction
            component={Link} to={"/animals"}
            label="animals"/>
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;