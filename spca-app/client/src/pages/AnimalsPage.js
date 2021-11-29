import React, { useEffect, useState } from "react";
import Axios from "axios";
import * as api from "../DatabaseAPI"

export default function AnimalsPage() {
    const [animals, setAnimals] = useState("");

    useEffect(() => {
        // Axios.get("http://localhost:5000/animals").then((response) => {
        //     setAnimals(response.data);
        // });
        api.getAnimals().then((result) => {
            setAnimals(result);
        })

        console.log("on animals page!");
      }, []);

    return (
        <div className="AnimalsPage">
            <h1>{animals}</h1>
        </div>
        
    )
}