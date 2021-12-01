import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import blank from '../blank.jpg'

function AnimalProfile() {
    let { id } = useParams();

    useEffect(() => {
        getAnimal();
    }, []);

    const [animal, setAnimal] = useState({});

    // grab the animal profile
    const getAnimal = async () => {
        Axios.post("http://localhost:5000/animal:id", {
          id: id.substring(3),
        }).then((response) => {
          if (response.data.err) {
            // error reponse 
            setAnimal(response.data.err);
          } else {
            // animal returned
            setAnimal(response.data[0]);
          }
        });
      };

    return (
        <div className="App">
            <div className="registration">
                <img src={animal.photo_url} width={250} padding="50px auto 50px"/> 
                <form>
                    <label>
                        <h1> {animal.Name} </h1>
                        <p align="left"> Breed: </p>
                            <span> {animal.Breed} </span>                        
                        <p align="left"> Adoption Status: </p>
                            <span> {animal.AdoptionStatus} </span>
                        <p align="left"> Birth Date: </p>
                            <span> {animal.BirthDate} </span>
                        <p align="left"> Description: </p>
                            <span> {animal.Description} </span>
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