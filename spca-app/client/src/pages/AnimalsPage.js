import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import * as api from "../DatabaseAPI"
import { makeStyles } from '@mui/material/styles';
import { Box, Grid, Paper } from "@mui/material";

import AnimalCard from "../components/AnimalCard";


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
            <Grid container spacing={1} /*className={classes.gridContainer}*/>
                {
                // map function is basically a for-each
                animals.map((animal) => (
                    <Link to={`/animal:id${animal.ID}`}>
                        <AnimalCard animal={animal} /> 
                    </Link>           
                ))
                }
            </Grid>
        </div>
    );
};
