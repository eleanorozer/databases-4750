import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import blank from '../blank.jpg'

function AnimalProfile() {
    let { id } = useParams();
    let dope = useParams();

    useEffect(() => {
        getAnimal();
        console.log(dope);
    }, []);

    const [animal, setAnimal] = useState({});

    // grab the animal profile
    const getAnimal = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/animal${id}`);
            setAnimal(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="App">
            <div className="registration">
                <h1> {id} </h1>
                <img src={blank} width={150} padding="50px auto 50px"/> 
                <form>
                    <label>
                        <p align="left">
                            Name:
                        </p>
                            <input type="text" name="name" />
                        <p align="left">
                            Location: 
                        </p>
                            <input type="text" location="location" />
                        <p align="left">
                            Age: 
                        </p>
                            <input type="text" age="age" />
                        <p align="left">
                            Available Housing: 
                        </p>
                            <input type="text" current_housing="current_housing" />
                        <p align="left">
                            Additional Housing:
                        </p>
                            <input type="text" additional_housing="additional_housing" />
                        <br/> 
                        <button className="btn btn-primary btn-block"
                            style={{width: "250px"}}>
                            <span>Update</span>
                        </button>
                    </label>
                </form>           
            </div>
        </div>
    )
}

export default AnimalProfile;