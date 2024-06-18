import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import './Dog.css'

const DogDetails = (props) => {
    const params = useParams();
    const {dogList} = props;

    for (let dog of dogList.dogs){
        if (dog.name.toLowerCase() === params.name.toLowerCase()) {
            return (
                <>
                    <p>this is... {dog.name}!</p>
                    <img className="dog-img" alt='dog.src' src={dog.src}></img>
                    <p>Age: {dog.age}</p>
                    <ul>
                        {dog.facts.map((fact, i) => (
                            <li key={i}>{fact}</li>
                        ))}
                    </ul>
                    <Link to='/dogs'>Back</Link>
                </>
            )
        }
    }
    return <Navigate to='/dogs'/>
}

export default DogDetails