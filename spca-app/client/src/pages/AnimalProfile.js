import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function AnimalProfile() {
    let { id } = useParams();
    const navigate = useNavigate();

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
            <div className="jumbotron">
                <img src={animal.photo_url} width={250} padding="50px auto 50px"/> 
                <form>
                    <label>
                        <h1> {animal.Name} </h1>
                        <p>
                            <strong>Breed:</strong> {animal.Breed}                        <br/> 
                        </p>
                        <p>
                            <strong>Adoption Status:</strong> {animal.AdoptionStatus}
                        </p>
                        <p>
                            <strong>Birth Date:</strong> {animal.BirthDate}
                        </p> 
                        <p>
                            <strong>Description:</strong> {animal.Description} 
                        </p>
                        <br/> 
                    </label>
                </form>    
                <button onClick={() => navigate(-1)} 
                    className="btn btn-primary btn-block"
                    style={{width: "250px"}}>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    )
}

export default AnimalProfile;