import React, { useEffect, useState } from "react";
import Axios from "axios";

export default class AnimalsPage extends React.Component() {
    constructor(props) {
        super(props);
        this.state = 
    }
    const [animals, setAnimals] = useState("");

    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:5000/animals").then((response) => {
         setAnimals(response.data.name);
        }
      );
    }, []);

    return (
        <div className="AnimalsPage">
            <h1>Animals please!</h1>
            <h1>{animals}</h1>
        </div>
        
    )
}