import React from "react";
import logo from '../spca-logo.jpg'
import "../App.css"
import Box from '@material-ui/core/Box';

function HomeLoggedIn() {
    return (
        <div className="home">
            <img src={logo} width={300} padding="50px auto 50px"/>
            <h1>Best Friend Finder</h1>
            <Box
                border={1}
                borderColor="gray"
                height={0}
                width={300}
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor="white"
                color="black"
                fontSize={24}
          >
            Welcome, $name
            </Box>
            <button className="btn btn-primary btn-block"
                style={{width: "300px"}}>
                <span>Find a new best friend!</span>
            </button>
        </div>
    )
};

export default HomeLoggedIn
