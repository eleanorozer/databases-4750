import React from "react";
import logo from '../images/spca-logo.jpg'
import { Link } from 'react-router-dom';
import "../App.css"
import Box from '@material-ui/core/Box';


export default function HomeLoggedIn() {
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
            Welcome
            </Box>
            <Link to="/animals">
                <button className="btn btn-primary btn-block"
                    style={{width: "300px"}}>
                    <span>Find a new best friend!</span>
                </button>
            </Link>
        </div>
    )
};
