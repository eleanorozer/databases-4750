import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./auth/services/auth.service";

import BottomNav from "./components/BottomNav";
import BottomNavCopy from "./components/BottomNavCopy";
import AuthStack from "./auth/components/AuthStack";

import Login from './auth/components/LoginPage';
import Register from './auth/components/RegisterPage';
import Home from './auth/components/HomePage'
import MainPage from "./pages/MainPage";
import AnimalsPage from "./pages/AnimalsPage";
import { Stack } from "@mui/material";

const AppStack = createStackNavigator();

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

  return (
    // <div className="container mt-3">
    //   <Routes>
    //     <Route exact path="/" element={<MainPage/>} />
    //     <Route exact path="/login" element={<Login/>} />
    //     <Route exact path="/register" element={<Register/>} />
    //     <Route exact path="/animals" element={<AnimalsPage/>} />
    //   </Routes>
    //   <NavigationContainer>
    //     <AppStack.Navigator 
    //       initialRouteName="Home"
    //       screenOptions={{
    //         headerShown: false
    //       }}>
    //         <AppStack.Screen name="Auth" component={AuthStack}/>
    //         <AppStack.Screen name="Home" component={BottomNav}/>
    //     </AppStack.Navigator>
    //   </NavigationContainer>
    // </div>
    <NavigationContainer>
      <AppStack.Navigator>
        { true ? (
          <AppStack.Group>
            <AppStack.Screen name="BottomNav" component={BottomNavCopy} />
            <AppStack.Screen name="MainPage" component={MainPage} />
            <AppStack.Screen name="Animals" component={AnimalsPage} />
          </AppStack.Group>
        ) : (
          <AppStack.Group>
            <AppStack.Screen name="Login" component={Login} /> 
            <AppStack.Screen name="Register" component={Register} />
          </AppStack.Group>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;