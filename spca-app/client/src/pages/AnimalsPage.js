import React, { useEffect, useState } from "react";
import axios from "axios";

// import * as api from "../DatabaseAPI"
import { makeStyles } from '@mui/material/styles';
import { Stack, Grid, Paper, Button } from "@mui/material";

import AnimalCard from "../components/AnimalCard";
import SortButton from "../components/SortButton";

// const useStyles = makeStyles({
//     gridContainer: {
//       paddingLeft: "40px",
//       paddingRight: "40px"
//     }
// });

export default function AnimalsPage() {
    useEffect(() => {
        getAnimals(0);
    },[]);

    const [animals, setAnimals] = useState([]);

    // const token = getToken();
  
    // function setToken(userToken) {
    //   sessionStorage.setItem('token', JSON.stringify({"token": userToken}));
    //   console.log("setting token!!!");
    // }
    
    // function getToken() {
    //   const tokenString = sessionStorage.getItem('token');
    //   const userToken = JSON.parse(tokenString);
    //   return userToken?.token
    // }
    
    // grab all animals from the database
    const getAnimals = async (sortId) => {
        try {
            const response = await axios.get('http://localhost:5000/animals', {sort: sortId});
            setAnimals(response.data);
            //temp = response.data;
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="animalPage" style={{ marginLeft:50, marginTop:50}}>
            <Stack direction="row" spacing={2} justifyContent="center" style={{ marginBottom:30 }}>
                <Button variant="outlined">Filter</Button>
                {/* <Button variant="outlined">Sort by</Button> */}
                <SortButton animals={getAnimals} />
            </Stack>
            
            <Grid container spacing={2} justifyContent="center" /*className={classes.gridContainer}*/>
                {
                    // map function is basically a for-each
                    animals.map((animal) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <AnimalCard animal={animal} />
                        </Grid>                
                    ))
                }
            </Grid>
        </div>
    )
}