import React from "react";
import {Link} from 'react-router-dom'
import './Dog.css'

const DogList = (props) => {
    const {dogList} = props;

    return (
        <>
            <ul>
                <h1>Dogs!</h1>
                {dogList.dogs.map(dog => 
                    <div>
                    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    <br></br>
                    <img src={dog.src} className="dog-img"></img>
                    </div>
                )}
            </ul>
        </>
    )
}

export default DogList