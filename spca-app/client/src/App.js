import * as React from "react";
import { Text, View } from 'react-native';

import "./App.css";
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/BottomNav'
import Registration from './pages/Registration'


export default function App() {
  return (
    <> 
      <div className="navbar">
        {/* <div className="links">
          <a>MainPage</a>
          <a>AnimalsPage</a>
        </div> */}
      </div> 
      <Registration />
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Main from "./pages/Main";
// import Registration from "./pages/Registration";

// function App() {
//   return (
//     <BrowserRouter>      
//       <Routes>
//         <Route path="/registration" element={<Registration/>} />
//         <Route path="/" element={<Main />} />
//       </Routes>
//      </BrowserRouter>
//       //<NavigationContainer>
//       //<MyTabs />
//       //</NavigationContainer>
//   );
// }

// export default App;