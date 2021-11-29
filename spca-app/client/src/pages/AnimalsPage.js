import React, { useEffect, useState } from "react";
import axios from "axios";

// import * as api from "../DatabaseAPI"
import { makeStyles } from '@mui/material/styles';
import { Box, Grid, Paper } from "@mui/material";

import AnimalCard from "../components/AnimalCard";

// const useStyles = makeStyles({
//     gridContainer: {
//       paddingLeft: "40px",
//       paddingRight: "40px"
//     }
// });

export default function AnimalsPage() {
    useEffect(() => {
        getAnimals();
    },[]);

    const [animals, setAnimals] = useState([]);
    
    // grab all animals from the database
    const getAnimals = async () => {
        try {
            const response = await axios.get('http://localhost:5000/animals');
            setAnimals(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="animalPage" style={{ marginLeft:50, marginTop:50}}>
            <Grid container spacing={2} /*className={classes.gridContainer}*/>
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