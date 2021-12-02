import React, { useState, useEffect } from "react";
import { StyleSheet, Button } from "react-native";

import UserService from "../services/user.service";

import logo from '../../spca-logo.jpg'
import LoginButton from "./LoginButton";

const Home = () => {
  return (

    <div className="home">
      <Button>See the Animals</Button>
      <img src={logo} width={300} padding="50px auto 50px"/>
      <h1>Best Friend Finder</h1>

      <div>
        <LoginButton />
        {/* <button className="btn btn-primary btn-block"
          style={{width: "300px"}}>
          <span>Log In</span>
        </button> */}
      </div>
       
    

    
    </div>
  );
};

// =======
// import React, { useState, useEffect } from "react";
// import { StyleSheet, Button } from "react-native";
// import { withNavigation } from 'react-navigation';

// import UserService from "../services/user.service";

// import logo from '../../images/spca-logo.jpg'

// function Home(props) {
//   const {navigation} = props;
//   return (
//       <div className="card card-container">
//         <div className="home">

//         <img src={logo} width={275}/>
//         <h1>Best Friend Finder</h1>

//         <div>
//           <button className="btn btn-primary btn-block"
//             style={{width: "300px"}}
//             onClick={() => { console.log(navigation); navigation.push("Login")}}>
//             <span>Log In</span>
//           </button>
//         </div>
//         <div>
//         <button className="btn btn-primary btn-block"
//             style={{width: "300px"}}
//             onClick={() => { console.log(navigation); navigation.push("Register")}}>
//             <span>Create an Account</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// >>>>>>> e632f81a7c1637cb2ff05b6e3c01c09bdb13b56b
export default Home;