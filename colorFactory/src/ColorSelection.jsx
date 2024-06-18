import React from "react";
import {Link} from 'react-router-dom'

const ColorSelection = ({colors}) => {
    document.body.style.background = 'white';

    return (
        <>
            <h1>Color Factory!</h1>
            <h2><Link to='/new-color'>New Color!</Link></h2>
            <ul>
                {colors.map(c => 
                    <li><Link to={`/colors/${c}`}>{c}</Link></li>
                )}
            </ul>
        </>
    )
}

export default ColorSelection