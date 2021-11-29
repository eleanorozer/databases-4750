import React, { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import DoggoImg from "../images/doggo1.png";

// import * as api from "../DatabaseAPI"

const styles = (theme) => ({
    ...theme.spreadThis,
    card: {
        alignItems: 'center'
    }
});

export default function AnimalsPage() {
    const [isFoster, setIsFoster] = useState(false);
    const [isDog, setIsDog] = useState(false);
    const [bday, setBday] = useState("");
    const [breed, setBreed] = useState("");
    const [desc, setDesc] = useState("");
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");

    

    // useEffect(() => {
    //     Axios.get("http://localhost:5000/animals").then((response) => {
    //         setAnimals(response.data);
    //     });
    //     // api.getAnimals().then((result) => {
    //     //     setAnimals(result);
    //     // })
    //   }, []);

    let getAnimals = async id => {
        let animal = null;
        try{
            let response = await axios.get("http://localhost:5000/animals");
            animal = response.data;
            
            console.log("Animal: ", animal);
            setDesc(animal[id].Description);
            setName(animal[id].Name);
            setSex(animal[id].Sex);

        } catch(errors){
            console.error(errors);
        }
        return animal;
    }

    return (
        <div className="AnimalsPage" style={{}}>
            {console.log("Animals: ", getAnimals(0))}
            {/*console.log("Animal Val: ", getAnimals()[2])*/}
            {/*console.log(getAnimals().resolve(1))*/}
            {/* <h1>{desc}</h1>
            <h1>{name}</h1>
            <h1>{sex}</h1> */}
            <Card
                variant="outlined"
                //className={classes.card}
                style={{
                    width: 200,
                    marginLeft: 50,
                    marginTop: 50,
                    marginBottom: 50
                }}
            >
                <CardHeader title={name} />
                <CardMedia
                    component="img"
                    image={DoggoImg}
                    height="100"
                />
                <CardContent>
                    <Typography>{desc}</Typography>
                    {/* <Typography>{name}</Typography> */}
                    <Typography>{sex}</Typography>
                </CardContent>
            </Card>

            <Card
                variant="outlined"
                //className={classes.card}
                style={{
                    width: 200,
                    marginLeft: 50,
                    marginTop: 50,
                    marginBottom: 50
                }}
            >
                <CardHeader title={name} />
                <CardMedia
                    component="img"
                    image={DoggoImg}
                    height="100"
                />
                <CardContent>
                    <Typography>{desc}</Typography>
                    {/* <Typography>{name}</Typography> */}
                    <Typography>{sex}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}