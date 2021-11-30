import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function MainPage() {
    const navigation = useNavigation();

    return (
        <div className="home">
            <h1>MainPage</h1>
                <button className="btn btn-primary btn-block"
                    style={{width: "300px"}}
                    onClick={() => { console.log(navigation); navigation.navigate("Animals")}}>
                    <span>Go to Animals</span>
                </button>       
        </div>
    )
}