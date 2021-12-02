import React from "react";
import { withNavigation } from 'react-navigation';

import logo from '../../images/spca-logo.jpg';

function Home(props) {
  const {navigation} = props;
  
  return (
    <div className="home">
      <img src={logo} width={300} padding="50px auto 50px"/>
      <h1>Best Friend Finder</h1>

      <div>
        <button className="btn btn-primary btn-block"
          style={{width: "300px"}}
          onClick={() => { console.log(navigation); navigation.push("Login")}}>
          <span>Log In</span>
        </button>
      </div>
       
    </div>
  );
};

export default Home;
